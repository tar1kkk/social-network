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
	return (
		<div className='content'>
			<div className='dialogs'>
				<div className="dialogs-item">
					<DialogsItem name='Sasha' id='1' />
					<DialogsItem name='Misha' id='2' />
					<DialogsItem name='Andey' id='3' />
				</div>
				<div className="messages">
					<DialogsMessage message='Hi' />
					<DialogsMessage message='My name is Taras' />
					<DialogsMessage message='Yo' />
					<DialogsMessage message='Yo' />
					<DialogsMessage message='Yo' />
				</div>
			</div>
		</div>
	)
}

export default Dialogs;