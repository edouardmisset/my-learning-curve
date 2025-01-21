import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import clsx from 'clsx'

import type React from 'react'
import styles from './index.module.css'

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles['hero-banner'])}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {'</>'}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main />
    </Layout>
  )
}
