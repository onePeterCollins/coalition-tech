import { useEffect, useState } from 'react'

import { NavItem } from '@/types/nav'
import { MainNav } from './MainNav'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import useScrollTrigger from '@/hooks/useScrollTrigger'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from './ui/button'

const Header = () => {
  const [opacity, setOpacity] = useState(0)
  const scrolledToThreshold = useScrollTrigger(100)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the opacity based on the scroll position
      const maxScroll = window.innerHeight
      const currentScroll = window.scrollY
      const newOpacity = currentScroll / maxScroll
      setOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn('fixed top-0 z-40 w-full text-white', scrolledToThreshold && `text-black`)}
      style={{
        backgroundColor: scrolledToThreshold ? `rgba(255,255,255,${Number(opacity).toFixed(2)})` : 'transparent'
      }}>
      <div className={'container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'}>
        <MainNav opacity={opacity} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex gap-6">
            {siteConfig.mainNav.map((item: NavItem, index: number) => (
              <a
                key={index}
                href={item.href}
                className={cn(
                  'flex items-center text-sm text-inherit border-b border-inherit uppercase italic font-black',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}>
                <span className="mr-1">0{Number(index + 1)}</span>
                {item.title}
              </a>
            ))}
          </nav>

          <Sheet>
            <SheetTrigger asChild className="flex md:hidden">
              <Button variant="ghost">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="w-full min-h-screen">
                <nav className="flex flex-col w-full min-h-0 px-4 space-y-4">
                  {siteConfig.mainNav.map((item: NavItem, index: number) => (
                    <a
                      className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium"
                      href="#"
                      key={index}>
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

interface MenuIconProps {
  className?: string
  style?: React.CSSProperties
  onClick?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void
  // Add other specific props as needed
}

function MenuIcon(props: MenuIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

export default Header
