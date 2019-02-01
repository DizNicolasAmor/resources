import styled from 'styled-components';
import { centerFlex } from './mixins';
import { FONT, COLOR } from './variables';

export const FormWrapper = styled.div`
	${centerFlex}
	flex-direction: column;
	padding: 30px 12%;
`;

export const Inputs = styled.div`
	width: 100%;
	box-sizing: border-box;
	${centerFlex}
	flex-wrap: wrap;
`;

export const StepWrapper = styled.div`
	width: 100%;
	max-width: 840px;
	position: relative;
	.edit {
		position: absolute;
		right: 18px;
		top: 21px;
		&.hide {
			display: none;
		}
		&.show {
			display: block;
		}
	}
`;

export const InputWrapper = styled.div`
	position: relative;
	text-align: center;
	margin: 18px;
	.checkbox-wrapper {
		width: 100%;
		max-width: 690px;
		box-sizing: border-box;
		${centerFlex}
		flex-wrap: wrap;
	}
	.input {
		font-size: ${FONT.SIZE.LITTLE_TEXT};
		text-align: center;
		color: ${COLOR.BLACK};
		letter-spacing: 0.05em;
		margin: 3px auto;
		width: 200px;
		&.title {
			text-transform: uppercase;
		}
		&.checkbox {
			text-transform: uppercase;
			min-width: 100px;
		}
		&.body {
			background: transparent;
			height: 30px;
			margin: auto;
			padding: 3px;
			box-sizing: border-box;
			border: 1px solid Grey;
			box-shadow: 1px 1px 3px lightgrey;
			font-size: ${FONT.SIZE.TEXT};
			padding: 3px 6px;
			border-radius: 3px;
		}
		&.error {
			color: ${COLOR.RED};
			position: absolute;
			top: 50px;
			&.checkbox {
				width: 100%;
				text-align: center;
				top: initial;
				bottom: -24px;
			}
		}
	}

	input:hover,
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus textarea:-webkit-autofill,
	textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
	select:-webkit-autofill,
	select:-webkit-autofill:hover,
	select:-webkit-autofill:focus {
		outline: none;
		-webkit-box-shadow: transparent;
		transition: background-color 5000s ease-in-out 0s;
	}
	input[type='date']::-webkit-inner-spin-button,
	input[type='date']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	*:required:focus,
	*:focus {
		border-color: inherit;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
`;

export const ButtonWrapper = styled.div`
	${centerFlex}
`;

export const Button = styled.button`
	font-family: ${FONT.FAMILY};
	font-size: ${FONT.SIZE.TITLE};
	font-weight: 500;
	letter-spacing: 0.05em;
	color: ${COLOR.BLACK};
	background: ${COLOR.LIGHTGREY};
	border: 1px solid ${COLOR.GREY};
	padding: 6px 12px;
	border-radius: 3px;
	margin: auto;
	margin-top: 12px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		opacity: 0.8;
	}
	&:focus {
		outline-color: transparent;
	}
`;
