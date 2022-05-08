import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { programsArray, programsUtils} from "../components/utils"

export default function Programs(){

    const [activeNumber,changeActiveNumber] = useState(0)

    return(
        <section>
            <Head>
                <link rel="preload" as="image" href="/images/pline.png" />
            </Head>

            <div className="pline py-[62px]"> 
                <div className="container mx-auto px-5 flex">
                    <div className="pr-[60px] w-[650px]">
                        <h1 className="text-56 text-[#343232] font-[700] leading-[61px] font-['paytone-one'] mb-[64px]">Our <br /> <span className='text-pry'>programs</span></h1>
                        {programsUtils.map(program => {
                            return (
                                <div onClick={() => changeActiveNumber(program.id)} key={program.id} className="mb-[16.3px] hover:bg-[#E7E5EA] border-[#E7E5EA] transition duration-100 cursor-pointer flex items-center rounded-[21.8391px] p-[22px] hover:border-[#D68676] border-[0.682471px]">
                                    <div className="relative w-[22px] h-[22px] mr-[18px]">
                                        <Image src={program.image} alt="category" layout="fill" quality={100}  priority />
                                    </div>
                                    <p className="text-14 text-[#1A202C] font-[700] leading-[19px] grow">{program.text}</p>
                            </div>
                            )
                        })}
                        
                    </div>
                    <div className="program_content w-[100%] border-l-[0.5px] h-[988px] border-[#A0AEC0] relative ">
                        {programsArray.map(program => {
                            return (
                                <AnimatePresence>
                                    <motion.div
                                        key={activeNumber}
                                        initial={{ opacity: 0  }}
                                        animate={activeNumber === program.id ? { opacity: 1 } : { opacity: 0  }}
                                        exit={{ opacity: 0 }}
                                        className="px-[62px] py-[34px] absolute"
                                    >
                                        {program.component}
                                    </motion.div>
                                </AnimatePresence>
                            )
                        })}
                    </div>
                </div>
            </div>

        </section>
    )

}