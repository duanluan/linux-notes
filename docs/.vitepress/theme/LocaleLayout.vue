<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { Layout } = DefaultTheme
const { lang, site } = useData()
const route = useRoute()
const cookieName = 'linux_notes_lang'
const isClient = typeof window !== 'undefined'

function normalizePath(value: string): string {
  return value.length > 1 && value.endsWith('/') ? value.slice(0, -1) : value
}

function getZhPath(base: string): string {
  const root = normalizePath(base)
  return root === '/' ? '/zh/' : `${root}/zh/`
}

function getCookiePath(base: string): string {
  return normalizePath(base)
}

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`))
  return match ? decodeURIComponent(match[1]) : null
}

function getBrowserLanguage(): string {
  const languages = Array.isArray(navigator.languages) ? navigator.languages : []
  return String(languages[0] || navigator.language || '').toLowerCase()
}

function syncLocale(): void {
  if (!isClient) {
    return
  }

  const base = site.value.base ?? '/'
  const root = normalizePath(base)
  const pathname = normalizePath(window.location.pathname)
  const cookieLang = readCookie(cookieName)
  const preferred = (cookieLang || getBrowserLanguage()).toLowerCase()

  if ((pathname === root || pathname === `${root}/index.html`) && preferred.startsWith('zh')) {
    window.location.replace(getZhPath(base))
    return
  }

  document.cookie = `${cookieName}=${encodeURIComponent(lang.value)}; path=${getCookiePath(base)}; max-age=31536000`
}

watch([() => route.path, lang], syncLocale, { immediate: true })
</script>

<template>
  <Layout />
</template>
