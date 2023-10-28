const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Pytorch Lifestream',
  tagline: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  favicon: 'img/logo.svg',

  url: 'https://Dzagcoffee.github.io',
  baseUrl: '/pytorch-lifestream-docs',
  trailingSlash: false,

  organizationName: 'SBER AI Lab',
  projectName: 'pytorch-lifestream-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined
        },
        blog: {
          showReadingTime: false,
          editUrl: undefined
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Pytorch Lifestream',
        logo: {
          alt: 'Pytorch Lifestream logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sidebar',
            position: 'right',
            label: 'Documentation',
          },
          {to: '/blog', label: 'News', position: 'right'},
          {
          type: 'dropdown',
          label: 'Community',
          position: 'right',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/pytorch_lifestream',
            },
          ],
        },
          {
            href: 'https://github.com/dllllb/pytorch-lifestream',
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
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/pytorch_lifestream',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dllllb/pytorch-lifestream',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
};

module.exports = config;
