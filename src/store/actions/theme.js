import { CHANGE_THEME } from 'store/actions-type'
export const changeTheme = (payload) => {
    const type = payload.swipe ? 'light' : 'dark'
    return {
        type: CHANGE_THEME,
        payload: {
            type: type,
            swipe: payload.swipe
        }
    }
}