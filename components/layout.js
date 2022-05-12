import NavLayout from "./navlayout"
import Footer from "./footer"
import dynamic  from "next/dynamic"

const MobileNav = dynamic(() => import("./mobilenav"))


export default function Layout ({  children  }) {
    

    return(
        <>
            <NavLayout />
            <MobileNav />
            { children }
            <Footer />
        </>
    )

}

