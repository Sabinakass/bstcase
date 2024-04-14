import { getCookie } from "./cookie_helper"
import getData from "./parser"


const getUser = async () => {
    const token = getCookie('token')
    if (!token) {
        return null
    }

    const user = await getData("http://localhost:4000/get-user-info", token)
    // .then((user) => {
    //     return user
    // })
    // .catch((err) => {
    //     console.log(err)
    //     return null
    // })
    return user
}

export default getUser;