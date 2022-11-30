
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
        console.log(JSON.parse(serialisedState))

        return JSON.parse(serialisedState)
    } catch (e) {
        console.warn(e)
        return undefined
    }
}