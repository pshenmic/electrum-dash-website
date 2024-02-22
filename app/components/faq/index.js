 "use client"

import { useState, useEffect, useRef } from 'react';
import {ContentBlock, ContentBlockHeader, ContentBlockContent} from '@/components/containers/ContentBlock'
import './FaqItem.scss'
import './Faq.scss'


const items = [
    {
        question: 'Does Dash Electrum trust servers?',
        answer: 'Not really; the Dash Electrum client never sends private keys to the servers. In addition, it verifies the information reported by servers using a technique called Simple Payment Verification.'
    },
    {
        question: "How does Dash Electrum work?",
        answer: "Dash Electrum focuses on speed, low resource usage and providing a simple user experience for Dash. Startup times are instant because it operates in conjunction with high-performance servers that handle the most complicated parts of the Dash system."
    },
    {
        question: "What is the Seed?",
        answer: "he seed is a random phrase that is used to generate your private keys. Your wallet can be entirely recovered from its seed. To do this, select the I already have a seed option during startup."
    },
    {
        question: "How secure is the seed?",
        answer: "The seed created by Dash Electrum has 128 bits of entropy. This means that it provides the same level of security as a Dash private key (of length 256 bits). Indeed, an elliptic curve key of length n provides n/2 bits of security."
    },
    {
        question: "How can I send the maximum available in my wallet?",
        answer: "Type an exclamation mark (!) in the Amount field or simply click the Max button. The fee will be automatically adjusted for that amount."
    }
]


function FaqItem({item, clickCallback, isOpen, initialized}) {
    const extraClass = isOpen || !initialized ? 'active' : ''
    const contentHeight = useRef()

    const answerStyles = (() => { // for SEO
        if (!initialized) return { height: 'auto' }

        if (!isOpen) return { height: '0px' }

        return { height: contentHeight.current.scrollHeight }
    })()     

    return (
        <div className={'FaqItem ' + extraClass}>
            <h3 
                className={'FaqItem__Question'}
                onClick={clickCallback}
            >
                {item.question}
            </h3>

            <div 
                className={'FaqItem__Answer'}
                ref={contentHeight}
                style={answerStyles}
            >
                {item.answer}
            </div>

        </div>
    )
}

export default function Faq() {
    const [activeItem, setActiveItem] = useState(-1)
    const [initialized, setInitialized] = useState(false)

    useEffect(() => setInitialized(true), [])

    function itemClick(id) {
        if (id === activeItem) {
            setActiveItem(-1)
            return
        }

        setActiveItem(id)
    }

    return (
        <ContentBlock externalHeader={true} className={'Faq'}>

            <ContentBlockHeader>
                <h2>F.A.Q.</h2>
            </ContentBlockHeader>

            <ContentBlockContent className={'Faq__Content'}>

                {items.map((item, id) => 
                    <FaqItem 
                        key={'faq ' + id}
                        item={item} 
                        isOpen={activeItem === id}
                        initialized={initialized}
                        clickCallback={() => itemClick(id)}
                    />
                )}

            </ContentBlockContent>

        </ContentBlock>
    )
}