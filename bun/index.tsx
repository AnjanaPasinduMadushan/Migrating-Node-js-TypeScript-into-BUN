async function fetchUserName() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const user = await response.json();
  console.log(user.name);
}

fetchUserName();