import { useCallback, useState } from "react";
import ListItem from "./ListItem";

export const defaultItems = [
  { id: "1", name: "Item1: Suspendisse porttitor mattis purus. In." },
  { id: "2", name: "Item2: Vestibulum fermentum risus quis magna." },
  { id: "3", name: "Item3: Phasellus lacinia eget metus nec." },
  { id: "4", name: "Item4: Mauris lacinia, diam quis vestibulum." },
  { id: "5", name: "Item5: Cras eu mauris a nulla." },
  { id: "6", name: "Item6: Praesent dignissim, felis id efficitur." },
  { id: "7", name: "Item7: Sed semper egestas felis, quis." },
  { id: "8", name: "Item8: Suspendisse maximus porta lorem, eu." },
];

const ListWithReordering = () => {
  const [items, setItems] = useState(defaultItems);

  const reorder = useCallback(({ currentPosition, newPosition }) => {
    setItems((curr) => {
      const moveDown = newPosition > currentPosition;
      const item = curr.slice(currentPosition, currentPosition + 1)[0];

      if (moveDown) {
        return [
          ...curr.slice(0, currentPosition),
          ...curr.slice(newPosition, newPosition + 1),
          item,
          ...curr.slice(newPosition + 1),
        ];
      }

      return [
        ...curr.slice(0, newPosition),
        item,
        ...curr.slice(currentPosition - 1, currentPosition),
        ...curr.slice(currentPosition + 1),
      ];
    });
  }, []);

  return (
    <div>
      <h1>Reordered list</h1>
      <ul>
        {items.map((item, index) => (
          <ListItem
            key={item.id}
            item={item}
            position={index}
            reorder={reorder}
            isLast={index === items.length - 1}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListWithReordering;
