import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Leer el Manual 📘
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4', styles.feature)}>
            <h3>Seguridad</h3>
            <p>Protege tus contraseñas con cifrado robusto y autenticación segura.</p>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <h3>Facilidad de uso</h3>
            <p>Administra todas tus credenciales desde un solo lugar con una interfaz amigable.</p>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <h3>Protección continua</h3>
            <p>Actualizaciones automáticas y monitoreo para mantenerte siempre protegido.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Manual técnico para proteger y gestionar contraseñas de forma segura.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
