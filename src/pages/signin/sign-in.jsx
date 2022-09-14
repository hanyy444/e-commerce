import './sign-in.scss'
import Login from "../../components/login/login"
import SignUp from "../../components/signup/sign-up"
const SignInPage = () => {
  return (
    <div className="sign-in">
      <SignUp />
      <Login />
    </div>
  )
}

export default SignInPage