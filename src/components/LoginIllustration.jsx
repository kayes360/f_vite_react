 
import loginImage from '../assets/images/login.svg'
import classes from '../styles/Illustration.module.css'

export default function LoginIllustration() {
  return ( 
    <div className={classes.illustration}>
            <img src={loginImage} alt="login" />
          </div>
  )
}
