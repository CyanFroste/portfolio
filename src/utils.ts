import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

type Rgb = { r: number; g: number; b: number }

function hexToRgb(hex: string): Rgb {
  const bigint = parseInt(hex.replace('#', ''), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return { r, g, b }
}

export function isLight(color: string | Rgb) {
  const { r, g, b } = typeof color === 'string' ? hexToRgb(color) : color
  const luminance = 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255)
  return luminance > 0.5
}

export function indexToThemeKey(index: number) {
  return (index + 1) * 100
}

export function themeKeyToIndex(key: number) {
  return key / 100 - 1
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
