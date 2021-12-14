import { useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import useNumberWithMultiplier from "./useNumberWithMultiplier";

const ChildComponent1 = () => {
  const [value, setValue] = useState(0);
  const { current, addToCurrent } = useNumberWithMultiplier({ initial: 73 });

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Initial 73, default random multiplayer, only adding: {current}
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
      </Card.Body>
    </Card>
  );
};

export default ChildComponent1;
