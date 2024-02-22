import Advantages from '../components/advantages'
import { DownloadsBlock } from '../components/downloads'
import VersionsList from '../components/versionsList/'
import SocialLinks from '../components/socialLinks/'
import './HomePage.scss'

export const metadata = {
  title: '',
  description: 'Lightweight wallet that allows you to send, receive and mix Dash without downloading blockchain.',
  keywords: ['Electrum', 'Dash', 'crypto', 'wallet', 'opensource', 'protected', 'lightweight', 'fast', 'fast speed'],
  applicationName: 'Electrum Dash'
}

export default function Home() {
  return (
    <main className={'HomePage'}>
      <section className={'HomePage__Introduction'}>
        <h1>Electrum Dash</h1>
        <p>Lightweight wallet that allows you to send, receive and mix Dash<br/>without downloading blockchain</p>
      </section>
      
      <section className={'HomePage__Advantages'}>
        <Advantages/>
      </section>

      <section className={'HomePage__Downloads'}>
        <DownloadsBlock format={'logo'}/>
      </section>

      <section className={'HomePage__LastUpdates'}>
        <VersionsList amount={6}/>
      </section>

      <section className={'HomePage__SocialLinks'}>
        <SocialLinks/>
      </section>

    </main>
  );
}
