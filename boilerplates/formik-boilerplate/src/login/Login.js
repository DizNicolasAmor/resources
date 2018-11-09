import React from 'react';
import { Formik } from 'formik';
import LoginForm from './components/LoginForm';
import {
	initialValues,
	validate,
	submitAppointments
} from './utils/FormHelpers';
import { GlobalStyle } from './styles/commons';

const Login = () => (
	<div>
		<GlobalStyle />
		<Formik
			initialValues={initialValues}
			validate={validate}
			onSubmit={submitAppointments}
			render={LoginForm}
		/>
	</div>
);

export default Login;
