const Initial_State = {
    name: "Zain Ramzan",
    email: "zainramzan7133@gmail.com"
}

export default (state = Initial_State,action) => {
    console.log("action === >",action);
    return state;
}