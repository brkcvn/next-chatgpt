import { useEffect } from 'react';
import Link from 'next/link'

//components
import Daily from './_daily';
import Weekly from './_weekly';
import Monthly from './_monthly';
//components

//redux
import { useAppDispatch } from '../hooks';
import { percantageActions } from '../features/waterData';
//redux

//progressbar
import 'react-circular-progressbar/dist/styles.css';
//progressbar

// swiper slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
// swiper slider

export default function Statitics(props: { [key: string]: any }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(percantageActions());
        }, 100);
    }, [dispatch]);

    const actionProps = {
        action: props.action,
    }

    return (
        <div>
            <div className='absolute left-3 top-3 z-10'>
                <Link href="/" className='w-8 h-8 flex items-center justify-center bg-gray-200 p-2 rounded-full hover:bg-gray-700'>
                    <span className="material-symbols-outlined text-lg ml-1.5">
                        arrow_back_ios
                    </span>
                </Link>
            </div>

            <Swiper modules={[Navigation]} navigation>
                <SwiperSlide>
                    <Daily {...actionProps} />
                </SwiperSlide>

                <SwiperSlide>
                    <Weekly {...actionProps} />
                </SwiperSlide>

                <SwiperSlide>
                    <Monthly {...actionProps} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}