const projectsContainer = document.querySelector(".project-list");
const profile = document.querySelector(".profile");
const myReposList = document.querySelector(".my-repos");

window.onload = function(){ document.getElementById("loading").style.display = "none" }
function fetchGithubProfile() {
  fetch("https://api.github.com/users/bytesagar")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      updateProfileUi(data);
    });
}

const updateProfileUi = (data) => {
  const html = `
    <div class="profile__image">
          <img src=${data.avatar_url} alt={$data.name} />
        </div>
  
        <div classNam="profile__basic-info">
          <h2>
           
            <a href=${`https://github.com/${data.login}`} target="_blank" rel="noopener noreferrer">
              ${data.login}
            </a>
          </h2>
          <div class="profile__name">${data.name}</div>
          <div class="profile__location">
            <GoLocation class="profile__icons" /> ${data.location}
          </div>
        </div>
        <p class="profile__bio">${data.bio}</p>
        <div class="profile__follow-info">
          <div class="profile__followers">
            <h3>40</h3>
            <p>Followers</p>
          </div>
          <div class="profile__following">
            <h3>36</h3>
            <p>Following</p>
          </div>
        </div>
    `;
  profile.innerHTML += html;
};

function fetchRepos() {
  fetch("https://api.github.com/users/bytesagar/repos?sort=created&order=desc")
    .then((res) => res.json())
    .then((results) => {
      console.log(results);
      results.map((data) => {
        updateMyRepos(data);
      });
    });
}
const updateMyRepos = (data) => {
  const html = `
    <li class="repo__card">
    <h2>${data.name}</h2>
    <p class="repo__description">${data.description}</p>
    <p class="repo__made-with">
      <span>Made with: </span> ${data.language}
    </p>
    <a style="color: red; text-decoration: none; display: inline-block; border: 1px solid black; padding: 10px; " href="${data.html_url}" target="_black"> View Repo</a>
    
  </li>
    
    `;

  myReposList.innerHTML += html;
};

fetchGithubProfile();
fetchRepos();
