import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { navLinks } from "../utils/data"
const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    const animations = useAnimation()

    useEffect(() => {
        if (scrolled) {
            animations.start({
                rotateX: 180,
                transition: {
                    duration: 1
                }
            })
        }
        else {
            animations.start({
                rotateX: 0,
                transition: {
                    duration: 1
                }
            })
        }

    }, [scrolled, animations])


    return (
        <div className={scrolled ? "navbar-contanier n-dark" : "navbar-contanier"}>
            <nav className="navbar">
                <motion.div className="logo" animate={animations}>
                    <div className="side">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="side">
                        <div></div>
                        <div></div>
                    </div>
                </motion.div>
                <div className="nav-items">
                    {navLinks.map((item) => (
                        <a href={item.path} className="nav-item" key={item.id}>
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>{item.text}</motion.span>
                        </a>
                    ))}
                </div>
            </nav >
        </div >
    )
}

export default Navbar