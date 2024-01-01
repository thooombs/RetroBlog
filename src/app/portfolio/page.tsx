import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        


        <div>
         <Link className="bg-blue-500 text-white  " href="/" > ← Go Back </Link>
        
         
      <div className="my-2">
        <h2 className="text-lg mb-1"> Projects of mine</h2>
        <ul>
            <li>
                <Link className='text-blue-800 underline' href='https://www.behance.net/thomazst'>
                    Behance
                </Link>
            </li>
            <li>
                <Link className='text-blue-800 underline' href='https://github.com/thooombs'>
                    Git
                </Link>
            </li>
        </ul>
        
        <p className="font-light"></p>

       
      </div>
   

      </div>
    </div>
  )
}
