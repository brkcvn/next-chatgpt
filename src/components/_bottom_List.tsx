interface BottomProps {
    data: { [key: string]: any };
}

export default function Bottom(props:BottomProps) {
    return (
        <ul className="text-sm mt-3 space-y-4">
            <li className='flex space-x-2'>
                <span className="material-symbols-outlined text-sm">
                    priority_high
                </span>
                <span>
                    Harcadığın su
                    &nbsp;{props.data.inter_limit} m³'ü geçerse <b> orta </b> alarm verecektir.
                </span>
            </li>

            <li className='flex space-x-2'>
                <span className="material-symbols-outlined text-sm">
                    priority_high
                </span>
                <span>
                    Harcadığın su
                    &nbsp;{props.data.limit} m³'ü geçerse <b> yüksek </b> alarm verecektir.
                </span>
            </li>
        </ul>
    )
}