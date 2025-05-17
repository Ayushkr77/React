import { BrowserRouter, Link, Route, Routes, useNavigate, Outlet } from "react-router-dom";

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
                    <Route path="/" element={<Layout />}>  {/* Not necessary to write layout, we can also remove this line but it is good practice as a layout is a component structure used to define common UI sections (like a navbar, sidebar, or footer) that are shared across multiple pages.    And If you remove this parent route(that is this line), 
    then you'll need to specify absolute paths like "/home", "/about" instead of relative paths like "home", "about" in child routes(below lines i.e., below routes). Using the Layout component helps avoid repeating common UI elements on every page. */ }
                        <Route path="landing" element={<LandingPage />} />  {/* Also importing another component */ }
                        <Route path="home" element={<HomeProgram />} />
                        <Route path="about" element={<AboutProgram />} />
                        <Route path="contact" element={<ContactProgram />} />
                        <Route path="*" element={<ErrorPage/>} />  {/* If path doesnt match any of the above routes */ }
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}



function Layout() {
    return (
        <div>
            <header>
                <h2>This is the Header</h2>
            </header>

            {/* <Outlet /> is a special placeholder where the matched child route’s component is rendered. When you nest routes (like having <Route path="/" element={<Layout />}> with child routes), React Router renders <Layout /> first, and then renders the matched child route’s component inside <Outlet />. */}
            <Outlet />  {/* Renders matched route component here */}

            <footer>
                <h4>This is the Footer</h4>
            </footer>
        </div>
    );
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