"use client";

import { useState, useEffect, forwardRef, Ref } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { cn } from "@/app/lib/utils"; // Assuming cn is a utility function

// Helper function for random rotation (angle between -15deg and 15deg)
function getRandomRotation() {
  return `${Math.floor(Math.random() * 31) - 15}deg`; // Random between -15° and 15°
}

export const PhotoGallery = ({
  images,
  animationDelay = 0.5,
}: {
  images: string[];
  animationDelay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => setIsVisible(true), animationDelay * 1000);
    const animationTimer = setTimeout(() => setIsLoaded(true), (animationDelay + 0.4) * 1000);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for each photo
  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0, // No initial rotation
      scale: 1,
    }),
    visible: (custom: { x: any; y: any; order: number }) => ({
      x: custom.x,
      y: custom.y,
      rotate: getRandomRotation(), // Apply random rotation here
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15, // Explicit delay based on order
      },
    }),
  };

  // Photo positions - horizontal layout with random y offsets
  const photos = images.map((src, index) => ({
    id: index + 1,
    order: index,
    x: `${(index - 2) * 160}px`, // Random x positions based on the index
    y: `${(index % 2) * 20 + 10}px`, // Small y offset to add variety
    zIndex: 50 - index * 10, // Lower z-index for later photos
    src,
  }));

  return (
    <div className="mt-40 relative">
      <motion.div
        className="relative mx-auto flex w-full max-w-7xl justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="relative flex w-full justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="relative h-[220px] w-[220px]">
            {[...photos].reverse().map((photo) => (
              <motion.div
                key={photo.id}
                className="absolute left-0 top-0"
                style={{ zIndex: photo.zIndex }}
                variants={photoVariants}
                custom={{
                  x: photo.x,
                  y: photo.y,
                  order: photo.order,
                }}
              >
                <Photo
                  width={220}
                  height={220}
                  src={photo.src}
                  alt="Family photo"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Motion Image component wrapped with framer-motion's motion
const MotionImage = motion(Image); // Wrap the Next.js Image with motion

export const Photo = forwardRef<HTMLDivElement, {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}>(({ src, alt, className, width, height, ...props }, ref) => {
  const [rotation, setRotation] = useState<number>(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation = getRandomRotation();
    setRotation(parseInt(randomRotation)); // Set random rotation on mount
  }, []);

  function handleMouse(event: { currentTarget: { getBoundingClientRect: () => any }; clientX: number; clientY: number }) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      ref={ref}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: rotation, // Apply random rotation on hover
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={cn(className, "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing")}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-sm">
        <MotionImage
          className={cn("rounded-3xl object-cover")}
          width={width}
          height={height}
          src={src}
          alt={alt}
          {...props}
          draggable={false}
        />
      </div>
    </motion.div>
  );
});
