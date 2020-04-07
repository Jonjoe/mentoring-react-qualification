import React from "react";

// Abstract the api call into its own service including its own types
import { Repo } from "../../modules/api/github"
import { github } from "../../modules/api"

// Everything imported from a centeral registry
import { Input, Loader, Page, List } from "../../components";


// Logic abstracted away from presentational components. The list renderes a list and thats it.
export function filterRepos(repos: any[], searchTerm: string) {
  return repos.filter((repo: any) => repo.name.includes(searchTerm));
}

function HomePage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [repos, setRepos] = React.useState<Repo[]>([]);
  const [reposLoading, setReposLoading] = React.useState(true);

  React.useEffect(() => {
    github.asyncGetRepos().then((repos: Repo[]) => {
      setRepos(repos);
      setReposLoading(false);
    });
  }, []);

  return (
    /* Page is a Template component responsible for macro layout */
    <Page>
      {/* Input is an Atom becuase its a single input field. If we added complexity to it then it would be promoted to Molecule.*/}
      <Input
        onChange={inputValue => setSearchTerm(inputValue)}
        value={searchTerm}
      />

      {/* Example of the only kind of logic allowed in the render */}
      {/* if we abstracted this away we would lose the structure of the component and the complexity will cause problems.*/}
      {reposLoading ? <Loader /> : <List data={filterRepos(repos, searchTerm)} />}
    </Page>
  );
}

export default HomePage;
