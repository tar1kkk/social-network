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


	return (
		<div className='content'>
			<div className='dialogs'>
				<div className="dialogs-item">
					<DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
					<DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
					<DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
				</div>
				<div className="messages">
					<DialogsMessage message={messagesData[0].messages} />
					<DialogsMessage message={messagesData[1].messages} />
					<DialogsMessage message={messagesData[2].messages} />
					<DialogsMessage message={messagesData[3].messages} />
					<DialogsMessage message={messagesData[4].messages} />
				</div>
			</div>
		</div>
	)
}

export default Dialogs;