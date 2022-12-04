import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import ProjectModal from "../components/ProjectModal"
import SkillModal from "../components/SkillModal"

const MainLayout = ({ modalType, modalData, setModalType }) => {

    return (
        <div className="container">
            {modalType === "project" && <ProjectModal modalData={modalData} setModalType={setModalType} />}
            {modalType === "skill" && <SkillModal modalData={modalData} setModalType={setModalType} />}

            <Navbar />
            <div className="main">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout