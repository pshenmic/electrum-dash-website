import SocialLinks from '@/components/socialLinks/'
import ServersList from '@/components/servers/'
import './CommunityPage.scss'

export const metadata = {
  title: 'Community',
  description: 'Available servers and social networks of the Electrum Dash wallet.',
  keywords: ['Electrum', 'Dash', 'crypto', 'wallet', 'opensource', 'community', 'servers', 'avalible servers', 'social', 'discord', 'github'],
  applicationName: 'Electrum Dash'
}

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
