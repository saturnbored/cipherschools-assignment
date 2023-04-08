import {
  Box,
  Button,
  Hide,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Banner from "../Components/Banner";
import DashboardSidebar from "../Components/DashboardSidebar";
import MobileNavbar from "../Components/MobileNavbar";
import AboutMe from "../Components/AboutMe";
import CipherMap from "../Components/CipherMap";
import OnTheWeb from "../Components/OnTheWeb";
import ProfessionalInfo from "../Components/ProfessionalInfo";
import PasswordSecurity from "../Components/PasswordSecurity";
import Interests from "../Components/Interests";

const ProfilePage = () => {
  return (
    <Box display="flex" gap="0">
      <Hide below="lg">
        <Sidebar />
      </Hide>
      <Box
        pl={{ lg: "5vw", md: "0", sm: "0", base: "0" }}
        border="1px solid red"
        width={"100%"}
        height="fit-content"
        bgColor={"#f2f5fa"}
      >
        <Box
          position={"fixed"}
          top="0"
          width={"100%"}
          bgColor="white"
          zIndex={"200"}
        >
          <Navbar />
          <Banner />
        </Box>
        <Box
          display="flex"
          width={"100%"}
          mt="200px"
          px={{ md: "20px", sm: "20px", base: "20px" }}
          pb = "100px"
        >
          {" "}
          {/* profile-page-content */}
          <Box
            width={"100%"}
            mr={{ lg: "150px" }}
            ml={{ lg: "40px" }}
            display="flex"
            flexDir={"column"}
            gap="40px"
          >
            <AboutMe />
            <hr />
            <CipherMap />
            <OnTheWeb />
            <ProfessionalInfo />
            <PasswordSecurity />
            <Interests />
          </Box>
          <Box position={"fixed"} right="0" height={"100%"} bgColor={"white"}>
            <Hide below="lg">
              <DashboardSidebar />
            </Hide>
          </Box>
          <Show below="lg">
            <MobileNavbar />
          </Show>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
