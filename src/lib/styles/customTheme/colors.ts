import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
	Record<string, Theme["colors"]["blackAlpha"]>
> = {
	brand: {
		100: "#191919",
		200: "#1B345B",
		300: "rgba(227,188,106,1)",
		400: "rgba(5, 156, 159, 0.36)",
		500: "#000000",
		600: "#323232",
		700: "#DFF8F9",
		800: "#F5FDFE",
		900: "#0D73FF",
	},
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
	...overridenChakraColors,
	...extendedColors,
};

export default colors;
