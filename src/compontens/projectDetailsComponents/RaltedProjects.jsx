import ProjectCard from "compontens/4-Projects/ProjectCard";
import { h3 } from "fontawesome";
import { AnimatePresence, motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};


const RaltedProjects = ({ projects }) => {

    return (
        <section id="Projects" >
            <div className="container-projects">
                <motion.h2
                    variants={itemVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    style={{ marginBottom: '20px' }}
                >
                    Ralted Projects
                </motion.h2>
                <div className="projects row justify-content-between">
                    <div className="projects-content row justify-start col-12">
                        <AnimatePresence>
                            {projects.length > 0 ?
                                projects.map((proj, id) => {
                                    return (
                                        <ProjectCard key={proj.id || id} id={proj.id} title={proj.title} desc={proj.desc} img={proj.img} link={proj.link} linkCode={proj.linkCode} animation={itemVariants} />
                                    )
                                }) :
                                <motion.h3
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="text-center mt-3"
                                >
                                    Ralted Projects Not Found.
                                </motion.h3>
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RaltedProjects