import styled from 'styled-components';
import { centerFlex } from './mixins';
import {
    FONT,
    COLOR
} from './variables';

export const FormWrapper = styled.div`
    ${centerFlex}
    flex-direction: column;
    padding: 50px 15%;
`;

export const InputWrapper = styled.div`
    text-align: center;
    margin: 18px;
    .input {
        font-size: ${FONT.SIZE.LITTLE_TEXT};
        text-align: center;
        color: ${COLOR.BLACK};
        letter-spacing: .05em;
        margin: 3px auto;
        width: 200px;
        &.title {
            text-transform: uppercase;
        }
        &.body {
            font-size: ${FONT.SIZE.TEXT};
            padding: 3px 6px;
            border-radius: 3px;
        }
        &.error {
            color: ${COLOR.RED};
        }
    }
`;

export const ButtonWrapper = styled.div`
    ${centerFlex}
`;

export const Button = styled.button`
    font-family: ${FONT.FAMILY};
    font-size: ${FONT.SIZE.TITLE};
    font-weight: 500;
    letter-spacing: .05em;
    color: ${COLOR.BLACK};
    background: ${COLOR.LIGHTGREY};
    border: 1px solid ${COLOR.GREY};
    padding: 6px 12px;
    margin: 6px;
    border-radius: 3px;
    margin: auto;
    cursor: pointer;
    transition: .3s;
    &:hover {
        opacity: .8;
    }
    &:focus {
        outline-color: transparent;
    }
`;
