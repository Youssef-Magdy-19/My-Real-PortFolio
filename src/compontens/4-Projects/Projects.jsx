import "./Projects.css"
import { Projects } from "../../Data Projects/Projects"
import ProjectCard from "./ProjectCard"
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom"


const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Products = () => {
  const navigate = useNavigate()

  return (
    <section id="Projects" >
      <div className="container-projects">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center" style={{ marginBottom: '30px' }}
        >
          Featured Projects
        </motion.h2>
        <div className="projects row justify-content-between">
          <div className="projects-content row justify-content-between col-12">
            <AnimatePresence>
              {
                Projects.slice(11, 17).map((proj, id) => {
                  return (
                    <ProjectCard key={proj.id || id} id={proj.id} title={proj.title} desc={proj.desc} img={proj.img} link={proj.link} linkCode={proj.linkCode} animation={itemVariants} />
                  )
                })
              }
            </AnimatePresence>
          </div>
        </div>
        <div style={{ textAlign: 'center', width: '100%' }}>
          <motion.button
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="btn-submit btn-projects" onClick={() => navigate('/projects')}>Show All Projects</motion.button>
        </div>
      </div>
    </section>
  )
}
export default Products