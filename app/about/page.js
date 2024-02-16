"use client"

import {ContentBlock, ContentBlockHeader, ContentBlockContent, ContentConteiner} from '@/components/containers/ContentBlock'
import SocialLinks from '@/components/socialLinks/'
import Team from '@/components/team/'
import FaqBlock from '@/components/faq/'
import { motion as m } from 'framer-motion'
import './AboutPage.scss'

export default function About() {
  return (
    <main className={'AboutPage'}>

      <div className={'AboutPage__ContentConteiner'}>
        
        <nav className={"AboutPage__Navigation"}>
          <h2>Page sections</h2>
          
          <ol>
            <li><a href="#AboutWallet">About wallet</a></li>
            <li><a href="#FAQ">F.A.Q.</a></li>
            <li><a href="#Team">Team</a></li>
          </ol>
        </nav>


        <div className={'AboutPage__Content'}>

          <section className={'AboutPage__AboutWallet'} id='AboutWallet'>

            <ContentBlock externalHeader={true}>

                <ContentBlockHeader>
                  <h2>About wallet</h2>
                </ContentBlockHeader>

                <ContentBlockContent>
                  <ContentConteiner> 
                    Dash Electrum is a light wallet which uses powerful external servers 
                    to index the blockchain, while still securing the keys on your personal computer. 
                    Transactions are verified on the Dash blockchain using a technique 
                    called Secure Payment Verification (SPV), 
                    which only requires the block headers and not the full block. 
                    This means that wallet startup is almost instant, while still keeping your 
                    funds secure and mobile. Dash Electrum also supports advanced InstantSend, CoinJoin 
                    and masternode features.
                    <br/><br/>
                    The wallet was developed with the support of Dash Incubator and Dash DAO. 
                    Dash Electrum is a fork of the Electrum wallet for Bitcoin. While this documentation focuses on using Dash Electrum, 
                    full documentation of all Bitcoin Electrum features (mostly identical in Dash Electrum) 
                    is available at the official documentation site.
                  </ContentConteiner>
                </ContentBlockContent>

            </ContentBlock>

          </section>

          <section className={'AboutPage__FAQ'} id='FAQ'>

            <FaqBlock/>

          </section>

          <section className={'AboutPage__Team'} id='Team'>

            <ContentBlock externalHeader={true}>
                <ContentBlockHeader>
                  <h2>Team</h2>
                </ContentBlockHeader>
                <ContentBlockContent>
                  <Team/>
                </ContentBlockContent>
            </ContentBlock>

          </section>

        </div>
      </div>


      <section className={'AboutPage__SocialLinks'}>
          <SocialLinks/>
      </section>
    </main>
  );
}
