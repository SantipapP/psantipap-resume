import React from 'react'
import Link from 'next/link'
function Project() {
    return (
        <>
            <section className="bg-gray-200 py-16 px-6">
                <div className="max-w-4xl mx-auto mb-4">
                    <h2 className="text-3xl font-bold mb-4">Work Projects</h2>
                    <div className="space-y-6">
                            <div className="bg-white p-6 shadow rounded-lg hover:scale-105 transition-transform duration-300 m-4">
                                <h3 className="text-xl font-semibold">Project 1: E-port Pre-advice online system </h3>
                                <p>Web application for customers to submit container information for import into the port via an online system.</p>
                            </div>
                            <div className="bg-white p-6 shadow rounded-lg hover:scale-105 transition-transform duration-300 m-4">
                                <h3 className="text-xl font-semibold">Project 2: Vendor registation system</h3>
                                <p>Web application for contractor registration to support the work of procurement and finance officers.</p>
                            </div>
                            <div className="bg-white p-6 shadow rounded-lg hover:scale-105 transition-transform duration-300 m-4">
                                <h3 className="text-xl font-semibold">Project 3: Internal car booking system</h3>
                                <p>Web application for company vehicle booking for various tasks.</p>
                            </div>
                            <div className="bg-white p-6 shadow rounded-lg hover:scale-105 transition-transform duration-300 m-4">
                                <h3 className="text-xl font-semibold">Project 4: EDI file generation system</h3>
                                <p>Automated EDI file generation system for sending various data to customers.</p>
                            </div>
                            <div className="bg-white p-6 shadow rounded-lg hover:scale-105 transition-transform duration-300 m-4">
                                <h3 className="text-xl font-semibold">Project 5: EDI file translator system</h3>
                                <p>System that imports EDI files sent by customers, converts them into JSON data, stores them in the database, and exports the data as an Excel file for forwarding to relevant departments.</p>
                            </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto mb-4">
                    <h2 className="text-3xl font-bold mb-4">Personal Projects</h2>
                    <div className="space-y-6">
                        <Link href="https://github.com/SantipapP/PokemonFinder" target='_blank'>
                            <div className="bg-white p-6 shadow rounded-lg hover:scale-105 transition-transform duration-300 m-4">
                                <h3 className="text-xl font-semibold">Project 1: Pokemon Finder App</h3>
                                <p>Developed a web app for searching and displaying Pokémon information using Next.js and Tailwind CSS.</p>
                            </div>
                        </Link>
                        <Link href="https://github.com/SantipapP/hrm-system" target='_blank'>
                            <div className="bg-white p-6 shadow rounded-lg hover:scale-105 transition-transform duration-300 m-4">
                                <h3 className="text-xl font-semibold">Project 2: HRM System App</h3>
                                <p>Developed a web app to support HR staff operations.</p>
                            </div>
                        </Link>
                        <Link href="https://github.com/SantipapP/IT-System" target='_blank'>
                            <div className="bg-white p-6 shadow rounded-lg hover:scale-105 transition-transform duration-300 m-4">
                                <h3 className="text-xl font-semibold">Project 3: IT System App</h3>
                                <p>Web application system for managing equipment data and user support for IT officers.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project
