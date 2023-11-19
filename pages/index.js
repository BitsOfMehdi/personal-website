import Header from "./api/components/Header";
import Welcome from "./api/components/Welcome";
import Featured from "./api/components/Featured/Featured";
import Client from "./api/components/Client/Client";
import About from "./api/components/About/About";
import Services from "./api/components/services/Services";
import Me from "./api/components/Me";
import RecentPosts from "./api/components/RecentPosts";
import ContactMe from "./api/components/ContactMe";
import WebsiteAnalytics from "./api/components/WebsiteAnalytics";
import Copyright from "./api/components/Copyright";

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <Featured />
      <Client />
      <About />
      <Services />
      <Me />
      <RecentPosts />
      <ContactMe />
      {/*   <WebsiteAnalytics />
      <Copyright /> */}
    </>
  );
}
