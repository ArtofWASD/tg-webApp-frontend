import React from 'react'
import './Button.css'
const button = (props) => {
    
  return (
      <div {...props} className={'button' + (props.className)}>button</div>
  )
}

export default button