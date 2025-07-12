export const myProjects = [
  {
    id: 1,
    title: "TMS (Task Management System) - SaaS Application",
    description:
      "This is a SaaS-based Task Management System designed for multiple organizations to manage their departments, employees, tasks, and internal communications — all in one platform.",
    subDescription: [
      "A multi-organization task manager that allows Bosses to create departments, assign managers/employees, and track tasks efficiently.",
      "Built using the MERN stack (MongoDB, Express, React, Node.js) with real-time features like employee status updates via Socket.IO.",
    ],
    href: "https://saas-tms-frontend.onrender.com",
    logo: "",
    image: "/assets/projects/tms2.png",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/logos/mongodb2.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/logos/expressjs.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Foodza - The food delivery app",
    description:
      "A complete food ordering website / app using React JS, MongoDB, Express, Node JS and Razorpay payment gateway.",
    subDescription: [
      "In this Full Stack Food delivery app I have created the Frontend website, Admin Panel and Backend server.",
      "Authentication system so that anyone can create an account and login this food order website.",
      "Shopping cart functionality so that user can add food items in their cart and order food from this app.",
    ],
    href: "https://foodza-frontend.onrender.com",
    logo: "",
    image: "/assets/projects/foodza3.png",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Pooja Salon",
    description:
      "Built a full-stack salon booking website using Next.js, Tailwind CSS, Reactbits, and Clerk for user authentication.",
    subDescription: [
      "Users can book appointments, view upcoming/past bookings, and all data is stored in MongoDB.",
      "Automated email notifications are sent to both users and admin on booking actions using Nodemailer.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
    ],
    href: "https://pooja-salon.vercel.app",
    logo: "",
    image: "/assets/projects/pooja-salon.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "React Bits",
        path: "/assets/logos/reactbits.png",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/mongodb2.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Apple iPhone 3D Showcase Website",
    description:
      "Built using React, Tailwind CSS, GSAP, and Three.js to create a visually stunning and interactive product showcase.",
    subDescription: [
      "Integrated 3D iPhone model using Three.js with smooth scroll-triggered animations powered by GSAP.",
      "Designed a custom Video Carousel to display promotional clips with smooth transitions and modern UI.",
    ],
    href: "https://apple-i-phone.vercel.app/",
    logo: "/assets/logo/apple.svg",
    image: "/assets/projects/apple-website.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Three.js",
        path: "/assets/logos/threejs.png",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "GSAP",
        path: "/assets/logos/gsap.jpg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];