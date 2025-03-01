import React from 'react'

function Button(
  { children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    classname = '',
    ...props
  }
) {
  return (
    <button className={`px-4  py-2 rounded-lg ${classname} ${textColor} ${bgColor} $className`} {...props}>
      {children}
    </button>
  )
}

export default Button
