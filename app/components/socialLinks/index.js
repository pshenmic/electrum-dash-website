import Image from 'next/image'
import Link from 'next/link'
import './SocialLinks.scss'


export default function SocialLinks() {
    return (
        <div className={'SocialLinks'}>
            <Link 
                className={'SocialLinks__Item'} 
                href={'https://discord.com/channels/484546513507188745/614505336891768873'}
                target="_blank"
            >
                <Image src='/images/discord.svg' alt='discord logo' width={0} height={0}/>
            </Link>

            <Link 
                className={'SocialLinks__Item SocialLinks__Item--Github'} 
                href={'https://github.com/pshenmic/electrum-dash'}
                target="_blank"
            >
                <Image src='/images/github.svg' alt='github logo' width={0} height={0}/>
            </Link>
        </div>
    )
}