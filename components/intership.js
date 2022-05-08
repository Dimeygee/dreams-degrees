import BButton from "./BButton"

export default function IntershipProgram(){

    return(
        <div >
            <article >
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>Internship (Coming soon)</h4>
                <p className='text-para2 text-18 font-[400] leading-[24px]'>Dreams & Degrees is currently working to introduce a program that offers females interested in technology the opportunity to gain real world experience, invaluable training as well as confidence and network building by partnering with industry leaders to place young females directly into the workforce as interns. 
                Interested in becoming an intern? </p>
                <BButton backgroundColor="#D68676" color="white" padding="15px 61px" margin="24px 0 32px 0">
                    <span>Join our waitlist</span>
                </BButton>
            </article>
            <article className="mt-[56px]">
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>Industry/Corporate Partners</h4>
                <p className='text-para2 text-18 font-[400] leading-[24px]'>We are open for partnerships with organizations that have an established tech team, committed to diversity and can provide an inclusive and supportive learning environment. If you're looking to increase the diversity in your tech teams and are seeking passionate and talented individuals who will grow and learn at your company, fill out the form below and tell us about your organisation. We'll then contact you to organise a time to chat more. 
                Intersted?</p>
                <BButton backgroundColor="#D68676" color="white" padding="15px 61px" margin="24px 0 32px 0">
                    <span>Apply here</span>
                </BButton>
            </article>
        </div>
    )

}