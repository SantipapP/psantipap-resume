import React from 'react'
import Image from 'next/image'
function Skill() {
    return (
        <>
            <section className="bg-gray-200 py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-blue-400 mb-4">Frontend</h3>
                            <div className="space-y-2">
                                <div className="p-4 rounded flex items-center space-x-4">
                                    <Image src="/Images/Logo/html5.png" alt="HTML Icon" width={40} height={40} />
                                    <h4 className="font-bold">HTML</h4>
                                </div>
                                <div className="p-4 rounded flex items-center space-x-4">
                                    <Image src="/Images/Logo/css-3.png" alt="CSS Icon" width={40} height={40} />
                                    <h4 className="font-bold">CSS</h4>
                                </div>
                                <div className="p-4 rounded flex items-center space-x-4">
                                    <Image src="/Images/Logo/javascript.png" alt="JavaScript Icon" width={40} height={40} />
                                    <h4 className="font-bold">JavaScript</h4>
                                </div>
                                <div className="p-4 rounded flex items-center space-x-4">
                                    <Image src="/Images/Logo/react.png" alt="React Icon" width={40} height={40} />
                                    <h4 className="font-bold">React</h4>
                                </div>
                                <div className="p-4 rounded flex items-center space-x-4">
                                    <Image src="/Images/Logo/tailwind.png" alt="Tailwind CSS Icon" width={40} height={40} />
                                    <h4 className="font-bold">Tailwind CSS</h4>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-blue-400 mb-4">Backend</h3>
                            <div className="space-y-2">
                                <div className="p-4 rounded flex items-center space-x-4">
                                    <Image src="/Images/Logo/php.png" alt="Php Icon" width={40} height={40} />
                                    <h4 className="font-bold">Php</h4>
                                </div>
                                <div className="p-4 rounded flex items-center space-x-4">
                                    <Image src="/Images/Logo/python.png" alt="Python Icon" width={40} height={40} />
                                    <h4 className="font-bold">Python</h4>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-blue-400 mb-4">Database</h3>
                            <div className="space-y-2">
                                <div className="p-4 rounded flex items-center space-x-4">
                                    <Image src="/Images/Logo/mssql.png" alt="MsSQL Icon" width={40} height={40} />
                                    <h4 className="font-bold">MS SQL Server</h4>
                                </div>
                                <div className="p-4 rounded flex items-center space-x-4">
                                    <Image src="/Images/Logo/mysql.png" alt="MySQL Icon" width={40} height={40} />
                                    <h4 className="font-bold">MySQL</h4>
                                </div>
                                <div className="p-4 rounded flex items-center space-x-4">
                                    <Image src="/Images/Logo/oracle.png" alt="Oracle Icon" width={40} height={40} />
                                    <h4 className="font-bold">Oracle</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill
