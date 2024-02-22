"use client"

import { useState } from 'react'
import { motion as m } from 'framer-motion'
import copyToClipboard from '@/components/copyToClipboard/'
import Link from 'next/link'
import './Team.scss'
import './Teammate.scss'

const copyMessageSuccess = 'Copied to clipboard'
const copyMessageError = 'Failed to copy, sorry'

function Teammate({name, role, gpgkey, email, imgSrc, links, className = ''}) {
    const [copyMessagesState, setCopyMessagesState] = useState({
        email: false,
        fieldId: false,
        message: copyMessageSuccess
    })

    const copyText = (copytext, fieldId) => copyToClipboard(copytext, 
        ((result) => {
            setCopyMessagesState(copyMessagesState => ({
                ...copyMessagesState,
                copyMessage: result ? copyMessageSuccess : copyMessageError,
                [fieldId]: true
            }))

            setTimeout(() => {

                setCopyMessagesState(copyMessagesState => ({
                    ...copyMessagesState,
                    [fieldId]: false
                }))
        
            }, 2000)
        })
    )

    return (
        <div className={'Teammate ' + className}>

            <div className={'Teammate__ImgContainer'}>
                <img alt={name} src={imgSrc} />
            </div>

            <div className={'Teammate__InfoContainer'}>

                <div className={'Teammate__HeadContainer'}>
                    <h3 className={'Teammate__Name'}>{name}</h3>
                    <h4 className={'Teammate__Role'}>{role}</h4>
                </div>

            
                <div className={'Teammate__Line Teammate__Line--Gpg'}>
                    
                    <div className={'Teammate__LineTitle'}>GPG key:</div>
                    
                    <div className={'Teammate__LineValue'}>
                        
                        <div className={'Teammate__GpgKey ' + (copyMessagesState.gpgkey ? 'hidden' : '')}>{gpgkey}</div>

                        <button 
                            className={'Teammate__CopyButton'} 
                            onClick={ () => copyText(gpgkey, 'gpgkey') }
                        ></button>

                        <m.div 
                            className={'Teammate__CopyMessage'}
                            initial = {{opacity: 0}}
                            variants = {{
                                visible: { opacity: 1, y:0, transition: { duration: 0.3 } },
                                hidden: { opacity: 0, y: '-100%', transition: { duration: 0.3 }  }
                            }}
                            animate={copyMessagesState.gpgkey ? 'visible' : 'hidden'}
                        >
                            {copyMessagesState.message}
                        </m.div>

                    </div>

                </div>

                <div className={'Teammate__Line'}>
                    
                    <div className={'Teammate__LineTitle'}>Email:</div>
                    
                    <div className={'Teammate__LineValue'}>
                        <div className={'Teammate__Email ' + (copyMessagesState.email ? 'hidden' : '')}>{email}</div>
                        
                        <button 
                            className={'Teammate__CopyButton'}
                            onClick={ () => copyText(email, 'email') }
                        ></button>
                        
                        <m.div 
                            className={'Teammate__CopyMessage'}
                            initial = {{opacity: 0}}
                            variants = {{
                                visible: { opacity: 1, y:0, transition: { duration: 0.3 } },
                                hidden: { opacity: 0, y: '-100%', transition: { duration: 0.3 }  }
                            }}
                            animate={copyMessagesState.email ? 'visible' : 'hidden'}
                        >
                            {copyMessagesState.message}
                        </m.div>
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
                gpgkey = {'2BB6803FCF82316969619C155699884482E426AC'}
                email = {'mail@pshenmic.dev'}
                imgSrc = {'https://avatars.githubusercontent.com/u/17009187'}
                links = {{
                    website: 'https://pshenmic.dev/',
                    github: 'https://github.com/pshenmic/',
                    twitter: 'https://twitter.com/pshenmic',
                    discord: 'https://discordapp.com/users/784071440864378911'
                }}
            />
        </div>
    )
}