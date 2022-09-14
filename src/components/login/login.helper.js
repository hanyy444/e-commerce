import { signInWithGoogle } from "../../firebase/firebase.setup";

export const formSource = {
    title: "I already have an account.",
    subtitle: "Sign in with your email and password",
    inputs: [
        {
            id: 1,
            type: 'email',
            name: 'email',
            placeholder: 'Email'
        },
        {
            id: 2,
            type: 'password',
            name: 'password',
            placeholder: 'Password'
        }
    ],
    submitButtons: {
        signin: {
            text: 'SIGN IN',
            onSubmit: (event, formData) => {
                event.preventDefault();

                console.log(formData)

                alert('Signed In.')

                return;
            }
        },
        googleSignin: {
            text: 'SIGN IN WITH GOOGLE',
            style: { backgroundColor: 'cornflowerblue' },
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