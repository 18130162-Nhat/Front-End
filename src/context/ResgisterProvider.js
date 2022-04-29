import { createContext, useState } from "react";
export const RegisterContext = createContext()

function RegisterProvider({children}){
    const form = {
        firstName: "" ,
        lastName : "",
        phone : "" ,
        gender : "",
        email :"",
        pass :"",
        OPT : "",
        formInFor : false ,
        formEmail : false
    }
    const [formRegister , setFormRegister]  = useState(form) 
    const setForm  =(object) =>{
       setFormRegister({...form , ...object})
    }
    let value = {formRegister, setForm}
    return <RegisterContext.Provider value={value}>
        {children}
    </RegisterContext.Provider>
}
export default RegisterProvider