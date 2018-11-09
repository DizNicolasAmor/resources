const size = {
	mobile: 480,
	tablet: 750,
	desktop: 1920
};
export const DEVICE = {
	MOBILE: `(max-width: ${size.mobile}px)`,
	TABLET: `(max-width: ${size.tablet}px)`,
	DESKTOP: `(min-width: ${size.mobile} px)`
};

export const COLOR = {
	WHITE: '#FDFDFD',
	WHITE_2: '#FAFAFA',
	GREY: '#878f99',
	LIGHTGREY: 'LightGrey',
	DARK: '#878f99',
	BLACK: '#1A1A1A',
	RED: '#EE3355',
	MAIN: '#0F2965',
	MAIN_LIGHT: '#1E90FF',
	MAIN_LIGHTER: '#00A8FF',
	MAIN_DARK: '#040F2A'
};

export const FONT = {
	SIZE: {
		TITLE: '16px',
		TEXT: '14px',
		LITTLE_TEXT: '12px',
		MOBILE_TITLE: '14px',
		MOBILE_TEXT: '12px',
		MOBILE_LITTLE_TEXT: '11px'
	},
	FAMILY: {
		MAIN: "'Helvetica', 'Arial', sans-serif"
	}
};
