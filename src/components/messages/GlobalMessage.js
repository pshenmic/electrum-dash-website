'use client'

import { useState } from 'react';
import './GlobalMessage.scss'

export default function GlobalMessage ({ message, children, type }) {
  const [isActive, setIsActive] = useState(true)

  const typeClass = (() => {
    if (type === 'warning') return 'GlobalMessage--Warning'
  })()

  return (
    <div className={`GlobalMessage ${typeClass} ${isActive ? 'GlobalMessage--Active' : ''}`}>
      <div className={'GlobalMessage__ContentContainer'}>
        <div className={'GlobalMessage__Text'}>{message || children}</div>
        <button className={'GlobalMessage__CloseButton'} onClick={() => setIsActive(false)}></button>
      </div>
    </div>
  )
}
