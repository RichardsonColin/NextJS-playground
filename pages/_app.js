import Head from 'next/head';
import Layout from '../components/layout/Layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NextJS Meetups</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Browse a global list of NextJS meetups and connect with others around all things NextJS!'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
