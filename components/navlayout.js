import Image from "next/image"
import logo from "../public/images/logo.png"
import Link from "next/link"
import { useRouter } from 'next/router'
import styled from "styled-components"

export const Button = styled.button`

`

export default function NavLayout() {

    const router = useRouter()

    return (
        <div className="absolute  border-2 border-black w-100p">
            <div className='container mx-auto px-5 py-7 flex justify-between items-center font-fellix'>
                <div className='w-[165px] h-40  relative'>
                        <Image src={logo}  layout="fill" objectFit="contain" quality={100} />
                </div>
                <div className="text-bk grow px-20">
                    <ul className="border-2 border-black flex justify-evenly px-20">
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
                <div className="flex justify-between">
                    <div>getInvolved</div>
                    <div>getStarted</div>
                </div>
            </div>
        </div>
    )

}
