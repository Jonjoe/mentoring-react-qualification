import React from "react";

import { Input, Loader, Page, List } from "./components";

async function asyncGetRepos() {
  const queryUrl = "https://api.github.com/users/jonjoe/repos?per_page=100";

  const queryOptions = {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json"
    }
  };

  const response = await fetch(queryUrl, queryOptions);

  return response.json();
}

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [repos, setRepos] = React.useState([]);
  const [reposLoading, setReposLoading] = React.useState(true);

  React.useEffect(() => {
    asyncGetRepos().then(data => {
      setRepos(data);
      setReposLoading(false);
    });
  }, []);

  const filteredRepos: any = repos.filter((repo: any) =>
    repo.name.includes(searchTerm)
  );

  return (
    <Page>
      <Input
        onChange={inputValue => setSearchTerm(inputValue)}
        value={searchTerm}
      />

      {reposLoading ? <Loader /> : <List data={filteredRepos} />}
    </Page>
  );
}

export default App;
