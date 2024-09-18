import { persistentAtom } from '@nanostores/persistent'
import { THEME_MAP } from '../constants'

type ThemeMapKey = keyof typeof THEME_MAP

export const activeTheme = persistentAtom<ThemeMapKey>('theme', 'Mozu And Kiwi')

export function setTheme(key: ThemeMapKey) {
  activeTheme.set(key)
}

export function applyTheme(key: ThemeMapKey = activeTheme.get()) {
  const theme = THEME_MAP[key]
  // if (!theme) return // assuming there will always be a theme

  for (const [category, values] of Object.entries(theme.colors)) {
    for (const [index, value] of values.entries()) {
      document.documentElement.style.setProperty(`--${category}-${(index + 1) * 100}`, value)
    }
  }

  for (const [category, value] of Object.entries(theme.fontFamily)) {
    document.documentElement.style.setProperty(`--font-${category}`, value)
  }
}

activeTheme.subscribe(applyTheme)
