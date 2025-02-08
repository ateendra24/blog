import React from 'react'

function Logo({width= "100px", className=''}) {
  return (
    <div className={`font-bold text-black text-2xl align-middle py-2 dark:text-white ${className}`}>Blog.</div>
  )
}

export default Logo
