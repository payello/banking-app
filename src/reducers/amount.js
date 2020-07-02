export default function amount(state = 0, action) {
    switch (action.type) {
        case "CHANGE_AMOUNT":
            return action.payload
        default:
            return state
    }

}
