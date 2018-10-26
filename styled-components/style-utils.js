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
