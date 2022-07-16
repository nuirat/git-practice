Tweeter = function ()
{
    return  {
        posts:[],
        postIdCounter:0,
        commentIdCounter:0,
        getPosts:function(){
        return this.posts
        },
        addPost:function(text){
            this.posts.push({
                'text':text,
                'id':'p'+(this.posts.length >0 ?parseInt(this.posts[this.posts.length-1].id.slice(1))+1:1),
                'comments':[]
            })
            this.postIdCounter+=1
        },
        removePost: function(postId){
        this.posts=this.posts.filter(post => post.id!=postId)
        },
        addComment :function(postId,comment)
        {
        let postIndex=this.posts.indexOf(this.posts.find(post => post.id==postId))
        this.posts[postIndex].comments.push({
            'text':comment,
            'id':'c'+( this.posts[postIndex].comments.length >0 ? parseInt(this.posts[postIndex].comments[ this.posts[postIndex].comments.length-1].id.slice(1))+1:1),
            
        })
        },
        removeComment: function(postId,commentId)
        {
            let postIndex=this.posts.indexOf(this.posts.find(post => post.id==postId))
            let commentIndex=this.posts[postIndex].comments.indexOf(this.posts[postIndex].comments.find(comment => comment.id==commentId))
            this.posts[postIndex].comments=this.posts[postIndex].comments.filter(comment => comment.id!=commentId)

        },
        }
}



