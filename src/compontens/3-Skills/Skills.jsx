import { motion } from "framer-motion";
import { ContantSkills } from "../../Data Projects/Projects"
import "./Skills.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const modalAnim = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

const Skills = () => {
    return (
        <section className="m-0 pt-4 pb-3" id="Skills">
            <div className="container-skills">
                <motion.h2
                    variants={modalAnim}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-4"
                >
                    My Skills
                </motion.h2>
                <div className="skills row ">
                    {ContantSkills.map((skill, index) => {
                        return (
                            <motion.div
                                variants={modalAnim}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="space col-lg-3 col-md-4 col-6 mb-2" key={index}
                            >
                                <div className="Skill d-flex m-auto">
                                    <div className="image-skill">
                                        <LazyLoadImage
                                            loading="lazy"
                                            src={skill.imgUrl}
                                            height={50}
                                            width={50} alt="Skill"
                                            effect="blur"
                                        />
                                    </div>
                                    <div className="info-skill">
                                        <h5 className="m-0">{skill.name}</h5>
                                        <p className="m-0">{skill.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Skills