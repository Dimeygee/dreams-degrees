import mbutton from "../public/images/mbutton.png"
import Image from "next/image"
import ibutton from "../public/images/ibutton.png"
import events from "../public/images/events.png"
import ddbg from "../public/images/ddbg.png"
import apt from "../public/images/apt.png"
import swt from "../public/images/swt.png"
import BButton from "./BButton"
import wright from "../public/images/wright.png"


export default function Programs(){

    return (
        <section className="program_container py-[29px]">
            <div className="container mx-auto">
            <h1 className="md:text-56 leading-[58px] md:leading-0 font-bold font-['paytone-one'] text-42 md:text-56 text-center">Our <span className="text-pry">Programs</span></h1>
            <div className="container mx-auto mt-[87px] grid gap-x-[48px] gap-y-[72px] grid-cols-1 md:grid-cols-2 md:px-12">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <span className="w-[72px] h-[72px] relative">
                        <Image src={mbutton} alt="mbutton" layout="fill" quality={100} />
                    </span>
                    <div className='program_art pl-4'>
                        <b className="font-[700] text-21 text-bk">Technology Mentorship Program</b>
                        <p className="text-18 text-para2 font-[400] mt-4">This is a technology mentoring program which aims to provide vibrant and ambitious young women in the information technology industry or women wanting to transition into the field of IT with adequate acces</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <span className="w-[72px] h-[72px] relative">
                        <Image src={ibutton} alt="ibutton" layout="fill" quality={100} />
                    </span>
                    <div className='program_art pl-4'>
                        <b className="font-[700] text-21 text-bk">Internship (Coming soon)</b>
                        <p className="text-18 text-para2 font-[400] mt-4">Dreams & Degrees is currently working to introduce a program that offers females interested in technology the opportunity to gain real world experience, invaluable training as well as confidence and network building. Click here to Join waitlist</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <span className="w-[72px] h-[72px] relative">
                        <Image src={apt} alt="apt" layout="fill" quality={100} />
                    </span>
                    <div className='program_art pl-4'>
                        <b className="font-[700] text-21 text-bk">Accountability Partner in Technology</b>
                        <p className="text-18 text-para2 font-[400] mt-4">Our accountability partner program aims to match interested community members with ambitious, intentional and like-minded individual(s) in technology that would help you stay committed to your goals for the new year. </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <span className="w-[72px] h-[72px] relative">
                        <Image src={ddbg} alt="ddbg" layout="fill" quality={100} />
                    </span>
                    <div className='program_art pl-4'>
                        <b className="font-[700] text-21 text-bk">D&D Business Grant (Coming Soon)</b>
                        <p className="text-18 text-para2 font-[400] mt-4">Our small business grants are designed for female entrepreneurs in Africa. The grant would be open to for-profit businesses that are one to three years old and woman led. In addition to the grant, grant winners also get to be featured on our website, newsletter and social media platforms. </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <span className="w-[72px] h-[72px] relative">
                        <Image src={swt} alt="swt" layout="fill" quality={100} />
                    </span>
                    <div className='program_art pl-4'>
                        <b className="font-[700] text-21 text-bk">1:1 Session with a Tech Mentor.</b>
                        <p className="text-18 text-para2 font-[400] mt-4">Book/schedule a 1:1 session with an experienced professional in tech instantly when you join our slack community.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <span className="w-[72px] h-[72px] relative">
                        <Image src={events} alt="events" layout="fill" quality={100} />
                    </span>
                    <div className='program_art pl-4'>
                        <b className="font-[700] text-21 text-bk">D&D Events</b>
                        <p className="text-18 text-para2 font-[400] mt-4">We organize virtual hangouts, twitter space discussions, workshops, and webinars for females to connect, learn and grow in a safe virtual or physical environment. Keep your eye open for all the details in the events section of this website, newsletter or follow us on social media and we will keep you posted about dates and venues.</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:block text-center mt-[88px] mb-[162px]">
                <p className="text-18 font-[400] text-para2">Want to learn more? Click on the button below</p>
                <BButton backgroundColor="#D68676" color="white" padding="15px 41px" marginTop="24px" margin="24px auto">
                    <span>See more details</span>
                </BButton>
            </div>
            </div>
        </section>
    )

}