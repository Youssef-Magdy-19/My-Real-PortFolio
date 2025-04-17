import "./Projects.css"
import { Projects } from "../../Data Projects/Projects"
import { useState } from "react"
import ProjectCard from "./ProjectCard"
import { AnimatePresence, motion } from "framer-motion"

const Products =()=>{
    const [active , setActive] = useState("All Projects")
    const [filter , setFilter] = useState(Projects)
    const handleFilter=(category)=>{
      const newFilter = Projects.filter((proj)=> proj.category === category)
      setFilter(newFilter)
    }
    return(
      <section id="Projects">
        <div className="container-projects">
          <div className="projects row justify-content-between">
            <div className="filter-buttons d-flex col-md-2 col-sm-3 col-11 mb-3 p-0 m-0">
              <button  className={active === "All Projects" ? "active " : ""}  onClick={()=>{
                setFilter(Projects)
                setActive("All Projects")
                }}>All Projects</button>
              <button  className={active === "HTML & CSS" ? "active  " : "   "} onClick={()=>{
                handleFilter("HTML&CSS")
                setActive("HTML & CSS")
                }}>HTML & CSS</button>
              <button className={active === "HTML5 & CSS3" ? "active " : ""} onClick={()=>{
                handleFilter("HTML5&CSS3")
                setActive("HTML5 & CSS3")
                }}>HTML5 & CSS3</button>
              <button  className={active === "Bootstrap" ? "active  " : "  "} onClick={()=>{
                handleFilter("Bootstrap")
                setActive("Bootstrap")
                }}>Bootstrap</button>
              <button  className={active === "JavaScript" ? "active " : ""} onClick={()=>{
                handleFilter("JavaScript")
                setActive("JavaScript")
                }}>JavaScript</button>
              <button  className={active === "React JS" ? "active  " : "  "} onClick={()=>{
                handleFilter("ReactJS")
                setActive("React JS")
                }}>React JS</button>
            </div>
            <div className="projects-content row justify-content-around col-md-10 col-sm-9 col-12">
              <AnimatePresence>
                {
                  filter.map((proj , id)=>{
                    return(
                      <ProjectCard key={proj.id || id} id={proj.id} title={proj.title} desc={proj.desc} img={proj.img} link={proj.link} linkCode={proj.linkCode}/>
                    )
                  })
                }
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Products