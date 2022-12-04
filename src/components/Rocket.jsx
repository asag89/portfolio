import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer";
const Rocket = () => {

    const animations = useAnimation()

    const { ref, inView, } = useInView({
        threshold: 0.2
    });

    useEffect(() => {
        if (inView) {
            animations.start({
                x: "100vw",
                rotateY: 10000,
                transition: {
                    duration: 2,
                }
            })
        }

    }, [inView, animations])

    return (
        <div className="rocket-container" ref={ref}>
            <motion.img src="https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/rocket.svg?alt=media&token=da62eef6-62ae-4ec8-8cc2-028236a50f8b" alt="rocket" initial={{ rotate: "90deg" }} animate={animations} className="rocket" />
        </div>
    )
}

export default Rocket