import axios from "axios";

class getEmployees{
    static async Employees(){
        try {
            const result = await axios.get('api/Employees')
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default getEmployees;