
export function saveToLocalStorage (state: any) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  
export function loadFromLocalStorage () {
    try {
        const serialisedState = localStorage.getItem('persistantState')
        if (serialisedState === null) return undefined
        const json = JSON.parse(serialisedState);
        delete json.appState.logoIsHighlighted
        return 
    } catch (e) {
        console.warn(e)
        return undefined
    }
}