import { useState, useRef } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion'
import {ContentBlock, ContentBlockHeader, ContentBlockContent} from '@/components/containers/ContentBlock'
import './FaqItem.scss'
import './Faq.scss'


const items = [
    {
        question: 'Does Dash Electrum trust servers?',
        answer: 'The answer will be here soon.'
    },
    {
        question: "How does Dash Electrum work?",
        answer: "Dash Electrum focuses on speed, low resource usage and providing a simple user experience for Dash. Startup times are instant because it operates in conjunction with high-performance servers that handle the most complicated parts of the Dash system."
    },
    {
        question: "Does Dash Electrum trust servers?",
        answer: "The answer will be here soon."
    },
    {
        question: "What is the Seed?",
        answer: "The answer will be here soon."
    }
]


function FaqItem({item, clickCallback, isOpen}) {
    const extraClass = isOpen ? 'active' : ''
    const contentHeight = useRef()
  
    return (
        <div className={'FaqItem ' + extraClass}>
            <h3 
                className={'FaqItem__Question'}
                onClick={clickCallback}
            >
                {item.question}
            </h3>

            <m.div 
                className={'FaqItem__Answer'}
                ref={contentHeight}
                style={
                    isOpen
                    ? { height: contentHeight.current.scrollHeight }
                    : { height: "0px" }
                }
            >
                {item.answer}
            </m.div>

        </div>
    )
}

export default function Faq() {
    const [activeItem, setActiveItem] = useState(-1)

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
                        clickCallback={() => itemClick(id)}
                    />
                )}

            </ContentBlockContent>

        </ContentBlock>
    )
}