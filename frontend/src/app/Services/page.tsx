import React from 'react'
import { ClockIcon } from 'lucide-react'
function page() {
  return (
   
       <div className="flex flex-col items-center justify-center min-h-screen  text-neutral-900 dark:text-gray-100 p-4">
      
      <ClockIcon className="w-16 h-16 text-blue-400 mb-6 animate-spin" style={{ animationDuration: '10s' }} />

      <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white text-center mb-4">
        Coming Soon
      </h1>

      <p className="text-lg sm:text-xl dark:text-gray-300 text-gray-700 text-center max-w-lg mb-8">
        We are working hard to bring you something amazing. Stay tuned for our launch!
      </p>
    </div>
  )
}

export default page
