 
import signupImage from '../assets/images/signup.svg'
import LoginIllustrationImage from '../assets/images/login.svg'

import classes from '../styles/Illustration.module.css'

export default function Illustration() {
  return ( 
    <div className={classes.illustration}>
            <img src={signupImage} alt="Signup" />
          </div>
  )
}
export  function LoginIllustration() {
  return ( 
    <div className={classes.illustration}>
            <img src={LoginIllustrationImage} alt="Signup" />
          </div>
  )
}
