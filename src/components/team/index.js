"use client"

import Image from 'next/image'
import CopyButton from '../copyButton'
import Link from 'next/link'
import './Team.scss'
import './Teammate.scss'


function Teammate({name, role, gpgkey, email, imgSrc, links, className = ''}) {
    return (
        <div className={'Teammate ' + className}>

            <div className={'Teammate__ImgContainer'}>
                <Image alt={name} src={imgSrc} width={150} height={150} />
            </div>

            <div className={'Teammate__InfoContainer'}>

                <div className={'Teammate__HeadContainer'}>
                    <h3 className={'Teammate__Name'}>{name}</h3>
                    <h4 className={'Teammate__Role'}>{role}</h4>
                </div>

            
                <div className={'Teammate__Line Teammate__Line--Gpg'}>
                    
                    <div className={'Teammate__LineTitle'}>GPG key:</div>
                    
                    <div className={'Teammate__LineValue'}>
                        
                        <div className={'Teammate__GpgKey'}>{gpgkey}</div>

                        <CopyButton
                            className={'Teammate__CopyButton'} 
                            text={gpgkey}
                        />

                    </div>

                </div>

                <div className={'Teammate__Line'}>
                    
                    <div className={'Teammate__LineTitle'}>Email:</div>
                    
                    <div className={'Teammate__LineValue'}>
                        
                        <div className={'Teammate__Email'}>{email}</div>

                        <CopyButton 
                            className={'Teammate__CopyButton'} 
                            text={email}
                        />

                    </div>
                </div>

                <div className={'Teammate__Links'}>

                    {(links.website &&
                        <Link 
                            href={links.website} 
                            target="_blank" 
                            className="Teammate__Link Teammate__Link--Web">
                        </Link>
                    )}

                    {(links.github &&
                        <Link 
                            href={links.github} 
                            target="_blank" 
                            className="Teammate__Link Teammate__Link--Github">
                        </Link>
                    )}

                    {(links.twitter &&
                        <Link 
                            href={links.twitter} 
                            target="_blank" 
                            className="Teammate__Link Teammate__Link--Twitter">
                        </Link>
                    )}

                    {(links.discord &&
                        <Link 
                            href={links.discord} 
                            target="_blank" 
                            className="Teammate__Link Teammate__Link--Discord">
                        </Link>
                    )}

                </div>
            </div>
        </div>
    )
}

export default function Team() {
    return (
        <div className={'Team'}>
            <Teammate
                className = {'Team__Teammate'}
                name = {'Mikhail Pshenichnikov'}
                role = {'Maintainer'}
                gpgkey = {'A0CEDD7911C63ACB60D3864894683166E3280A61'}
                email = {'pshenmic@gmail.com'}
                imgSrc = {'/images/pshenmic_avatar.jpg'}
                links = {{
                    website: 'https://pshenmic.dev',
                    github: 'https://github.com/pshenmic',
                    twitter: 'https://twitter.com/pshenmic',
                    discord: 'https://discordapp.com/users/784071440864378911'
                }}
            />
        </div>
    )
}