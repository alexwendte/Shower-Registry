// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.

//LOOK INTO WHAT THAT WOULD BE!!!!
const PostAPI = {

   posts: [
      {
        number: 1,
        title: 'First Post',
        content: 'THIS WAS MY FIRST LPSDIOFEJF'
      },
      {
        number: 2,
        title: 'Second Post',
        content: 'THIS WAS MY SECOND POST '
      }
    ],
    all: function() { return this.posts},
    get: function(id) {
      const isPost = p => p.number === id
      return this.posts.find(isPost)
    }
  }
 
 export default PostAPI
 