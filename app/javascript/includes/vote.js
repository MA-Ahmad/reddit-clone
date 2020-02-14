// $(document).ready(function(){
//     console.log('Jquery is loaded');

//     $('.vote').on('click', '.upvote, .downvote', function(){
//         var post_id = $(this).parent().data('id');
//         is_upvote = $(this).hasClass('upvote');

//         console.log(is_upvote)

//         $.ajax({
//             url: 'post/vote',
//             method: 'POST',
//             data: { post_id: post_id, upvote: is_upvote},
//             success: function(){
//                 console.log('Vote created')
//             }
//         })
//     })
// })