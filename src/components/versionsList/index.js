import {ContentBlock, ContentBlockHeader, ContentBlockContent} from '../containers/ContentBlock'
import Link from 'next/link'
import './VersionsList.scss'
import './VersionsListItem.scss'

const versions = [
    {
        date: 'Nov 4, 2024',
        version: '4.1.7.6',
        href: 'https://github.com/pshenmic/electrum-dash/releases/tag/4.1.7.6',
        description: 'Fixes connection problems for wallets with AssetLock / AssetUnlock transactions.'
    },
    {
        date: 'Aug 9, 2024',
        version: '4.1.7.5',
        href: 'https://github.com/pshenmic/electrum-dash/releases/tag/4.1.7.5',
        description: 'Fixes Linux AppImage binary build and crash after setting custom denominations in the PrivateSend dialog.'
    },
    {
        date: 'Jan 30, 2024',
        version: '4.1.7.4',
        href: 'https://github.com/pshenmic/electrum-dash/releases/tag/4.1.7.4',
        description: 'Stable release including a lot of work on stabilizing wallet after upgrading libraries and network protocols'
    },
    {
        date: 'Jan 28, 2024',
        version: '4.1.7.4-rc.14',
        href: 'https://github.com/pshenmic/electrum-dash/releases/tag/4.1.7.4-rc.14',
        description: 'PrivateSend Release Candidate with Windows builds fixed'
    },
    {
        date: 'Jan 17, 2024',
        version: '4.1.7.4-rc.9',
        href: 'https://github.com/pshenmic/electrum-dash/releases/tag/4.1.7.4-rc.9',
        description: 'Release Candidate build with recovered PrivateSend (CoinJoin) feature'
    },
    {
        date: 'Jan 17, 2024',
        version: '4.1.7.3-rc.48',
        href: 'https://github.com/pshenmic/electrum-dash/releases/tag/4.1.7.3-rc.48',
        description: 'Renewed all dependencies & upgraded to Python 3.10'
    },
]

function VersionsListItem({date, version, href, description}) {
    return (
        <div className={'VersionsListItem'}>
            <Link href={href} className={'VersionsListItem__ContentContainer'}>
                    <div className={'VersionsListItem__Date'}>{date}</div>
                    <div className={'VersionsListItem__Version'}>{version}</div>
                    <div className={'VersionsListItem__Description'}>{description}</div>
            </Link>
        </div>
    )
}

export default function VersionsList({amount = null}) {
    const elements = !amount ? versions : versions.slice(0, amount);

    return (
        <ContentBlock>
            <ContentBlockHeader>
                <div className='VersionsList__Header'>
                    <h2>Last updates:</h2>
                    {amount &&
                        <Link href={'/downloads'}>All versions</Link>
                    }
                </div>
            </ContentBlockHeader>
            <ContentBlockContent>
                <div className={'VersionsList'}>

                    {elements.map((version, id) =>
                        <VersionsListItem
                            i={id}
                            key={id}
                            href={version.href}
                            date={version.date}
                            version={version.version}
                            description={version.description}
                        />
                    )}

                </div>
            </ContentBlockContent>
        </ContentBlock>
    )
}
