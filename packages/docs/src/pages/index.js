import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'User Consent Control',
    imageUrl: 'img/undraw_control_panel.svg', // Represents control and empowerment
    description: (
      <>
        Provides complete control over data shared with third-party services,
        enhancing user trust and ensuring transparency.
      </>
    ),
  },
  {
    title: 'GDPR & Privacy Law Compliance',
    imageUrl: 'img/undraw_gdpr.svg', // Indicates legal compliance
    description: (
      <>
        A developer's toolkit for building websites that comply with GDPR and
        other privacy laws, simplifying legal adherence.
      </>
    ),
  },
  {
    title: 'React & TypeScript Integration',
    imageUrl: 'img/undraw_react.svg', // Represents React
    description: (
      <>
        Built on React, supporting TypeScript, to enable robust, maintainable,
        and scalable solutions in modern web development.
      </>
    ),
  },
  {
    title: 'Extensive Plugin Library',
    imageUrl: 'img/undraw_online_connection.svg', // Suggests connectivity and integration
    description: (
      <>
        Access over 10 ready-made plugins for popular services, with
        easy-to-implement options for custom integrations.
      </>
    ),
  },
  {
    title: 'Performance-Optimized Design',
    imageUrl: 'img/undraw_fast_loading.svg', // Implies efficiency
    description: (
      <>
        Optimized for performance, adding minimal load to your site while
        maintaining full functionality.
      </>
    ),
  },
  {
    title: 'Customizable UI',
    imageUrl: 'img/undraw_user_flow.svg', // Suggests user interface flexibility
    description: (
      <>
        Includes a default interface that's easy to use, with options to
        customize or completely redesign as needed.
      </>
    ),
  },
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={siteConfig.customFields.description}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
