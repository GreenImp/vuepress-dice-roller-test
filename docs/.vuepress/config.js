import { defaultTheme, defineUserConfig } from 'vuepress'
import { diceRollerPlugin } from '@dice-roller/vuepress-plugin-dice-roller';

export default defineUserConfig({
  lang: 'en-GB',
  title: 'Vuepress sidebar bug test',
  description: 'A Vuepress test to test bug #1329',
  theme: defaultTheme({
    docsDir: 'docs',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/',
            '/guide/getting-started',
            '/guide/cli',
            '/guide/usage',
            '/guide/customisation',
          ],
          collapsible: true,
        },
        {
          text: 'Notation',
          children: [
            '/guide/notation/',
            '/guide/notation/dice',
            '/guide/notation/modifiers',
            '/guide/notation/group-rolls',
            '/guide/notation/roll-descriptions',
            '/guide/notation/maths',
          ],
          collapsible: true,
        },
      ],
    },
  }),
  plugins: [
    diceRollerPlugin(),
  ],
})
