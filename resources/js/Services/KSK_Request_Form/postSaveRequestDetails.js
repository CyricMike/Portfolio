import axios from "axios";

class postSaveRequestDetails{
    static async SaveRequestDetails(obj){
        try {
            const result = await axios.post('api/SaveRequestDetails1' , obj)
            return result.data
        } catch (error) { 
            console.log(error)
            return 'error'
        }
    }
}

export default postSaveRequestDetails;