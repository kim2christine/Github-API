import axios from 'axios';

/**
 * Get information about a GitHub user.
 *
 * @param username GitHub username
 */
export async function getGitHubUserInfo(username: string): Promise<void> {
  try {
    // Make a GET request to the GitHub API
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
    );

    const userData = response.data;

    console.log('User Information:');
    console.log('Username:', userData.login);
    console.log('Name:', userData.name);
    console.log('Bio:', userData.bio);
    console.log('Location:', userData.location);
    console.log('Public Repositories:', userData.public_repos);
  } catch (error) {
    // Handle errors
    console.error('Error fetching GitHub user information:', error.message);
  }
}
