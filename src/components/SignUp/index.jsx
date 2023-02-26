import SignUpContainer from './SingUpContainer'
import useSignUp from '../../hooks/useSignUp'

const SignUp = () => {
  const [signUp] = useSignUp()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signUp({ username, password })    
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <SignUpContainer onSubmit={onSubmit}/>
  )
}

export default SignUp