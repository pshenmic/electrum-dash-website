import { useEffect } from "react";
// import { inView, whileInView } from "framer-motion"
import { motion as m, AnimatePresence, whileInView } from 'framer-motion'
import Link from 'next/link'
import './DownloadButton.scss'
import './Downloads.scss'
import './DownloadTabs.scss'

function DownloadButton({iconSrc, title}) {
    return (
        <div className='DownloadButton'>
            <div className='DownloadButton__Content'>
                <img src={iconSrc}/>
                <div className={'DownloadButton__Title'}>{title}</div>
            </div>
        </div>
    )
}

function DownloadTabs({iconSrc, title}) {
    return (
        <div className={'DownloadTabs'}>
            <div className={'DownloadTabs__Tab active'}>LTS 4.1.5.0</div>
            <div className={'DownloadTabs__Tab'}>Current 4.6.2.0</div>
        </div>
    )
}

function DownloadsWithLogo() {
  return (
      <div className={'Downloads'}>

            <div className='Downloads__List'>

                <m.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: .5 }}
                    className={'Downloads__Tabs'}
                >
                    <DownloadTabs/>
                </m.div>

                <div 
                    className={'Downloads__ButtonsContainer'}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: .5 }}
                    whileInView={{ x: 0, opacity: 1 }}
                >
                    <m.div 
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ duration: .5 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className={'Downloads__Button'}
                    >
                        <DownloadButton
                            iconSrc={'/images/windows.svg'}
                            title={'Windows'}
                        />
                    </m.div>

                    <m.div 
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ duration: .5, delay: .1 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className={'Downloads__Button'}
                    >
                        <DownloadButton 
                            iconSrc={'/images/mac.svg'}
                            title={'Mac'}
                        />
                    </m.div>

                    <m.div
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ duration: .5, delay: .2 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className={'Downloads__Button'}
                    >
                        <DownloadButton 
                            iconSrc={'/images/linux.svg'}
                            title={'Linux'}
                        />
                    </m.div>

                    <m.div 
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ duration: .5, delay: .3 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className={'Downloads__Button'}
                    >
                        <DownloadButton 
                            iconSrc={'/images/android.svg'}
                            title={'Android'}
                        />
                    </m.div>

                </div>

            </div>


            <m.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.25, delay: .6 }}
                className='Downloads__Logo'
            >
                <img src='/images/electrum-dash.svg'/>
            </m.div>


      </div>

  )
}


export {DownloadsWithLogo}