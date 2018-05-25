
import Head from 'next/head'
import style from '../style.css';

export default () => (
  <div>
    <Head>
      <title>IronByte | About</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <dev className = { style.example } >About IronByte</dev>
  </div>
)
