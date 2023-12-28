import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'Empower User Consent',
    imageUrl: 'img/undraw_control_panel.svg', // Changed to represent control and empowerment
    description: (
      <>
        Empower users with full control over their data shared with external
        services, enhancing trust and transparency.
      </>
    ),
  },
  {
    title: 'Compliance with Privacy Laws',
    imageUrl: 'img/undraw_gdpr.svg', // Suggests legal terms and compliance
    description: (
      <>
        Facilitate GDPR compliance and more, with a toolkit crafted for
        developers to build privacy-respecting websites with ease.
      </>
    ),
  },
  {
    title: 'React-Based, TypeScript-Ready',
    imageUrl: 'img/undraw_react.svg', // Directly represents React
    description: (
      <>
        Leverage a React-centric architecture, enriched with TypeScript support,
        ensuring robust, maintainable, and scalable code.
      </>
    ),
  },
  {
    title: 'Rich Integration Ecosystem',
    imageUrl: 'img/undraw_online_connection.svg', // Reflects extensive connectivity and integration
    description: (
      <>
        Enjoy a rich ecosystem with 10+ ready-to-use plugins for popular
        services, coupled with the flexibility to create and implement your own
        custom integrations with minimal effort.
      </>
    ),
  },
  {
    title: 'Lightweight & Efficient',
    imageUrl: 'img/undraw_fast_loading.svg', // Conveys the idea of efficiency and speed
    description: (
      <>
        Designed for efficiency, it adds minimal overhead to your site,
        prioritizing performance without compromising functionality.
      </>
    ),
  },
  {
    title: 'User-Friendly Interface',
    imageUrl: 'img/undraw_user_flow.svg', // Evokes a smooth, user-friendly experience
    description: (
      <>
        Comes with a user-friendly default interface, ensuring a smooth user
        experience while maintaining the option for custom interfaces.
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
      description={siteConfig.description}
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
