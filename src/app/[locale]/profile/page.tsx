'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {

  const skills = [
    { name: 'JavaScript', color: 'bg-yellow-500', icon: '🟨' },
    { name: 'TypeScript', color: 'bg-blue-600', icon: '🔷' },
    { name: 'React', color: 'bg-cyan-500', icon: '⚛️' },
    { name: 'Next.js', color: 'bg-black', icon: '▲' },
    { name: 'Node.js', color: 'bg-green-600', icon: '🟢' },
    { name: 'Express', color: 'bg-gray-700', icon: '🚂' },
    { name: 'NestJS', color: 'bg-red-600', icon: '🦁' },
    { name: 'MongoDB', color: 'bg-green-500', icon: '🍃' },
    { name: 'PostgreSQL', color: 'bg-blue-700', icon: '🐘' },
    { name: 'MySQL', color: 'bg-orange-500', icon: '🐬' },
    { name: 'Prisma', color: 'bg-indigo-600', icon: '🔺' },
    { name: 'GraphQL', color: 'bg-pink-500', icon: '📊' },
    { name: 'Docker', color: 'bg-blue-500', icon: '🐳' },
    { name: 'Tailwind CSS', color: 'bg-teal-500', icon: '🎨' },
    { name: 'Vue.js', color: 'bg-green-400', icon: '💚' },
    { name: 'Go', color: 'bg-cyan-600', icon: '🐹' },
    { name: 'Git', color: 'bg-orange-600', icon: '📝' },
    { name: 'Google Cloud', color: 'bg-blue-400', icon: '☁️' }
  ];

  const projects = [
    {
      title: 'NestJS Boilerplate',
      description: 'A comprehensive NestJS boilerplate with authentication, database integration, and best practices.',
      tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/tamnk74/nestjs-boilerplate'
    },
    {
      title: 'Go Fiber ORM MySQL Boilerplate',
      description: 'High-performance Go backend boilerplate using Fiber framework with MySQL integration.',
      tech: ['Go', 'Fiber', 'MySQL', 'ORM'],
      github: 'https://github.com/tamnk74/go-fiber-gorm-mysql-boilerplate'
    },
    {
      title: 'Blog React',
      description: 'Modern blog application built with React featuring responsive design and rich content management.',
      tech: ['React', 'JavaScript', 'CSS', 'REST API'],
      github: 'https://github.com/tamnk74/blog-react'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/tamnk74',
      icon: '📱',
      color: 'bg-gray-800 hover:bg-gray-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tam-nguyen-khac-33385315a',
      icon: '💼',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@khac.tam.94',
      icon: '✍️',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'Ko-fi',
      url: 'https://ko-fi.com/tamkhac',
      icon: '☕',
      color: 'bg-yellow-500 hover:bg-yellow-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/en" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Roadmap
            </Link>
            <div className="text-sm text-gray-500">
              👁️ Profile Views: <span className="font-semibold text-blue-600">Loading...</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-6xl text-white shadow-lg">
              👋
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Available for work
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hi, I&apos;m <span className="text-blue-600">Tam</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            🚀 Passionate fullstack web developer, creating robust and scalable web applications. 
            Skilled in both front-end and back-end technologies, with a keen eye for user experience and performance optimization.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mt-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg`}
              >
                <span className="mr-2">{social.icon}</span>
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Rapid Fire Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">⚡</span>
              Rapid Fire
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">💼</span>
                <div>
                  <p className="font-semibold text-gray-800">Currently working on:</p>
                  <p className="text-gray-600">💻 Developing a new e-commerce platform using React and Node.js</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">🌱</span>
                <div>
                  <p className="font-semibold text-gray-800">Currently learning:</p>
                  <p className="text-gray-600">📚 Exploring something new</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">💬</span>
                <div>
                  <p className="font-semibold text-gray-800">Ask me about:</p>
                  <p className="text-gray-600">💡 JavaScript, React, Node.js, MongoDB, PostgreSQL and RESTful APIs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">🎢</span>
                <div>
                  <p className="font-semibold text-gray-800">Hobbies:</p>
                  <p className="text-gray-600">Badminton, table tennis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Time */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🕒</span>
              Current Time
            </h2>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800">Solar Date:</p>
                <p className="text-gray-600">{new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'short', 
                  day: '2-digit', 
                  year: 'numeric' 
                })}</p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800">Local Time:</p>
                <p className="text-gray-600">{new Date().toLocaleTimeString()}</p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800">Quote of the Day:</p>
                <p className="text-gray-600 italic">&quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            <span className="mr-3">🛠️</span>
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`${skill.color} text-white rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg`}
              >
                <div className="text-2xl mb-2">{skill.icon}</div>
                <div className="font-medium text-sm">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            <span className="mr-3">🚀</span>
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <span className="text-2xl">📱</span>
                  </a>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            <span className="mr-3">📊</span>
            GitHub Statistics
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <Image
                src="https://github-readme-stats.vercel.app/api?username=tamnk74&theme=react&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=false&count_private=true&line_height=23"
                alt="GitHub Stats"
                width={500}
                height={200}
                className="rounded-lg shadow-md mx-auto"
              />
            </div>
            
            <div className="text-center">
              <Image
                src="https://github-readme-stats.vercel.app/api/top-langs?username=tamnk74&theme=react&hide_title=false&layout=compact&langs_count=6&hide_progress=false&card_width=400"
                alt="Top Languages"
                width={400}
                height={200}
                className="rounded-lg shadow-md mx-auto"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Image
              src="https://streak-stats.demolab.com/?user=tamnk74&theme=react&hide_border=false&date_format=M+j%5B%2C+Y%5D&mode=daily&hide_total_contributions=false&hide_current_streak=false&hide_longest_streak=false&card_height=200"
              alt="GitHub Streak"
              width={600}
              height={200}
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            <span className="mr-3">☕</span>
            Support My Work
          </h2>
          
          <p className="text-lg mb-6 opacity-90">
            If you find my projects helpful, consider buying me a coffee!
          </p>
          
          <a
            href="https://ko-fi.com/tamkhac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            <span className="mr-2">☕</span>
            Buy me a coffee
          </a>
        </div>
      </div>
    </div>
  );
}