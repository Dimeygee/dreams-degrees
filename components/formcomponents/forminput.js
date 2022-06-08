import { useRef } from "react"
import { Caret } from "../icons/icons"

export const TextInput = ({ type, value, name, change }) => (
    <div className="form-control">
            <input 
                type={type} 
                value={value} 
                name={name} 
                onChange={(e) => change(e.target.value)} 
                required
                placeholder={name}
                />
    </div>
)


export const SelectInput = ({ name,value, change , options, placeholder}) => (
    <div className="form-control">
        <select required name={name} value={value}  onChange={(e) => change(e.target.value)} >
            <option value="" disabled selected>{placeholder}</option>
            { options.map((option, index) => {
                return (
                    <option key={index} value={option}>{option}</option>
                )
            }) }
        </select>
        <span className="absolute top-[40%] right-[5px]" ><Caret /></span>
    </div>
)


export const TextArea = ({ name, value, change }) => (
    <div className="form-control">
        <textarea row="4" value={value} onChange={(e) => change(e.target.value)} placeholder={name}></textarea>
    </div>
)

