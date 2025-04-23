// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual para implementar un gestor de contraseñas y su uso practico',
  tagline: 'Documentación técnica para principantes',
  favicon: 'img/favicon.ico',

  url: 'https://juanedu74.github.io',
  baseUrl: '/docusaurus-codigofuente/',

  organizationName: 'JuanEdu74',
  projectName: 'docusaurus-codigofuente',

  deploymentBranch: 'gh-pages', // rama de despliegue

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/JuanEdu74/docusaurus-codigofuente/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/JuanEdu74/docusaurus-codigofuente/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      navbar: {
        title: 'Manual para implementar un gestor de contraseñas y su uso practico.',
        logo: {
          alt: 'Logo Código Fuente',
          src: 'img/logo.png', // pon tu logo en static/img/logo.png
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/JuanEdu74/docusaurus-codigofuente',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Inicio',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/JuanEdu74',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Juan Arellano.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
