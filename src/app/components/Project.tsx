import React from 'react'

function Project() {
    return (
        <>
            <section className="bg-gray-200 py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Projects</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 shadow rounded-lg hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-semibold">Project 1: E-commerce Website</h3>
                            <p>Developed a full-stack e-commerce platform using Next.js and MongoDB.</p>
                        </div>
                        <div className="bg-white p-6 shadow rounded-lg hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-semibold">Project 2: Task Management App</h3>
                            <p>Created a task management web app with React and Firebase.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project
