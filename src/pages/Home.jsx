
import Banner from "../components/Banner"
import Projects from "../components/Projects"
import Rocket from "../components/Rocket"
import Separator from "../components/Separator"
import Skills from "../components/Skills"
import Footer from "../components/Footer"
const Home = ({ setModalType, setModalData }) => {
    return (
        <>
            <Banner />
            <Separator />
            <Projects setModalType={setModalType} setModalData={setModalData} />
            <Rocket />
            <Skills setModalType={setModalType} setModalData={setModalData} />
            <Footer />
        </>
    )
}

export default Home