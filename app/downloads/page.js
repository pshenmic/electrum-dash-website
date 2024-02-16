"use client"

import { DownloadsWithInfo } from '@/components/downloads'
import VersionsList from '@/components/versionsList/'
import SocialLinks from '@/components/socialLinks/'
import './DownloadsPage.scss'


export default function Downloads() {
  return (
    <main className={'DownloadsPage'}>
      <section className={'DownloadsPage__Downloads'}>
        <DownloadsWithInfo/>
      </section>

      <section className={'DownloadsPage__LastUpdates'}>
        <VersionsList/>
      </section>

      <section className={'DownloadsPage__SocialLinks'}>
        <SocialLinks/>
      </section>
    </main>
  );
}