import projectGallery from '../images/project-Gallery.jpeg'
import Nexo from '../images/Nexo-Infinite.jpeg'

export const projects = [
  {
    id: "76586a44-4380-49a1-b84c-8834e5f87211",
    title: "Project Gallery",
    image: projectGallery,
    description: "A modern portfolio gallery desiged to showcase my project and frontend development skills. Built with React and TypeScript, with a clean, resposive, and user-friendly inteface.",
    usedTechs: [
      "HTML",
      "CSS",
      "SASS",
      "TypeScript",
      "JavaScript",
      "React",
      "Redux"
    ],
    tags: [
      "test",
      "first",
      "gallery"
    ],
    featured: true
  },{
    id: "9424c1ac-7509-45be-a5bf-38cda4308a42",
    title: "NEXO Infinite",
    image: Nexo,
    description: "An Android messaging application built with React Native, featuring a clean and responsive interface for real-time communication. The project focuses on smooth experience with modern UI ad intuitive interactions.",
    usedTechs: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "expo",
      "Cloudflare",
      "Python",
      "CSS",
      "Redux"
    ],
    tags: [
      "test",
      "secound",
      "gallery"
    ],
    featured: true
  }
]