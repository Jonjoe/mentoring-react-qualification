import { Repo } from "../"

async function asyncGetRepos(): Promise<Repo[]> {
  const queryUrl = "https://api.github.com/users/jonjoe/repos?per_page=100";

  const queryOptions = {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json"
    }
  };

  const response = await fetch(queryUrl, queryOptions);

  return response.json();
}

export default asyncGetRepos
