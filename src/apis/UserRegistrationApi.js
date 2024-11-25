
import axios from 'axios';

async function UserRegisterApi(payloadObj)
{
    try {
        let response=await axios.post('https://payppy.in/auth/register',payloadObj)
    
        return response.data;
    } catch (error) {
        // console.error(error);
        if (error.status == 400 && error.response.data?.message === 'User already exists.') {

            return {
                status: 400,
                message: 'User already exists.'
            }

        }
    }

}

export default UserRegisterApi;