import MyPosts from './myposts/MyPosts';
import './Profile.css'

const Profile = () => {
	return <div className='content'>
		<img className='convert' src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
		<div><img src="https://vjoy.cc/wp-content/uploads/2020/03/1898362415_preview_fh83i5hebnw.jpg" className='ava' alt="" /></div>
		<MyPosts />
	</div>
}

export default Profile;