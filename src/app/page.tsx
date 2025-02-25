import Head from "next/head";
import Header from "./components/Header";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>My Resume</title>
        <meta name="description" content="Personal Resume Website" />
      </Head>
      <main className="bg-gray-100 text-gray-900">
        <Header />
        <About />
        <Skill />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
