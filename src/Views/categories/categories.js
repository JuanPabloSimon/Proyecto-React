import React, {  useEffect, useState} from 'react'
//React Router Dom
import { useParams } from 'react-router-dom'

//Firebase
import { collection, query, getDocs, where } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import ItemList from '../../components/itemList/itemList'

const Categories = () => {
    const [categorieData, setCategorieData] = useState([])
    const cat = useParams()
    //console.log(cat)
    const prodCat = cat.type;

    useEffect(() => {
        const getData = async () => {
            const q = query(collection(db, "Productos"), where("type", "==", prodCat)
            );
            const prods = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                prods.push({...doc.data(), id: doc.id});
            })
            setCategorieData(prods)
        };
        getData()
    },[prodCat]);

  return (
    <div>
        <ItemList products={categorieData}></ItemList>
    </div>
  )
}

export default Categories