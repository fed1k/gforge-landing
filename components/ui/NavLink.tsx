"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  href: string
  children: React.ReactNode,
  classNames: string
}

const NavLink = ({ href, children, classNames }: NavLinkProps) => {
  const pathname = usePathname()

  // supports nested routes like /about/team
  const isActive =
    pathname === href || pathname.startsWith(href + "/")

  return (
    <Link
      href={href}
      className={`${classNames} ${isActive? "border-[#6B6AFD] text-[#6B6AFD]" : "border-transparent text-[#2C2C2C] "}`}>
      {children}
    </Link>
  )
}

export default NavLink
