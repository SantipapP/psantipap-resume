import React from 'react'

function Experience() {
    return (
        <>
            <section className="max-w-4xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold">Work Experience</h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold">Software Engineer - Laem Chabang International Terminal Co., Ltd.</h3>
                        <p className="text-gray-600 mb-4">2023 - Present</p>
                            <ul className='list-disc pl-6'>
                                <li>Design and develop web applications for internal and external organizational use.</li>
                                <li>Retrieve data and design reports using Reporting Services.</li>
                                <li>Provide support to users within the organization.</li>
                            </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">IT Officer - ESPOWER CORPORATION LIMITED</h3>
                        <p className="text-gray-600 m-4">2022 - 2023</p>

                            <ul className='list-disc pl-6'>
                                <li>Installing and configuring computer hardware, software, systems, networks,printers, and scanners.</li>
                                <li>Monitoring and maintaining computer systems and networks.</li>
                                <li>Programming Software for support employee.</li>
                            </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience
