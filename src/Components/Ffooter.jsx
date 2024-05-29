import React from 'react'
const date=new Date
const Footer = () => {
  return (
    <div id='foot'><h3>Copyright @copy Website {date.getFullYear()}</h3></div>
  )
}

export default Footer