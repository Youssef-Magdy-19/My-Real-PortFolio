import "./Footer.css"

const Footer =()=>{
    return(
      <footer className="Footer pt-4 pb-2 ps-3 pe-3">
        <div className="flex">
          <nav>
            <ul className="d-flex ">
              <li><a href="#Home">Home</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Contact">Contact</a></li>
              <li><a href="#About">About</a></li>
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