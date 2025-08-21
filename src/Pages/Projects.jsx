import "../compontens/4-Projects/Projects.css"
import { Projects } from "../Data Projects/Projects"
import { useState } from "react"
import ProjectCard from "../compontens/4-Projects/ProjectCard"
import { AnimatePresence, motion } from "framer-motion"
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"
import Loader from "../compontens/Loader/Loader"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


const ProjectsPage = () => {
  const [active, setActive] = useState("All Projects")
  const [filter, setFilter] = useState(Projects)
  const handleFilter = (category) => {
    const newFilter = Projects.filter((proj) => proj.category === category)
    setFilter(newFilter)
  }

  useWindowScrollToTop()

  if (!filter) return <Loader />

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ paddingTop: '60px', minHeight: '100vh' }}
    >
      <div className='container-projects' style={{padding:'25px 0'}}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="title text-center"
        >
          <h1 className='project-title text-4xl md:text-5xl font-bold mb-[15px]' style={{marginBottom:'15px'}}>Projects</h1>
          <p className='text-md md:text-base text-gray-500 mb-[30px]' style={{marginBottom:'30px'}}>Explore a selection of outstanding projects we have completed for our clients, with the option to filter by the type of project you are looking for.</p>
        </motion.div>

        <div className="projects row justify-content-between">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            style={{ margin: ' 20px 0' }}
            className="filter-buttons d-flex col-md-2 col-sm-3 col-11 mb-3 p-0 m-0"
          >
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }} className={active === "All Projects" ? "active " : ""}
              onClick={() => {
                setFilter(Projects)
                setActive("All Projects")
              }}
            >
              All Projects
            </motion.button>

            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }} className={active === "HTML & CSS" ? "active  " : "   "}
              onClick={() => {
                handleFilter("HTML&CSS")
                setActive("HTML & CSS")
              }}
            >
              HTML & CSS
            </motion.button>

            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className={active === "Bootstrap" ? "active  " : "  "}
              onClick={() => {
                handleFilter("Bootstrap")
                setActive("Bootstrap")
              }}>
              UI Frameworks
            </motion.button>

            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }} className={active === "JavaScript" ? "active " : ""}
              onClick={() => {
                handleFilter("JavaScript")
                setActive("JavaScript")
              }}
            >
              JavaScript
            </motion.button>

            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }} className={active === "React JS" ? "active  " : "  "}
              onClick={() => {
                handleFilter("ReactJS")
                setActive("React JS")
              }}
            >
              React JS
            </motion.button>

            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }} className={active === "Full Stack" ? "active  " : "  "}
              onClick={() => {
                handleFilter("FullStack")
                setActive("Full Stack")
              }}
            >
              Full Stack
            </motion.button>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="projects-content row justify-content-around col-md-10 col-sm-9 col-12"
          >
            <AnimatePresence>
              {
                filter.map((proj, id) => {
                  return (
                    <ProjectCard key={proj.id || id} id={proj.id} title={proj.title} desc={proj.desc} img={proj.img} link={proj.link} linkCode={proj.linkCode} animation={itemVariants} />
                  )
                })
              }
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section >
  )
}
export default ProjectsPage