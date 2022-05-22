import mbutton from "../public/images/mbutton.png"
import Image from "next/image"
import ibutton from "../public/images/ibutton.png"
import events from "../public/images/events.png"
import ddbg from "../public/images/ddbg.png"
import apt from "../public/images/apt.png"
import swt from "../public/images/swt.png"
import BButton from "./BButton"
import { useRouter } from "next/router"
import Link from "next/link"
import { programs } from "./utils"


export default function Programs(){

    const router = useRouter()



    return (
        <section className="program_container py-[29px] px-6 md:px-0 md:mb-0 md:mt-0 mt-[134px] mb-[158px]">
           
            <div className="px-6 xl:p-0 xl:container mx-auto">
            <h1 className="md:text-56 leading-[58px] md:leading-0 text-42  text-center font-paytone">Our <span className="text-pry">Programs</span></h1>
            <div className="xl:container mx-auto mt-[87px] grid gap-x-[48px] gap-y-[72px] grid-cols-1 md:grid-cols-2 xl:px-12 font-fellix">
                { programs.map((program, index) => {
                    return(
                        <div key={index} className="flex flex-col md:flex-row items-center md:items-start">
                            <span className="w-[72px] h-[72px] relative">
                                <Image src={program.image} alt="mbutton" layout="fill" quality={100} />
                            </span>
                            <div className='program_art md:pl-4'>
                                <Link href={`/programs/${program.id}`}>
                                    <a>
                                    <b className="font-[700] text-21 text-bk  cursor-pointer">{program.head}</b>
                                    </a>
                                </Link>
                                <p className="text-18 text-para2 font-[400] mt-4">{program.text}</p>
                            </div>
                        </div>
                    )
                }) }
                
            </div>
            <div className="hidden md:block text-center mt-[88px] mb-[162px] font-fellix">
                <p className="text-18 font-[400] text-para2">Want to learn more? Click on the button below</p>
               <Link href="programs/0">
                    <a>
                        <BButton backgroundColor="#D68676" color="white" padding="15px 41px" marginTop="24px" margin="24px auto">
                            <span>See more details</span>
                        </BButton>
                    </a>
               </Link>
            </div>
            </div>
        </section>
    )

}