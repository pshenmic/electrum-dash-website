import {ContentBlock, ContentBlockHeader, ContentBlockContent} from '@/components/containers/ContentBlock'
import { motion as m, AnimatePresence, whileInView } from 'framer-motion'
import Link from 'next/link'
import './VersionsList.scss'
import './VersionsListItem.scss'

function VersionsListItem({i}) {
    return (
        <m.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .3, delay: i/10 }}
        >
            <div className={'VersionsListItem'}>
                <div className={'VersionsListItem__Date'}>Mar 8, 2022</div>
                <div className={'VersionsListItem__Version'}>4.1.5.2</div>
                <div className={'VersionsListItem__Description'}>version to 4.1.5.2, add RELEASE-NOTES</div>
            </div>
        </m.div>
    )
}

export default function VersionsList() {
  return (
    <ContentBlock>
        <ContentBlockHeader>
            <div className='VersionsList__Header'>
                <h2>Last updates:</h2>
                <Link href={'/downloads'}>All versions</Link>
            </div>
        </ContentBlockHeader>
        <ContentBlockContent>
            <div className={'VersionsList'}>
                <VersionsListItem i={0}/>
                <VersionsListItem i={1}/>
                <VersionsListItem i={2}/>
                <VersionsListItem i={3}/>
                <VersionsListItem i={4}/>
            </div>
        </ContentBlockContent>
    </ContentBlock>
  )
}
