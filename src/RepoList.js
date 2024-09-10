// RepoList.js
import React from "react";

const RepoList = ({ repos }) => {
  return (
    <div className="list-group">
      {repos.map((repo) => (
        <div key={repo.id} className="list-group-item mb-3 p-3 rounded shadow-sm border-left border-primary">
          <h3>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-primary">
              {repo.name}
            </a>
          </h3>
          <p className="text-secondary">{repo.description}</p>
          <p>
            ⭐ Stars: {repo.stargazers_count} | 🍴 Forks: {repo.forks_count}
          </p>
          <p>Language: <span className="badge badge-info">{repo.language}</span></p>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
