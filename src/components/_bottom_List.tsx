interface BottomProps {
    data: { [key: string]: any };
}

export default function Bottom(props: BottomProps) {
    return (
        <ul className="text-sm mt-3 space-y-4">
            <li className='flex space-x-2'>
                <span className="material-symbols-outlined text-sm">
                    priority_high
                </span>

                <span>
                    <b>{props.data.inter_limit} m³ </b> amount is <b> medium </b> priority.
                </span>
            </li>

            <li className='flex space-x-2'>
                <span className="material-symbols-outlined text-sm">
                    priority_high
                </span>

                <span>
                    <b>{props.data.limit} m³ </b> amount is <b> high </b> priority.
                </span>
            </li>
        </ul>
    )
}