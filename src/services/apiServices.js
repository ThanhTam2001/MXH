import axios from "../utils/axiosCustomsize"
const postLogin = (Account,Password) =>{
    return axios.post(`api/nguoidung/v1/login`,{
        Account:Account , 
        Password:Password
    })
  }

  export {postLogin} 