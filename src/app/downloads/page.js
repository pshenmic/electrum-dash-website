import { DownloadsBlock } from '../../components/downloads'
import VersionsList from '../../components/versionsList/'
import SocialLinks from '../../components/socialLinks/'
import './DownloadsPage.scss'

export const metadata = {
  title: 'Downloads',
  description: 'Electrum Dash wallet download links for operating systems such as Windows, Mac, Linus, Android.',
  keywords: ['Electrum', 'Dash', 'crypto', 'wallet', 'opensource', 'downloads', 'macos', 'windows', 'linux', 'android'],
  applicationName: 'Electrum Dash'
}

export default function Downloads() {
  return (
    <main className={'DownloadsPage'}>
      <section className={'DownloadsPage__Downloads'}>
        <DownloadsBlock format={'info'}/>
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