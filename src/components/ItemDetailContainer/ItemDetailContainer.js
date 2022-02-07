import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import prod from '../../products';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => { 

        const promiseDetail = new Promise((resolve ,reject) =>{ 
            setTimeout(() => {
                resolve(prod)
            },2000)
        })
        promiseDetail.then((res) => {setDetails(res);
        }).catch((error) => {
            console.log(error)
        })

        console.log(details)

    },);
  
    return (
        <div className='detailContainer'>
            {
          details.map((detail) => (
              <ItemDetail key={detail.id} detail={detail}>
              </ItemDetail>
            )).slice(0,1)
      }
        </div>
    );
};

export default ItemDetailContainer;

