import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { FaLock, FaGithub, FaArrowLeft } from "react-icons/fa";

const PrivateRepo = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const projectName = queryParams.get('project') || 'this project';

    return (
        <div className="private-repo-container" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    maxWidth: '600px',
                    width: '100%',
                    borderRadius: '30px',
                    padding: '50px 40px',
                    textAlign: 'center',
                    boxShadow: '0 25px 45px rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(10px)'
                }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    style={{
                        width: '100px',
                        height: '100px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 30px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                >
                    <FaLock size={50} className="color"  />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{
                        fontSize: '2rem',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}
                >
                    🔒 Private Repository
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        marginBottom: '30px'
                    }}>
                        The project <strong style={{ color: '#667eea' }}>“{projectName}”</strong> was work for clients.<br />
                        I can't share the code because it's confidential client work.
                    </p>

                    <div style={{
                        background: '#f0f0f0',
                        padding: '15px',
                        borderRadius: '15px',
                        marginBottom: '30px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <FaGithub size={24} color="#333" />
                        <span style={{ color: '#666' }}>private repository</span>
                    </div>

                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                border: 'none',
                                padding: '12px 30px',
                                borderRadius: '50px',
                                color: 'white',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <FaArrowLeft /> Back to Home
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default PrivateRepo;