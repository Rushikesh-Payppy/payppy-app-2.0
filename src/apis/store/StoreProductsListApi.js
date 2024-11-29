'use client';

function StoreProductsListApi(query)
{

    return fetch(`http://148.135.138.27:9000/store/products${query}`,{
            headers:{
                "x-publishable-api-key": "pk_bf713f1adcc6ed35b4881cb9eb1cfb448f057b0fee771da4eeadf6eb0aafb740"
            }
        })
        .then((data)=>{
            return data.json();
        })
        .catch((error)=>{
            console.log(error);
            return error;
        })


}

export default StoreProductsListApi;