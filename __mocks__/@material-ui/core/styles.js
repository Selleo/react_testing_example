const {
  withStyles,
  createStyles,
  createTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  alpha,
  emphasize,
  darken,
  lighten,
  useTheme,
} = jest.requireActual('@material-ui/core/styles')

// another case of mocking for performance reasons
// in production app the makeStyles function was responsible for generating our custom styles
// in tests we don't need it and mocking it gave us significant performance improvement

export const makeStyles = () => {
  return () => {
    return {}
  }
}

export {
  withStyles,
  createStyles,
  createTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  alpha,
  emphasize,
  darken,
  lighten,
  useTheme,
}
