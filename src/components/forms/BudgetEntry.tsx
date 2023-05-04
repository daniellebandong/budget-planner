import React, {ChangeEvent, useState} from 'react';
import { SubmitButton } from '../buttons/Button';


const BudgetEntry = () => {
    const [desc, setDesc] = useState<string>("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value)
        console.log(date)
    };

    return ( 
        <form className='' action="">
            <div className='p-1 border border-black grid gap-4 md:flex'>
                <div className=''>
                    <label className='block' htmlFor="desc">Description:</label>
                    <input className='border w-full md:' id="desc" type="text" placeholder="Description" onChange={handleChange}/>
                </div>
                <div>
                    <label className='block' htmlFor="date">Date of Transaction:</label>
                    <input className='border  w-full md:' id="date" type="date" onChange={handleChange}/>
                </div>
                <div>
                    <label className='block' htmlFor="category">Type of Transaction: </label>
                    <select className='border w-full md:' name="category" id="category">
                        <option value="#">Select an Expense...</option>
                    </select>
                </div>
                <div>
                    <SubmitButton/>
                </div>
            </div>
            
        </form>
     );
}
 
export default BudgetEntry;