'use client'

import { ContentBlock, ContentBlockHeader, ContentBlockContent } from '../containers/ContentBlock'
import CopyButton from '../copyButton'
import './ServersListItem.scss'

const servers = [
    {address: 'dash-electrum.pshenmic.dev:50002'},
    {address: 'electrum1.cipig.net:20061'},
    {address: 'electrum2.cipig.net:20061'},
    {address: 'electrum3.cipig.net:20061'}
]
  

function ServersListItem({server}) {
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


