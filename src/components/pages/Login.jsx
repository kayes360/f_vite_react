
import classes from "../../styles/Login.module.css"
import LoginIllustration from '../Illustration'
import Button from '../Button'
import Form from '../Form'
import TextInput from '../TextInput' 
import {Link} from 'react-router-dom'


export default function Signup() {
  return (
    <>
        <h1>Create an account</h1>
        
        <div className="column">
            <LoginIllustration />

           <Form className={`${classes.login}`}> 
            <TextInput type="email" placeholder="Enter Email" icon="alternate_email"/> 
            <TextInput type="password" placeholder="Enter Password" icon="lock"/>  
             
            <Button><span>Submit Now</span></Button>

 
            <div className="info">
              Don't Have account? <Link to="/signup">Signup</Link> First.
            </div>

           </Form>

        </div>
    </>
  )
}
  