import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AfterSlider = ({ images, activeImage, setActiveImage }) => {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);
    const [canScroll, setCanScroll] = useState(false);

    const setRefs = (element) => {
        scrollRef.current = element
        containerRef.current = element
    }

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            setCanScroll(container.scrollWidth > container.clientWidth);
        }
    }, [images]);

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -150, behavior: "smooth" });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 150, behavior: "smooth" });
    };


    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95, zIndex: 0 },
        visible: { opacity: 1, scale: 1, zIndex: 1, transition: { duration: 0.6 } },
        exit: { opacity: 0, scale: 1.05, zIndex: 0, transition: { duration: 0.6 } },
    };

    const nextImage = () => setActiveImage((prev) => (prev + 1) % images.length);
    const prevImage = () => setActiveImage((prev) => (prev - 1 + images.length) % images.length);
    const scroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollAmount = 200; // المسافة اللي هيتحركها في كل ضغطة
        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };
    return (
        <div>
            {/* ✅ السلايدر */}
            <motion.div
                className="slider position-relative w-100 mx-auto overflow-hidden rounded shadow-lg"
                style={{ maxWidth: "900px", height: "400px" }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImage}
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.6 }}   // ✅ حط transition هنا عشان يفضل ماشي مع exit
                        className="position-absolute top-0 start-0" // ✅ خلي الموشن نفسه absolute
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, info) => {
                            if (info.offset.x > 100) prevImage();
                            else if (info.offset.x < -100) nextImage();
                        }}
                    >
                        <LazyLoadImage
                            src={images[activeImage]}
                            alt="Project"
                            effect="blur"         
                            style={{ objectFit: "contain" }}
                            className="w-100 h-100 rounded"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* أزرار التنقل */}
                <button
                    onClick={prevImage}
                    className="position-absolute top-50 start-0 translate-middle-y bg-dark bg-opacity-50 text-white rounded-circle border-0"
                    style={{ padding: "10px", zIndex:'100' }}
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    onClick={nextImage}
                    className="position-absolute top-50 end-0 translate-middle-y bg-dark bg-opacity-50 text-white rounded-circle border-0"
                    style={{ padding: "10px", zIndex:'100' }}
                >
                    <ChevronRight size={28} />
                </button>

                {/* عداد الصور */}
                <motion.div
                    className="position-absolute bottom-0 end-0 bg-dark bg-opacity-50 text-white rounded small"
                    style={{ padding: "5px 13px", margin: "15px" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {activeImage + 1} / {images.length}
                </motion.div>

            </motion.div>

            {/* ✅ الصور المصغرة */}
            <div className=" position-relative mx-auto mt-4" style={{ maxWidth: "900px" }}>
                {/* زرار الشمال */}
                {canScroll && (
                    <button
                        onClick={() => {
                            scroll("left");
                            scrollLeft();
                        }}
                        className="d-none d-sm-block position-absolute top-50 start-0 translate-middle-y bg-dark bg-opacity-50 text-white rounded-circle border-0 z-3"
                        style={{ padding: "8px" }}
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}

                <motion.div
                    ref={setRefs}
                    className="scroll-container d-flex overflow-auto gap-3 justify-content-center align-items-center"
                    style={{ scrollBehavior: "smooth", marginTop: "20px" }}
                    initial="hidden"
                    animate="visible"
                >
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={`cursor-pointer border rounded overflow-hidden flex-shrink-0 ${activeImage === index ? "border-primary" : "border-transparent"
                                }`}
                        // whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={img}
                                alt="Thumbnail"
                                loading="lazy"
                                className="img-fluid"
                                style={{ width: "96px", height: "80px", objectFit: "cover" }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* زرار اليمين */}
                {canScroll && (
                    <button
                        onClick={() => {
                            scroll("right");
                            scrollRight();
                        }}
                        className="d-none d-sm-block position-absolute top-50 end-0 translate-middle-y bg-dark bg-opacity-50 text-white rounded-circle border-0 z-3"
                        style={{ padding: "8px" }}
                    >
                        <ChevronRight size={24} />
                    </button>
                )}
            </div>
        </div>

    )
}
export default AfterSlider