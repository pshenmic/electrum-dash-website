'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import './Header.scss'


export default function Header() {
  const path = usePathname().split('/').slice(1)
  const [activeSection] = path

  return (
    <header className={'Header'}>
      <div className={'Header__ContentContainer'}>
      <Link className={'Header__LogoContainer'} href="/">
        <img className={'Header__Logo'} src='./images/electrum-dash.svg'/>

        <div className={'Header__Title'}>
          Electrum Dash
        </div>
        </Link>

        <nav className={'Header__Navigation'}>
          <Link className={`Header__NavigationLink ${activeSection === '' ? 'active' : '' }`} href="/">Home</Link>
          <Link className={`Header__NavigationLink ${activeSection === 'downloads' ? 'active' : '' }`} href="/downloads">Downloads</Link>
          <Link className={`Header__NavigationLink ${activeSection === 'community' ? 'active' : '' }`} href="/community">Community</Link>
          <Link className={`Header__NavigationLink ${activeSection === 'about' ? 'active' : '' }`} href="/about">About</Link>
        </nav>

      </div>
    </header>
  );
}
