export const inputs = [
	{
		name: 'email',
		placeholder: 'user@gmail.com'
	},
	{
		name: 'password',
		placeholder: '*******'
	}
];

export const initialValues = {
	email: '',
	password: ''
};

const isEmail = str => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(str);
const isPasswordValid = (pass, min, max) => pass.length > min && pass.length < max;

export const validate = (values) => {
	const errors = {};
	const keys = Object.keys(values);
	keys.forEach((key) => {
		if(!values[`${key}`])
			errors[`${key}`] = 'Required';
		else {
			switch(key) {
				case 'email':
					if(isEmail(values.email))
						errors.email = 'Invalid email address';
					break;
				case 'password':
					if(!isPasswordValid(values.password, 6, 23))
						errors.password = 'Password must have between 6 and 23 characters';
					break;
				default:
					break;
			}
		}
	});
	return errors;
};

export const submitAppointments = (values, { setSubmitting }) => {
	setTimeout(() => {
		alert(JSON.stringify(values, null, 2));
		setSubmitting(false);
	}, 300);
};
