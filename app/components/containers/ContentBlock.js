import './ContentBlock.scss'

function ContentBlock({children}) {
  return (
    <div className={'ContentBlock'}>
        { children }
    </div>
  )
}

function ContentBlockHeader({children}) {
  return (
      <div className={'ContentBlock__Header'}>
        {children}
      </div>
  )
}

function ContentBlockContent({children}) {
  return (
      <div className={'ContentBlock__Content'}>
        { children }
      </div>
  )
}


export {ContentBlock, ContentBlockHeader, ContentBlockContent}
