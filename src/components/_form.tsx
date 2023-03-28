import { useState } from 'react';

// redux
import { useAppDispatch } from '../hooks';
import { submit, inpuChangeAction } from '../features/waterData';
// redux

// router
import { useRouter } from 'next/router';
// router

interface FormProps {
    daily: number,
    weekly: number,
    monthly: number
}

export default function Form(props: { [key: string]: any }) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [spendWater, setSpendWater] = useState<FormProps>({
        daily: 0,
        weekly: 0,
        monthly: 0
    });

    function onHandleChange(event: any) {
        const { name, value } = event.currentTarget;

        setSpendWater(prevState => ({
            ...prevState, [name]: value
        }));
    }

    function onHandleBlur(event: any) {
        const { name, value } = event.currentTarget;

        if (value) {
            dispatch(inpuChangeAction(
                {
                    name: name,
                    value: value
                }
            ));
        }
    }

    function onSubmitForm(event: any) {
        event.preventDefault();

        dispatch(submit(spendWater));
        router.push('/statitics');
    }

    return (
        <div className="h-screen bg-gray-200">
            <div className="w-full max-w-lg mx-auto px-4 py-12">
                <form
                    action="#"
                    method="POST"
                    onSubmit={onSubmitForm}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="daily">
                            Your amount of spend water at daily (m³)
                        </label>
                        <input
                            name="daily"
                            type="number"
                            step="any"
                            id="daily"
                            className={`bg-${props.action.daily.color}-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                            required
                            onChange={onHandleChange}
                            onBlur={onHandleBlur}
                            placeholder="Ex: 0.2"
                        />

                        <span className={"text-sm text-" + (props.action.daily.color)}
                        >
                            {props.action.daily.text}
                        </span>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="weekly">
                            Your amount of spend water at previous weekly (m³)
                        </label>
                        <input
                            name="weekly"
                            type="number"
                            step="any"
                            id="weekly"
                            className={`bg-${props.action.weekly.color}-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                            onChange={onHandleChange}
                            onBlur={onHandleBlur}
                            placeholder="Ex: 3"
                        />

                        <span className={"text-sm text-" + (props.action.weekly.color)}
                        >
                            {props.action.weekly.text}
                        </span>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="monthly">
                            Your amount of spend water at previous monthly (m³)
                        </label>
                        <input
                            name="monthly"
                            type="number"
                            step="any"
                            id="monthly"
                            className={`bg-${props.action.monthly.color}-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                            required
                            onChange={onHandleChange}
                            onBlur={onHandleBlur}
                            placeholder="Ex: 10"
                        />

                        <span className={`text-sm text-${props.action.monthly.color}`}
                        >
                            {props.action.monthly.text}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type='submit'
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}