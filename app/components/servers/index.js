'use client'

import { useState } from 'react';
import { motion as m } from 'framer-motion'
import { ContentBlock, ContentBlockHeader, ContentBlockContent } from '@/components/containers/ContentBlock'
import copyToClipboard from '@/components/copyToClipboard/'
import './ServersListItem.scss'

const servers = [
    {address: 'dash-electrum.pshenmic.dev:50002'},
    {address: 'drk.p2pay.com:50002'},
    {address: 'rnxogu42f3pq3e3oo7shqmh7mtema6   c5fhhhsi54din4olzlu7vsx2id.onion:50002'},
    {address: '10.20.30.37:5050'},
    {address: '109.202.30.37:4141'},
]
  
const copyMessageSuccess = 'Address was copied to clipboard'
const copyMessageError = 'Failed to copy, sorry'

function ServersListItem({server, id}) {
    const [copyMessageState, setCopyMessageState] = useState({
        active: false,
        message: copyMessageSuccess
    })

    const copyAddress = (address) => copyToClipboard(address, 
        ((result) => {
            setCopyMessageState(copyMessageState => ({
                ...copyMessageState,
                message: result ? copyMessageSuccess : copyMessageError,
                active: true
            }))

            setTimeout(() => {
                setCopyMessageState(copyMessageState => ({
                    ...copyMessageState,
                    active: false
                }))
            }, 2000)
        })
    )

    return (
        <div className={'ServersListItem'}>

            <button 
                className={'ServersListItem__CupyButton'}
                onClick={ () => copyAddress(server.address) }
            ></button>

            <div 
                className={'ServersListItem__Address ' + (copyMessageState.active ? 'hidden' : '')}
            >
                {server.address}
            </div>

            <m.div 
                className={'ServersListItem__CopiedMessage'}
                initial = {{opacity: 0}}
                variants = {{
                    visible: { opacity: 1, y:0, transition: { duration: 0.3 } },
                    hidden: { opacity: 0, y: '-100%', transition: { duration: 0.3 }  }
                }}
                animate={copyMessageState.active ? 'visible' : 'hidden'}
            >   
                {copyMessageState.message}
            </m.div>
        
        </div>
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
                        <ServersListItem server={server} id={id} key={id}/>
                    )}

                </div>

            </ContentBlockContent>

        </ContentBlock>
    )
}


