const defaultHandler = (param) => new Promise((resolve) => resolve(param))

// mocking to simplify auth logic as we are not testing it in JEST tests
export const Auth = {
  signIn: jest.fn(defaultHandler),
  signOut: jest.fn(defaultHandler),
  currentAuthenticatedUser: jest.fn(defaultHandler),
  federatedSignIn: jest.fn(defaultHandler),
  forgotPasswordSubmit: jest.fn(defaultHandler),
  forgotPassword: jest.fn(defaultHandler),
  currentSession: jest.fn(defaultHandler),
  changePassword: jest.fn(defaultHandler),
  resetPassword: jest.fn(defaultHandler),
}

// mocking for performance reasons
// in the whole app we imported only Auth, Hub and Amplify objects.
// this lead to importing the big aws-amplify package and slowing down tests execution speed
// completely mocking all three objects gave us performance benefit
export const Hub = {
  register: {},
  dispatch: (channel, payload) => {
    Object.values(Hub.register).forEach((callback) =>
      callback({ channel, payload })
    )
  },
  listen: (regex, callback) => {
    const id = Date.now()
    Hub.register[id] = callback
    return () => {
      delete Hub.register[id]
    }
  },
}

const Amplify = { configure: jest.fn() }

export default Amplify
