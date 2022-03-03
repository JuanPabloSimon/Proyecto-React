import React, { useState, useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';


import TextField from '@mui/material/TextField';
import './finishPurchase.css'

const initialState = {
	name: '',
	lastName: '',
	email: '',
};


const FinishPurchase = () => {
    const {itemsAgregados, } = useContext(CartContext)
	const [comprador, setComprador] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState('');

    // console.log(itemsAgregados)

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setComprador({ ...comprador, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(comprador);
		const docRef = await addDoc(collection(db, 'Pedidos'), {
			comprador, ...itemsAgregados
		});
		console.log('Document written with ID: ', docRef.id);
		setPurchaseID(docRef.id);
		setComprador(initialState);
		console.log(itemsAgregados);
	};

	return (
		<div className='ContainerForm'>
			<h1>Finalizar Compra</h1>
			<form className='FormFinish' onSubmit={onSubmit}>
				<TextField
                    className='name'
					placeholder='Name'
					style={{ margin: 10, width: 400 }}
					value={comprador.name}
					name='name'
					onChange={handleOnChange}
				/>
				<TextField
                    className='LastName'
					placeholder='Last Name'
					style={{ margin: 10, width: 400 }}
					value={comprador.lastName}
					name='lastName'
					onChange={handleOnChange}
				/>
				<TextField
                    className='Email'
					placeholder='Email'
					style={{ margin: 10, width: 400 }}
					value={comprador.email}
					name='email'
					onChange={handleOnChange}
				/>
				<button className='btnASendAction submit'>Send</button>
			</form>
		</div>
	);
};

export default FinishPurchase;
