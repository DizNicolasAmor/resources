import React from 'react';
import PropTypes from 'prop-types';
import {
	Form,
	Field,
	ErrorMessage
} from 'formik';
import { inputs } from '../utils/FormHelpers';
import { Title } from '../styles/commons';
import {
	ButtonWrapper,
	Button,
	FormWrapper,
	InputWrapper
} from '../styles/login';

const LoginForm = ({ isSubmitting }) => (
	<FormWrapper>
		<Title>Login</Title>
		<Form>
			{
				inputs.map(input => (
					<InputWrapper key={input.name}>
						<div className={`input title ${input.name}`}>{input.name}</div>
						<Field
							type={input.name}
							name={input.name}
							className="input body"
							placeholder={input.placeholder}
						/>
						<ErrorMessage name={input.name} component="div" className="input error" />
					</InputWrapper>
				))
			}
			<ButtonWrapper>
				<Button type="submit" disabled={isSubmitting}>
					AGENDAR
				</Button>
			</ButtonWrapper>
		</Form>
	</FormWrapper>
);

LoginForm.propTypes = {
	isSubmitting: PropTypes.bool.isRequired
};

export default LoginForm;
