
import { motion } from "framer-motion"
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useEffect } from "react";
import { useScrollLock } from "../hooks/useScrollLock";

import { IoClose } from "react-icons/io5"

const ProjectModal = ({ setModalType, modalData }) => {
    const { lockScroll, unlockScroll } = useScrollLock();

    useEffect(() => {
        lockScroll()

        return () => {
            unlockScroll()
        }
    }, [lockScroll, unlockScroll])

    return (
        <div className='modal-container' onClick={() => setModalType(null)} >
            <IoClose className="modal-close-btn" />
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                <motion.h2 className="modal-h2" initial={{ opacity: 0, y: 100, scale: 0 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1 }}>{modalData.text}</motion.h2>
                <motion.div className="slider-wrapper" initial={{ opacity: 0, y: 100, scale: 0 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1 }} >
                    <Swiper
                        className="swiper"
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {
                            modalData.img.map((item, i) => (
                                <SwiperSlide className="slide" key={i}>
                                    <motion.img src={item} alt="project img" className="project-slider-img" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </motion.div>

                <motion.div className="modal-project-text" initial={{ opacity: 0, y: 100, scale: 0 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1 }}>{modalData.desc}</motion.div>
                <div className="project-link">
                    <motion.a href={modalData.source} initial={{ opacity: 0, x: -100, scale: 0 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1 }} target="_blank" >Source Code</motion.a>
                    {modalData.live &&
                        <motion.a href={modalData.live} initial={{ opacity: 0, x: 100, scale: 0 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1 }} target="_blank">Live Site</motion.a>
                    }
                </div>
            </div>
        </div >
    )
}

export default ProjectModal