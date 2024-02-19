import { useEffect } from "react";
import {ContentBlock, ContentBlockContent} from '@/components/containers/ContentBlock'
import { motion as m, AnimatePresence, whileInView } from 'framer-motion'
import Link from 'next/link'
import './DownloadButton.scss'
import './Downloads.scss'
import './DownloadTabs.scss'
import './VersionInfo.scss'

const ltsReleaseNotes = [
    'Trezor plugin: allow skip session clear on wallet close',
    'Storage: more write attempts, write attempts GUI',
    'Simple_config.py: fix FEERATE_STATIC_VALUES not to be less 1000'
]

const currentReleaseNotes = [
    'Storage: more write attempts, write attempts GUI',
    'Simple_config.py: fix FEERATE_STATIC_VALUES not to be less 1000',
    'Trezor plugin: allow skip session clear on wallet close'
]

function DownloadButton({iconSrc, title, link}) {
    return (
        <Link href={link} className='DownloadButton'>
            <div className='DownloadButton__Content'>
                <img src={iconSrc}/>
                <div className={'DownloadButton__Title'}>{title}</div>
            </div>
        </Link>
    )
}

function DownloadButtonDouble({iconSrc, title, links = []}) {
    return (
        <div className='DownloadButton DownloadButton--Double'>
            <div className='DownloadButton__Content'>
                <img src={iconSrc}/>
                <div className={'DownloadButton__Title'}>{title}</div>
            </div>

            <div className={'DownloadButton__LinksContainer'}>
                <Link className={'DownloadButton__Link'} href={links[0].href}>
                    <div className={'DownloadButton__LinkContent'}>{links[0].title}</div>
                </Link>

                <Link className={'DownloadButton__Link'} href={links[1].href}>
                    <div className={'DownloadButton__LinkContent'}>{links[1].title}</div>
                </Link>
            </div>
        </div>
    )
}

function DownloadTabs({iconSrc, title}) {
    return (
        <div className={'DownloadTabs'}>
            <div className={'DownloadTabs__Tab active'}>LTS 4.1.5.0</div>
            <div className={'DownloadTabs__Tab'}>Current 4.6.2.0</div>
        </div>
    )
}

function VersionInfo({features = []}) {
    return (
        <ContentBlock className={'VersionInfo'}>
            <ContentBlockContent>
                    <h2 className="VersionInfo__Title">Release notes:</h2>
                    <div className={'VersionInfo__List'}>
                        <ul>
                            {features.map((feature, id) =>
                                <li key={'feature' + id}>
                                    {feature}
                                </li>
                            )}
                        </ul>
                    </div>
            </ContentBlockContent>
        </ContentBlock>
    )
}

function DownloadsList() {
    return (
        <div className='Downloads__List'>
            <m.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .5 }}
                className={'Downloads__Tabs'}
            >
                <DownloadTabs/>
            </m.div>

            <div 
                className={'Downloads__ButtonsContainer'}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: .5 }}
                whileInView={{ x: 0, opacity: 1 }}
            >
                <m.div 
                    initial={{ x: 20, opacity: 0 }}
                    transition={{ duration: .5 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className={'Downloads__Button'}
                >
                    <DownloadButton
                        iconSrc={'/images/windows.svg'}
                        title={'Windows'}
                        link={'#'}
                    />
                </m.div>

                <m.div 
                    initial={{ x: 20, opacity: 0 }}
                    transition={{ duration: .5, delay: .1 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className={'Downloads__Button'}
                >
                    <DownloadButton 
                        iconSrc={'/images/mac.svg'}
                        title={'Mac'}
                        link={'#'}
                    />
                </m.div>

                <m.div
                    initial={{ x: 20, opacity: 0 }}
                    transition={{ duration: .5, delay: .2 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className={'Downloads__Button'}
                >
                    <DownloadButton 
                        iconSrc={'/images/linux.svg'}
                        title={'Linux'}
                        link={'#'}
                    />
                </m.div>

                <m.div 
                    initial={{ x: 20, opacity: 0 }}
                    transition={{ duration: .5, delay: .3 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className={'Downloads__Button'}
                >
                    <DownloadButtonDouble 
                        iconSrc={'/images/android.svg'}
                        title={'Android'}
                        links={[
                            {title:'armeabi v7a', href: '#'},
                            {title:'arm64 v8a', href: '#'}
                        ]}
                    />
                </m.div>
            </div>
        </div>
    )
}

function DownloadsWithLogo() {
  return (
      <div className={'Downloads'}>
            <div className="Downloads__ListContainer">
                <DownloadsList/>
            </div>

            <m.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.25, delay: .6 }}
                className='Downloads__Logo'
            >
                <img src='/images/electrum-dash.svg'/>
            </m.div>
      </div>
  )
}

function DownloadsWithInfo() {
    return (
        <div className={'Downloads'}>
            <div className="Downloads__ListContainer">
                <DownloadsList/>
            </div>
           
            <m.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.25, delay: .6 }}
                className='Downloads__Info'
            >
                <VersionInfo features={ltsReleaseNotes}/>
            </m.div>
        </div>
    )
}


export {DownloadsWithLogo, DownloadsWithInfo}