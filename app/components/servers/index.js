'use client'

import { ContentBlock, ContentBlockHeader, ContentBlockContent } from '@/components/containers/ContentBlock'
import CopyButton from '@/components/copyButton'
import './ServersListItem.scss'

const servers = [
    {address: 'dash-electrum.pshenmic.dev:50002'},
    {address: 'drk.p2pay.com:50002'},
    {address: 'rnxogu42f3pq3e3oo7shqmh7mtema6   c5fhhhsi54din4olzlu7vsx2id.onion:50002'},
    {address: '10.20.30.37:5050'},
    {address: '109.202.30.37:4141'},
]
  

function ServersListItem({server, id}) {
    return (
        <div className={'ServersListItem'}>

            <CopyButton text={server.address}/>

            <div 
                className={'ServersListItem__Address'}
            >
                {server.address}
            </div>
        
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


