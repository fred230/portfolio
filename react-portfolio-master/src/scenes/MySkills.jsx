import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-5 pb-34 mb-26">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-10">
       

        <div className="mt-1 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                class="max-w-xs "
                className="z-10  sm:max-w-md"
                src="assets/stack1.jpeg"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/stack1.jpeg" />
          )}
        </div>

        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mt-6 mb-10">
            MY <span className="text-yellow">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-4 mb-7">
          I have expertise in several programming languages making me the best person to tailor your next website
            
          </p>
          


        </motion.div>


      </div>



      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-22">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Proficiency
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 ml-[-2]">
          I have expertise in several programming languages, including Python, Java, and C . My ability to quickly learn new languages and adapt to new development environments has been critical to my success as a developer.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Problem-solving
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 ml-1">
          I approach complex problems with a systematic and analytical approach, breaking them down into manageable components. . My experience with software development methodologies, such as Agile and Waterfall, has also allowed me to effectively manage project requirements and timelines.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Technical and soft skills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 ml-3">
          I have technical skills in areas such as database design and web development, as well as soft skills in communication and teamwork. I have experience collaborating with cross-functional teams and communicating technical concepts to non-technical stakeholders.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
