import Project from "./Project";
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { projects } from "../utils/data";

const Projects = ({ setModalType, setModalData }) => {

    const animationsProject = useAnimation()
    const animationsTitle = useAnimation()

    const { ref, inView, } = useInView({
        threshold: 0.2
    });

    useEffect(() => {
        if (inView) {
            animationsProject.start({
                boxShadow: "0px 6px 15px 6px rgb(90, 15, 115)",
                transition: {
                    duration: .5,
                    delay: 1
                }
            })

            animationsTitle.start({
                scale: 1,
                transition: {
                    duration: .5
                }
            })
        }

    }, [inView, animationsProject, animationsTitle])
    console.log(inView);
    return (
        <motion.div className="projects-container" id="projects" >
            <motion.h2 initial={{ scale: 0 }} animate={animationsTitle} className="projects-h2">Projects</motion.h2>
            <motion.div className="projects" animate={animationsProject} ref={ref}>
                {projects.map((item) => (
                    <Project project={item} key={item.id} setModalType={setModalType} setModalData={setModalData} />
                ))}

            </motion.div>
        </motion.div>


    )
}

export default Projects