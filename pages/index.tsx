
import Head from 'next/head'
import style from '../style.css';

import Link from 'next/link'

export default () => (
  <div>
    <Head>
      <title>IronByte | Index</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className = { style.example } >Hello from IronByte</div>
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      {' '}
      <Link href="/contact">
        <a>Contact</a>
      </Link>

    </div>
  </div>
)
