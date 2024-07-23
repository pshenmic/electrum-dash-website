'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef  } from 'react'
import Link from 'next/link'
import { GlobalMessage } from '../messages'
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
  const mobileMenuSwitcher = useRef(null);
  const [activeSection] = path

  useEffect(()=> {
    mobileMenuSwitcher.current.checked = false
  }, path)

  return (
    <>
      <div className={'HeaderStub'}></div>

      <GlobalMessage type={'warning'}>
        There is a fake Electrum Dash website with absolutely unknown binaries, we can't verify its
        authenticity.<br/>
        Most likely it is a SCAM that can steal your keys if you download it and execute it on your system. <br/>
        <br/>
        Please make sure you are on the correct website and page url matches one of these LEGIT domains:<br/> <br/>
        electrum-dash.com<br/>
        dash-electrum.com<br/>
        dash-electrum.org<br/>
      </GlobalMessage>

      <header className={'Header'}>
        <div className={'Header__ContentContainer'}>
          <Link className={'Header__LogoContainer'} href="/">
            <Image className={'Header__Logo'} src='./images/electrum-dash.svg' alt='Electrum dash logo' width={50} height={50}/>

            <div className={'Header__Title'}>
              Electrum Dash
            </div>
          </Link>

          <input
            id='MobileMenu'
            ref={mobileMenuSwitcher}
            type='checkbox'
            style={{display: 'none'}}
          />

          <label
            htmlFor={'MobileMenu'}
            className={'Header__Burger Burger'}
          >
            <span className='Burger__Line'></span>
            <span className='Burger__Line'></span>
            <span className='Burger__Line'></span>
          </label>

          <nav className={'Header__Navigation'}>

            {links.map((link, id) =>
              <Link key={id} className={`Header__NavigationLink ${activeSection === link.id ? 'active' : '' }`} href={link.href}>{link.title}</Link>
            )}

          </nav>

          <nav className={'Header__MobileMenu'}>

            {links.map((link, id) =>
              <Link key={id} className={`Header__NavigationLink ${activeSection === link.id ? 'active' : '' }`} href={link.href}>{link.title}</Link>
            )}

          </nav>

        </div>
      </header>
    </>
  );
}
