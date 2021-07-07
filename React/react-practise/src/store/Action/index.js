const set_data = () => {
    return (dispatch) => {
        console.log("hloo");
        dispatch({type: "Hello World! React Js"})
    }
}

export {
    set_data
}