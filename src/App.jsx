import HeroImage from "./assets/heroImg.png";
import Project1 from "./assets/project1web.png"; 
import Project2 from "./assets/project2web.png"; 
import Project2_2 from "./assets/project2web_2.png"; 
import Project3 from "./assets/project3web.png"; 
import javaLogo from './assets/javaLogo.png';
import flutterLogo  from './assets/flutterLogo.png';
import htmlLogo from './assets/htmlLogo.png';
import cssLogo from './assets/cssLogo.png';
import reactLogo from './assets/reactLogo.png';
import laravelLogo from './assets/laravelLogo.png';
import mysqlLogo from './assets/mysqlLogo.png';
import tailwindLogo from './assets/tailwindLogo.png';
import cLogo from './assets/cLogo.png';
import bootstrapLogo from './assets/bootstrapLogo.png';
import javascriptLogo from './assets/javascriptLogo.png';
import figmaLogo from './assets/figmaLogo.png';
import gitLogo from './assets/gitLogo.png';
import { useState } from "react"; 
import { ArrowUpRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter'
import 'swiper/css';

function App() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="min-h-screen px-8 py-24 space-y-20">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto pt-10">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Hi, I'm Ryan Wiratama —{" "}
            <span className="text-green-500">
              <Typewriter
                words={[
                  'web developer',
                  'app developer',
                  'UI/UX designer',
                  'data enthusiast',
                  'react enthusiast',
                  'problem solver',
                  '🎧, 💻, ☕',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </h1>
          <p className="text-lg text-shadow-white mb-4">
            A 6th-semester Informatics student at <span className="font-semibold">Universitas Atma Jaya Yogyakarta</span>.
          </p>
          <p className="text-base text-white mb-6">
            Passionate about web and mobile development, always eager to learn and explore new technologies in the world of software engineering.
          </p>
          <div className="flex gap-4">
            <a
              href="/Ryan_Wiratama_Resume.pdf"
              download
              className="group inline-flex items-center gap-2 bg-green-500 text-gray-800 px-5 py-2 font-semibold shadow transition duration-300 hover:bg-neutral-50"
            >
              Download Resume
              <ArrowUpRight
                className="w-4 h-4 transform transition-transform duration-500 ease-in-out group-hover:rotate-[135deg]"
              />
            </a>
            <a
              href="#contact"
              className="border border-neutral-50 text-neutral-50 px-5 py-2  font-semibold shadow hover:bg-neutral-50 hover:text-gray-800 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="flex justify-end">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-[300px] md:w-[450px] rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="max-w-6xl mx-auto text-center pt-24">
        <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
        <p className="text-lg text-white mb-4">
          I am a dedicated and detail-oriented individual who enjoys turning ideas into real, functional applications. I have experience with
          technologies such as <span className="font-semibold">React, Laravel, Flutter, and MySQL</span>.
        </p>
        <p className="text-lg text-white">
          In addition to technical skills, I value communication, teamwork, and continuous improvement. I believe that learning never stops,
          and I'm always up for new challenges that help me grow as a software developer.
        </p>
      </div>
      
      {/* Project Section */}
      <div className="max-w-6xl mx-auto px-6 pt-24" id="project">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Projects</h2>

        {[
          {
            img: Project1,
            title: "COMICOS 2026 X APPREN",
            desc: `A website built using Elementor for The Conference on Media, Communications, and Sociology (COMICOS), an annual academic forum organized by the Faculty of Social and Political Sciences at Universitas Atma Jaya Yogyakarta (FISIP UAJY). It serves as a dynamic platform that brings together academics, practitioners, and policymakers to discuss contemporary issues in the social sciences. Fully responsive across all devices.`,
            techs: ["WordPress", "Elementor"],
          },
          {
            img: Project2,
            imgHover: Project2_2,
            title: "RAYANDJA",
            desc: `RAYANDJA is a web-based e-commerce and educational platform focused on secondhand goods, developed using React Vite. Created for the 2025 Web Development Competition, the platform not only facilitates buying and selling used items but also raises awareness about sustainable consumption through informative content and user engagement features.`,
            techs: ["React Vite", "Tailwind", "Figma"],
          },
          {
            img: Project3,
            title: "ReUseMart",
            desc: `ReUseMart is a secondhand e-commerce platform developed as part of a Software Development Project course. Built using React Vite, React Native, and Laravel, the platform is fully integrated with a RESTful API to support both web and mobile access. It enables users to conveniently buy and sell used goods through a seamless, responsive, and user-friendly interface.`,
            techs: ["React Vite", "React Native", "Laravel", "MySQL"],
          },
        ].map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Gambar */}
              <div
                className="w-full h-full md:w-1/2"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img
                  src={
                    index === 1 && hoveredProject === 1
                      ? project.imgHover
                      : project.img
                  }
                  alt={project.title}
                  className="w-full h-auto rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 max-h-[500px] object-cover"
                />
              </div>

              {/* Deskripsi */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 whitespace-pre-line text-justify">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Skills Carousel Section */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Skills</h2>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4, spaceBetween: 15 },
            768: { slidesPerView: 5, spaceBetween: 20 },
            1024: { slidesPerView: 6, spaceBetween: 25 },
          }}
          spaceBetween={10}
          grabCursor={true}
          freeMode={true}
        >
          {/* Skill Cards */}
          {[
            { name: "Java", src: javaLogo },
            { name: "Flutter", src: flutterLogo },
            { name: "HTML", src: htmlLogo },
            { name: "CSS", src: cssLogo },
            { name: "React", src: reactLogo },
            { name: "Laravel", src: laravelLogo },
            { name: "MySQL", src: mysqlLogo },
            { name: "Tailwind", src: tailwindLogo },
            { name: "C", src: cLogo },
            { name: "Bootstrap", src: bootstrapLogo },
            { name: "JavaScript", src: javascriptLogo },
            { name: "Figma", src: figmaLogo },
            { name: "Git", src: gitLogo },
          ].map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#121212] rounded-xl p-4 flex flex-col items-center justify-center w-[120px] h-[120px] shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img
                  src={skill.src}
                  alt={`${skill.name} logo`}
                  className="w-12 h-12 mb-2 object-contain"
                />
                <p className="text-white text-sm font-semibold text-center">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-6xl mx-auto px-6 pt-24 pb-24">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Contact</h2>
        <p className="text-center text-gray-300 mb-12">
          If you have any questions or would like to work together, feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/*Info*/}
          <div className="space-y-6 text-white">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">ryanwiratama1708@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+6281324617904</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Yogyakarta, Indonesia</p>
            </div>
          </div>

          {/*Form*/}
          <form className="bg-[#121212] rounded-xl p-6 space-y-4 border border-gray-900 shadow-md">
            <div>
              <label className="text-white font-medium">Name:</label>
              <input type="text" className="w-full mt-1 p-2 bg-transparent border border-gray-300 rounded text-white focus:outline-none" />
            </div>
            <div>
              <label className="text-white font-medium">Email:</label>
              <input type="email" className="w-full mt-1 p-2 bg-transparent border border-gray-300 rounded text-white focus:outline-none" />
            </div>
            <div>
              <label className="text-white font-medium">Message:</label>
              <textarea rows="4" className="w-full mt-1 p-2 bg-transparent border border-gray-300 rounded text-white focus:outline-none" />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-semibold rounded hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;