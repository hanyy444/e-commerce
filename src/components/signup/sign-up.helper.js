import { auth, createUserProfileDocument } from '../../firebase/firebase.setup'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const formSource = {
    title: "I don't have an account",
    subtitle: "Sign Up with your email and password.",
    inputs: [
        {
            // Display Name Input
            id: 1,
            type: 'text',
            name: 'displayName',
            placeholder: 'Display Name',
            required: true
        }, {
            // Email Input
            id: 2,
            type: 'email',
            name: 'email',
            placeholder: 'Email',
            required: true
        }, {
            // Password Input 
            id: 3,
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            required: true
        }, {
            // Confirm Password Input 

            id: 4,
            type: 'password',
            name: 'confirmPassword',
            placeholder: 'Confirm Password',
            required: true
        }
    ],
    submitButton: {
        text: "SIGN UP",
        onSubmit: async (event, formData, setState) => {
            event.preventDefault();

            const { displayName, email, password, confirmPassword } = formData;

            if (password !== confirmPassword) {
                alert("Passwords don't match.")
                return;
            }

            try {
                const { user } = await createUserWithEmailAndPassword(auth, email, password);

                await createUserProfileDocument(user, { displayName })

                setState({});

            } catch (error) {
                console.log('signing up user error', error.message)
            }

            // API-Request: Register Account
            // console.log(formData)
            alert('form submitted.')

            // Redirect somewhere..
            return;
        }
    }
}