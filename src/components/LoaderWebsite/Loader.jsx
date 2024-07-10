
import { ThreeCircles } from 'react-loader-spinner';
import { LodeWrapper } from './loader.styled';


export const Loader = () => {
  return (
<LodeWrapper>
     <ThreeCircles
  height="100"
  width="100"
  color="#660000	"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
      />
      </LodeWrapper>
  );
};