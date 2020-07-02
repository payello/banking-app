export default function description(state = '', action) {
    switch (action.type) {
        case "CHANGE_DESCRIPTION":
            return action.payload
        default:
            return state
    }

}
