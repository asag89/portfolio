import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home"

// if multiple pages are added
function App() {
  const [modalType, setModalType] = useState(null)
  const [modalData, setModalData] = useState(null)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout modalType={modalType} modalData={modalData} setModalType={setModalType} />}>
          <Route index element={<Home setModalType={setModalType} setModalData={setModalData} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
