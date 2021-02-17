const post = { id: 22, title: 'My first post'};
const comments = [
	{postId: 22, content: 'loved this'},
	{postId: 3, content: 'not my favorite!'}
]

function commentsForPost(post, comments) {
	return comments.filter(function(comment) {
		return comment.postId === post.id
	})
}

console.log(commentsForPost(post, comments))
