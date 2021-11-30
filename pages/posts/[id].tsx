import Head from 'next/head'
import Image from 'next/image'

import React from 'react'

const index:React.FC = () => {
    return (
        <div>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main>
            <h1>Trang chi tiet tin tuc</h1>
           
            <Image src="/images/img1.jpg" alt="me" width="500" height="500" />
            <div>
            

            </div>
            <div className="decoration-clone md:decoration-slice ...">
            <span className="decoration-clone bg-gradient-to-b from-yellow-400 to-red-500 text-transparent ...">
              Hello<br/>
              World
            </span>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500 h-12"></div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400"></div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500"></div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400"></div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-500"></div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-400"></div>
            </div>
          </main>
    
          
        </div>
      )
}

export default index;
