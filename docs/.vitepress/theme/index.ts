import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import type { Theme } from 'vitepress'
import LocaleLayout from './LocaleLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: () => h(LocaleLayout)
} satisfies Theme
