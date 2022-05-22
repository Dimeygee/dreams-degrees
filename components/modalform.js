import Head from "next/head"
import { MenuContext } from "./context"
import { useContext } from "react"
import { motion } from "framer-motion"
import Script from "next/script"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import GetInvolvedForms from "./getinvolvedforms"




export default function ModalForm(){

    const menucontext = useContext(MenuContext) 

    const {openForm } = menucontext

    if(!openForm) return null

    return(
        <motion.div
        initial={{ opacity: 0 , scale: 0 }}
        animate={ { opacity: 1, scale: 1 } }
        className="fixed z-20 min-h-[100vh] w-100p  text-[#000] involved_bg" >
            <Head>
                <link href="https://cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css" />
            </Head>
            <MailchimpSubscribe
                    url={process.env.customKey}
                    render={({ subscribe, status, message }) => (
                    <div>
                        <GetInvolvedForms 
                            status={status}
                            message={message}
                            onSubmitted={formData => subscribe(formData)} 
                        />
                        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                    </div>
                    )}
            />
                <Script id="script" strategy="lazyOnload"  src='https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js' />
        </motion.div>
    )

}

