//function to return the values of a newly submitted form
import { useState } from "react";

const EntryForm = (callback: any, initialState = {}) => {
    const [values, setValues] = useState(initialState);
    
    //createonChange event
    const onChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setValues({...values,[event.target.name]: event.target.value})
    }

        // onSubmit
        const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            await callback(); // triggering the callback
        };
    return ( {
        onChange,
        onSubmit,
        values,
        
    }
     );
}
 
export default EntryForm;