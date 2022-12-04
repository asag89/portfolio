
import { useEffect } from 'react'
import { BsStarFill } from "react-icons/bs"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { MdOutlineMoreVert } from "react-icons/md"
import { skills } from '../utils/data';

const Skills = ({ setModalType, setModalData }) => {

    const animations = useAnimation()
    const animateStar = useAnimation()
    const animateContainer = useAnimation()
    const { ref, inView, } = useInView({
        threshold: 0.4
    });

    useEffect(() => {
        if (inView) {
            animations.start({
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1,
                    delay: .5
                }
            })
            animateStar.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1,
                    delay: 1.2
                }
            })

            animateContainer.start({
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1,
                }
            })
        }

    }, [inView, animations, animateStar, animateContainer])

    const handleModalData = (id) => {

        setModalData(skills.find((item) => {
            return item.id === id
        }))
        setModalType("skill")

    }
    return (
        <div className='skills-container' ref={ref} id="skills">
            <motion.h2 className='skills-h2' initial={{ opacity: 0, y: 100, scale: 0 }} animate={animateContainer}>Skills</motion.h2>
            <motion.div
                animate={animateContainer}
                initial={{ opacity: 0, y: 100, scale: 0 }}
                className='skills'>
                {
                    skills.map((item) => (
                        <motion.div
                            className='skill-wrapper'
                            key={item.id}
                            initial={{ opacity: 0, y: 100, scale: 0 }}
                            animate={animations}
                        >
                            <motion.div className="skill">
                                <motion.div className='star-icon-wrapper' animate={animateStar} initial={{ opacity: 0, scale: 0 }}>
                                    <BsStarFill className="star-icon" />
                                </motion.div>
                                {item.tech}
                                <button className='skill-more-btn' onClick={() => handleModalData(item.id)}>
                                    <MdOutlineMoreVert className='skill-more-icon' />
                                </button>
                            </motion.div>
                        </motion.div>

                    )
                    )
                }
            </motion.div>
        </div >
    )
}

export default Skills