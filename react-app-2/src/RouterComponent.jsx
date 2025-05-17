import { BrowserRouter, Link, redirect, Route, Routes, useNavigate } from "react-router-dom";

import LandingPage from "./LandingPage";

export default function RouterComponent() {
    return (
        <div>
            <BrowserRouter>
                <nav>  {/* Not necessary to use nav tag */}
                    <Link to="/home">Home Page</Link> |    {/* We are using Link tag instead of anchor tag bcz if we use anchor tag, then again whole page will be loaded i.e., whole html will again load, so that will not be a single page application */}
                    <Link to="/about">About Page</Link> |
                    <Link to="/contact">Contact Page</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<LandingPage />} />  {/* Also importing another component */ }
                    <Route path="/home" element={<HomeProgram />} />
                    <Route path="/about" element={<AboutProgram />} />
                    <Route path="/contact" element={<ContactProgram />} />
                    <Route path="*" element={<ErrorPage/>} />  {/* If path doesnt match any of the above routes */ }
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function HomeProgram() {

    const navigate=useNavigate();  // useNavigate hook

    function redirectUser() {
        navigate("/");
    }

    return (
        <div>
            <div>This is the Home page</div>
            <button onClick={redirectUser}>Go back to Landing Page</button>
        </div>
    )
}

function AboutProgram() {
    return <div>This is the About page</div>
}

function ContactProgram() {
    return <div>This is the Contact page</div>
}


function ErrorPage() {
    return (
        <div>Sorry page not found</div>
    )
}