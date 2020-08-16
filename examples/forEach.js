// forEach includes push

let posts = ["Hi", "Howdy", "Suup"];

posts.forEach((post) => console.log(post));

posts.push("new ");

console.log(posts);

if (!posts.includes("Hello")) {
  posts.push("Hello");
}

console.log(posts);
