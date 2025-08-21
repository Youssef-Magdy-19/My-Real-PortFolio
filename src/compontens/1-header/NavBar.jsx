
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./NavBar.css"
import { faMoon } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useState } from "react"
import { faList } from "@fortawesome/free-solid-svg-icons"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const NavBar = () => {
    const location = useLocation()
    const [model, setModel] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark")
    useEffect(() => {
        if (theme !== "dark") {
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        } else {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
    }, [theme])

    return (
        <header className="header d-flex p-0">
            <div className="navbar-toggle">
                <button className="button-icon" onClick={() => setModel(true)}><FontAwesomeIcon icon={faList} /></button>
            </div>
            {model === true ?
                <div className="fixed border">
                    <div className="list">
                        <div>
                            <button onClick={() => setModel(false)}><FontAwesomeIcon icon={faClose} className="close-icon" /></button>
                        </div>
                        {/* لو عايزين نعمل كل دول يو ال و الا و ايه مره واحده هكذا
                            ul>(li>a)*4 */}
                        <ul className="m-0 p-0 mt-3">
                            <li>
                                <Link className={location.pathname === "/" ? "active-links text-decoration-none" : "text-decoration-none"}
                                    onClick={() => {
                                        setModel(false)
                                    }}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className={location.pathname === "/projects" ? "active-links text-decoration-none" : "text-decoration-none"}
                                    onClick={() => {
                                        setModel(false)
                                    }}
                                    to='/projects'
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link className={location.pathname === "/about" ? "active-links text-decoration-none" : "text-decoration-none"}
                                    onClick={() => {
                                        setModel(false)
                                    }}
                                    to='/about'
                                >
                                    About
                                </Link>
                            </li>
                            
                            <li>
                                <HashLink smooth to="/#Contact" 
                                className={location.pathname === "/#contact" ? "active-links text-decoration-none" : "text-decoration-none"}
                                    onClick={() => {
                                        setModel(false)
                                    }}
                                >
                                    Contact
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                </div> : null
            }
            <div />
            <nav className="navbar ">
                <ul className="d-flex m-0 p-0">
                    <li>
                        <Link className={location.pathname === "/" ? "active-links text-decoration-none ms-4 me-2" : "text-decoration-none ms-4 me-2"}
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={location.pathname === "/projects" || location.pathname === '/projects/:id' ? "active-links text-decoration-none ms-2" : "text-decoration-none ms-2"}
                            to="/projects"
                        >
                            Projects
                        </Link>
                    </li>
                   
                    <li>
                        <Link className={location.pathname === "/about" ? "active-links text-decoration-none ms-2" : "text-decoration-none ms-2"}
                            to="/about"
                        >
                            about
                        </Link>
                    </li>
                    <li>
                        <HashLink smooth to="/#Contact"
                            className={location.pathname === "/#Contact" ? "active-links text-decoration-none mx-2 me-4" : "text-decoration-none mx-2 me-4"}
                        >
                            Contact
                        </HashLink>
                    </li>
                </ul>
            </nav>
            <div className="icon-moon-or-sun">
                <button className="button-icon" onClick={() => {
                    localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")
                    setTheme(localStorage.getItem("currentMode"))
                }}>
                    {theme === "dark" ? <FontAwesomeIcon icon={faMoon} /> : <span className="icon-sun" />}
                </button>
            </div>
        </header>
    )
}
export default NavBar