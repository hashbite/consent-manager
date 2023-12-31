const path = require('path')

module.exports = {
  title: 'Consent Manager',
  tagline: 'Simplify GDPR Compliance: Seamless and User-Centric',
  url: 'https://hashbite.github.io/',
  baseUrl: '/consent-manager/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hashbite',
  projectName: 'consent-manager',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  customFields: {
    description:
      'Explore Consent Manager: GDPR-compliant, i18n-supported, plugin-rich and developer-friendly toolkit for fair user consent management in web apps with custom interfaces.',
  },
  themeConfig: {
    navbar: {
      title: 'Consent Manager ',
      logo: {
        alt: 'Consent Manager logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/hashbite/consent-manager',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Why?',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Twitter @axe312ger',
            //   href: 'https://twitter.com/axe312ger',
            // },
            {
              label: 'Twitter @zcei_ger',
              href: 'https://twitter.com/zcei_ger',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hashbite/consent-manager',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} hashbite. Built with Docusaurus.`,
    },
    announcementBar: {
      id: 'support_us',
      content:
        'This project is still in early stage. Feel free to talk to us in our <a target="_blank" rel="noopener noreferrer" href="https://github.com/hashbite/consent-manager/issues">GitHub issues</a>',
      backgroundColor: '#e57c00',
      textColor: '#fff',
    },
    image: 'img/social-share.png',
    metadata: [{ name: 'twitter:card', content: 'summary_large_image' }],
    headTags: [
      // Apple Touch Icon
      {
        tagName: 'link',
        attributes: {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
      },
      // Favicon 32x32
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
      },
      // Favicon 16x16
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
      },
      // Manifest
      {
        tagName: 'link',
        attributes: {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      },
      // Safari Pinned Tab Icon
      {
        tagName: 'link',
        attributes: {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#1e90ff',
        },
      },
      // MS Application Tile Color
      {
        tagName: 'meta',
        attributes: {
          name: 'msapplication-TileColor',
          content: '#1e90ff',
        },
      },
      // Theme Color
      {
        tagName: 'meta',
        attributes: {
          name: 'theme-color',
          content: '#ffffff',
        },
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hashbite/consent-manager/edit/master/packages/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, './src/plugins/consent-manager')],
}
