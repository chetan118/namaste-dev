# Episode-05 | Let's Get Hooked

## Why use React if we can achieve the same results with HTML, CSS and JavaScript

- Improves the developer experience
- Do more on web page even with less code
- Write performant, scalable and production ready apps
- Also optimizes the web page, so that things happen very fast

## React Hooks

- Normal JS utility function - written by facebook devs in the react library
- useState()
  - super powerful state variables in React
  - _WHENEVER A STATE VARIABLE UPDATES, REACT WILL RE-RENDER THE COMPONENT_
- useEffect()

## Re-rendering - Behind the scenes

### Reconciliation Algorithm (React Fiber)

- DOM (Document Object Model) is like a tree.
- Suppose the "restaurant-container" node currently had 7 restaurnat-card nodes under it
- and upon filtering the data changes and we only have 3 restaurant-card nodes now
- React creates a virtual DOM of the component
- Virtual DOM is a respresentation of an actual DOM (i.e. React Element - i.e. JavaScript object)

### Diff Algorithm

- In React16, the new algorithm for calculating the difference between the two virtual DOMs came in.
- It calculates the diff and rerenders the component
