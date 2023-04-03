import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
	Textarea,
	VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useAlertContext } from "../context/alertContext";
import useSubmit from "../hooks/useSubmit";
import FullScreenSection from "./FullScreenSection";

const LandingSection = () => {
	const { isLoading, response, submit } = useSubmit();
	const { onOpen } = useAlertContext();

	const formik = useFormik({
		initialValues: {
			firstName: "",
			email: "",
			type: "",
			comment: "",
		},
		onSubmit: (values, actions) => {
			submit("", values);
			onOpen(response.type, response.message);
			response.type == "success" && actions.resetForm();
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required("Required"),
			email: Yup.string().email("Invalid email").required("Required"),
			type: "",
			comment: Yup.string()
				.min(25, "Must be at least 25 characyers")
				.required("Required"),
		}),
	});

	return (
		<FullScreenSection
			isDarkBackground
			backgroundColor="#512DA8"
			py={16}
			spacing={8}
		>
			<VStack w="1024px" p={32} alignItems="flex-start">
				<Heading as="h1" id="contactme-section">
					Contact me
				</Heading>
				<Box p={6} rounded="md" w="100%">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							formik.handleSubmit(e);
						}}
					>
						<VStack spacing={4}>
							<FormControl
								isInvalid={
									formik.errors.firstName &&
									formik.touched.firstName
								}
							>
								<FormLabel htmlFor="firstName">Name</FormLabel>
								<Input
									id="firstName"
									name="firstName"
									errorBorderColor="red.300"
									onChange={formik.handleChange}
									value={formik.values.firstName}
									onBlur={formik.handleBlur}
								/>
								<FormErrorMessage>
									{formik.errors.firstName}
								</FormErrorMessage>
							</FormControl>

							<FormControl
								isInvalid={
									formik.errors.email && formik.touched.email
								}
							>
								<FormLabel htmlFor="email">
									Email Address
								</FormLabel>
								<Input
									id="email"
									name="email"
									type="email"
									errorBorderColor="red.300"
									onChange={formik.handleChange}
									value={formik.values.email}
									onBlur={formik.handleBlur}
								/>
								<FormErrorMessage>
									{formik.errors.email}
								</FormErrorMessage>
							</FormControl>

							<FormControl>
								<FormLabel htmlFor="type">
									Type of enquiry
								</FormLabel>
								<Select id="type" name="type">
									<option value="hireMe">
										Freelance project proposal
									</option>
									<option value="openSource">
										Open source consultancy session
									</option>
									<option value="other">Other</option>
								</Select>
							</FormControl>

							<FormControl
								isInvalid={
									formik.errors.comment &&
									formik.touched.comment
								}
							>
								<FormLabel htmlFor="comment">
									Your message
								</FormLabel>
								<Textarea
									id="comment"
									name="comment"
									errorBorderColor="red.300"
									height={250}
									onChange={formik.handleChange}
									value={formik.values.comment}
									onBlur={formik.handleBlur}
								/>
								<FormErrorMessage>
									{formik.errors.comment}
								</FormErrorMessage>
							</FormControl>

							<Button
								type="submit"
								colorScheme="purple"
								width="full"
								isLoading={isLoading}
							>
								Submit
							</Button>
						</VStack>
					</form>
				</Box>
			</VStack>
		</FullScreenSection>
	);
};

export default LandingSection;
