// import HomeDepartment from "@/components/home/home-department";
import LandingWrapper from "@/components/landing-wrapper";
import { redirect } from "next/navigation";
import MainPage from "./(main)/page";

const Home = () => {
  // redirect("/home");
  return (
    <LandingWrapper>
      <MainPage />
    </LandingWrapper>
  );
};

export default Home;
