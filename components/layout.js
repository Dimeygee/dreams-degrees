import NavLayout from "./navlayout"
import Footer from "./footer"


export default function Layout ({  children  }) {
    

    return(
        <>
            <NavLayout />
           <main>
            { children }
           </main>
            <Footer />
        </>
    )

}

