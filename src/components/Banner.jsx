import { motion } from "framer-motion"

const Banner = () => {

    return (
        <div className="banner-container">
            <div className="banner">
                <div className="banner-content">
                    <motion.h1 initial={{ scale: 0, y: 100 }} animate={{ scale: 1, y: 0 }} transition={{ duration: 1.5 }}>Hi! I'm Abdullah Web Developer</motion.h1>
                    <motion.p className="banner-content-desc" initial={{ scale: 0, y: 100 }} animate={{ scale: 1, y: 0 }} transition={{ duration: 1.5 }}>I am interested in web development. I really enjoy learning about web technologies like React. I reinforce my software skills by doing research and application to improve myself.</motion.p>
                </div>
                <motion.div className="banner-img-wrapper" initial={{ scale: 0, y: 400 }} animate={{ scale: 1, y: 0 }} transition={{ duration: 1.5 }}>
                    <motion.img src="https://firebasestorage.googleapis.com/v0/b/portfolio-2e4cb.appspot.com/o/littleAstronaut.svg?alt=media&token=99edf61b-d28b-4f32-b55e-3dcfdb2dcf2c" className="banner-img" alt="Banner Img" animate={{ y: [0, -10] }} transition={{ duration: 1.5, type: "spring", stiffness: 50, repeat: Infinity, repeatType: "mirror" }} />
                </motion.div>
            </div>
        </div>
    )
}

export default Banner