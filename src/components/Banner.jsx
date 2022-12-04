import { motion } from "framer-motion"

const Banner = () => {

    return (
        <div className="banner-container">
            <div className="banner">
                <div className="banner-content">
                    <motion.h1 initial={{ scale: 0, y: 100 }} animate={{ scale: 1, y: 0 }} transition={{ duration: 1.5 }}>Hi! I'm Abdullah Web Developer</motion.h1>
                    <motion.p initial={{ scale: 0, y: 100 }} animate={{ scale: 1, y: 0 }} transition={{ duration: 1.5 }}>I am interested in web development. I really enjoy learning about web technologies like React. I reinforce my software skills by doing research and application to improve myself.</motion.p>
                </div>
                <motion.div className="banner-img-wrapper" initial={{ scale: 0, y: 400 }} animate={{ scale: 1, y: 0 }} transition={{ duration: 1.5 }}>
                    <motion.img src="https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/littleAstronaut.svg?alt=media&token=84bd07be-ac99-4521-8fd6-b5906560ed49" className="banner-img" alt="Banner Img" animate={{ y: [0, -10] }} transition={{ duration: 1.5, type: "spring", stiffness: 50, yoyo: Infinity }} />
                </motion.div>
            </div>
        </div>
    )
}

export default Banner