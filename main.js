const linksSocialMedia = {
  github: 'williamslews',
  youtube: 'channel/UCRK3RSPg0OZbtFjt3AqkaaA',
  instagram: 'williamslews',
  facebook: 'williamslews',
  twitter: 'williamslews'
}

function changeLinksSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}/`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userName.textContent = data.name
      userUrl.href = data.html_url
      userLogin.textContent = data.login
      userBio.textContent = data.bio
    })
}

changeLinksSocialMedia()

getGitHubProfileInfos()
