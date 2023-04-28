import axios from "axios";

class postDisapproveRequest{
    static async DisapproveRequest(obj){
        try {
            const result = await axios.post('api/DisapproveRequest' , obj)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default postDisapproveRequest;