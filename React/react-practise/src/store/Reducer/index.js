const Initial_State = {

    users: [{
        name: "Zain Ramzan",
        email: "zainramzan7133@gmail.com"
    }]
}

export default (state = Initial_State, action) => {
    switch (action.type) {
        case "Redux-Data":
            return ({
                ...state
            })
    }
    return state
}