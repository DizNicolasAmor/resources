import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Field, ErrorMessage } from 'formik';
import { Title } from '../styles/commons';
import { StepWrapper, ButtonWrapper, Button, Inputs, InputWrapper } from '../styles/appointments';
import { startDate, endDate, daysToExclude } from '../utils/DateValues';

const hourOptions = [
	{ value: '', label: '' },
	{ value: '10:00', label: '10:00' },
	{ value: '11:00', label: '11:00' },
	{ value: '12:00', label: '12:00' },
	{ value: '13:00', label: '13:00' },
	{ value: '14:00', label: '14:00' },
	{ value: '15:00', label: '15:00' }
];

const MyForm = ({ values, handleChange, stepData }) => (
	<StepWrapper>
		<Title>{stepData.title}</Title>
		<Form>
			<Inputs>
				{stepData.inputs.map(input => (
					<InputWrapper key={input.name}>
						<div className="input title">{input.title}</div>
						{input.type === 'select' && (
							<select
								value={values.hour}
								onChange={handleChange}
								type={input.type}
								name={input.name}
								className="input body"
								placeholder={input.placeholder}
							>
								{hourOptions.map(o => (
									<option key={o.value} value={o.value} label={o.label} />
								))}
							</select>
						)}
						{input.type === 'date' && (
							<Field>
								{({ form }) => (
									<DatePicker
										className="input body"
										type={input.type}
										placeholderText={input.placeholder}
										selected={values.date}
										dateFormat="MMMM dd yyyy"
										minDate={startDate}
										maxDate={endDate}
										excludeDates={daysToExclude}
										onChange={date => {
											form.setFieldValue(input.name, date);
										}}
									/>
								)}
							</Field>
						)}
						{input.type !== 'select' && input.type !== 'checkbox' && input.type !== 'date' && (
							<Field
								type={input.type}
								name={input.name}
								className="input body"
								placeholder={input.placeholder}
							/>
						)}
						<ErrorMessage name={input.name} component="div" className="input error" />
					</InputWrapper>
				))}
			</Inputs>
			<ButtonWrapper>
				<Button type="submit">{stepData.buttonText}</Button>
			</ButtonWrapper>
		</Form>
	</StepWrapper>
);

MyForm.propTypes = {
	values: PropTypes.objectOf(PropTypes.any).isRequired,
	handleChange: PropTypes.func.isRequired,
	stepData: PropTypes.objectOf(PropTypes.any).isRequired
};

export default MyForm;
