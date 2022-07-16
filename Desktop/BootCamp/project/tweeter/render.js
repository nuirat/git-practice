Renderer = function ()
{
 
    return{
    renderPosts:function (posts){
        $("#posts").empty()
        for(let post of posts) {
           
            $("#posts").append($(`<div class="post"  id =${post.id} data-id=${post.id}> ${post.text}</div>`))
            for (comment of post.comments){
                $(`#${post.id}`).append($(`<div id=${comment.id}> </div>`))
           $(`#${comment.id}`).append($(`<span class="delete-comment" > x </span>`))
            $(`#${comment.id}`).append($(`<span class="comments" data-id=${comment.id}> ${comment.text}</span>`))
           
        }
        $(`#${post.id}`).append($(`<div>  </div>`))
        $(`#${post.id}`).append($(`<input type text class="input" placeholder="got something to say? ">  </input>`))
        $(`#${post.id}`).append($(`<button type text class="comment"  ">Comment</button>`))
       
        $(`#${post.id}`).append($(`<div>  </div>`))

        $(`#${post.id}`).append($(`<button class="delete" > delete Post</button>`))
            
    }
    }
}
}