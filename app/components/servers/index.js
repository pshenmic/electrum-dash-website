import { useState } from 'react';
import { motion as m } from 'framer-motion'
import {ContentBlock, ContentBlockHeader, ContentBlockContent} from '@/components/containers/ContentBlock'
import Link from 'next/link'
import './ServersList.scss'
import './ServersListItem.scss'

const servers = [
    {address: 'dash-electrum.pshenmic.dev:50002'},
    {address: 'drk.p2pay.com:50002'},
    {address: 'rnxogu42f3pq3e3oo7shqmh7mtema6c5fhhhsi54din4olzlu7vsx2id.onion:50002'},
    {address: '10.20.30.37:5050'},
    {address: '109.202.30.37:4141'},
]
  
const copyMessageSuccess = 'Address was copied to clipboard'
const copyMessageError = 'Failed to copy, sorry'

function ServersListItem({server, id}) {
    const [messageVisibility, setMessageVisibility] = useState(false)
    const [copyMessage, setCopyMessage] = useState(copyMessageSuccess)

    function copyAddress(address) {
        try {
        navigator.clipboard.writeText(server.address);
        console.log('Content copied to clipboard');

        setCopyMessage(copyMessageSuccess)
        } catch (err) {
        setCopyMessage(copyMessageError);
        }

        setMessageVisibility(true)

        setTimeout(() => {
        setMessageVisibility(false)
        }, 2000);
    }

    return (
        <m.div
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: .3, delay: id/10 }}
    >
        <div className={'ServersListItem'}>
        <button 
            className={'ServersListItem__CupyButton'}
            onClick={ () => copyAddress(server.address) }
        ></button>
        <m.div 
            className={'VersionsListItem__Address'}
            initial = {{opacity: 0}}
            variants = {{
            hidden: { opacity: 1, y:0, transition: { duration: 0.3 } },
            visible: { opacity: 0, y: '100%', transition: { duration: 0.3 }  }
            }}
            animate={messageVisibility ? 'visible' : 'hidden'}
        >{server.address}</m.div>

        <m.div 
            className={'ServersListItem__CopiedMessage'}
            initial = {{opacity: 0}}
            variants = {{
            visible: { opacity: 1, y:0, transition: { duration: 0.3 } },
            hidden: { opacity: 0, y: '-100%', transition: { duration: 0.3 }  }
            }}
            animate={messageVisibility ? 'visible' : 'hidden'}
        >{ copyMessage }</m.div>
        </div>
    </m.div>
    )
}

export default function ServersList() {
    return (
        <ContentBlock>

            <ContentBlockHeader>
                <h2>Verified servers:</h2>
            </ContentBlockHeader>

            <ContentBlockContent>
                
                <div className={'ServersList'}>
                
                    {servers.map((server, id) =>
                        <ServersListItem server={server} id={id} key={'server' + id}/>
                    )}

                </div>

            </ContentBlockContent>

        </ContentBlock>
    )
}


