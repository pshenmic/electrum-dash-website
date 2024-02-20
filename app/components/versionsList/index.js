import {ContentBlock, ContentBlockHeader, ContentBlockContent} from '@/components/containers/ContentBlock'
import { motion as m } from 'framer-motion'
import Link from 'next/link'
import './VersionsList.scss'
import './VersionsListItem.scss'

const versions = [
    {
        date: 'Mar 8, 2022',
        version: '4.1.5.2',
        description: 'version to 4.1.5.2, add RELEASE-NOTES version to 4.1.5.2, add RELEASE-NOTES, version to 4.1.5.2, '
    },
    {
        date: 'Mar 8, 2022',
        version: '4.1.5.2',
        description: 'version to 4.1.5.2, add RELEASE-NOTES'
    },
    {
        date: 'Mar 8, 2022',
        version: '4.1.5.2',
        description: 'version to 4.1.5.2, add RELEASE-NOTES'
    },
    {
        date: 'Mar 8, 2022',
        version: '4.1.5.2',
        description: 'version to 4.1.5.2, add RELEASE-NOTES'
    },
]

function VersionsListItem({i, date, version, description}) {
    return (
        <m.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .3, delay: i/10 }}
            className={'VersionsListItem'}
        >
            <Link href={''} className={'VersionsListItem__ContentContainer'}>
                    <div className={'VersionsListItem__Date'}>{date}</div>
                    <div className={'VersionsListItem__Version'}>{version}</div>
                    <div className={'VersionsListItem__Description'}>{description}</div>
            </Link>
        </m.div>
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
                            key={'version' + id}
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
