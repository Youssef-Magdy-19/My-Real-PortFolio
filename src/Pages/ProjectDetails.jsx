import React, { useEffect, useState } from "react";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"
import { useParams } from "react-router-dom";
import { Projects } from "Data Projects/Projects";
import AfterSlider from "../compontens/projectDetailsComponents/AfterSlider";
import RaltedProjects from "compontens/projectDetailsComponents/RaltedProjects";
import { motion } from "framer-motion";
import GlobalLoader from "../compontens/Loader/Loader";
import { useLoading } from "../context/LoadingContext";

const ProjectsDetails = () => {
    const { id } = useParams()
    const [projectData, setProjectData] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const [isZoomOpen, setIsZoomOpen] = useState(false);
    const [relatedProjects, setRelatedProjects] = useState([])
    const { setIsLoading } = useLoading();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);


    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    // البحث عن المشروع عند تغيير ID
    useEffect(() => {
        const foundProject = Projects.find((item) => item.id === parseInt(id));
        let foundRelatedProjects = Projects.filter(project => project.category == foundProject.category)
        foundRelatedProjects = foundRelatedProjects.filter(project => project !== foundProject)
        console.log(foundRelatedProjects)
        setRelatedProjects(foundRelatedProjects)
        setTimeout(() => {
            setProjectData(foundProject);
            setRelatedProjects(foundRelatedProjects)
        }, 1000); // محاكاة تحميل
    }, [id]);
    const images = projectData?.images || [];

    // أنيميشنات
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    if (!projectData) return <GlobalLoader />

    return (
        <section style={{ minHeight: '100vh', padding: '90px 0 70px 0' }}>
            <div style={{ paddingBottom: '25px' }}>
                <AfterSlider
                    images={images}
                    activeImage={activeImage}
                    setActiveImage={setActiveImage}
                    setIsZoomOpen={setIsZoomOpen}
                />
            </div>
            <div className="project-contect ms-3 mt-5">
                <motion.h3
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    style={{ marginBottom: '15px' }}
                >
                    {projectData.title}
                </motion.h3>
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    dangerouslySetInnerHTML={{ __html: projectData.longDescripition }}
                >

                </motion.p>
            </div>
            <RaltedProjects projects={relatedProjects} />
        </section>

    )
}
export default ProjectsDetails