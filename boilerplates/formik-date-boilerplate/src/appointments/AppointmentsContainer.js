import React from 'react';
import moment from 'moment';
import { Formik } from 'formik';
import MyForm from './components/MyForm';

import { initialValues, validations, formStructure as data } from './utils/FormHelpers';
import { FormWrapper } from './styles/appointments';
import { GlobalStyle } from './styles/commons';

const AppointmentsContainer = () => (
	<div>
		<GlobalStyle />
		<FormWrapper>
			<Formik
				key={data.id}
				initialValues={initialValues}
				validationSchema={validations}
				onSubmit={values => {
					console.warn('VALUES BEFORE', values);
					const dateFormat = 'LL';
					const nextDate = moment(values.date).format(dateFormat);
					const newValues = { ...values, date: nextDate };
					console.warn('VALUES AFTER', newValues);

					setTimeout(() => {
						alert(JSON.stringify(newValues, null, 2));
					}, 1000);
				}}
				render={({ values, handleChange }) => (
					<MyForm values={values} handleChange={handleChange} stepData={data} />
				)}
			/>
		</FormWrapper>
	</div>
);

export default AppointmentsContainer;
