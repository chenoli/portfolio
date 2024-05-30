import Container from "./components/container";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

import ContactSection from "./sections/contact";
import ExperienceSection from "./sections/experience";
import HelloSection from "./sections/hello";
import ProjectsSection from "./sections/projects";

function App(): React.ReactElement {
  return (
    <Container>
      <Header />
      <Main>
        <HelloSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
