import Post from "./post/post";
import './MyPosts.css';


const MyPosts = () => {
	return <div className="myPosts">
		<div className="title">My posts</div>
		<textarea className="txt" id="" cols="35" rows="2"></textarea>
		<div><button className="button">Add post</button></div>
		<div className="post">
			<Post message='Hi,how are u?' />
			<Post message="It's my first post" />
		</div>
	</div >
}
export default MyPosts;