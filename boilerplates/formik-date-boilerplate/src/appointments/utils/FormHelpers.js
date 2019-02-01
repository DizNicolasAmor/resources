import * as Yup from 'yup';
import { startDate, endDate } from './DateValues';

export const initialValues = {
	date: undefined,
	hour: ''
};

export const formStructure = {
	id: 'form1',
	title: 'SCHEDULE',
	buttonText: 'CONFIRM',
	inputs: [
		{
			name: 'date',
			placeholder: 'Month dd, YYYY',
			title: 'date',
			type: 'date'
		},
		{
			name: 'hour',
			placeholder: '',
			title: 'hour',
			type: 'select'
		}
	]
};

export const validations = Yup.object().shape({
	date: Yup.date()
		.min(startDate, 'Invalid date')
		.max(endDate, 'Invalid date')
		.required('Required'),
	hour: Yup.string()
		.min(1, 'Required')
		.required('Required')
});
