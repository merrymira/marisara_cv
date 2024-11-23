document.addEventListener('DOMContentLoaded', function() {
    const repoList = document.getElementById('repo-list');

    fetch('https://api.github.com/users/merrymira/repos')
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = repo.html_url;
                a.textContent = repo.name;
                li.appendChild(a);
                repoList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));
});
