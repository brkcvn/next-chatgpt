import { createSlice } from '@reduxjs/toolkit';

interface ActionState {
    daily: {
        limit: number,
        inter_limit: number,
        spend_water: number,
        text: string,
        color: string,
        icon: string,
        percentage: number
    },

    weekly: {
        limit: number,
        inter_limit: number,
        spend_water: number,
        text: string,
        color: string,
        icon: string,
        percentage: number
    },

    monthly: {
        limit: number,
        inter_limit: number,
        spend_water: number,
        text: string,
        color: string,
        icon: string,
        percentage: number
    },

    status: {
        daily: string,
        weekly: string,
        monthly: string,
    },

    text: {
        success: string,
        warning: string,
        error: string
    },

    icon: {
        success: string,
        warning: string,
        error: string
    },

    API_KEY: string
}

const initialState: ActionState = {
    daily: {
        limit: 1,
        inter_limit: 0.8,
        spend_water: 0.3,
        text: '',
        color: '',
        icon: '',
        percentage: 0
    },

    weekly: {
        limit: 7,
        inter_limit: 5,
        spend_water: 8,
        text: '',
        color: '',
        icon: '',
        percentage: 0
    },

    monthly: {
        limit: 27,
        inter_limit: 18,
        spend_water: 14,
        text: '',
        color: '',
        icon: '',
        percentage: 0
    },

    status: {
        daily: "",
        weekly: "",
        monthly: "",
    },

    text: {
        success: 'Congrats, the amount of water you spend is very well',
        warning: 'You can less spend water',
        error: 'Unfortunately, you much more spend water'
    },

    icon: {
        success: 'mood',
        warning: 'warning',
        error: 'mood_bad'
    },

    //Get a API Key for ChatGPT at https://platform.openai.com/
    API_KEY: '',
}


export const createData = createSlice({
    name: 'water-data',
    initialState,
    reducers: {
        percantageActions: (state) => {
            state.monthly.percentage = state.monthly.spend_water / state.monthly.limit * 100;
            state.weekly.percentage = state.weekly.spend_water / state.weekly.limit * 100;
            state.daily.percentage = state.daily.spend_water / state.daily.limit * 100;
        },

        submit: (state:any, action) => {
            for (const [key, value] of Object.entries(action.payload)) {
                if (key === 'isSubmit') {
                    return;
                }

                state[key].spend_water = value;
                state.status[key] = state[key].spend_water <= state[key].inter_limit ? 'success' : 'error' && state[key].spend_water >= state[key].inter_limit && state[key].spend_water <= state[key].limit ? 'warning' : 'error';

                switch (true) {
                    case state.status[key] === 'success':
                        state[key].color = 'green';
                        state[key].text = state.text.success;
                        state[key].icon = state.icon.success;
                        break;
                    case state.status[key] === 'warning':
                        state[key].color = 'orange';
                        state[key].text = state.text.warning;
                        state[key].icon = state.icon.warning;
                        break;
                    case state.status[key] === 'error':
                        state[key].color = 'red';
                        state[key].text = state.text.error;
                        state[key].icon = state.icon.error;
                        break;
                }
            }
        }
    },
});

export const { submit, percantageActions } = createData.actions;

export default createData.reducer;
