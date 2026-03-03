"use client"

import { useTransitionRouter } from "next-view-transitions"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  href: string
  children: React.ReactNode,
  classNames: string
}

const NavLink = ({ href, children, classNames }: NavLinkProps) => {
  const pathname = usePathname()

  const router = useTransitionRouter()

  // supports nested routes like /about/team
  const isActive =
    pathname === href || pathname.startsWith(href + "/")

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault()
        router.push(href, {
          onTransitionReady: pageAnimation
        })

      }}
      className={`${classNames} ${isActive? "border-[#6B6AFD] text-[#6B6AFD]" : "border-transparent text-[#2C2C2C] "}`}>
      {children}
    </Link>
  )
}

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: 'translateY(0)'
      }, {
        opacity: 0.5,
        scale: 0.9,
        transform: 'translateY(-100px)'
      }
    ], {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-old(root)'
    }
  );

  document.documentElement.animate(
    [
      {
        transform: 'translateY(100%)'
      }, {
        transform: 'translateY(0)'
      }
    ], {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-new(root)'
    }
  )
}

export default NavLink
