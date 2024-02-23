'use client'

import Image from 'next/image'
import { useState } from "react";
import {ContentBlock, ContentBlockContent} from '../containers/ContentBlock'
import Link from 'next/link'
import './DownloadButton.scss'
import './Downloads.scss'
import './DownloadTabs.scss'
import './VersionInfo.scss'

const ltsReleaseNotes = [
    'Upgrade project to Python 3.10',
    'Fix Masternode payouts on Dash Core v20',
    'Fix PrivateSend feature',
    'Fix Windows builds',
    'Dropped Windows x86 support',
    'Upgraded Tor Proxy bundle in the Windows binaries to the latest version (Tor Expert Bundle 13.0.8)',
]

const currentReleaseNotes = [
    'Upgrade project to Python 3.10',
    'Fix Masternode payouts on Dash Core v20',
    'Fix PrivateSend feature',
    'Fix Windows builds',
    'Dropped Windows x86 support',
    'Upgraded Tor Proxy bundle in the Windows binaries to the latest version (Tor Expert Bundle 13.0.8)',
]

const versions = [
    {
        title: 'LTS 4.1.7.4',
        releaseNotes: ltsReleaseNotes,
        links: {
            windows: 'https://github.com/pshenmic/electrum-dash/releases/download/4.1.7.4/Dash-Electrum-4.1.7.4-setup-win64.exe',
            mac: 'https://github.com/pshenmic/electrum-dash/releases/download/4.1.7.4/Dash-Electrum-4.1.7.4-macosx.dmg',
            linux: 'https://github.com/pshenmic/electrum-dash/releases/download/4.1.7.4/Dash-Electrum-4.1.7.4-x86_64.AppImage',
            android: [
                {title: 'armeabi v7a', href: '#'},
                {title: 'arm64 v8a', href: '#'}
            ]
        }
    },
    {
        title: 'Current 4.1.7.4',
        releaseNotes: currentReleaseNotes,
        links: {
            windows: 'https://github.com/pshenmic/electrum-dash/releases/download/4.1.7.4/Dash-Electrum-4.1.7.4-setup-win64.exe',
            mac: 'https://github.com/pshenmic/electrum-dash/releases/download/4.1.7.4/Dash-Electrum-4.1.7.4-macosx.dmg',
            linux: 'https://github.com/pshenmic/electrum-dash/releases/download/4.1.7.4/Dash-Electrum-4.1.7.4-x86_64.AppImage',
            android: [
                {title: 'armeabi v7a', href: '#'},
                {title: 'arm64 v8a', href: '#'}
            ]
        }
    }
]


function DownloadButton({iconSrc, title, link, disabled = false}) {
    return (
        <Link href={link} className={'DownloadButton '  + (disabled ? 'disabled' : '')}>
            <div className={'DownloadButton__Content'}>
                <picture>
                    <img src={iconSrc} alt='Download button icon' />
                </picture>
                <div className={'DownloadButton__Title'}>{title}</div>
            </div>
        </Link>
    )
}

function DownloadButtonDouble({iconSrc, title, links = [], disabled = false}) {
    const [first, second] = links

    return (
        <div className={'DownloadButton DownloadButton--Double ' + (disabled ? 'disabled' : '')}>
            <div className={'DownloadButton__Content'}>
                <picture>
                    <img src={iconSrc} alt='Download button icon' />
                </picture>
                <div className={'DownloadButton__Title'}>{title}</div>
            </div>

            <div className={'DownloadButton__LinksContainer'}>
                <Link className={'DownloadButton__Link'} href={first.href}>
                    <div className={'DownloadButton__LinkContent'}>{first.title}</div>
                </Link>

                <Link className={'DownloadButton__Link'} href={second.href}>
                    <div className={'DownloadButton__LinkContent'}>{second.title}</div>
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
                    key={id}
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
                                <li key={id}>
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
            <div className={'Downloads__Tabs'}>
                <DownloadTabs 
                    activeVersion={activeVersion} 
                    changeVersion={changeVersion}
                />
            </div>

            <div className={'Downloads__ButtonsContainer'}>

                {versions[activeVersion].links.windows &&
                    <div className={'Downloads__Button'}>
                        <DownloadButton
                            iconSrc={'/images/windows.svg'}
                            title={'Windows'}
                            link={versions[activeVersion].links.windows}
                        />
                    </div>
                }

                {versions[activeVersion].links.mac &&
                    <div className={'Downloads__Button'}>
                        <DownloadButton 
                            iconSrc={'/images/mac.svg'}
                            title={'Mac'}
                            link={versions[activeVersion].links.mac}
                        />
                    </div>
                }

                {versions[activeVersion].links.linux &&
                    <div className={'Downloads__Button'}>
                        <DownloadButton 
                            iconSrc={'/images/linux.svg'}
                            title={'Linux'}
                            link={'#'}
                        />
                    </div>
                }

                {versions[activeVersion].links.android &&
                    <div className={'Downloads__Button'}>
                        <DownloadButtonDouble 
                            iconSrc={'/images/android.svg'}
                            title={'Android'}
                            links={versions[activeVersion].links.android}
                            disabled={true}
                        />
                    </div>
                }

            </div>
        </div>
    )
}

function DownloadsBlock({format = 'info'}) {
    const [activeVersion, setActiveVersion] = useState(0)

    return (
        <div className={'Downloads ' + (format === 'info' ? 'Downloads--Info' : '')}>

            <div className="Downloads__ListContainer">
                <DownloadsList 
                    activeVersion={activeVersion}
                    changeVersion={setActiveVersion}
                />
            </div>

            {(format === 'logo') &&
                <div className='Downloads__Logo'>
                    <Image alt="electrum dash logo" src='/images/electrum-dash.svg'width={0} height={0}/>
                </div>
            }

            {(format === 'info') &&
                <div className='Downloads__Info'>
                    <VersionInfo features={versions[activeVersion].releaseNotes}/>
                </div>
            }

        </div>
    )
}


export { DownloadsBlock }