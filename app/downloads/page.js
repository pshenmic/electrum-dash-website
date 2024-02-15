"use client"

import Advantages from '@/components/advantages'
import {DownloadsWithInfo} from '@/components/downloads'
import VersionsList from '@/components/versionsList/'
import SocialLinks from '@/components/socialLinks/'
import 'HomePage.scss'


export default function Downloads() {
  return (
    <main>
      <section className={'HomePage__Downloads'}>
        <DownloadsWithInfo/>
      </section>

      <section className={'HomePage__LastUpdates'}>
        <VersionsList/>
      </section>

      <section className={'HomePage__SocialLinks'}>
        <SocialLinks/>
      </section>
    </main>
  );
}