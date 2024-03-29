import { FormControl, FormLabel, GridItem, Icon, Text } from "@chakra-ui/react";
import {
	Controller,
	UseFormRegister,
	Path,
	FieldError,
	Control,
} from "react-hook-form";
import CurrencyInput from "react-currency-input-field";

interface FormInputProps<TFormValues extends Record<string, unknown>> {
	name: Path<TFormValues>;
	required?: boolean;
	disableLabel?: boolean;
	validate?: any;
	label?: string;
	register: UseFormRegister<TFormValues>;
	defaultValue?: string | number | undefined;
	error: FieldError | undefined;
	control: Control<TFormValues>;
	radios?: any;
	minDate?: any;
	placeholder?: string;
	fontSize?: string;
	icon?: any;
}

export const CurrencyField = <TFormValues extends Record<string, any>>({
	name,
	required = false,
	label = "",
	register,
	validate = {},
	error,
	defaultValue,
	control,
	radios,
	icon,
	placeholder,
	fontSize,
	minDate,
}: FormInputProps<TFormValues>) => {
	return (
		<GridItem w="full">
			<FormControl>
				<FormLabel
					htmlFor={label}
					textTransform="capitalize"
					pos="relative"
					top={5}
					left={4}
					width="fit-content"
					zIndex={3}
					bg="brand.200"
					fontSize={fontSize}
				>
					{label}
				</FormLabel>
				<Controller
					render={({ field }) => (
						<CurrencyInput
							placeholder={placeholder}
							defaultValue={defaultValue}
							decimalsLimit={2}
							prefix="&#8358;"
							className="currency"
							onValueChange={(value: any) => field.onChange(value)}
						/>
					)}
					name={name}
					control={control}
				/>
			</FormControl>
			<Text fontSize=".7rem" color="red">
				{(error?.type === "required" && `${label} is required`) ||
					error?.message}
			</Text>
		</GridItem>
	);
};
