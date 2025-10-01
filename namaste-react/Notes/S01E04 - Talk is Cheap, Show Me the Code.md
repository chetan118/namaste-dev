# Episode-04 | Talk is Cheap, Show Me the Code

## Building a Food App

- Name

  - NamasteFood

- Planning
  - Page
    - Heading
      - Left side
        - Logo
      - Right side
        - Home
        - About
        - Cart
    - Body
      - Search Bar (Search for a restaurant)
      - Restaurant cards
        - Each card
          - Image
          - Name
          - Star Rating
          - Cuisine
          - Delivery Time
    - Footer
      - Copyright
      - Links

## Config driven UI

UI is driven by the config data received from the backend. Data for Mumbai might be different for data for Delhi.

## Why do components need a unique key?

If there is no id assigned to the restaurant card components, and a new restaurant card shows up, react will not know where to insert the new restaurant card. So, react will re-render all the restaurant cards. This is why a warning is thrown when there is no key assigned to the components.

When a key is assigned to each restaurant card component, React knows which cards already existed and where the new card goes.

DO NOT USE INDEXES AS KEYS. React recommends not to use the indexes as keys since the order might change and the indexes might be different for cards.
