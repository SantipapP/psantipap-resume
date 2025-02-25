import React from 'react'
import Link from 'next/link'
function Contact() {
    return (
        <>
            <section className="max-w-4xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                <p>Email: <Link href="mailto:santipap.poorab@gmail.com" target='_blank' className='hover:text-blue-500'>santipap.poorab@gmail.com</Link></p>
                <p>GitHub: <Link href="https://www.github.com/SantipapP" target='_blank' className='hover:text-blue-500'>github.com/SantipapP</Link></p>
                <p>LinkedIn: <Link href="https://www.linkedin.com/in/santipap-poorab-a52646318" target='_blank' className='hover:text-blue-500'>linkedin.com/in/santipap-poorab-a52646318</Link></p>
            </section>
        </>
    )
}

export default Contact
