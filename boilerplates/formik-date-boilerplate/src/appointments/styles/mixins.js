export const alignItems = value => `
	-webkit-align-items: ${value};
	-ms-align-items: ${value};
	align-items: ${value};
`;

export const justifyContent = value => `
	-webkit-justify-content: ${value};
	-ms-justify-content: ${value};
	justify-content: ${value};
`;

export const absoluteCenter = () => `
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

export const centerFlex = `
    display: flex;
    ${alignItems('center')}
    ${justifyContent('center')}
`;
