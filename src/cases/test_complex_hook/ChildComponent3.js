import { useEffect, useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import useNumberWithMultiplier from "./useNumberWithMultiplier";

const ChildComponent2 = () => {
  const [value, setValue] = useState(0);
  const { current, addToCurrent, removeFromCurrent, isFrozen, toggleFreeze } =
    useNumberWithMultiplier({
      multiplier: 15,
      initialFreeze: true,
    });

  useEffect(() => {
    const interval = setInterval(() => {
      toggleFreeze();
    }, 3000);
    return () => clearInterval(interval);
  }, [toggleFreeze]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Default initial, 15x multiplayer, autofreeze, adding and deleting:{" "}
          {current}
        </Card.Title>
        <Card.Text style={{ backgroundColor: isFrozen ? "#faa" : "#fff" }}>
          {isFrozen ? "VALUE FROZEN" : "VALUE EDITABLE"}
          <InputGroup className="mb-3">
            <FormControl
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </InputGroup>
        </Card.Text>
        <Button onClick={() => addToCurrent(value)}>Increase</Button>
        <Button onClick={() => removeFromCurrent(value)}>Decrease</Button>
      </Card.Body>
    </Card>
  );
};

export default ChildComponent2;
