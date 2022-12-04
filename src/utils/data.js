
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
            "https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/social1.png?alt=media&token=3a5bdfb6-ef13-4c24-9dea-7c7ffc830dd2",
            "https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/social2.png?alt=media&token=5229eaa2-ec30-4940-80bd-71b20bc4523a",
            "https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/social3.png?alt=media&token=b100030a-1cf9-441b-b52f-b42e016f182e",
            "https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/social4.png?alt=media&token=de174120-7a66-484a-ac55-1547294d3e95",
            "https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/social5.png?alt=media&token=e83ef680-1952-4107-aaf8-c40b57c49773"
        ],
        source: "https://github.com/asag89/mern-social-media-app-",
        live: "https://ankrom-social-media.onrender.com/",
        id: 1
    }, {
        text: "Blog App",
        desc: "Mern-stack blog app. Users can be login, register, CRUD operations...",
        img: ["https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/blog.png?alt=media&token=3cf48b44-846f-4bc8-baab-8eed1a43cae3"],
        source: "https://github.com/asag89/mern-stack-blog-app-react-node-express-mongodb-",
        id: 2
    },
    {
        text: "Wordle Clone",
        desc: "Just Wordle clone :)",
        img: [
            "https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/wordle1.png?alt=media&token=4d438e22-a2e8-42a2-8bd5-087ad63ae546",
            "https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/wordle2.png?alt=media&token=070dcea0-7cc6-443d-a18d-034501cc865c"
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
                id: 1,
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
                id: 1,
                source: "https://github.com/asag89/mern-stack-blog-app-react-node-express-mongodb-",
                live: ""
            }
        ]
    },
    {
        tech: "MongoDB",
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
                id: 1,
                source: "https://github.com/asag89/mern-stack-blog-app-react-node-express-mongodb-",
                live: ""
            }
        ]
    }, {
        tech: "Firebase",
        id: 6,
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
        id: 7,
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