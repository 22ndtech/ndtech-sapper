import {mongoose} from "@db/mongoose"

function getBlogs(blogs){
  db = mongoose.database;
  db.collection("blogs");
  
  let subscribeFunctions = [];
  let nextId = 1;

  function set(newBlogs){
    blogs = newBlogs;
    subscribeFunctions.forEach(func => func(newBlogs));
  }

  function update(callback){
    set(callback(blogs));
  }

  function subscribe(callback){
    subscribeFunctions.push(callback);
    callback(blogs);

    return function(){
      subscribeFunctions = subscribeFunctions.filter(func => func !== callback);
    }
  }

  function addBlog(newBlog){
    update((blogs) => {
      blogs.push(newBlog);
      return blogs;
    })
  }

  function deleteBlog(id){
    update((blogs) => {
      blogs = blogs.filter((blog) => {
        blog.id != id;
      })

      return blogs;
    })
  }

  function getBlog(id) {
    const blog = blogs.find(j => j.id === id);
    return blog   
  }

  return {set, update, subscribe, addBlog, deleteBlog, getBlog};
}

export const BlogStore = getBlogs([
  { id: '1', title: "Test Blog #1", date: 1, details: "This is the #1 best blog post." },
  { id: '2', title: 'Test Blog #2', date: 1, details: "This is the #2 best blog post." },
  { id: '3', title: 'Test Blog #3', date: 1, details: "This is the #3 best blog post." },
]);