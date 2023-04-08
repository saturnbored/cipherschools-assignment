import {
  Box,
  Button,
  Card,
  CardBody,
  Hide,
  Show,
  Text,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import MobileNavbar from "../Components/MobileNavbar";

const FollowerCard = ({}) => {
  return (
    <>
      <Card maxW={"fit-content"} shadow={"2xl"}>
        <CardBody
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box maxW={"fit-content"}>
            <CgProfile size={"100px"} />
          </Box>
          <Box maxW={"fit-content"} px="2px">
            <Text fontWeight={"semibold"} fontSize={"xl"}>
              Follower's Name
            </Text>
            <Text>Follower's Bio</Text>
            <Text>Follower Count</Text>
            <Button colorScheme="orange" width={"100%"}>
              Follow
            </Button>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

const Followers = () => {
  const followers = [
    {
      name: "Rahul",
      bio: "I am a software developer",
      followerCount: 100,
    },
    {
      name: "Rahul",
      bio: "I am a software developer",
      followerCount: 100,
    },
    {
      name: "Rahul",
      bio: "I am a software developer",
      followerCount: 100,
    },
    {
      name: "Rahul",
      bio: "I am a software developer",
      followerCount: 100,
    },
    {
      name: "Rahul",
      bio: "I am a software developer",
      followerCount: 100,
    },
    {
      name: "Rahul",
      bio: "I am a software developer",
      followerCount: 100,
    },
    {
      name: "Rahul",
      bio: "I am a software developer",
      followerCount: 100,
    },
    {
      name: "Aditya",
      bio: "I am a software developer",
      followerCount: 10,
    },
    {
      name: "Raj",
      bio: "I am a backend developer",
      followerCount: 1000,
    },
    {
      name: "Rohit",
      bio: "I am a frontend developer",
      followerCount: 10000,
    },
  ];

  return (
    <>
      <Box>
        <Hide below="lg">
          <Sidebar />
        </Hide>
        <Box pl={{ lg: "6vw", md: "6vw", sm: "6vw", base: "6vw" }}>
          <Navbar />
          <Box mt="10px" pl="20px">
            <Text pl={"20px"} fontWeight={"semibold"} fontSize={"xl"}>
              Users Following You
            </Text>
            <Box display={"flex"} flexWrap={"wrap"} gap="2vw">
              {followers.map((follower) => {
                return <FollowerCard />;
              })}
            </Box>
          </Box>
          <Show below="lg">
            <MobileNavbar />
          </Show>
        </Box>
      </Box>
    </>
  );
};

export default Followers;
