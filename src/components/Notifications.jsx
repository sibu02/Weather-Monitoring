import React from 'react'
import { Toaster } from 'react-hot-toast'

const Notifications = () => {
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: 'w-auto max-w-xs p-4 rounded-lg shadow-lg bg-white',
          duration: 4000, 
        }}
      />
    </div>
  )
}

export default Notifications