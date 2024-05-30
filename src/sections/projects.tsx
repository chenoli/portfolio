import Text from "../components/text";

import placeholder from "../assets/placeholder-project.png";

function ProjectsSection(): React.ReactElement {
  return (
    <section className="flex justify-center bg-secondary py-8 pb-16">
      <div className="flex flex-col max-w-base">
        <Text bold className="text-white text-xxl text-center">
          projects
        </Text>
        <div className="px-16 mt-16">
          <img
            src={placeholder}
            alt=""
            className="rounded-xl h-[480px] w-base"
          />
        </div>
        <div className="mt-16 flex flex-col">
          <Text bold className="text-xl">
            lorem ipsum
          </Text>
          <Text className="text-white text-base">
            Lorem ipsum dolor sit amet consectetur. Eget non dignissim cursus
            sit.
          </Text>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
