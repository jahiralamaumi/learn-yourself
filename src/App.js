import { useEffect, useState } from "react";
import { Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Courses from "./components/Courses/Courses";

function App() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./courses.json")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home courses = {courses} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses courses = {courses}/>} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
