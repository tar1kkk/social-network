import './post.css'
const Post = (props) => {
	return <div className="post">
		<img src="https://ouch-cdn2.icons8.com/ff4g3gRpLNIhmtCndtgvoxebK656ZISWTajSBuV9Aac/rs:fit:912:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjA1/LzNiMGViNTcyLWQy/NDUtNDY5Mi1hZTVk/LTdjNWYxN2U1ZmNm/OS5zdmc.png" alt="" />
		<div>{props.message}</div>
	</div>
}

export default Post;
