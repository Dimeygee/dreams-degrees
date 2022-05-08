import BButton from "./BButton"


export default function EventsProgram(){

    return (
        <div >
            <article className="mb-[32px]">
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>D&D Events</h4>
                <p className='text-para2 text-18 font-[400] leading-[24px]'>We organize virtual hangouts, twitter space discussions, workshops, and webinars for females to connect, learn and grow in a safe virtual or physical environment. Keep your eye open for all the details in the events section of this website, newsletter or follow us on social media and we will keep you posted about dates and venues.
                </p>
            </article>
            <div className="mt-[32px] flex">
                <BButton backgroundColor="#D68676" color="white" padding="15px 61px">
                    <span>Join Community</span>
                </BButton>
                <BButton backgroundColor="#fff" color="#D68676" border="2px solid #D68676" padding="15px 61px" margin="0 32px">
                    <span>Register for events</span>
                </BButton>
            </div>
        </div>
    )

}