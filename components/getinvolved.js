import Image from "next/image"
import rightbrown from "../public/images/rightbrown.png"
import BButton from "./BButton"





export default function GetInvolved(){

    return (
        <div >
            <div className="md:container mx-auto p-6 md:p-0">
                <h1 className="text-center text-42 md:text-56 md:text-left mb-[64px] font-paytone">Get <span className="text-pry">Involved</span></h1>
               <div className="flex md:flex-row flex-col justify-between text-[#fff] min-h-[1569px] md:min-h-[539px] font-fellix">
                    <div className="speaker rounded-[32px] h-[502px] md:h-auto text-center flex  flex-col justify-end pb-[55px] md:w-[374px]">
                        <h4 className="text-22 font-[700]">Become a D&D Speaker</h4>
                        <p className='text-16 font-[400] px-5 mt-[8px] mb-[24px]'>Inspire females by voluteering to speak in our virtual events </p>
                        <div className="flex justify-center">
                            <BButton padding='15px 0' width="70%" backgroundColor="#D68676">
                                <span className="mr-2">Apply</span>
                                <div className="bg-[white] w-[25px] h-[25px] flex justify-center items-center rounded-full">
                                    <div className="relative w-[15px] h-[15px]">
                                        <Image src={rightbrown} alt="rightbrown" layout="fill" objectFit="contain" quality={100} />
                                    </div>
                                </div>
                            </BButton>
                        </div>
                    </div>
                    <div className="rounded-[32px] h-[502px] md:h-auto justify-between flex flex-col md:w-[374px]">
                        <div className="volunteer  rounded-[32px] h-[237px] md:h-[250px] flex flex-col justify-end pb-[24px] text-center">
                            <h4 className="text-22 font-[700] mb-[24px]">Become a Volunteer</h4>
                            <div className="flex justify-center">
                                <BButton padding='15px 0' width="70%" backgroundColor="#D68676">
                                    <span className="mr-2">Apply</span>
                                    <div className="bg-[white] w-[25px] h-[25px] flex justify-center items-center rounded-full">
                                        <div className="relative w-[15px] h-[15px]">
                                            <Image src={rightbrown} alt="rightbrown" layout="fill" objectFit="contain" quality={100} />
                                        </div>
                                    </div>
                                </BButton>
                            </div>
                        </div>
                        <div className="mentor rounded-[32px] h-[237px] md:h-[250px] flex flex-col justify-end pb-[24px] text-center">
                        <h4 className="text-22 font-[700] mb-[24px]">Become a Tech Mentor</h4>
                            <div className="flex justify-center">
                                <BButton padding='15px 0' width="70%" backgroundColor="#D68676">
                                    <span className="mr-2">Apply</span>
                                    <div className="bg-[white] w-[25px] h-[25px] flex justify-center items-center rounded-full">
                                        <div className="relative w-[15px] h-[15px]">
                                            <Image src={rightbrown} alt="rightbrown" layout="fill" objectFit="contain" quality={100} />
                                        </div>
                                    </div>
                                </BButton>
                            </div>
                        </div>
                    </div>
                    <div className="sponsor rounded-[32px] md:w-[374px] h-[502px] md:h-auto  flex flex-col justify-end pb-[55px] text-center">
                    <h4 className="text-22 font-[700] mb-[24px]">Become a Partner / Sponsor</h4>
                        <div className="flex justify-center">
                            <BButton padding='15px 0' width="70%" backgroundColor="#D68676">
                                <span className="mr-2">Apply</span>
                                <div className="bg-[white] w-[25px] h-[25px] flex justify-center items-center rounded-full">
                                    <div className="relative w-[15px] h-[15px]">
                                        <Image src={rightbrown} alt="rightbrown" layout="fill" objectFit="contain" quality={100} />
                                    </div>
                                </div>
                            </BButton>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )

}