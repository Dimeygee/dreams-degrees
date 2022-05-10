import BButton from "./BButton"
import rightbrown from "../public/images/rightbrown.png"
import rightwhite from "../public/images/rightwhite.png"
import Image from "next/image"


export default function EventsProgram(){

    return (
        <div >
            <article className="mb-[32px]">
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>D&D Events</h4>
                <p className='text-para2 text-18 font-[400] leading-[24px]'>We organize virtual hangouts, twitter space discussions, workshops, and webinars for females to connect, learn and grow in a safe virtual or physical environment. Keep your eye open for all the details in the events section of this website, newsletter or follow us on social media and we will keep you posted about dates and venues.
                </p>
            </article>
            <div className="mt-[32px] flex md:flex-row flex-col">
                <BButton backgroundColor="#D68676" padding="15px 43px" color="white" width='45%'>
                    <span className="text-16 font-[600]">Join Community</span>
                    <div className='ml-[10px] w-[22px] h-[22px] rounded-full bg-[#ffff] flex items-center justify-center'>
                        <div className="relative w-[10px] h-[10px]">
                            <Image src={rightbrown}  alt="rightbrown" layout="fill" quality={100}  />
                        </div>
                    </div>                    
                </BButton>
                <div className="md:mt-0 md:ml-5 mt-[24px] md:grow">
                    <BButton backgroundColor="white" border="2px solid #D68676" padding="15px" color="#D68676" width="100%">
                        <span className="text-16 font-[600]">Register for events</span>
                        <div className='ml-[10px] w-[22px] h-[22px] rounded-full bg-[#D68676] flex items-center justify-center'>
                            <div className="relative w-[15px] h-[15px]">
                                <Image src={rightwhite}  alt="rightwhite" layout="fill"  quality={100}  />
                            </div>
                        </div>                    
                    </BButton>
                </div>
            </div>
        </div>
    )

}