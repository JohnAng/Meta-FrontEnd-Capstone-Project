import { Avatar, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am John!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
	<FullScreenSection
		justifyContent="center"
		alignItems="center"
		isDarkBackground
		backgroundColor="#2A4365"
	>
		<Avatar
			size="2xl"
			name="Ioannis Angelakos"
			src="https://avatars.githubusercontent.com/u/11021994?s=400&u=4d94bd0eb38d6ed0a0b266b2e824e3e24806bc69&v=4"
		/>

		<VStack spacing={10}>
			<p>{greeting}</p>
			<Heading as="h1" size="2xl">
				{bio1}
			</Heading>
		</VStack>

		<VStack spacing={2}>
			<Heading as="h2" size="2xl">
				{bio2}
			</Heading>
		</VStack>
	</FullScreenSection>
);

export default LandingSection;
