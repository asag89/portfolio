import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"

const Project = ({ project, setModalType, setModalData }) => {
    const controls = useAnimation()

    const { ref, inView, } = useInView();
    useEffect(() => {
        if (inView) {
            controls.start({
                scale: 1,
                transition: {
                    duration: .5,
                    ease: 'easeInOut'
                }
            })
        }
    }, [inView, controls])
    return (
        <motion.div className="project-wrapper" initial={{ scale: 0 }} key={project.id} onClick={() => { setModalType("project"); setModalData(project) }} animate={controls} ref={ref}>
            <div className="project">
                <h2 className='project-title'>{project.text}</h2>
                <img src={project.img} alt="" />
            </div>
        </motion.div>
    )
}

export default Project