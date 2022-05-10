
import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"
import fm from  "../public/images/fm.png"
import footerlogo from "../public/images/footerlogo.png"
import f_fbook from "../public/images/f_fbook.png"
import f_insta from "../public/images/f_insta.png"
import f_twt from "../public/images/f_twt.png"


export const FormContainer = styled.div`
    border:3px solid rgba(255, 255, 255, 0.3);
    border-radius:28px;
    background:#D68676;
    font-size:16px;
    font-weight:400;
    display:flex;
    align-items:center;
    padding:0 24px ;
`

export const Button = styled.button`
    color:#D68676;
    padding:12px 51px;
    border-radius:28px;
    background:white;
    font-size:16px;
    font-weight:700;

`

export default function Footer() {

    return ""

    return (
        <div className='footer pt-[80px] pb-[48px] bg-pry'>
            <div className='container mx-auto px-10 text-white flex items-center justify-between mb-[129px]'>
                <div className="">
                     <small className="font-[700] text-16 ">Join the community</small>
                    <form className='footer_form mt-[32px] flex'>
                        <FormContainer>
                            <div className="relative w-[24px] h-[24px]">
                                <Image src={fm} alt="fm"  layout="fill" quality={100} objectFit="cover" />
                            </div>
                            <input  type="text" placeholder="Enter your  mail" required className="py-[12px] pl-2  border-0 outline-none" />
                        </FormContainer>
                        <Button className="ml-[30px]">Join now</Button>
                    </form>
                </div>
                <div className="footer_link">
                    <ul className="flex w-[332px]  justify-between">
                            <li>
                                <Link href="/">
                                    <a className="text-16 font-[700]" >Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a className="text-16 font-[700]"  >About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs">
                                    <a className="text-16 font-[700]" >Programs</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a className="text-16 font-[700]" >Contact</a>
                                </Link>
                            </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-between container mx-auto px-8">
                <small className="text-14 font-[400]">© 2022 Dreams&Degrees. All rights reserved.</small>
                <div className="w-[165px] h-40  relative mr-12">
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
    )

}