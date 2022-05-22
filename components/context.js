import {useState, createContext} from "react"

export const MenuContext = createContext()

export default function ContextWrapper({ children }){

    const [ open, isOpen ] = useState(false) 
    const [ openForm, setIsopenForm ] = useState(false)
    const [ involvedAs, setInvovedAs ] = useState("")

    

    return(
        <MenuContext.Provider value={{open, isOpen,  openForm, setIsopenForm ,involvedAs, setInvovedAs}}>
            {children}
        </MenuContext.Provider>
    ) 
}