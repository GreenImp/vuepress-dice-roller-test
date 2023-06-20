import { defaultTheme, defineUserConfig } from 'vuepress'
import { diceRollerPlugin } from '@dice-roller/vuepress-plugin-dice-roller';

export default defineUserConfig({
  lang: 'en-GB',
  title: 'Vuepress sidebar bug test',
  description: 'A Vuepress test to test bug #1329',
  theme: defaultTheme({
    docsDir: 'docs',
  }),
  plugins: [
    diceRollerPlugin(),
  ],
})
