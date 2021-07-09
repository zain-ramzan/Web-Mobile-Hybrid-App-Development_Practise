const set_data = () => {
    return (dispatch) => {
        dispatch({ type: "Redux-Data", 
                    users: { 
                            name: "Zain Ramzan", 
                            email: "zainramzan7133@gmail.com",
                            rollno: 98765,
                            school: "   PIAIC" 
                        } },
        )
    }
}

export {
    set_data
}