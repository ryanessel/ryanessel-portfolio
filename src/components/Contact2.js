import { useState, useRef } from 'react';
import axios from 'axios';

// UNCOMMENT FOR LOCAL
// const API_URI = "http://localhost:5005";

const API_URI = "https://server-ryan-essel-portfolio.vercel.app/";

const defaultFormFields = {
    name: '',
    email: '',
    message: ''
  };


const Contact2 = () => {

    const emailForm = useRef(null);

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { name, email, message } = formFields;
    const [successMessage, setSuccessMessage] = useState(undefined);


    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(value)
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      }; 


    const handleContactSubmit = (event) => {
        event.preventDefault();
        const requestBody = { name, email, message };

        console.log("REQUEST BODY", requestBody)

        axios.post(`${API_URI}/contact`, requestBody)
        .then((response) => {
            console.log("EMAIL RESPONSE!!!!", response)
            setSuccessMessage(<div className='bg-green-400 text-center'>Message Sent!</div>);
            resetFormFields();
        })
        .catch((error) => {
            console.log(error);
        })
        
    } 


    const handleTouchSubmit = (e) => {
        e.preventDefault()

        emailForm.current.submit()
    }
    
    return (
       





        <div className='flex items-center justify-center'>


        <div className="card w-11/12 md:w-2/3  bg-base-100 shadow-xl text-black  xl:w-[45rem] mb-4  mt-20 sm:mt-5 md:mt-10 ">
          
          
        <figure className="px-10 pt-10 text-4xl underline">
        {/* title goes here */}
        Contact Me
        </figure>
        
          
          <div className="card-body items-right text-center">
        
        
         {/* put stuff here */}
         <div className='flex justify-center'>

        
         
         <div className='sign-up-container text-left'>
                

                <form ref={emailForm} onSubmit={handleContactSubmit}>
                    <h2>Send me a message</h2>

                    <input 
                    type='text' 
                    className='input-form border-2 border-indigo-600 rounded-md' 
                    name='name' 
                    placeholder='Name'
                    value={name} 
                    onChange={handleChange}
                    />
                    <br/>
                    <input
                    type="text"
                    className='input-form  border-2 border-indigo-600 rounded-md'
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={handleChange}
                    />
    
                    <br/>
                    <textarea 
                    type="text" 
                    className="input-form-message w-60 xl:w-96  border-2 border-indigo-600 rounded-md" 
                    name="message" 
                    placeholder='Message'
                    value={message} 
                    onChange={handleChange}
                    />
                    <br/>
                       

                    <button className='btn btn-blue' > Submit </button>

                    { successMessage && <h3 className="success-message rounded">{successMessage}</h3> }
                </form>
    

            </div>
            </div>
            <div className="card-actions">
            
            </div>
          </div>
        </div>
        
        
                
                
                
            </div>
        
       

    


     
        

        
    )
}

export default Contact2;