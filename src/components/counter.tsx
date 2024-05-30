import CountUp from "react-countup";
import Text from "./text";

function Counter(): React.ReactElement {
  return (
    <div className="flex flex-col items-center">
      <Text className="text-primary font-bold text-xxl w-[168px] text-center">
        <CountUp start={0} end={26} duration={3} />
      </Text>
      <Text className="text-md text-center -mt-8 max-w-128">
        Projetos atendidos com excelência.
      </Text>
    </div>
  );
}

export default Counter;
