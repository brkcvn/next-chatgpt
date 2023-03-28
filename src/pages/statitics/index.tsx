import type { NextPage } from 'next';
import Head from 'next/head';

//components
import Statitics from '../../components/_statitics';
//components

//redux hook
import { useAppSelector } from '../../hooks';
//redux hook

interface ActionProps {
  state?: any
}

const StatiticsPage: NextPage = ({ state }: ActionProps) => {
  state = useAppSelector((state) => state);

  const actionProps = {
    action: state.action,
  }
  return (
    <div className='p-3'>
      <Head>
        <title>Statitics Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>

      <Statitics {...actionProps} />
    </div>
  )
}

export default StatiticsPage;
