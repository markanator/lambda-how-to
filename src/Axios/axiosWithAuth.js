import axios from "axios";



export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
  
    return axios.create({
      baseURL: "https://cors-anywhere.herokuapp.com/https://how-tos-bw.herokuapp.com",
      headers: {
        Authorization: token
      }
    });
  };

//   From TL- Michael Daniel to Everyone:  06:45 PM
// https://cors-anywhere.herokuapp.com/
// https://cors-anywhere.herokuapp.com/https://how-tos-bw.herokuapp.com
