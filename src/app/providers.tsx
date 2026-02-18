'use client'

import { ThemeSwitcherProvider } from '@/hooks/useThemeSwitcher'

export function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeSwitcherProvider>{children}</ThemeSwitcherProvider>
}