<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { lang } = useData()

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`))
  return match ? decodeURIComponent(match[1]) : null
}

onMounted(() => {
  const siteData = (window as typeof window & {
    __VP_SITE_DATA__?: { value?: { base?: string } }
  }).__VP_SITE_DATA__
  const base = siteData?.value?.base ?? '/'

  const pathname = window.location.pathname
  const cookieLang = readCookie('linux_notes_lang')
  if (pathname === base || pathname === `${base}index.html`) {
    const preferred = (cookieLang ?? navigator.language ?? '').toLowerCase()
    const target = preferred.startsWith('zh') ? `${base}zh/` : base
    if (pathname !== target) {
      window.location.replace(target)
      return
    }
  }

  document.cookie = `linux_notes_lang=${encodeURIComponent(lang.value)}; path=${base}; max-age=31536000`
})
</script>

<template>
  <Layout />
</template>
