//const API_URL = 'https://api.github.com/users/octocat/repos';

import axios from 'axios';

// Function to make the GET request to the GitHub API to fetch user's repositories

/**
 // eslint-disable-next-line jsdoc/require-param-description,
  jsdoc/require-param-description
 *
 * @param username GitHub username and get their repos
 */
export async function getUserRepositories(username: string): Promise<void> {
  try {
    // Make a GET request to the GitHub API
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
    );

    const repositories = response.data;

    console.log(`Repositories for user ${username}:`);
    repositories.forEach((repo: any) => {
      console.log(repo.name);
    });
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error.message);
  }
}
