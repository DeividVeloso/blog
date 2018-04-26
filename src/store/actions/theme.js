import { CHANGE_THEME } from 'store/actions-type'
export const changeTheme = (type) => {
    return {
        type: CHANGE_THEME,
        payload: type
    }
}