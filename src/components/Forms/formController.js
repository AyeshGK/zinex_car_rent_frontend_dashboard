import React, {useState} from 'react';

function FormController({inputFields,children}) {
    // const [inputFields,setInputFields]=useState({...inputFields})
    // const handleInputChange = e => {
    //     // console.log(e.target);
    //     setInputFields({[e.target.name]: e.target.value})
    // }
    return (
        <div>
            <form action="submit">
                {children}
            </form>
        </div>
    );
}

export default FormController;