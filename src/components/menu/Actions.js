const menu = {
  isMenuOpen: false,
}

const menuReducer = (state, action) => {
  switch (action.type) {
    case "MENU_TOGGLE": {
      return { ...state, isMenuOpen: !state.isMenuOpen }
    }
    default:
      return state
  }
}

const menuToggle = () => ({
  type: "MENU_TOGGLE",
})

export { menu, menuReducer, menuToggle }
