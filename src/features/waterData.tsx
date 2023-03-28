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
}


export const createData = createSlice({
    name: 'water-data',
    initialState,
    reducers: {
        inpuChangeAction: (state: any, action) => {
            state[action.payload.name].spend_water = Number(action.payload.value);
            let name = action.payload.name;

            state.status[name] = state[name].spend_water <= state[name].inter_limit ? 'success' : 'error' && state[name].spend_water >= state[name].inter_limit && state[name].spend_water <= state[name].limit ? 'warning' : 'error';

            switch (true) {
                case state.status[name] === 'success':
                    state[name].color = 'green';
                    state[name].text = state.text.success;
                    state[name].icon = state.icon.success;
                    break;
                case state.status[name] === 'warning':
                    state[name].color = 'orange';
                    state[name].text = state.text.warning;
                    state[name].icon = state.icon.warning;
                    break;
                case state.status[name] === 'error':
                    state[name].color = 'red';
                    state[name].text = state.text.error;
                    state[name].icon = state.icon.error;
                    break;
            }
        },

        percantageActions: (state) => {
            state.monthly.percentage = state.monthly.spend_water / state.monthly.limit * 100;
            state.weekly.percentage = state.weekly.spend_water / state.weekly.limit * 100;
            state.daily.percentage = state.daily.spend_water / state.daily.limit * 100;
        },

        submit: (state, form) => {
            state.daily.spend_water = form.payload.daily;
            state.weekly.spend_water = form.payload.weekly;
            state.monthly.spend_water = form.payload.monthly;
        }
    },
});

export const { submit, percantageActions, inpuChangeAction } = createData.actions;

export default createData.reducer;
