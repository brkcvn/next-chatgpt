//components
import Bottom from './_bottom_List';
import Progress from './_progressBar';
//components

interface WeeklyProps {
    action: { [key: string]: any };
}

export default function Weekly(props: WeeklyProps) {
    return (
        <div
            className={`flex flex-col items-center justify-center text-green-900 rounded-md p-3 my-3 space-y-3 bg-${props.action.weekly.color}-300 text-${props.action.weekly.color}-900`}
        >
            <div className='flex flex-col items-center text-center'>
                <span className='text-lg'>Your spend water at weekly
                    <em className='text-sm'> (Forecast Next week) </em>
                </span>

                <span className='text-xl font-bold'>
                    {props.action.weekly.spend_water} m³
                </span>

                <div className='flex items-center text-xs'>
                    {props.action.weekly.text}

                    <span className="material-symbols-outlined ml-2">
                        {props.action.weekly.icon}
                    </span>
                </div>

                <Progress
                    value={props.action.weekly.percentage}
                    status={props.action.status.weekly}
                />
            </div>

            <Bottom data={props.action.weekly} />
        </div>
    )
}
