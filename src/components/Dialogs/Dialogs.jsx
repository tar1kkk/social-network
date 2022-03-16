import { NavLink } from 'react-router-dom';
import './Dialogs.css';

const DialogsItem = (props) => {
	let path = '/dialogs/' + props.id;
	return <div className='item active'>
		<NavLink to={path}>{props.name}</NavLink>
	</div>
}
const DialogsMessage = (props) => {
	return <div className="message">{props.message}</div>
}


const Dialogs = (props) => {


	let dialogsData = [
		{ id: 1, name: 'Sasha' },
		{ id: 2, name: 'Misha' },
		{ id: 3, name: 'Andrey' }
	];

	let messagesData = [
		{ id: 1, messages: 'Hi' },
		{ id: 2, messages: 'My name is Taras' },
		{ id: 3, messages: 'Yo' },
		{ id: 4, messages: 'Yo' },
		{ id: 5, messages: 'Yo' },
	]



	let dialogsElement = dialogsData.map(dialog => {
		return <DialogsItem name={dialog.name} id={dialog.id} />
	})

	let messagesElement = messagesData.map(message => {
		return <DialogsMessage message={message.messages} />
	})

	return (
		<div className='content'>
			<div className='dialogs'>
				<div className="dialogs-item">
					{dialogsElement}
				</div>
				<div className="messages">
					{messagesElement}
				</div>
			</div>
		</div>
	)
}

export default Dialogs;