import { useState } from "react";
import {ContentBlock, ContentBlockContent} from '@/components/containers/ContentBlock'
import { motion as m } from 'framer-motion'
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
    'Trezor plugin: allow skip session clear on wallet close',
]

const versions = [
    {
        title: 'LTS 4.1.5.0',
        releaseNotes: ltsReleaseNotes,
        links: {
            windows: '#',
            mac: '#',
            linux: '#',
            android: [{title: '', href: '#'}, {title: '', href: '#'}]
        }
    },
    {
        title: 'Current 4.6.2.0',
        releaseNotes: currentReleaseNotes,
        links: {
            windows: '#',
            mac: '#',
            linux: '#',
            android: [{title: '', href: '#'}, {title: '', href: '#'}]
        }
    }
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

function DownloadTabs({activeVersion, changeVersion}) {
    return (
        <div className={'DownloadTabs'}>

            {versions.map((version, id) =>
                <div 
                    key={'VersionTab' + id}
                    className={'DownloadTabs__Tab ' + (activeVersion === id ? 'active' : '') } 
                    onClick={() => changeVersion(id)}
                >
                    {version.title}
                </div>
            )}
            
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

function DownloadsList({activeVersion, changeVersion}) {
    return (
        <div className='Downloads__List'>
            <m.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .5 }}
                className={'Downloads__Tabs'}
            >
                <DownloadTabs 
                    activeVersion={activeVersion} 
                    changeVersion={changeVersion}
                />
            </m.div>

            <div 
                className={'Downloads__ButtonsContainer'}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: .5 }}
                whileInView={{ x: 0, opacity: 1 }}
            >

                {versions[activeVersion].links.windows &&
                    <m.div 
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ duration: .5 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className={'Downloads__Button'}
                    >
                        <DownloadButton
                            iconSrc={'/images/windows.svg'}
                            title={'Windows'}
                            link={versions[activeVersion].links.windows}
                        />
                    </m.div>
                }

                {versions[activeVersion].links.mac &&
                    <m.div 
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ duration: .5, delay: .1 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className={'Downloads__Button'}
                    >
                        <DownloadButton 
                            iconSrc={'/images/mac.svg'}
                            title={'Mac'}
                            link={versions[activeVersion].links.mac}
                        />
                    </m.div>
                }

                {versions[activeVersion].links.linux &&
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
                }

                {versions[activeVersion].links.android &&
                    <m.div 
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ duration: .5, delay: .3 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className={'Downloads__Button'}
                    >
                        <DownloadButtonDouble 
                            iconSrc={'/images/android.svg'}
                            title={'Android'}
                            links={versions[activeVersion].links.android}
                        />
                    </m.div>
                }

            </div>
        </div>
    )
}

function DownloadsWithLogo() {
    const [activeVersion, setActiveVersion] = useState(0)

  return (
      <div className={'Downloads'}>
            <div className="Downloads__ListContainer">
                <DownloadsList 
                    activeVersion={activeVersion}
                    changeVersion={setActiveVersion}
                />
            </div>

            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.25, delay: .6 }}
                className='Downloads__Logo'
            >
                <img alt="electrum dash logo" src='/images/electrum-dash.svg'/>
            </m.div>
      </div>
  )
}

function DownloadsWithInfo() {
    const [activeVersion, setActiveVersion] = useState(0)

    return (
        <div className={'Downloads'}>
            <div className="Downloads__ListContainer">
                <DownloadsList 
                    activeVersion={activeVersion}
                    changeVersion={setActiveVersion}
                />
            </div>
           
            <m.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.25, delay: .6 }}
                className='Downloads__Info'
            >
                <VersionInfo features={versions[activeVersion].releaseNotes}/>
            </m.div>
        </div>
    )
}


export {DownloadsWithLogo, DownloadsWithInfo}