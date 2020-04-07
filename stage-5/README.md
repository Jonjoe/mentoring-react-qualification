# Stage 5 - Testing

Testing is super important inside a UI project as they can become very complex. To do this we will look at several things:
- AAA testing
- Heavy abstraction in the render of a react component
- Understanding pure functions and why they are important and how to test them

## Instructions
- Review the posts and media
- Abstract logic into pure functions and test them
- Generate snapshots and write tests for components and views. for example:


## Outcomes
- Understand AAA
- Understand how to use snapshots\
- Understand how to write production code that's easily testable
```
 src/
    components/
      atoms/
        Button/
          __snapshots__ <-- Generated folder for snapshots.
          Button.component.tsx. <-- component code here
          Button.styles.tsx. <-- component styles here
          Button.stories.tsx. <-- component storybook
          Button.spec.tsx. <-- component tests
        ...
      ...
    ...
```


## Resources
- [AAA Testing Pattern](https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80)
- [Snapshot testing](https://jestjs.io/docs/en/snapshot-testing)
- [Jest Website](https://jestjs.io/)
- [Regression Testing](https://baseweb.design/blog/visual-regression-testing/)
- [Testing and React](https://techblog.commercetools.com/keeping-a-react-design-system-consistent-f055160d5166)
- [Good Read](https://simpleprogrammer.com/developers-poor-testers-can-done/)

