import React, { useEffect, useState } from 'react'

const Footer = ({ css }) => {

  const [theTime, setTheTime] = useState(new Date().toLocaleString())

  useEffect(() => {
    const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`ui container`}>
      <div className={`ui ${css} segment`}>{theTime}</div></div>
  )
}

export default Footer
