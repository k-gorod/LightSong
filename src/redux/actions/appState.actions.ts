import { ScreenType } from "../../types"

export const setSidebarIsOpen = (payload: boolean) => ({
    type: 'SET_SIDEBAR_IS_OPEN',
    payload
})

export const setLogoHighlightState = (payload: boolean) => ({
    type: 'SET_LOGO_HIGHLIGHT_STATE',
    payload
})


export const setScreenType = (payload: ScreenType) => ({
    type: 'SET_SCREEN_TYPE',
    payload
})

