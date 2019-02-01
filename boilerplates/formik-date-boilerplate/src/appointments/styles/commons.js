import styled, { createGlobalStyle, css } from 'styled-components';
import { centerFlex } from './mixins';
import { FONT, COLOR, DEVICE } from './variables';

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		background: #FCFCFC;
	}
`;

export const Title = styled.div`
	width: 100%;
	${centerFlex}
	flex-direction: column;
	display: block;
	width: fit-content;
	margin: 18px auto;
	font-family: ${FONT.FAMILY.MAIN};
	font-size: ${FONT.SIZE.TITLE};
	letter-spacing: 0.06em;
	text-transform: uppercase;
	padding: 6px 18px;
	color: ${COLOR.MAIN};
	border-bottom: 1px solid ${COLOR.MAIN_LIGHT};
	cursor: default;
	@media ${DEVICE.TABLET} {
		.title {
			font-size: ${FONT.SIZE.MOBILE_TITLE};
		}
	}
	${props =>
		props.isLarge &&
		css`
			font-size: x-large;
		`}
	${props =>
		props.isInactive &&
		css`
			opacity: 0.6;
		`}
`;
