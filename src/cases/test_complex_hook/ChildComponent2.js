import { useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import useNumberWithMultiplier from "./useNumberWithMultiplier";

const ChildComponent2 = () => {
  const [value, setValue] = useState(0);
  const { current, addToCurrent, removeFromCurrent } = useNumberWithMultiplier({
    initial: -24,
    multiplier: 2,
  });

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Initial -24, 2x multiplayer, adding and deleting: {current}
        </Card.Title>
        <Card.Text>
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

export default ChildComponent2
