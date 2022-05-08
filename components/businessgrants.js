import BButton from "./BButton"
import star from "../public/images/star.png"
import Image from "next/image"



export default function BusinessGrants(){

    return (
        <div>
            <article className="mb-[32px]">
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>D&D Business Grant (Coming Soon)</h4>
                <p className='text-para2 text-18 font-[400] leading-[24px]'>Our small business grants are designed for female entrepreneurs in Africa. The grant would be open to for-profit businesses that are one to three years old and woman led. In addition to the grant, grant winners also get to be featured on our website, newsletter and social media platforms. For a person to be eligible for the grant they must:
                </p>
            </article>
            <article className="mb-[32px]">
                <div className="flex items-center mb-[16px]">
                    <div className="w-[35px] h-[35px] flex items-center justify-center">
                        <div className="relative w-[15px] h-[15px]">
                            <Image src={star} alt="star" layout="fill" quality={100}  priority />
                        </div>
                    </div>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Be a member of the Dreams&Degrees community
                    </p>
                </div>  
                <div className="flex items-center mb-[16px]">
                    <div className="w-[35px] h-[35px] flex items-center justify-center">
                        <div className="relative w-[15px] h-[15px]">
                            <Image src={star} alt="star" layout="fill" quality={100}  priority />
                        </div>
                    </div>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Be earning revenue already
                    </p>
                </div>  
                <div className="flex items-center mb-[16px]">
                    <div className="w-[35px] h-[35px] flex items-center justify-center">
                        <div className="relative w-[15px] h-[15px]">
                            <Image src={star} alt="star" layout="fill" quality={100}  priority />
                        </div>
                    </div>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Be a woman

                     </p>
                </div>  
                <div className="flex items-center mb-[16px]">
                    <div className="w-[35px] h-[35px] flex items-center justify-center">
                        <div className="relative w-[15px] h-[15px]">
                            <Image src={star} alt="star" layout="fill" quality={100}  priority />
                        </div>
                    </div>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Be a registered business

                    </p>
                </div>
                <div className="flex items-center mb-[16px]">
                    <div className="w-[35px] h-[35px] flex items-center justify-center">
                        <div className="relative w-[15px] h-[15px]">
                            <Image src={star} alt="star" layout="fill" quality={100}  priority />
                        </div>
                    </div>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Be 18years or older by the end of the application submission period.

                    </p>
                </div>
                <div className="flex items-center mb-[16px]">
                    <div className="w-[35px] h-[35px] flex items-center justify-center">
                        <div className="relative w-[15px] h-[15px]">
                            <Image src={star} alt="star" layout="fill" quality={100}  priority />
                        </div>
                    </div>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Have a business that operates in Nigeria.
                    </p>
                </div>
                <div className="mt-[29px]">
                    <p className="work_para text-para2 text-18 font-[400] leading-[24px]">Keep your eye open for all the details in this section of the website, join our community by subscribing to our mailing list, or follow us on social media and we will keep you posted about dates and venues.
                    </p>
                    <div className="mt-[32px] flex">
                        <BButton backgroundColor="#D68676" color="white" width="230px" padding="15px">
                            <span>Join Community</span>
                        </BButton>
                        <BButton backgroundColor="#fff" color="#D68676" border="2px solid #D68676" width="307px" padding="15px" margin="0 32px">
                            <span>Become a partner/sponsor</span>
                        </BButton>
                    </div>
                </div>
        </article>
        </div>
    )

}