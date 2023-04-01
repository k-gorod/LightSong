
import Head from 'next/head';
import { useScreeTypeDetection } from '../../hooks';

export const MainHead = () => {
    useScreeTypeDetection();

    return (
        <Head>
          <title>Light Song</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"/>
          <link rel="icon" href="/assets/favicon.ico"/>
          {/* <link rel="manifest" href="/assets/site.webmanifest" /> */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap" rel="stylesheet" /> */}
          <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#000" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
    )
}