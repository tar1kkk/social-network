import Post from "./post/post";

const MyPosts = () => {
	return <div>
		<div>My posts</div>

		<div><textarea></textarea>
			<button>add post</button></div>
		<div className="post">
			<Post message='Hi,how are u?' />
			<Post message="It's my first post" />
		</div>
	</div>
}
export default MyPosts;