import Image from "next/image"
import logo from "../public/images/logo.png"
import Link from "next/link"
import styled from "styled-components"
import { useRouter } from "next/router"

const Button = styled.button`
    background: ${props => props.primary ? "#D68676" : props.notprimary ? "transparent" : "white"};
    color: ${props => props.primary ? "white" 
    : props.notprimary ? "#12022F" : "#D68676" };

    font-size: 1em;
    padding: 15px 24px;
    border: ${props => props.primary ? "" : 
        props.notprimary ? "" : "2px solid #1A202C"  };
    border-radius: 28px;
    font-weight:600;
`

export default function NavLayout() {

    const router = useRouter()

    return (
        <div className={`${router.asPath !== "/" ? "relative bg-[#ffff]" : "absolute" } w-100p z-10`}>
            <div className='container mx-auto md:px-5 py-7 flex justify-between items-center font-fellix'>
                <div className='w-[115px] h-[28px] md:w-[165px] md:h-40  relative'>
                        <Image src={logo}  layout="fill" quality={100} priority />
                </div>
                <div className="text-bk grow px-20">
                    <ul className="hidden md:flex justify-evenly px-20 ml-10">
                        <li>
                            <Link href="/">
                                <a className={`link ${router.asPath === "/" ? "active" : "" }`}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a className={`link ${router.asPath === "/about" ? "active" : "" }`}>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/programs">
                                <a className={`link ${router.asPath === "/programs" ? "active" : "" }`}>Programs</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className={`link ${router.asPath === "/contact" ? "active" : "" }`}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex justify-between">
                    <Button notprimary>Get Involved</Button>
                    <Button primary>Get started</Button>
                </div>
                <div className="flex md:hidden w-[24px] justify-between flex-col h-[24px]">
                    <div className="w-[100%] border-2 border-pry"></div>
                    <div className="w-[100%] border-2 border-pry"></div>
                    <div className="w-[100%] border-2 border-pry"></div>
                </div>
            </div>
        </div>
    )

}
