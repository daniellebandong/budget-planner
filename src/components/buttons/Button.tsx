const SubmitButton = (props :any) => {
    return ( 
        <button className="p-2 border border-green-600 bg-green-600 rounded-lg text-white " onClick={props.onClick}>Submit</button>
     );
}
 

const EditButton = () => {
    return ( 
        <button>Edit</button>
     );
}
const DeleteButton = () => {
    return ( 
        <button>Delete</button>
     );
}
 
 
export {EditButton, SubmitButton, DeleteButton} ;