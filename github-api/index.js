function fetchdata(event){
  event.preventDefault()
  username= "aswingt65"  //change username to view your repositories
  repos.innerHTML=""
  fetch(`https://api.github.com/users/${username}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.getElementById("name").innerText = data.name;
    img.src = data.avatar_url;
    followers.innerText=data.followers

  });


fetch(`https://api.github.com/users/${username}/repos`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((repo) => {
      const repoCard = document.createElement("div");
      repoCard.classList.add("repo");
      repoCard.innerHTML = `
                    <h2>${repo.name}</h2>
                    <div class="star-fork-container">
                    <h3 ><i class="fa-regular fa-star"></i> ${repo.stargazers_count} </h3>
                    <h3><i class="fa-solid fa-code-fork"></i> ${repo.forks_count}</h3>
                </div>
                <a href="https://github.com/${username}/${repo.name}">View on Github</a>
                </div>`;
                
            repos.appendChild(repoCard);
    });
  });
}
