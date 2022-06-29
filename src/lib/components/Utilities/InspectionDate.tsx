import { FormControl, FormLabel, GridItem, Icon, Text } from "@chakra-ui/react";
import {
	Controller,
	UseFormRegister,
	Path,
	FieldError,
	Control,
} from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
	maxDate?: any;
	placeholder?: string;
	fontSize?: string;
	icon?: any;
}

export const InspectionDate = <TFormValues extends Record<string, any>>({
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
	maxDate,
}: FormInputProps<TFormValues>) => {
	return (
		<>
			<Controller
				render={({ field }) => (
					//@ts-ignore
					<DatePicker
						placeholderText={`+${"    "} Add date`}
						dateFormat="d MMM yyyy"
						minDate={minDate}
						maxDate={maxDate}
						onChange={(date) => field.onChange(date)}
						selected={field.value}
						withPortal
						className="inspection"
					/>
				)}
				name={name}
				control={control}
			/>
		</>
	);
};
