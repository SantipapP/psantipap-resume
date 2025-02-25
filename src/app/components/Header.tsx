import React from 'react'
import Image from 'next/image'
function Header() {
    return (
        <>
            <section className="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white p-10">
                <Image src="/Images/MyPic.jpg" alt='Pic' width={200} height={200} className="w-40 h-40 rounded-full border-4 border-white shadow-lg"/>
                <h1 className="text-4xl font-bold mt-4">Santipap Poorab</h1>
                <h2 className="text-xl mt-2">Full Stack Developer</h2>
            </section>
        </>
    )
}

export default Header
