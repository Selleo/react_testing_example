## Example test setup

If you ever have problem with starting writing test for a component without tests check the example in this folder.

At first start with writing down all possible test cases based on those points:

- What is important for the user to see after the page loads
- Any user interactions on the page and expected results
- Differences in the UI based on entry data eg.
  - admin user should see something while regular user shouldn’t
  - data has specific properties that affect the UI (eg. not published vs published post)
  - data is empty
- ideally we should test errors during data loading or after user interaction

### 1st approach

In `./ExampleDashboardPage.testsetup.test.js`
We keep tests for all users in the same file.

Cons:

- the file is big and tests take a lot of time to run
- setup is a little bit more complicated

Pros:

- we can compare test cases between users relatively easily (if we collapse the the code in test cases)

### 2nd approach

We put tests for every user role into separate file `ExampleDashboardPage.testsetup.admin.test.js` `ExampleDashboardPage.testsetup.manager.test.js` `ExampleDashboardPage.testsetup.user.test.js` `ExampleDashboardPage.testsetup.guest.test.js` 

Cons:

- to compare the test cases between users we have to switch files

Pros:

- it's easier to manage smaller files and they run faster because they are run in parallel
- simpler setup

### Important info

`ExampleDashboardPage.js` is just a placeholder.

`AppSetup.js` and `apiMocks.js` are not implemented in this repository.
To learn more about them check [AppSetup](https://github.com/Selleo/workplace-organizer/blob/add-testing-setup/packages/client/src/testing/support/AppSetup/AppSetup.tsx) and [apiMocks](https://github.com/Selleo/workplace-organizer/blob/add-testing-setup/packages/client/src/testing/apiMocks/user.ts)

...
