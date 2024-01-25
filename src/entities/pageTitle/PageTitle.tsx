import { pagesStore } from "../pages/store/pagesStore"

import styles from './pages-title.module.scss'

export function PageTitle () {
  const {currentPage} = pagesStore();

  return (
    <div className={styles.wrapper}>
    <div>
      <h1>VOSTOK-TEST</h1>
      <p>{currentPage} <strong>content</strong></p>
    </div>
  </div>
  )
}