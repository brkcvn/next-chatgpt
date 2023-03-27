import type { NextPage } from 'next';
import Head from 'next/head';

//components
import Form from '../components/_form';
//components

//redux hook
import { useAppSelector } from '../hooks';
//redux hook

interface ActionProps {
  state?: any
}

const IndexPage: NextPage = ({ state }: ActionProps) => {
  state = useAppSelector((state) => state);

  const actionProps = {
    action: state.action,
  }
  return (
    <div>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form {...actionProps} />
    </div>
  )
}

export default IndexPage
