import { useEffect } from 'react';

//components
import Daily from './_daily';
import Weekly from './_weekly';
import Monthly from './_monthly';
//components

//redux
import { useDispatch } from 'react-redux';
import { percantageActions } from '../features/waterData';
//redux

//progressbar
import 'react-circular-progressbar/dist/styles.css';
//progressbar

export default function Statitics(props: { [key: string]: any }) {
    const dispatch = useDispatch();

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
            <Daily {...actionProps} />

            <Weekly {...actionProps} />

            <Monthly {...actionProps} />
        </div>
    )
}