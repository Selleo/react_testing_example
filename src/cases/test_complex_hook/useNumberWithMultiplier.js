import { useCallback, useState } from "react";

const getDefaultMultiplayer = () => Math.floor(Math.random() * 11) + 1;

const useNumberWithMultiplier = ({
  initial = 0,
  multiplier = getDefaultMultiplayer(),
  initialFreeze = false,
}) => {
  const [freeze, setFreeze] = useState(initialFreeze);
  const [current, setCurrent] = useState(initial);

  if (multiplier === 0) {
    throw Error("Multiplier cannot be 0");
  }

  const toggleFreeze = useCallback(() => {
    setFreeze((curr) => !curr);
  }, []);

  const addToCurrent = useCallback(
    (value) => {
      if (freeze) {
        return;
      }
      if (value > 0) {
        setCurrent((curr) => curr + value * multiplier);
      } else if (value < 0) {
        throw Error("Value is less than 0. Use removeFromCurrent");
      }
    },
    [freeze, multiplier]
  );

  const removeFromCurrent = useCallback(
    (value) => {
      if (freeze) {
        return;
      }

      if (value < 0) {
        setCurrent((curr) => curr - value);
      } else if (value > 0) {
        throw Error("Value is more than 0. Use addToCurrent");
      }
    },
    [freeze]
  );

  return {
    current,
    addToCurrent,
    removeFromCurrent,
    toggleFreeze,
    isFrozen: freeze,
  };
};

export default useNumberWithMultiplier;
