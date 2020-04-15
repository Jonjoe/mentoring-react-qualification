# Stage 3 - Atomic & SOLID

When creating UI it's important to know what constitutes a component and what does not. Where does a components single responsibility begin and end? How do we create components that make logical sense and follow a pattern we can move forward with intuitively? Atomic design patterns and SOLID engineering principles help with this significantly.

One technology we will be using to assist us in working more atomically is styled-components. This allows us to turn pieces of CSS into composable components. We use this in place of tooling like SCSS as it better leverages React's strengths and empowers us to follow our established patterns more closely. 

## Instructions

- Read the blog posts and develop an understanding of these concepts
- Create the below folder structure

```
  src/
    components/
      atoms/
      molecules/
      organisms/
      templates/
    ...
  ...
```

- Abstract the components into this folder structure following Atomic design patterns
- Each component should follow the below structure. The example is for a Button
```
  src/
    components/
      atoms/
        Button/
          Button.component.tsx. <-- component code here
          Button.styles.tsx. <-- component styles here
        ...
      ...
    .
    
    ..
  ...
```

If you get lost please see the code folder for a working example

## Outcomes

- Understand the difference between Atoms, Molecules and Organisms
- Understand the  basics of the Styled Components library
- Understand the SOLID principles and how they relate to react

## Resources

- [SOLID and React](https://medium.com/@jaymykels69/s-o-l-i-d-principles-with-react-cd43fc93b1be)
- [Atomic Design as a concept](https://bradfrost.com/blog/post/atomic-web-design/)
- [Atomic and React](https://blog.usejournal.com/thinking-about-react-atomically-608c865d2262)
- [Styled Components Library](https://styled-components.com/)
- [Styled Components Crash Course](https://www.youtube.com/watch?v=syqw5UJrfoc)
- [Styled Components Syntax Highlighting](https://styled-components.com/docs/tooling#syntax-highlighting)
