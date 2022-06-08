import Image from "next/image"
import groupbg from "../public/images/groupbg.png"
import rightbrown from "../public/images/rightbrown.png"
import BButton from "./BButton"




export default function Community(){

    return (
        <div className='px-6 md:px-0'>
                <div className="xl:container mx-auto md:px-6 mt-[100px] mb-[220px] md:text-left text-center grid grid-cols-1 md:grid-cols-12">
                    <div className="md:w-[451px] lg:w-[400px] lg:col-span-4  xl:w-[411px] p-10 md:col-span-6  xl:col-span-4 h-[470px] md:h-auto rounded-[32px] relative">
                        <Image src={groupbg}  alt="groupbg" layout="fill"  quality={100}  />
                    </div>
                    <div className="md:col-span-6 lg:col-span-8 xl:col-span-8 md:pl-[110px] mt-[105px] md:mt-0">
                        <h1 className="text-42 lg:text-56 xl:text-56 leading-[59px] xl:leading-[64px] xl:w-[575px] font-paytone">Our <span className="text-pry">Community</span> and <span className="text-pry">membership</span> <br /> experience </h1>
                        <div className="font-fellix">
                            <p className="mt-[24px] text-para2 leading-[24px] text-18" >
                            We are an authentic and value-based community that provides a virtual safe space for likeminded females to explore and do life. We need other people in our lives for optimal mental, psychological, and emotional health. No one was made to live life alone. Explore and do life together in an open but safe informal environment.
                            </p>
                            < br />
                            <p className="mb-[48px] text-para2 leading-[24px] text-18">
                            Joining online communities can often make you feel like another number. We want to do things differently by providing you with a personalised member experience. When you join as a member, we get to book in a group on-boarding call (Virtual hangout) where you get to meet other new members as well as some of the D&D’s team. You will get a chance to share what you do and what you need from the community. The aim of the call will be to take you through all the benefits of being a member and help you highlight the benefits that are specific to your needs.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-start font-fellix">
                            <a target="_blank" href="https://airtable.com/shrWVSnmnBL4JilPy">
                                <BButton backgroundColor="#D68676" padding="15px 43px" color="white">
                                    <span className="text-16 font-[600]">Join Community</span>
                                    <div className='ml-[10px] w-[22px] h-[22px] rounded-full bg-[#ffff] flex items-center justify-center'>
                                            <div className="relative w-[10px] h-[10px]">
                                                <Image src={rightbrown}  alt="rightbrown" layout="fill" quality={100}  />
                                            </div>
                                    </div>
                                </BButton>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    )

}

