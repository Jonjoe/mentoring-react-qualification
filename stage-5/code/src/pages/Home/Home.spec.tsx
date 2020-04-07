import React from "react";
import renderer from "react-test-renderer";

import HomePage, {filterRepos} from "./Home.page";

test("Homepage renders as expected", () => {
  const component = renderer.create(
    <HomePage/>
  );

  const tree = component.toJSON();
  
  expect(tree).toMatchSnapshot();
});


test('filterRepos() will reduce the repo array based on passed search term', () => {
  const dummyRepos = [
    {
      url: 'http://gogole.com',
      name: 'This is a name'
    },
    {
      url: 'http://gogole.com',
      name: 'another name'
    },
    {
      url: 'http://gogole.com',
      name: 'This is a name'
    },
    {
      url: 'http://gogole.com',
      name: 'another name'
    }
  ]
 
  const expectedResult: any = [
    {
      url: 'http://gogole.com',
      name: 'This is a name'
    },
    {
      url: 'http://gogole.com',
      name: 'This is a name'
    }
  ]

  const actualResult = filterRepos(dummyRepos, 'is')

  expect(actualResult).toEqual(expectedResult)
})
