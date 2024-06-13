import React from 'react'

export default function Notfound() {
  document.body.style.backgroundColor = "#080808"
  return (
    <div className='flex justify-center items-center h-screen'>
      <h1 className='text-red-700 text-6xl'>Not found</h1>
    </div>
  )
}
