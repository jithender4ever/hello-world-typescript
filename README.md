## Note on dependencies

- `ts-node` is CLI tool for typescript, that compiles the .ts files to .js and executes the js code.
- `parcel-bundler` is a CLI tool that helps run TS code in the browser.
- Using `google maps API` to plot map. Specific API being used in `Maps Javascript API`.

## Basics

- Avoid `any` type at all times.

## When to use `type-annotations`?

- When a variable is declared on one line and initialization is done later.
- When we have a function that returns 'any' type. Eg: JSON.parse()
- When we have a variable whose type cannot be inferred correctly. Eg: Accepting multiple types absed on input

## When to use `type-inference`?

- Always! There is nothing actually to use inference. Instead we rely on it, when we dont specifically annotate a type.

## Functions

- No type inference on `arguments` to the function. Aways need an annotation.
- Type inference on the `returned value` of a function.

## Arrays

- Difference between arrays in JS and TS is that TS encourages array elements to be of consistent types.
- On arrays, type annotation is necessary when the array is initialized to an empty array. Else, type inference could be relied upon.

## Tuples

- Very rarely used.
- A new type in TS. Order of the elements in the array matters.
- One usecase of tuples is defining the headers of a `csv`.

## Interfaces

- Promotes code reuse.
- Make sure to only define the `generic` (required and reusable) properites as part of the interface.
- Create functions that accept args that are interface types, so the functions can be reusable.

## Classes

- TS heavily uses classes and therefore interfaces too.
- TS introduces `modifiers` in JS. `public`, `protected`, and `private`.

## Design Patterns - TS

- Consider having the classes implement an `interface` where possible. This helps `typescript` promt errors in the right places. Eg: Look at how `User` and `Company` classes implement `Mappable`.
- Consider using `access modifiers` (`private`) in classes to prevent developers from using the class properties/methods incorrectly.
- Typical TS file will contain `interface` definitions, followed by `class` definitions. Doing this promotes a lot of code reuse.

## Helpful Notes

- Google Maps `API Key` has been `secured` by restricting access to the specific website that can access the key. Done through `GCP Console`.
