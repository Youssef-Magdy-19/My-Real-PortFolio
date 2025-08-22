import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    FaLaptopCode,
    FaServer,
    FaLayerGroup,
    FaCogs,
    FaBriefcase,
    FaTools,
    FaWhatsapp
} from "react-icons/fa";
import { motion } from "framer-motion";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";


const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const itemVariant = {
    hidden: { opacity: 0, scale: .8, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};


export default function AboutMe() {

    const whatsappNumber = "201121099489";

    const whatsappMessage = encodeURIComponent(
        'مرحبا بشمهندس يوسف، أنا شوفت خدماتك و محتاج خدمة/استشارة'
    );

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage};`
    useWindowScrollToTop()
    return (
        <div className="px-2 py-5">
            {/* About Me Section */}
            <section className="mb-2">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center fw-bold"
                >
                    About Me
                </motion.h2>
                <motion.h4
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="fw-semibold mt-4"
                >
                    Hello! I'm Youssef Magdy
                </motion.h4>
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-3 d-flex gap-1"
                >
                    <h4 className="lamp-icon" style={{ marginLeft: '3.5px' }}>📌</h4>
                    <p>
                        Hi, I’m <strong>Youssef Magdy</strong>, a 20-year-old student at the Faculty of
                        Engineering, Al-Azhar University, majoring in Computer Systems &
                        Engineering (2nd year).
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="d-flex gap-1"
                >
                    <h4 className="lamp-icon" style={{ marginLeft: '5.5px', marginRight: '5.5px' }}>💡</h4>
                    <p>
                        I discovered my passion for programming even before joining
                        university, as I’ve always loved problem-solving and logical thinking.
                        I started with Python and C++, building a strong foundation in
                        programming.
                    </p>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="d-flex gap-1"
                >
                    <h4>✅</h4>
                    <p>
                        Later, I decided to focus on Web Development, starting with Frontend
                        development, then expanding into Backend until I became a Full-Stack
                        Developer (MERN Stack). Throughout my journey, I’ve applied every
                        concept I learned by building real projects — now I have a portfolio
                        of <strong>17+ projects</strong>, ranging from frontend-focused apps
                        to complete full-stack solutions.
                    </p>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="d-flex gap-1"
                >
                    <h4>✅</h4>
                    <p>
                        I’m always eager to learn new technologies, enhance my skills, and
                        build impactful digital solutions. Currently, I have mastered{" "}
                        <strong>15+ technical skills</strong> in web development, and I
                        continue to grow every day.
                    </p>
                </motion.div>

            </section>

            {/* Services Section */}
            <section>
                <motion.h3
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="fw-bold mb-4"
                >
                    Services
                </motion.h3>
                <div className="row g-4">
                    {[
                        {
                            icon: <FaLaptopCode />,
                            title: "Frontend Development",
                            text: "Creating responsive, modern, and user-friendly interfaces with React.js.",
                        },
                        {
                            icon: <FaServer />,
                            title: "Backend Development",
                            text: "Building secure and scalable server-side applications with Node.js & Express.js.",
                        },
                        {
                            icon: <FaLayerGroup />,
                            title: "Full-Stack Development",
                            text: "Delivering complete web applications using the MERN Stack.",
                        },
                        {
                            icon: <FaCogs />,
                            title: "Custom Projects",
                            text: "Developing tailored solutions based on client needs.",
                        },
                        {
                            icon: <FaBriefcase />,
                            title: "Portfolio & Business Websites",
                            text: "Designing and developing professional websites that reflect brand identity.",
                        },
                        {
                            icon: <FaTools />,
                            title: "Problem-Solving & Optimization",
                            text: "Writing clean, efficient code and optimizing existing projects.",
                        },
                    ].map((service, i) => (
                        <motion.div
                            variants={itemVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="col-lg-6"
                            key={i}
                        >
                            <div className="service-card card shadow-sm p-3 h-100 d-flex flex-row align-items-center">
                                {/* Icon with background */}
                                <div className="service-icon me-3 mb-2 md:mb-0 text-primary fs-3 p-3 rounded-circle d-flex align-items-center justify-content-center">
                                    {service.icon}
                                </div>
                                <div>
                                    <h5 className="fw-semibold">{service.title}</h5>
                                    <p className="mb-0">{service.text}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="text-center mt-5">
                <motion.h3
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="fw-bold mb-3"
                >
                    Contact Me
                </motion.h3>
                <motion.a
                    variants={itemVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    href={whatsappLink}
                    className="btn btn-success px-4 py-2 fw-semibold d-flex gap-2 align-items-center m-auto"
                    style={{borderRadius:'20px', width:'270px'}}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp style={{fontSize:'22px'}} />
                    Contact me on WhatsApp
                </motion.a>
            </section>
        </div>
    );
}
