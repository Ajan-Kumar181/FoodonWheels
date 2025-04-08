import React, { useState, useEffect } from 'react';
import { GITHUB_USERURL } from '../Utils/Constants';

function GitHubUserData() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('Ajan-Kumar181'); // Default GitHub username

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // GitHub API endpoint
        const response = await fetch(GITHUB_USERURL+username);

        // Check if the request was successful
        if (!response.ok) {
          throw new Error('User not found');
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, [username]); // This effect runs whenever the username changes

  // If data is still loading or an error occurred
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{userData.name}</h1>
      <img src={userData.avatar_url} alt="User Avatar" width="100" />
      <p>Username: {userData.login}</p>
      <p>Followers: {userData.followers}</p>
      <p>Repositories: {userData.public_repos}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
}

export default GitHubUserData;
