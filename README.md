# Example app to show good practices in React testing

### Setup

run `yarn install`

### Start the app

run `yarn start`

### Run the tests

run `yarn test`

## Contribution rules

* Add your component to `/src/cases/yourfoldername`
* The component should be simplified version of your production component that you want test
* Add route to your component in `src/App.js`
* Add link to your route to the navigation in `src/App.js`

## Cases covered in this repo

* Non trivial component with description what to test, what not to test & test implementation
* Component with mocked useParams from reachRouter with ability to specify postId
