import { useContext,useState } from "react"
import { MenuContext } from "./context"


export default function GetInvolvedForms({ status, message, onSubmitted }){


    const menucontext = useContext(MenuContext) 

    const { setIsopenForm, openForm, involvedAs } = menucontext

    const [ EMAIL , SETEMAIL ] = useState("")
    const [ FNAME, SETFNAME ] = useState("")
    const [ LNAME , SETLNAME ] = useState("")
    const [ PHONE, SETPHONENUMBER ] = useState("")
    const  [GETINVOLVE, SETINVOLVED] = useState("")


    

    const handleSubmit = e => {

        e.preventDefault()

        onSubmitted({ 
            EMAIL,FNAME ,LNAME,PHONE,GETINVOLVE
        })

        /*

        fetch(`https://${process.env.customKey}`,{  
            method: "POST"
        }).then(res => {
            SETEMAIL("")
            SETLNAME("")
            SETLNAME("")
            SETADD1("")
            SETADD2("")
            SETSTATE("")
            SETCITY("")
            SETLNAME("")
            SETZIP("")
            SETCOUNTRY("")
            SETPHONENUMBER("")
            SETBDM("")
            SETBDD("")
        })

       */
        

    }

    return(
            <div id="mc_embed_signup">
                <div className="flex justify-between items-center mb-5 px-7">
                    <div className="text-[28px] uppercase font-medium mt-[20px]">{involvedAs}</div>
                    <div className='w-[40px] h-[40px] 4xl:w-[110px] 4xl:h-[110px] 3xl:w-[60px] 3xl:h-[60px] rounded-full flex justify-center items-center flex-col cursor-pointer' onClick={() => setIsopenForm(!openForm)}>
                        <div className='border-[1px] border-[#000] w-[14px] rotate-45 4xl:w-[44px] 3xl:w-[25px]'></div>
                        <div className='border-[1px] border-[#000] w-[14px] -rotate-45 -translate-y-[2px] 4xl:w-[44px] 4xl:-translate-y-[6px] 3xl:w-[25px]'></div>
                    </div>
                </div>
                <form  onSubmit={handleSubmit}>
                <div id="mc_embed_signup_scroll">
                        <h2></h2>
                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
                            </label>
                            <input type="email" value={EMAIL} name="EMAIL" className="required email" id="mce-EMAIL" onChange={(e) => SETEMAIL(e.target.value)} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">First Name  <span className="asterisk">*</span>
                            </label>
                            <input type="text" value={FNAME} name="FNAME" className="required" id="mce-FNAME" onChange={(e) => SETFNAME(e.target.value)}/>
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-LNAME">Last Name  <span className="asterisk">*</span>
                            </label>
                            <input type="text" value={LNAME} name="LNAME" className="required" id="mce-LNAME" onChange={(e) => SETLNAME(e.target.value)}/>
                        </div>
                            <div className="mc-field-group size1of2">
                                <label htmlFor="mce-PHONE">Phone Number  <span className="asterisk">*</span>
                            </label>
                                <input type="text" name="PHONE" className="required" value={PHONE} id="mce-PHONE" onChange={e => SETPHONENUMBER(e.target.value)} />
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-GETINVOLVE">Get involved  <span className="asterisk">*</span>
                            </label>
                                <select name="GETINVOLVE" defaultValue={GETINVOLVE} className="required" id="mce-GETINVOLVE" onChange={e => SETINVOLVED(e.target.value)}>
                                    <option value=""></option>
                                    <option value="Mentor">Mentor</option>
                                    <option value="Volunteer">Volunteer</option>
                                    <option value="Patner/Sponsor">Patner/Sponsor</option>
                                    <option value="Speaker">Speaker</option>
                                </select>
                            </div>
                            <div id="mce-responses" className="clear foot">
                                <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                                <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                            </div> 
                            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_304b51a97f21fc8753deaf1e9_2784cf393a" tabindex="-1" value="" /></div>
                            <div className="optionalParent">
                            <div className="clear foot">
                                <button className="w-100p bg-pry py-[15px] text-[#fff] my-[10px] rounded-[28px]">Apply</button>
                            </div>
                        </div>
                    </div>
                   
                </form>
            </div>
    )

}