'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import './Header.scss'
import './Burger.scss'

const links = [
  {title:'Home', id: '', href:'/'},
  {title:'Downloads', id: 'downloads', href:'/downloads'},
  {title:'Community', id: 'community', href:'/community'},
  {title:'About', id: 'about', href:'/about'},
]

export default function Header() {
  const path = usePathname().split('/').slice(1)
  const [activeSection] = path
  const [MobileMenuState, setMobileMenuState] = useState(false)

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 768) setMobileMenuState(false)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  useEffect(()=> setMobileMenuState(false), path)

  return (
    <>
      <div className={'HeaderStub'}></div>
      <header className={'Header'}>
        <div className={'Header__ContentContainer'}>
          <Link className={'Header__LogoContainer'} href="/">
            <img className={'Header__Logo'} src='./images/electrum-dash.svg'/>

            <div className={'Header__Title'}>
              Electrum Dash
            </div>
          </Link>

          <label
            className={'Header__Burger Burger ' + (MobileMenuState ? 'active' : '')} 
            onClick={()=> setMobileMenuState(!MobileMenuState)}
          >
            <span className='Burger__Line'></span>
            <span className='Burger__Line'></span>
            <span className='Burger__Line'></span>
          </label>

          <nav className={'Header__Navigation'}>

            {links.map((link, id) =>
              <Link key={'NavLink' + id} className={`Header__NavigationLink ${activeSection === link.id ? 'active' : '' }`} href={link.href}>{link.title}</Link>
            )}

          </nav>

          <nav className={'Header__MobileMenu ' + (MobileMenuState ? 'active' : '')}>

            {links.map((link, id) =>
              <Link key={'NavLink' + id} className={`Header__NavigationLink ${activeSection === link.id ? 'active' : '' }`} href={link.href}>{link.title}</Link>
            )}

          </nav>

        </div>
      </header>
    </>
  );
}
