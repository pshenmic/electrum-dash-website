import './ContentBlock.scss'

function ContentBlock({children, className = ''}) {
  return (
    <div className={'ContentBlock ' + className}>
        { children }
    </div>
  )
}

function ContentBlockHeader({children, className = ''}) {
  return (
      <div className={'ContentBlock__Header ' + className}>
        {children}
      </div>
  )
}

function ContentBlockContent({children, className = ''}) {
  return (
      <div className={'ContentBlock__Content ' + className}>
        { children }
      </div>
  )
}


export {ContentBlock, ContentBlockHeader, ContentBlockContent}
