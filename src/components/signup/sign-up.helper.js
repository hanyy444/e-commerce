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
        type: 'submit'
    }
}