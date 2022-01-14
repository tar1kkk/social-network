import { NavLink } from 'react-router-dom';
import './Dialogs.css';

const Dialogs = (props) => {
	return (
		<div className='content'>
			<div className='dialogs'>
				<div className="dialogs-item">
					<div className='item active'>
						<NavLink to='/dialogs/1'>Sasha</NavLink>
					</div>
					<div className='item'>
						<NavLink to='/dialogs/2'>Misha</NavLink>
					</div>
					<div className='item'>
						<NavLink to='/dialogs/3'>Koval4yk</NavLink>
					</div>
				</div>
				<div className="messages">
					<div className="message">Hi</div>
					<div className="message">React developer?</div>
					<div className="message">yo</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;