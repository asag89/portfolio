// static data
const navLinks = [
    {
        text: "Home",
        id: 1,
        path: "/"
    },
    {
        text: "Skills",
        id: 2,
        path: "#skills"
    },
    {
        text: "Projects",
        id: 3,
        path: "#projects"
    },

]
const projects = [
    {
        text: "Social Media App",
        desc: "An application with most features of social media applications",
        img: [
            "https://firebasestorage.googleapis.com/v0/b/portfolio-2e4cb.appspot.com/o/social1.png?alt=media&token=88434368-bdaa-4adf-9270-480861625e90",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-2e4cb.appspot.com/o/social2.png?alt=media&token=28151480-f0dc-4a2d-bb1d-c00540c0f811",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-2e4cb.appspot.com/o/social3.png?alt=media&token=2a6b40d0-71d5-4e41-9c3a-101af433d9e4",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-2e4cb.appspot.com/o/social4.png?alt=media&token=c9ce3319-ea0d-4c55-86ee-3f70ca3ed0b7",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-2e4cb.appspot.com/o/social5.png?alt=media&token=a0e9f5d2-9a02-401e-83c0-156f81a0b908"
        ],
        source: "https://github.com/asag89/mern-social-media-app-",
        live: "https://ankrom-social-media.onrender.com/",
        id: 1
    }, {
        text: "Blog App",
        desc: "Mern-stack blog app. Users can be login, register, CRUD operations...",
        img: ["https://firebasestorage.googleapis.com/v0/b/portfolio-2e4cb.appspot.com/o/blog.png?alt=media&token=cb5960b7-1bb6-4a45-8bce-207535b63139"],
        source: "https://github.com/asag89/mern-stack-blog-app-react-node-express-mongodb-",
        id: 2
    },
    {
        text: "Wordle Clone",
        desc: "Just Wordle clone :)",
        img: [
            "https://firebasestorage.googleapis.com/v0/b/portfolio-2e4cb.appspot.com/o/wordle1.png?alt=media&token=5136683a-eb6b-478c-93a3-deab895498e8",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-2e4cb.appspot.com/o/wordle2.png?alt=media&token=2a01ffb3-ad32-489f-898f-3449c61565fb"
        ],
        source: "https://github.com/asag89/wordle-clone",
        live: "https://word-lee.netlify.app/",
        id: 3
    }
]

const skills = [
    {
        tech: "HTML & CSS",
        id: 1,
        projects: [
            {
                title: "Full Responsive Website",
                id: 1,
                source: "https://github.com/asag89/full-responsive-website",
                live: ""
            },
            {
                title: "Shopping Cart App",
                id: 2,
                source: "https://github.com/asag89/shopping-cart-app",
                live: ""
            },
            {
                title: "Drum kit",
                id: 3,
                source: "https://github.com/asag89/drum-kit",
                live: ""
            }
        ]
    },
    {
        tech: "JavaScript",
        id: 2,
        projects: [
            {
                title: "QR code generator",
                id: 1,
                source: "https://github.com/asag89/qr-code-generator",
                live: ""
            },
            {
                title: "Age Calculator App",
                id: 2,
                source: "https://github.com/asag89/age-calculator-with-all-time-units-",
                live: ""
            }
        ]
    },
    {
        tech: "React",
        id: 3,
        projects: [
            {
                title: "Wordle Clone",
                id: 1,
                source: "https://github.com/asag89/wordle-clone",
                live: "https://word-lee.netlify.app/"
            },
            {
                title: "Social Media App",
                id: 2,
                source: "https://github.com/asag89/mern-social-media-app-",
                live: "https://ankrom-social-media.onrender.com/"
            },
            {
                title: "Blog App",
                id: 3,
                source: "https://github.com/asag89/mern-stack-blog-app-react-node-express-mongodb-",
                live: ""
            }

        ]
    },
    {
        tech: "Node.js",
        id: 4,
        projects: [
            {
                title: "Social Media App",
                id: 1,
                source: "https://github.com/asag89/mern-social-media-app-",
                live: "https://ankrom-social-media.onrender.com/"
            },
            {
                title: "Blog App",
                id: 2,
                source: "https://github.com/asag89/mern-stack-blog-app-react-node-express-mongodb-",
                live: ""
            }
        ]
    },
    {
        tech: "Express",
        id: 5,
        projects: [
            {
                title: "Social Media App",
                id: 1,
                source: "https://github.com/asag89/mern-social-media-app-",
                live: "https://ankrom-social-media.onrender.com/"
            },
            {
                title: "Blog App",
                id: 2,
                source: "https://github.com/asag89/mern-stack-blog-app-react-node-express-mongodb-",
                live: ""
            }
        ]
    },
    {
        tech: "MongoDB",
        id: 6,
        projects: [
            {
                title: "Social Media App",
                id: 1,
                source: "https://github.com/asag89/mern-social-media-app-",
                live: "https://ankrom-social-media.onrender.com/"
            },
            {
                title: "Blog App",
                id: 2,
                source: "https://github.com/asag89/mern-stack-blog-app-react-node-express-mongodb-",
                live: ""
            }
        ]
    }, {
        tech: "Firebase",
        id: 7,
        projects: [
            {
                title: "Real Estate App",
                id: 1,
                source: "https://github.com/asag89/real-estate-app-firebase-react-styled-components-",
                live: ""
            }
        ]
    }, {
        tech: "Git",
        id: 8,
        projects: [
            {
                title: "All projects",
                id: 1,
                source: "https://github.com/asag89?tab=repositories",
                live: ""
            }
        ]
    },
]

export { navLinks, projects, skills }