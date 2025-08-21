import { Link } from "react-router-dom"
import "./Footer.css"
import { HashLink } from "react-router-hash-link"

const Footer = () => {
  return (
    <footer className="Footer pt-4 pb-2 ps-3 pe-3">
      <div className="flex">
        <nav>
          <ul className="d-flex ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <HashLink smooth to="/#Contact">Contact</HashLink>
            </li>
          </ul>
        </nav>
        <div className="copyright text-center">
          <p>@ 2025 Spencer Sharp. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer