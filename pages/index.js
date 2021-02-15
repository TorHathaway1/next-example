import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Cars List
            </h1>

        <ul>
            <li>
                <Link href="/cars/tesla"><a>Tesla</a></Link>
            </li>
            <li>
                <Link href="/cars/ford"><a>Ford</a></Link>
            </li>
            <li>
                <Link href="/cars/lambo"><a>Lambo</a></Link>
            </li>
        </ul>
    </main>
</div>
)
}
