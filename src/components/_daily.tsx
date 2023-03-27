import axios from 'axios';

//components
import Progress from './_progressBar';
import Bottom from './_bottom_List';
//components

// redux
import { useEffect, useState } from 'react';
// redux

interface DailyProps {
    action: { [key: string]: any };
}

interface Info {
    text: string,
    loading: boolean
}

export default function Daily(props: DailyProps) {
    const [info, setInfo] = useState<Info>({
        text: '',
        loading: true
    });

    useEffect(() => {
        const API_KEY = "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";
        const INFO_TEXT = `Günlük üst limitim ${props.action.daily.inter_limit} metreküp. Bugün ${props.action.daily.spend_water} metreküp su harcadım`;

        setTimeout(() => {
            const MessageChatGPT = () => {
                const instance = axios.create({
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + API_KEY
                    }
                });

                const params = {
                    prompt: INFO_TEXT,
                    model: "text-davinci-003",
                    max_tokens: 2048,
                    temperature: 0,
                }

                instance.post("https://api.openai.com/v1/completions", params)
                    .then((response) => {
                        setInfo({
                            text: response.data.choices[0].text,
                            loading: false
                        });
                    }).catch(() => {
                        setInfo({
                            text: 'Error',
                            loading: true
                        })
                    });
            }

            MessageChatGPT()
        }, 1000);
    }, [props]);

    return (
        <div
            className={`flex flex-col items-center justify-center text-green-900 rounded-md p-3 my-3 space-y-3 bg-${props.action.daily.color}-300 text-${props.action.daily.color}-900`}
        >
            <div className='flex flex-col text-center'>
                <span className='text-sm'>Günlük harcadığınız su miktarı <br /> Mayıs ayı</span>

                <span className='text-xl font-bold'>
                    {props.action.daily.spend_water} m³
                </span>

                <span className='flex items-center text-xs'>
                    {props.action.daily.text}

                    <span className="material-symbols-outlined ml-2">
                        {props.action.daily.icon}
                    </span>
                </span>

                <Progress
                    value={props.action.daily.percentage}
                    status={props.action.status.daily}
                />
            </div>

            <Bottom data={props.action.daily} />

            <span className='font-bold text-underline text-sm text-center'>
                {(() => {
                    if (info.loading) {
                        return (
                            <div className="flex items-center justify-center">
                                <div
                                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status">
                                </div>
                            </div>
                        )
                    }
                })()}
                {info.text}
            </span>
        </div>
    )
}
