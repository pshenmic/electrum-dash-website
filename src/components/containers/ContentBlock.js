import './ContentBlock.scss'

function ContentBlockTitle({children, className = ''}) {
  return (
    <h2 className={'ContentBlock ' + className}>
        { children }
    </h2>
  )
}

function ContentBlock({children, externalHeader = false, className = ''}) {
  if (externalHeader) className += ' ContentBlock--ExternalHeader'

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

function ContentContainer({children, className = ''}) {
  return (
      <div className={'ContentBlock__ContentContainer ' + className}>
        { children }
      </div>
  )
}


export {
  ContentBlock, 
  ContentBlockHeader, 
  ContentBlockContent, 
  ContentBlockTitle,
  ContentContainer
}
