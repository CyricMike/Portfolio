import axios from "axios";

class postApproveRequest{
    static async ApproveRequest(obj){
        try {
            const result = await axios.post('api/ApproveRequest' , obj)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default postApproveRequest;