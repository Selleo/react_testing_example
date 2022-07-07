## List reordering tests

Reordering is a quite common feature for lists. In this example we have reordering by clicking on up/down arrows, but drag&drop can also be tested.

https://react-dnd.github.io/react-dnd/docs/testing#react-testing-library 

```js
render(<Board />)
const boardSquares = screen.getAllByRole('gridcell')
const dropSquare = boardSquares[0]
const knight = boardSquares[18].firstChild

fireEvent.dragStart(knight)
fireEvent.dragEnter(dropSquare)
fireEvent.dragOver(dropSquare)
fireEvent.drop(dropSquare)
```
