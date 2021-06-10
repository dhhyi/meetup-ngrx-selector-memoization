# Angular Portugal Meetup

Slides: https://dhhyi.github.io/meetup-ngrx-selector-memoization

Created using [remark](https://github.com/gnab/remark/wiki).

## Title ideas:

- ~~Having fun with NgRx Selector Memoization~~
- ~~Deep Dive into NgRx Selector Memoization~~
- NgRx Selector Memoization and why you should do it!

## Abstract

Learning about NgRx is hard! Perfecting the usage of Effects and Selectors is even harder!

In this talk we are going to focus on one specific aspect of NgRx Selectors: Memoization.
When used properly, it can significantly boost up your application performance by preventing unnecessary view render updates.

We are going to cover fundamental principles, portrait common problems and of course discuss solutions.

## Author BIO

Danilo is a developer at Evident and he has been working with Angular for about 4 years in the field of E-Commerce.
Because of his original background in server-side development, he likes to dig deep into framework and library internals.

## Resources

- https://angular.schule/blog/2020-01-ngrx-data-views
- https://dev.to/zackderose/ngrx-fun-with-createselectorfactory-hng

## Outline

### Fundamentals

- Tasks of selectors in an application

  - prepare data from store for view
  - adapt format
  - trigger changes when data changes
    -> OnPush change detection

- anatomy of a selector

  - basically just a `map` function
  - `createSelector`
    - at least one input
    - projector function
  - selector with props
    - deprecated

- What is Memoization

  - basically a cache
  - not explicit by key/hash but implicit by reference (default)

- How does Memoization work with NgRx Selectors by default
  - check if input is identical (via provided function)
    - return cache if it is
  - calculate projector output
  - new value: compare with cache (via provided function)
    - return new if differs
    - return cache if same

### Problems

- selectors (and OnPush change detection) require immutability

  - example for mutable change + fix

- projector creates new output that semantically doesn't change

  - "same" array returned on `filter`

- why selector with props should be (and is) deprecated
  - just one memoization for multiple parameters -> unusable if used for more then one parameter in same context
