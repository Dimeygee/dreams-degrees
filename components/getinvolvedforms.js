import { useContext,useState } from "react"
import { MenuContext } from "./context"
import SpeakerAndPatnerForm from "./formcomponents/speakerAndPatenerForm"
import MentorFormComponent from "./formcomponents/mentorform"
import InterShipForm from "./formcomponents/intershipform"
import MenteesFormComponent from "./formcomponents/menteesform"


const SpeakerForm = () => <SpeakerAndPatnerForm formkey={`${process.env.NEXT_PUBLIC_SPEAKER}`} />

const MentorForm = () => <MentorFormComponent  formkey={`${process.env.NEXT_PUBLIC_MENTORSHIP}`} />

const PatnerOrSponsorForm = () => <SpeakerAndPatnerForm  formkey={`${process.env.NEXT_PUBLIC_PATNERORSPONSOR}`}  />

const InternForm = () => <InterShipForm formkey={`${process.env.NEXT_PUBLIC_INTERNS}`}  />

const TechnologyMentorShipProgram = () => <MenteesFormComponent  formkey={`${process.env.NEXT_PUBLIC_MENTEES}`} />


export default function GetInvolvedForms(){


    const menucontext = useContext(MenuContext) 

    const { getInvolvedAs } = menucontext

    

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
        <>
            { getInvolvedAs === "speaker" && <SpeakerForm /> }
            { getInvolvedAs === "mentor" && <MentorForm /> }
            { getInvolvedAs === "patner/sponsor" && <PatnerOrSponsorForm /> }
            { getInvolvedAs === "intern" && <InternForm /> }
            { getInvolvedAs === "Technology mentoship program" &&  <TechnologyMentorShipProgram /> }
        </>
    )

}