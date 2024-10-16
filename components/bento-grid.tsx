import { motion } from "framer-motion";

export default function BentoGrid() {
  return (
    <section className="bento-grid-container mb-16">
      <motion.div
        className="grid grid-cols-2 gap-4 grid-rows-2 auto-rows-[150px]"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {/* Box 1: Spans 2 columns */}
        <motion.div
          className="bg-red-400 row-span-1 col-span-1 rounded-lg flex items-center justify-center shadow-lg"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="text-white font-bold text-lg">Box 1</h3>
        </motion.div>

        {/* Box 2: Regular size */}
        <motion.div
          className="bg-blue-400 row-span-2 col-span-1 rounded-lg flex items-center justify-center shadow-lg"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="text-white font-bold text-lg">Box 2</h3>
        </motion.div>

        {/* Box 3: Regular size */}
        <motion.div
          className="bg-green-400 row-span-1 col-span-1 rounded-lg flex items-center justify-center shadow-lg"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="text-white font-bold text-lg">Box 3</h3>
        </motion.div>

        {/* Box 4: Spans 2 columns */}
        <motion.div
          className="bg-purple-400 row-span-1 col-span-2 rounded-lg flex items-center justify-center shadow-lg"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="text-white font-bold text-lg">Box 4</h3>
        </motion.div>
      </motion.div>
    </section>
  );
}
