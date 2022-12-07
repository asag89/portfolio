
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer-container">
            <div className="footer">
                <motion.img src="https://firebasestorage.googleapis.com/v0/b/portfolio-2e4cb.appspot.com/o/astronaut.png?alt=media&token=dbfece8a-06de-4771-a84f-477095c2dec1" className="footer-img" alt="astranout" animate={{ y: [0, -10] }} transition={{ duration: 1.5, type: "spring", stiffness: 50, repeat: Infinity, repeatType: "mirror" }} />
                <div className="footer-content">
                    <div className="footer-icons">
                        <a href="https://www.linkedin.com/in/abdullah-sag/" rel="noreferrer" className="footer-icon-link" target="_blank">
                            <FaLinkedin className="footer-icon" />
                        </a>
                        <a href="https://github.com/asag89" target="_blank" rel="noreferrer" className="footer-icon-link">
                            <FaGithub className="footer-icon" />
                        </a>
                        <a href="https://twitter.com/asag8945" className="footer-icon-link" rel="noreferrer" target="_blank">
                            <FaTwitter className="footer-icon" />
                        </a>
                    </div>
                    <p className="footer-cp">Copyright {year}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer