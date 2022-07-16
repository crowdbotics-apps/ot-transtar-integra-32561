import axios, { AxiosRequestConfig, AxiosInstance } from "axios"
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://ot-transtar-integra-32561.botics.co/api/v1/",
  timeout: 5000,
  headers: {
    "accept": "application/json",
    "X-CSRFToken": "xK9kjkFv6Aom90wbwYVFV4yZZrmVvMXC5Aj3YvYPPbsNkG4aflRl13wrcI9zCN3C",
    'Content-Type': "application/json"
  }
})
class Api {
  get = async (url: string) => {
    try {
      const { data } = await instance({ url: url, method: "GET" })
      return data
    } catch (e: any) {
      toast.error(e.message)
    }
  }

  create = async (url: string, data: any) => {
   try { const res = await instance({
      url: url,
      method: "POST",
      data
    })
     return res.data
   } catch (e: any) { 
      toast.error(e.message)
     
   }
  }

  update = async (url: string, data: any) => {
    try{const res = await instance({
      url: url,
      method: "PATCH",
      data
    })
      return res.data
    } catch (e: any) { 
      toast.error(e.message)
      
    }
  }
  delete = async (url: string, data: any = {}) => {
    try{const res = await instance({
      url: url,
      method: "DELETE",
      data
    })
      return res.data
    } catch (e: any) {
      toast.error(e.message)
      
    }
  }
}
export default new Api()
