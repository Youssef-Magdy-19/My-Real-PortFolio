import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

const ProjectCard = ({ id, title, desc, img, link, linkCode }) => {
    return (
        <motion.div 
        className="mb-3 col-lg-4 col-md-6 col-sm-8 col-11 ps-2 pe-1"
        layout
        initial={{transform:"scale(0)"}}
        animate ={{transform:"scale(1)"}}
        exit={{transform:"scale(0)"}}
        transition={{type:"spring" , damping: 8 , stiffness:50}}
        >
            <div className="project">
                <img src={img} height={150} className="w-100" />
                <div className="project-info pt-2">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <div className="visit-icons">
                        <div className="icon-proj mb-1">
                            <a href={link} target="_blank"><span className="icon-link me-2" /></a>
                            <a href={linkCode} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default ProjectCard