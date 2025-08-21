import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectCard = ({ id, title, desc, img, link, linkCode, animation }) => {
    return (
        <motion.div
            className="mb-3 col-lg-4 col-sm-6 col-11 ps-2 pe-1 card-project mx-auto"
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="project d-flex " style={{ flexDirection: 'column' }}>
                <Link to={`/projects/${id}`} >
                    <LazyLoadImage
                        loading="lazy"
                        src={img}
                        height={150}
                        className="project-image-card w-100"
                        effect="blur"
                    />
                </Link>
                <div className="project-info d-flex justify-content-between pt-2" style={{ flexDirection: 'column' }}>
                    <h3>{title.slice(0, 17)}</h3>
                    <p>{desc.slice(0, 66)} ...</p>
                    <div className="visit-icons d-flex gap-1 align-items-center justify-content-between">
                        <div className="icon-proj mb-1">
                            <a href={link} target="_blank"><span className="icon-link me-2" /></a>
                            <a href={linkCode} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                        <Link to={`/projects/${id}`} style={{ textDecoration: 'none', paddingRight: '5px' }}>Project Details <ArrowRight width={15} height={15} /></Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default ProjectCard