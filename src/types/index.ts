export type UserResponseType = {
    auth: {
      token: string
    },
    user: {
      username: string,
      id: string,
      login: string
    }
  }

export type UserType = {
  login: string,
  userID: string,
  username: string,
  token: string
}

export interface WheelEvent extends Event {
  wheelDelta?: number
}

export type ScreenType = "mobile" | "tablet" | "desktop" | "lg" | null
