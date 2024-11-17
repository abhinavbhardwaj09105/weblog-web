import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const ConfettiEffect = () => {
  const { width, height } = useWindowSize();

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={400}
      gravity={0.2}      
      wind={0.03}       
      tweenDuration={2500} 
    />
  );
};

export default ConfettiEffect;
