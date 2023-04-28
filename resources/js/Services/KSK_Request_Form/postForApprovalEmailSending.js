import axios from "axios";

class postForApprovalEmailSending {
    static async ForApprovalEmailSending(obj){
        try {
            const result = await axios.post('api/ForApprovalEmailSending' , obj)
            return result.data
        } catch (error) {
            console.log(error)
            return 'error'            
        }
    }
}

export default postForApprovalEmailSending;