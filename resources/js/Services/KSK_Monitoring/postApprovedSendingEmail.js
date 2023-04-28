import axios from "axios";

class postApprovedSendingEmail{
    static async ApprovedSendingEmail(obj){
        try {
            const result = await axios.post('api/ApprovedSendingEmail' , obj)
            return result.data
        } catch (error) {
            console.log(error)
            return 'error'
        }
    }
}

export default postApprovedSendingEmail;