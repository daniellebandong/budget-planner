import React, {ChangeEvent, SetStateAction, useState} from 'react';
import { SubmitButton } from '../buttons/Button';


const BudgetEntry = () => {
    const [desc, setDesc] = useState<string>("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState([]);
    const [amount, setAmount] = useState(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setDesc(desc)
        setDate(date)
        setCategory(category)
        setAmount(amount)
    };

    return ( 
        <form className='' action="">
            <div className='p-1 border border-black grid gap-4 md:flex'>
                <div className=''>
                    <label className='block' htmlFor="desc">Description</label>
                    <input className='border w-full md:' onChange={(e :React.FormEvent<HTMLInputElement>)=> setDesc(e.currentTarget.value.trim())} id="desc" type="text" placeholder="Description" />
                </div>
                <div>
                    <label className='block' htmlFor="date">Date of Transaction</label>
                    <input className='border  w-full md:' id="date" type="date" onChange={(e :React.FormEvent<HTMLInputElement>)=> setDate(e.currentTarget.value.trim())}/>
                </div>
                <div>
                    <label className='block' htmlFor="category">Type of Transaction </label>
                    <select className='border w-full md:' name="category" id="category" onChange={(e :React.FormEvent<HTMLSelectElement>)=> setDate(e.currentTarget.value.trim())}>
                        <option value="#">Select an Expense...</option>
                        <option value="income">Income</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div>
                    <label className='block' htmlFor="amount">Amount</label>
                    <input className='border  w-full md:' id="amount" type="number" onChange={(e : React.ChangeEvent<HTMLInputElement> )=> setAmount(e.target.value.trim())}/>
                </div>
                <div>
                    <SubmitButton onClick={handleChange}/>
                </div>
            </div>
            
        </form>
     );
}
 
export default BudgetEntry;