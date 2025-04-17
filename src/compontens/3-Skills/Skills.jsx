import { ContantSkills } from "../../Data Projects/Projects"
import "./Skills.css"
const Skills=()=>{
    return(
        <section className="m-0 pt-4 pb-3" id="Skills">
            <div className="container-skills">
                <h2 className="text-center mb-4">My Skills</h2>
                <div className="skills row ">
                    {ContantSkills.map((skill)=>{
                        return(
                            <div className="space col-lg-3 col-md-4 col-6 mb-2">
                                <div className="Skill d-flex m-auto">
                                    <div className="image-skill">
                                        <img src={skill.imgUrl} height={50} width={50} alt="" />
                                    </div>
                                    <div className="info-skill">
                                        <h5 className="m-0">{skill.name}</h5>
                                        <p className="m-0">{skill.category}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Skills