// src/components/GlobalLoader.jsx
import { useLoading } from "../../context/LoadingContext";
import { motion } from "framer-motion";
import './Loader.css'

export default function GlobalLoader() {
    const { isLoading } = useLoading();

    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="loader position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-opacity-95"
            style={{ zIndex: 9999 }}
        >
            <motion.div
                className="d-flex gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        className="rounded-circle"
                        style={{
                            width: "16px",
                            height: "16px",
                            backgroundColor: "#0d6efd", // Bootstrap primary blue
                        }}
                        variants={{
                            hidden: { opacity: 0.3, y: 0 },
                            visible: {
                                opacity: 1,
                                y: [0, -10, 0],
                                transition: {
                                    duration: 0.6,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                },
                            },
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>

    );
}
