import { motion } from "framer-motion";

//Variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top:["100%", "0%"],
    },
}

//Calculating reverse index
const reverseIndex = (index) => {
    const totalSteps = 7; 
    return totalSteps - index - 1;
};

const Stairs= () => {
    return <>
    {/*Render 7 motion divs, each representing a step of the stair
        each div will have the sameanimation defined in the stairAnimation object.
        The delay for each div is calculated dinamically based on it's reverse index
        creating a staggered effect with decreasing delay for each subsequent step. */}
    {[...Array(6)].map((_, index) =>{
        return(
            <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                }}
                className="h-full w-full bg-white relative"
                />
                );
            })}
        </>
}

export default Stairs;