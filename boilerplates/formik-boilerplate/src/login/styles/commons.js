import styled, { createGlobalStyle } from 'styled-components';
import { centerFlex } from './mixins';
import {
	FONT,
	COLOR,
	DEVICE
} from './variables';

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
	}
`;

export const Title = styled.div`
	${centerFlex}
	flex-direction: column;
	display: block;
	font-family: ${FONT.FAMILY.MAIN};
	font-size: ${FONT.SIZE.TITLE};
	letter-spacing: 0.06em;
	text-transform: uppercase;
	padding: 6px 18px;
	margin: 18px;
	color: ${COLOR.MAIN};
	border-bottom: 1px solid ${COLOR.MAIN_LIGHT};
	cursor: default;
    @media ${DEVICE.TABLET} {
        .title {
            font-size: ${FONT.SIZE.MOBILE_TITLE};
        }
    }
`;
