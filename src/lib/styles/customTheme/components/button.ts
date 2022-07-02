import type { DeepPartial, Theme } from "@chakra-ui/react";

const Button: DeepPartial<Theme["components"]["Button"]> = {
	baseStyle: {
		borderRadius: "5px",
	},
	variants: {
		outline: {
			backgroundColor: "transparent",
			border: "1px solid",
			borderColor: "brand.100",
			color: "brand.100",
			w: "11rem",
			h: "3.12rem",
			_hover: {
				backgroundColor: "brand.100",
				color: "white",
				transition: "all .5s ease",
			},
			_focus: {
				boxShadow: "0",
			},
		},
		solid: {
			backgroundColor: "brand.100",
			color: "white",
			w: "18rem",
			h: "2.4rem",
			fontSize: "1rem",
			fontWeight: "bold",
			_hover: {
				backgroundColor: "brand.600",
				transition: "all .5s ease",
				color: "white",
			},
			_focus: {
				boxShadow: "0",
			},
		},
	},
};

export default Button;
