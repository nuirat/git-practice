const tweeter = Tweeter()
const renderer = Renderer()
console.log(tweeter.getPosts());
renderer.renderPosts(tweeter.getPosts())
$('#post').on('click',function(){
    tweeter.addPost($('input').val())
    renderer.renderPosts(tweeter.getPosts())
})
$('#posts').on('click','.delete',function(){
    let postId=$(this).closest('.post').data().id
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())

})
$('#posts').on('click','.comment',function(){
    let postId=$(this).closest('.post').data().id
    tweeter.addComment(postId,$(this).closest('.post').find('.input').val())
    renderer.renderPosts(tweeter.getPosts())

})
$('#posts').on('click','.delete-comment',function(){
    let postId=$(this).closest('.post').data().id
    let commentId=$(this).closest('div').find('.comments').data().id
    tweeter.removeComment(postId,commentId)
    renderer.renderPosts(tweeter.getPosts())

})