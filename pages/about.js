import MeetTheTeam from "../components/meettheteam"
import GetInvolved from "../components/getinvolved"
import Image from "next/image"
import ladiesgroup from "../public/images/ladiesgroup.png"
import Impact from '../components/impact'
import Membership from '../components/membership'

export default function About(){

    return (
        <div className="min-h-[100vh]">
            <section >
            <article className="md:container mx-auto flex-col flex md:flex-row items-center mb-[124px] md:mb-0">
                <div className="w-100p md:w-50p h-[363px] md:h-[622px] relative">
                    <Image src={ladiesgroup} alt="ladiesgroup" layout="fill" objectFit="contain" priority quality={90} />
                </div>
                <div className="w-100p md:w-50p md:p-5 pt-12">
                    <h1 className="text-42 text-center md:text-left md:text-56 font-paytone"><span className="text-pry ">Who</span> are we?</h1>
                    <br />
                    <p className="text-para2 text-18 text-center md:text-left px-[20px] md:px-0 font-fellix">Dreams & Degrees is a digital Sisterhood that exists to connect, educate, and empower ambitious females passionate about technology and entrepreneurship.</p>
                    <br />
                    <p className="text-para2 text-18 text-center md:text-left px-[20px] md:px-0">
                    We are leveraging digital technologies in building a female-focused community with members that thrive daily towards becoming the best version of themselves whilst making a difference in their world.
                    </p>
                    <br />
                    <p className="text-para2 text-18 text-center md:text-left px-[20px] md:px-0">While most of our initiatives are geared towards supporting females in technology and female entrepreneurs, our goal at Dreams & Degrees is to provide opportunities that would enable success for all women.</p>
                </div>
            </article>
            </section>
            <Impact />
            <Membership />
            <MeetTheTeam />
            <section className="mb-[124px]">
                <GetInvolved />
            </section>
        </div>
    )
    
}