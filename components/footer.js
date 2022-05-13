
import Link from "next/link"
import Image from "next/image"
import fm from  "../public/images/fm.png"
import footerlogo from "../public/images/footerlogo.png"
import f_fbook from "../public/images/f_fbook.png"
import f_insta from "../public/images/f_insta.png"
import f_twt from "../public/images/f_twt.png"
import BButton from "./BButton"



  const style = {  
    border:"3px solid rgba(255, 255, 255, 0.3)",
    borderRadius:"28px",
    backgroundColor:"#D68676",
    fontSize:"16px",
    fontWeight:400,
    display:"flex",
    alignItems:"center",
    padding:"0 24px" ,
}


const FormContainer = ({ children }) => {

    return (
        <div style={style}>{ children }</div>
    )

}

export default function Footer() {


    return (
        <div className='footer pt-[80px] pb-[150px] md:pb-[48px] text-[#fff] font-fellix'>
              <div>
              <div className='xl:container mx-auto px-6 md:px-10 text-white flex md:items-center flex-col md:flex-row justify-between mb-[78px] md:mb-[129px]'>
                <div className="xl:w-100p">
                     <small className="font-[700] text-16 ">Join the community</small>
                    <form className='footer_form mt-[32px] flex xl:flex-row flex-col'>
                        <FormContainer className="md:mb-0 mb-[24px]">
                            <div className="relative w-[24px] h-[24px]">
                                <Image src={fm} alt="fm"  layout="fill" quality={100} objectFit="cover" />
                            </div>
                            <input  type="text" placeholder="Enter your  mail" required className="py-[12px] pl-2  border-0 outline-none footer_input " />
                        </FormContainer>
                        <div className="xl:ml-[30px] mt-3 xl:mt-0 font-[700]">
                            <BButton  width="160px" fontSize="16px" backgroundColor="white" color="#D68676" padding="15px 0">join now</BButton>
                        </div>
                    </form>
                </div>
                <div className="footer_link md:mt-0 mt-[83px]">
                    <ul className="flex w-[100%] md:w-[332px]  justify-between  md:flex-row flex-col">
                            <li >
                                <Link href="/">
                                    <a className="text-16 font-[700]" >Home</a>
                                </Link>
                            </li>
                            <li className="md:mt-0 mt-[40px]">
                                <Link href="/about">
                                    <a className="text-16 font-[700]"  >About</a>
                                </Link>
                            </li>
                            <li className="md:mt-0 mt-[40px]">
                                <Link href="/programs">
                                    <a className="text-16 font-[700]" >Programs</a>
                                </Link>
                            </li>
                            <li className="md:mt-0 mt-[40px]">
                                <Link href="/contact">
                                    <a className="text-16 font-[700]" >Contact</a>
                                </Link>
                            </li>
                    </ul>
                </div>
            </div>
            <div className="flex md:items-center justify-between xl:container mx-auto px-6 md:px-8 md:flex-row flex-col-reverse">
                <small className="text-14 font-[400]">© 2022 Dreams&Degrees. All rights reserved.</small>
                <div className="w-[165px] h-40  relative md:mr-12 md:mt-0 md:mb-0 mt-[68px] mb-[88px]">
                    <Image src={footerlogo}  layout="fill" quality={100} objectFit="contain"  />
                </div>
                <div className="flex w-[120px] justify-between">
                    <div className="w-[24px] h-[20px] relative">
                        <Image src={f_twt} alt="f_twt" layout="fill" quality={100} objectFit="contain"  />
                    </div>
                    <div className="w-[24px] h-[20px] relative">
                        <Image src={f_fbook} alt="f_fbook" layout="fill" quality={100} objectFit="contain"  />
                    </div>
                    <div className="w-[24px] h-[20px] relative">
                        <Image src={f_insta} alt="f_insta"  layout="fill" quality={100} objectFit="contain"  />
                    </div>
                </div>
            </div>
              </div>
        </div>
    )

}