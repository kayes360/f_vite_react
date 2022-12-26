
import classes from "../../styles/Signup.module.css"
import Illustration from '../Illustration'
import Button from '../Button'
import Form from '../Form'
import TextInput from '../TextInput'
import Checkbox from '../Checkbox'


export default function Signup() {
  return (
    <>
        <h1>Create an account</h1>
        
        <div className="column">
            <Illustration />

           <Form classes={`${classes.signup}`}>
            <TextInput type="text" placeholder="Enter Name" icon="person"/>
            <TextInput type="email" placeholder="Enter Email" icon="alternate_email"/> 
            <TextInput type="password" placeholder="Enter Password" icon="lock"/> 
            <TextInput type="password" placeholder="Enter Confirm Password" icon="lock_clock"/> 
            <Checkbox  text="I agree to the Terms &amp; Conditions" icon="lock_clock"/>
             
            <Button>Submit Now</Button>

 
            <div className="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>

           </Form>

        </div>
    </>
  )
}
