import { useEffect, useState, useRef } from 'react';

// redux
import { useAppDispatch } from '../hooks';
import { submit } from '../features/waterData';
// redux

// router
import { useRouter } from 'next/router';
// router

interface Form {
    daily: number,
    weekly: number,
    monthly: number,
    isSubmit: boolean
}

export default function Form(inputField: any) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [spendWater, setSpendWater] = useState<Form>({
        daily: 0,
        weekly: 0,
        monthly: 0,
        isSubmit: false
    });

    const onNextMonthDays = () => {
        let now = new Date();
        let current = new Date(now.getFullYear(), now.getMonth()+1, 1);

        const daysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();
        return daysInMonth(current.getFullYear(), current.getMonth() +1);
    }

    function onSubmitForm(event: any) {
        event.preventDefault();

        setSpendWater({
            ...spendWater,
            daily: Number(inputField.current.value),
            weekly: Math.round(inputField.current.value * 7), //number of days in the week
            monthly: Math.round(inputField.current.value * onNextMonthDays()), //number of days next month
            isSubmit: true
        });
    }

    useEffect(() => {
        if (spendWater.isSubmit) {
            dispatch(submit(spendWater));
            router.push('/statitics');
        }
    }, [spendWater]);

    return (
        <div className="h-screen">
            <div className='w-full max-w-lg mx-auto px-4 py-12'>
                <form
                    action="#"
                    method="POST"
                    onSubmit={onSubmitForm}
                    className="px-8 py-8 mb-4"
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
                            className="w-full appearance-none p-2 border-b border-gray-300 focus:border-gray-700 focus:outline-none"
                            required
                            ref={inputField}
                            placeholder="Ex: 0.2"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type='submit'
                            disabled={spendWater.isSubmit}
                            className="bg-gray-700 text-white font-bold py-2 px-3 rounded transition-all disabled:bg-gray-300 hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}