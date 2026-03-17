import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Helper to generate random numbers in a range
const random = (min: number, max: number) => Math.random() * (max - min) + min;

export default function BackgroundBubbles() {
  const [bubbles, setBubbles] = useState<Array<{ id: number; size: number; x: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate bubbles only on client side to avoid hydration mismatch
    const generateBubbles = () => {
      const bubbleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 25 : 50;
      const newBubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
        id: i,
        size: random(15, 90), // Size of the bubble
        x: random(0, 100),    // Starting X position (vw)
        duration: random(8, 20), // Faster float up (8-20s instead of 10-25s)
        delay: random(0, 15),     // Delay before starting
      }));
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${bubble.x}vw`,
            width: bubble.size,
            height: bubble.size,
            // Create a highly translucent bubble effect
            background: `radial-gradient(circle at 30% 30%, rgba(20, 184, 166, 0.05), transparent 70%)`,
            border: "1px solid rgba(255, 255, 255, 0.02)",
          }}
          initial={{ y: "100%", opacity: 0, scale: 0.5 }}
          animate={{
            y: "-120vh", // Float all the way up past the screen
            opacity: [0, 0.7, 0.7, 0], // Fade in, stay visible, fade out at top
            scale: [0.5, 1, 1.15, 1], // Wobbly scale
            x: [`${bubble.x}vw`, `${bubble.x - 8}vw`, `${bubble.x + 8}vw`, `${bubble.x}vw`], // Wider drift
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.2, 0.8, 1] // Controls the opacity keyframes timing
          }}
        />
      ))}
    </div>
  );
}
