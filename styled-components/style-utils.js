// style-utils.js

export const truncate = width => `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const alignItems = value => `
	-webkit-align-items: ${value};
	-ms-align-items: ${value};
	align-items: ${value};
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
