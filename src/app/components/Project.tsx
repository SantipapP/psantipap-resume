import React from 'react'
import Link from 'next/link'
function Project() {
    return (
        <>
            <section className="bg-gray-200 py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Projects</h2>
                    <div className="space-y-6">
                        <Link href="https://pokemon-finder-gilt.vercel.app/" target='_blank'>
                            <div className="bg-white p-6 shadow rounded-lg hover:scale-105 transition-transform duration-300">
                                <h3 className="text-xl font-semibold">Project 1: Pokemon Finder App</h3>
                                <p>Developed a web app for searching and displaying Pokémon information using Next.js and Tailwind CSS.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project
