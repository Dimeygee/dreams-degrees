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
            <div className="text-18">We are passionate about diversity and inclusion and are on the search to connect with individuals, brands and Organisations who are equally passionate about diversity and inclusion. fill out the form below and tell us about your organisation. We'll then contact you to organise a time to chat more.</div>
            <TextInput type="text" value={Fullname} change={setFullname} name="Full Name" />
            <TextInput type="email" value={Email} change={setEmail} name="Email" />
            <TextInput type="text" value={CompanyWebsite} change={setCompanyWebsite} name="Company Website" />
            <SelectInput name="Interested In" change={setinterestedIn} options={options} placeholder = "Interested in" />
            <TextArea value={Message} change={setMessage} name="Message"  />
            <FormButton state={state} />
       </FormContainer>
    )

}