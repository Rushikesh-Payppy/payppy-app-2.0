'use client';

let publishKey="pk_bf713f1adcc6ed35b4881cb9eb1cfb448f057b0fee771da4eeadf6eb0aafb740";
function StoreCollectionsApi()
{
       return fetch('http://148.135.138.27:9000/store/collections',{
            headers:{
                'x-publishable-api-key': publishKey,
                'Content-Type': 'application/json'
            },
            credentials:'include'
        })
        .then((data)=>{
            return data.json();
        })
        .then((response)=>{
            return response;
        })
        .catch((error)=>{
            console.log(error);
            return error;
        })
}

export default StoreCollectionsApi;