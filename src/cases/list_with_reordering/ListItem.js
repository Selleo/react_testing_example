import { ReactComponent as ChevronUp } from "./chevron-compact-up.svg";
import { ReactComponent as ChevronDown } from "./chevron-compact-down.svg";
import { Button } from "react-bootstrap";

const ListItem = ({ item, position, reorder, isLast }) => {
  return (
    <li style={{ display: "flex", gap: "15px" }}>
      <Button
        style={{ visibility: position === 0 ? "hidden" : "visible" }}
        size="sm"
        onClick={() =>
          reorder({ currentPosition: position, newPosition: position - 1 })
        }
      >
        <ChevronUp />
      </Button>

      <Button
        style={{ visibility: isLast ? "hidden" : "visible" }}
        size="sm"
        onClick={() =>
          reorder({ currentPosition: position, newPosition: position + 1 })
        }
      >
        <ChevronDown />
      </Button>

      {item.name}
    </li>
  );
};

export default ListItem;
