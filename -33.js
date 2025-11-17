const namee = document.querySelector(".namee");
const image = document.querySelector("img");
const Follower = document.querySelector(".Follower");
const Following = document.querySelector(".Following");
async function API() {
  try {
    const api = fetch("https://api.github.com/users/FAHADAZHAR806");
    const data = await api;
    const response = await data.json();
    namee.innerHTML = response.name;
    image.setAttribute("src", `${response.avatar_url}`);
    Follower.innerHTML = response.followers;
    Following.innerHTML = response.following;
  } catch (error) {
    console.log("Some Thing Went Wrong", error);
  }
}

API();
