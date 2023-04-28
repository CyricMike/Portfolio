import axios from "axios";

class postUpdateEmployee{
    static async UpdateEmployee(obj){
        try {
            const result = await axios.post('api/UpdateEmployee')
            return result.data
        } catch (error) {   
            console.log(error)
        }
    }
}

export default postUpdateEmployee;