import { CircularProgressbar } from 'react-circular-progressbar';

interface ProgressProps {
    status: string,
    value: number
}

export default function Progress(props:ProgressProps) {
    return (
        <div
            className={`block mx-auto my-3 ${props.status}`}
            style={{ width: 150, height: 150 }}
        >
            <CircularProgressbar
                value={Math.round(props.value)}
                text={`${Math.round(props.value)}%`}
            />
        </div>
    )
}