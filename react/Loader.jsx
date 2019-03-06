import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;

	.backdrop {
		position: fixed;
		width: 100%;
		height: 100vh;
		top: 0;
		left: 0;
		background-color: #fff;
		z-index: 3;
		transition: opacity 0.5s;
		visibility: visible;
		opacity: 0.6;
	}

	@keyframes donut-spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.donut {
		z-index: 9;
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-left-color: #0f2965;
		border-radius: 50%;
		width: 30px;
		height: 30px;
		animation: donut-spin 1.2s linear infinite;
	}
`;

const Loader = () => (
	<LoaderContainer>
		<div className="backdrop" />
		<div className="donut" />
	</LoaderContainer>
);

export default Loader;

