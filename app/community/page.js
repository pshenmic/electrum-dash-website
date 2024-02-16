"use client"

import SocialLinks from '@/components/socialLinks/'
import ServersList from '@/components/servers/'
import { motion as m } from 'framer-motion'
import './CommunityPage.scss'


export default function Community() {
  return (
    <main className={'CommunityPage'}>
      <section className={'CommunityPage__Introduction'}>

        <h1>Good news and latest updates!<br/>Connect & follow us!</h1>

        <div className={'CommunityPage__SocialLinks'}>
          <SocialLinks/>
        </div>
      </section>

      <section className={'CommunityPage__Servers'}>

                <ServersList/>

      </section>
    </main>
  );
}
