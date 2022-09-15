import { auth, signInWithGoogle } from "../../firebase/firebase.setup";
import { signInWithEmailAndPassword } from 'firebase/auth'

export const formSource = {
    title: "I already have an account.",
    subtitle: "Sign in with your email and password",
    inputs: [
        {
            id: 1,
            type: 'email',
            name: 'email',
            placeholder: 'Email',
            required: true
        },
        {
            id: 2,
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            required: true
        }
    ],
    submitButtons: {
        signin: {
            text: 'SIGN IN',
            onSubmit: async (event, formData, setState) => {
                event.preventDefault();

                const { email, password } = formData

                try {
                    await signInWithEmailAndPassword(auth, email, password);

                    setState({})

                } catch (error) {
                    console.log('sign in user error', error.message)
                }

                alert('Signed In.')

                return;
            }
        },
        googleSignin: {
            text: 'SIGN IN WITH GOOGLE',
            onClick: async (event) => {
                event.preventDefault();
                try {
                    await signInWithGoogle();
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
}