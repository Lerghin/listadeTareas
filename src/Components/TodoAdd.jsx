import React from 'react';
import { useForm } from '../Hooks/useForm.js';


 const TodoAdd = ({ handleNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1)return;

		let newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='¿Que servicio debemos dar y el nombre de tu mascota?'
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
};

export default TodoAdd