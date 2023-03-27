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
            <div className='flex flex-col text-center'>
                <span className='text-sm'>Haftalık harcadığınız su miktarı <br /> Nisan ayının 4.haftası</span>

                <span className='text-xl font-bold'>
                    {props.action.weekly.spend_water} m³
                </span>

                <span className='flex items-center text-xs'>
                    {props.action.weekly.text}

                    <span className="material-symbols-outlined ml-2">
                        {props.action.weekly.icon}
                    </span>
                </span>

                <Progress
                    value={props.action.weekly.percentage}
                    status={props.action.status.weekly}
                />
            </div>

            <Bottom data={props.action.weekly} />
        </div>
    )
}
