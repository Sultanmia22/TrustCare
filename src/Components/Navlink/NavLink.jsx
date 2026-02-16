import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({href,children}) => {

    const pathName = usePathname()

    const isActive = pathName === href

  return (
    <Link className={`${isActive ? 'bg-primary px-2 py-1 rounded-sm text-white' : 'text-primary font-semibold'}`} href={href}>{children}</Link>
  )
}

export default NavLink