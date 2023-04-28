import axios from "axios";

class postgetLatestReferenceNo{
    static async getLatestReferenceNo(obj){
        try {
            const result = await axios.post('api/getLatestReferenceNo' , obj)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default postgetLatestReferenceNo;