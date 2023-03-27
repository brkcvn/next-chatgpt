//components
import Bottom from './_bottom_List';
import Progress from './_progressBar';
//components

interface MonthlyProps {
    action: { [key: string]: any };
}

export default function Monthly(props: MonthlyProps) {
    return (
        <div
            className={`flex flex-col items-center justify-center text-green-900 rounded-md p-3 my-3 space-y-3 bg-${props.action.monthly.color}-300 text-${props.action.monthly.color}-900`}
        >
            <div className='flex flex-col text-center space-y-3'>
                <span className='text-sm'>Aylık harcadığınız su miktarı <br /> Nisan Ayı</span>

                <span className='text-2xl font-bold'>
                    {props.action.monthly.spend_water} m³
                </span>

                <span className='flex items-center'>
                    {props.action.monthly.text}
                    
                    <span className="material-symbols-outlined ml-2">
                        {props.action.monthly.icon}
                    </span>
                </span>

                <Progress
                    value={props.action.monthly.percentage}
                    status={props.action.status.monthly}
                />
            </div>

            <Bottom data={props.action.monthly} />
        </div>
    )
}