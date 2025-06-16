window.addEventListener("DOMContentLoaded", function () {
  let posts = [
    { title: "Post1", author: "author1", body: "this is the post1 body" },
    { title: "Post2", author: "author2", body: "this is the post2 body" },
    { title: "Post3", author: "author3", body: "this is the post3 body" },
  ];
  //1. use callback functions if you want some code to wait for the other code to run..
  // function createPost(post,cb) {
  //   setTimeout(function () {
  //     posts.push(post); //add the given posts to the post array on the top
  //     cb(); //this cb will be called once all functionallity is completed
  //   }, 3000);
  // }

  // function getPosts() {
  //   setTimeout(function () {
  //     posts.forEach(function (post) {
  //       // document.querySelector("#output").innerText += post.title;
  //       document.querySelector("#output").innerHTML += `Title: ${post.title} <br/> Author: ${post.author}<br/> Body: ${post.body}<br/> --------------<br/>`;
  //     });
  //   }, 3000);
  // }

  // createPost({ title: "Post4", author: "author4", body: "this is post4 body" },getPosts);

  function createPost(post) {
    return new Promise(resolve, reject) {
      setTimeout(() => {
        posts.push(post)
      })
    };
  }
});


//2. now we would like to solve this problem with promises.



