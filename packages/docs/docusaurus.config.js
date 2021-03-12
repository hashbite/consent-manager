const path = require('path')

module.exports = {
  title: 'Consent Manager',
  tagline: "Actually it's a consent manager",
  url: 'https://techboi-io.github.io',
  baseUrl: '/consent-manager/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'techboi-io',
  projectName: 'consent-manager',
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
          href: 'https://github.com/techboi-io/consent-manager',
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
            {
              label: 'Twitter @axe312ger',
              href: 'https://twitter.com/axe312ger',
            },
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
              href: 'https://github.com/techboi-io/consent-manager',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} techboi GmbH. Built with Docusaurus.`,
    },
    announcementBar: {
      id: 'support_us',
      content:
        'This project is still in early stage. Feel free to talk to us in our <a target="_blank" rel="noopener noreferrer" href="https://github.com/techboi-io/consent-manager/issues">GitHub issues</a>',
      backgroundColor: '#f9703e',
      textColor: '#fff',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/techboi-io/consent-manager/edit/master/packages/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, './src/plugins/consent-manager')],
}
