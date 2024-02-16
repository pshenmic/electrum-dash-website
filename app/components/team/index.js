import Link from 'next/link'
import './Teammate.scss'

function Teammate({name, role, gpgkey, email, imgSrc, links}) {
    return (
        <div className={'Teammate'}>

            <div className={'Teammate__ImgContainer'}>
                <img alt={name} src={imgSrc} />
            </div>

            <div className={'Teammate__InfoContainer'}>

                <div className={'Teammate__HeadContainer'}>
                    <h3 className={'Teammate__Name'}>{name}</h3>
                    <h4 className={'Teammate__Role'}>{role}</h4>
                </div>

            
                <div className={'Teammate__Line'}>
                    <div className={'Teammate__LineTitle'}>GPG key:</div>
                    <div className={'Teammate__GpgKey'}>{gpgkey}</div>
                    <button className={'Teammate__CopyButton'}></button>
                </div>

                <div className={'Teammate__Line'}>
                    <div className={'Teammate__LineTitle'}>Email:</div>
                    <div className={'Teammate__Email'}>{email}</div>
                    <div className={'Teammate__CopyButton'}></div>
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
                            href={links.website} 
                            target="_blank" 
                            className="Teammate__Link Teammate__Link--Github">
                        </Link>
                    )}

                    {(links.twitter &&
                        <Link 
                            href={links.website} 
                            target="_blank" 
                            className="Teammate__Link Teammate__Link--Twitter">
                        </Link>
                    )}

                    {(links.twitter &&
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