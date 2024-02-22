import { useState } from 'react';
import copyToClipboard from '@/components/copyToClipboard/'
import './CopyButton.scss'

const copyMessageSuccess = 'Copied'
const copyMessageError = 'Failed, sorry'


export default function CopyButton({text, className = ''}) {
    const [messageState, setMessageState] = useState({
        active: false,
        text: copyMessageSuccess
    })

    const showMessage = (result) => {
        setMessageState(messageState => ({
            ...messageState,
            text: result ? copyMessageSuccess : copyMessageError,
            active: true
        }))

        setTimeout(() => {
            setMessageState(messageState => ({
                ...messageState,
                active: false
            }))
        }, 2000)

    }

    return (
        
        <div 
            className={'CopyButton ' + className}
            onClick={ () => copyToClipboard(text, showMessage) }
        >
            
            <div className={'CopyButton__Message ' + (messageState.active ? 'active' : '')}>
                {messageState.text}
            </div>

        </div>
    )
}