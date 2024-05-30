import computer from "../assets/computer.png";
import Text from "../components/text";

function HelloSection(): React.ReactElement {
  return (
    <section className="flex-1 flex bg-primary items-center justify-center pt-8 pb-16">
      <div className="max-w-base flex items-center">
        <img src={computer} alt="" />
        <div className="ml-16">
          <h1 className="text-tertiary text-xxl font-black font-poppins">
            hello!
          </h1>
          <div>
            <Text bold className="text-white text-md">
              Lorem ipsum dolor sit amet consectetur. Malesuada erat pretium mi
              in amet integer.
            </Text>
            <div className="mt-8">
              <Text className="text-white text-md">
                Amet at amet nisl leo ac mi. Tristique metus ullamcorper netus
                augue dictum gravida.
              </Text>
            </div>
            <div className="mt-8">
              <Text className="text-white text-md">
                Amet at amet nisl leo ac mi. Tristique metus ullamcorper netus
                augue dictum gravida.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelloSection;
