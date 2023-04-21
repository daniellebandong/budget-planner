import  React, { useState } from 'react';

import EntryForm from './newEntryForm';

function EnterBudget(){
    const initialState = {
        description: "",
        amount: 0,
        category: "",
        remainingBalance: 0,
    }

    const {onChange,onSubmit,values} = EntryForm(
        loginUserCallback,
        initialState
    
    );
    //a submit function that executes once the form is submitted
    async function loginUserCallback() {
        //send these values to a database and potentially get them to display in a graph if I can figure it out
    }

    return(
        <form onSubmit={onSubmit}>
            <div>
                <input type="description" name='description' id='description' placeholder='Description' onChange={onChange}/>
            </div>
        </form>
    )
}