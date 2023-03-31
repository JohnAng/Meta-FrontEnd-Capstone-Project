import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
	// Implement the UI for the Card component according to the instructions.
	// You should be able to implement the component with the elements imported above.
	// Feel free to import other UI components from Chakra UI if you wish to.
	return (
		<Box
			justifyContent="space-between"
			maxW="sm"
			bg="white"
			borderRadius="lg"
			// overflow="hidden"
		>
			<Image src={imageSrc} alt="Project Image" borderRadius="lg" />
			<Flex flexDirection="column" align="left" gap="2" m="1rem">
				<Heading
					color="black"
					fontWeight="bold"
					as="h4"
					lineHeight="tight"
					noOfLines={1}
					fontSize="md"
				>
					{title}
				</Heading>
				<Text color="gray" fontWeight="medium" fontSize="sm">
					{description}
				</Text>
				<Text color="black" fontWeight="medium" fontSize="md">
					Show more <FontAwesomeIcon icon={faArrowRight} size="1x" />
				</Text>
			</Flex>
		</Box>
	);
};

export default Card;
