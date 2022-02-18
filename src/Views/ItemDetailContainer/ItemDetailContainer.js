import React, {useState, useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import prod from '../../products';
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);

    var id = useParams();
    var userID = id.id;


    useEffect(() => { 
            const promiseDetail = new Promise((resolve ,reject) =>{ 
                setTimeout(() => {
                    resolve(prod.filter(p => p.id == userID))
                },500) 
            })
            
            promiseDetail.then((res) => {setDetails(res);   
            }).catch((error) => {
                console.log(error)
            })
    },[]);
  
    return (
        <div className='detailContainer'>
            {
          details.map((detail) => (
              <ItemDetail key={detail.id} detail={detail}>
              </ItemDetail>
            )) 
      }
        </div>
    );
};

export default ItemDetailContainer;

