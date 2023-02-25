import Link from 'next/link'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.title}>Giggle</p>
      <ul className={styles.menus}>
        <li>
          <Link href="/about">{"What's Giggle?"}</Link>
        </li>
        <li>
          <Link className={styles.menusLogin} href="/login">
            LOG IN
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
