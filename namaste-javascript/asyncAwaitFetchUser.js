const API_URL = "https://api.github.com/users/akshaymarch7";

async function fetchUserInfo() {
  const githubUserResponse = await fetch(API_URL);
  console.log(githubUserResponse); // Response object

  const githubUserInfo = await githubUserResponse.json();
  console.log(githubUserInfo); // JSON
}

fetchUserInfo();
setTimeout(() => console.log("still fetching user..."), 60);
