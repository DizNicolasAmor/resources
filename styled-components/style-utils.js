// style-utils.js

export const truncate = width => `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const absoluteCenter = () => `
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

export const displayFlex = important => `
	display: -webkit-box ${important ? '!important' : ''};
	display: -moz-box ${important ? '!important' : ''};
	display: -ms-flexbox ${important ? '!important' : ''};
	display: -webkit-flex ${important ? '!important' : ''};
	display: flex ${important ? '!important' : ''};
`;

export const alignItems = value => `
	-webkit-align-items: ${value};
	-ms-align-items: ${value};
	align-items: ${value};
`;

export const justifyContent = value => `
	-webkit-justify-content: ${value};
	-ms-flex-pack: ${value};
	justify-content: ${value};
`;

export const textEllipsis = lines => `
	display: inline-block;
	display: -webkit-box;
	-webkit-line-clamp: ${lines};
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const resetButton = () => `
        background: none;
        border: none;
        cursor: pointer;
        &:focus,
        &:focus-within {
            outline: none;
        }
`;
