# Stage 3 - Atomic & SOLID

When creating UI it's important to know what constitutes a component and what does not. Where does a components single responsibility begin and end? How do we create components that make logical sense and follow a pattern we can move forward with intuitively? Atomic design patterns and SOLID engineering principles help with this significantly.

## Outcomes

- Understand the difference between Atoms, Molecules and Organisms
- Understand the SOLID principles and how they relate to react

## Instructions

- Read the blog posts and develop an understanding of these concepts
- Create the below folder structure

```
  src/
    components/
      atoms/
      molecules/
      organisms/
      index.ts
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
          index.ts <-- generate a default import
          Button.component.tsx. <-- component code here
          Button.styles.tsx. <-- component styles here
        ...
      ...
    ...
  ...
```

## Resources

- [SOLID and React](https://medium.com/@jaymykels69/s-o-l-i-d-principles-with-react-cd43fc93b1be)
- [Atomic Design as a concept](https://bradfrost.com/blog/post/atomic-web-design/)
- [Atomic and React](https://blog.usejournal.com/thinking-about-react-atomically-608c865d2262)
