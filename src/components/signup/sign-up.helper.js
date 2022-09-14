export const formSource = {
    title: "I don't have an account",
    subtitle: "Sign Up with your email and password.",
    inputs: [
        {
            // Display Name Input
            id: 1,
            type: 'text',
            name: 'displayName',
            placeholder: 'Display Name'
        }, {
            // Email Input
            id: 2,
            type: 'email',
            name: 'email',
            placeholder: 'Email'
        }, {
            // Password Input 
            id: 3,
            type: 'password',
            name: 'password',
            placeholder: 'Password'
        }, {
            // Confirm Password Input 

            id: 4,
            type: 'password',
            name: 'confirmPassword',
            placeholder: 'Confirm Password'
        }
    ],
    submitButton: {
        text: "SIGN UP",
        onSubmit: (event, formData) => {
            event.preventDefault();

            // API-Request: Register Account
            // console.log(formData)
            alert('form submitted.')

            // Redirect somewhere..
            return;
        }
    }
}