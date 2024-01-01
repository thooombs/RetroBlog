import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        


        <div>
         <Link className="bg-blue-500 text-white  " href="/" > ← Go Back </Link>
        
         
      <div className="my-2">
        <h2 className="text-lg mb-1"> Websites of mine</h2>
        <ul className="text-blue-600 underline">
        <li>
          <Link href="https://sagareact.vercel.app/">Saga Computers</Link>{" "}
        </li>
        <li>
          <Link href="https://www.cantoncigarcompany.com/">Canton Cigar</Link>{" "}
        </li>
   </ul>
        
        <p className="font-light"></p>

       
      </div>
   

      </div>
    </div>
  )
}
