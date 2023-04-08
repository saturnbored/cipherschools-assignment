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

const ProfilePage = () => {
  return (
    <Box display="flex">
      <Hide below="lg">
        <Sidebar />
      </Hide>
      <Box
        pl={{ lg: "6vw", md: "6vw", sm: "6vw", base: "6vw" }}
        border="1px solid red"
        width={"100%"}
        height="fit-content"
      >
        <Navbar />
        <Banner />
        <DashboardSidebar />
        <Show below="lg">
          <MobileNavbar />
        </Show>
      </Box>
    </Box>
  );
};

export default ProfilePage;
