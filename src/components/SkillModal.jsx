
import { FaGithub } from "react-icons/fa"
import { BiLink } from "react-icons/bi"
import { useScrollLock } from "../hooks/useScrollLock";
import { useEffect } from "react";
import { motion } from "framer-motion"
import { IoClose } from "react-icons/io5"

const parent = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
}

const child = {
    hidden: {
        x: -100,
        opacity: 0,
        scale: 1,

    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
    }
}

const SkillModal = ({ modalData, setModalType }) => {
    const { lockScroll, unlockScroll } = useScrollLock();

    useEffect(() => {
        lockScroll()

        return () => {
            unlockScroll()
        }
    }, [lockScroll, unlockScroll])
    return (
        <div className="modal-container" onClick={() => setModalType(null)}>
            <IoClose className="modal-close-btn" />
            <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
                <h2 className="skill-modal-h2">Some projects I use {modalData.tech}</h2>
                <motion.div className="skill-modal-items" initial="hidden"
                    animate="visible"
                    variants={parent}>
                    {modalData.projects.map((project) => (
                        <motion.div className="skill-modal-item" key={project.id} variants={child}>
                            <h3 className="skill-modal-item-title">{project.title}</h3>
                            <div className="skill-modal-item-icons">
                                {project.live &&
                                    <a href={project.live} className="skill-modal-item-link">
                                        <BiLink className="skill-modal-item-icon" />
                                    </a>
                                }
                                <a href={project.source} className="skill-modal-item-link">
                                    <FaGithub className="skill-modal-item-icon" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default SkillModal