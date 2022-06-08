import { TextInput, TextArea, SelectInput} from "./forminput"
import { useState, useRef } from "react"
import { FormHeader } from "./formhead"
import FormContainer from "./formcontainer"
import { FormButton } from "./formbutton"
import { useForm } from '@formspree/react';



export default function SpeakerAndPatnerForm({formkey}){

    const [Fullname, setFullname] = useState("")
    const [Email, setEmail] = useState("")
    const [CompanyWebsite, setCompanyWebsite] = useState("")
    const [InterestedIn, setinterestedIn] = useState("")
    const [Message, setMessage] = useState("")

    const [state, handleSubmit] = useForm(formkey);

    const options = ["Industry patner", "Sponsorship","Partnership", "speaker", "Mentor"]

    return (
        <FormContainer handleSubmit={handleSubmit}>
            <FormHeader />
            <TextInput type="text" value={Fullname} change={setFullname} name="Full Name" />
            <TextInput type="email" value={Email} change={setEmail} name="Email" />
            <TextInput type="text" value={CompanyWebsite} change={setCompanyWebsite} name="Company Website" />
            <SelectInput name="Interested In" change={setinterestedIn} options={options} placeholder = "Interested in" />
            <TextArea value={Message} change={setMessage} name="Message"  />
            <FormButton state={state} />
       </FormContainer>
    )

}