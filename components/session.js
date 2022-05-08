import BButton from "./BButton"





export default function SessionProgram(){

    return (
        <div>
            <article className="mb-[32px]">
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>Book a 1:1 Session with a Tech Mentor.</h4>
                <p className='text-para2 text-18 font-[400] leading-[24px]'>Book/schedule a 1:1 session with an experienced professional in tech instantly when you join our slack community.</p>
                <BButton backgroundColor="#D68676" color="white" padding="15px 61px" margin="32px 0">
                    <span>Join our waitlist</span>
                </BButton>
            </article>
            <article className='mb-[32px]'>
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>How it works</h4>
                <div className="flex items-center mb-[16px]">
                    <span className="bg-[#F9EEEB] text-pry text-14 font-[700] block relative w-[40px] h-[40px] rounded-full justify-center flex items-center">1</span>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Request an invite to join our exclusive Slack Community.</p>
                
                </div>
                <div className="flex items-center mb-[16px]">
                <span className="bg-[#F9EEEB] text-pry text-14 font-[700] block relative w-[40px] h-[40px] rounded-full justify-center flex items-center">2</span>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Introduce yourself in the #hello-techies channel</p>
            
                </div>
                <div className="flex items-center mb-[16px]">
                    <span className="bg-[#F9EEEB] text-pry text-14 font-[700] block relative w-[40px] h-[40px] rounded-full justify-center flex items-center">3</span>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Hop on to the #book-a-1:1-session channel to schedule a time with a tech mentor in your tech area of interest.</p>
                
                </div>         
            </article>
        </div>
    )

}