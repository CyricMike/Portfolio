import axios from "axios";

class postForApprovalRequest{
    static async ForApprovalRequest(obj){
        try {
            const result = await axios.post('api/ForApprovalRequest' , obj)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default postForApprovalRequest;