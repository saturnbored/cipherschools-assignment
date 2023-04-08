import React, { useState } from "react";
import { Box, Heading, Textarea, Button } from "@chakra-ui/react";
import InterestsModal from "./Modal/InterestsModal";

export default function Interests() {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(!isEditing);
    // Make a PUT request to the server to update the user's Interests section
  };

  const interestCategory = [
    {
      category: "App Development",
      isSelected: false,
    },
    {
      category: "Web Development",
      isSelected: false,
    },
    {
      category: "Game Development",
      isSelected: false,
    },
    {
      category: "Data Structures",
      isSelected: false,
    },
    {
      category: "Programming",
      isSelected: false,
    },
    {
      category: "Machine Learning",
      isSelected: false,
    },
    {
      category: "Data Science",
      isSelected: false,
    },
    {
      category: "Others",
      isSelected: false,
    },
  ];

  const [interests, setInterests] = useState(interestCategory);

  return (
    <Box display="flex" flexDir="column">
      <Box display="flex" flexDir="row" justifyContent="space-between" mb="4">
        <Heading as="h3" size="md" textTransform="uppercase">
          Interests
        </Heading>
        <Button
          bg="orange"
          size="sm"
          px="4"
          display="block"
          onClick={handleClick}
        >
          Edit
        </Button>
      </Box>

      {isEditing && (
        <InterestsModal
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          interests={interests}
          setInterests={setInterests}
        />
      )}

      <Box display="flex" gap="6" fontSize="sm" flexWrap="wrap" maxWidth="70vw">
        {interests.map((interest, index) => {
          return (
            interest.isSelected && (
              <Box key={index} ml="1" bgColor="orange.100" textColor="orange.500" px="3" borderRadius="10" boxShadow="md" py="1">
                {interest.category}
              </Box>
            )
          );
        })}
      </Box>
    </Box>
  );
}
