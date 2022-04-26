# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

![](/images/Screenshot-Frontend-Mentor-Single-Price-Grid%20Component.png)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/single-price-grid-component-solution-using-tailwind-css-BJUrwT4H5)
- [Live site URL](https://antonio-single-price-grid-component.netlify.app/)

## My process

### Built with

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.
- Mobile-first workflow
- CSS Grid

### What I learned

I learned how to use Grid with Tailwind CSS. I first set the number of columns to one for mobile and added a break point for larger devices. At larger widths the columns are set to two and the first element is set to span to those columns. Grid then automatically organizes the layout.

```
// grid container
<div class="grid grid-col-1 m-auto md:grid-cols-2">
	<div>Element 1</div> // expand to two columns on larger screens
	<div>Element 2</div>
	<div>Element 3</div>
</div>
```

Also learned how to center a text inside a span to get that effect seen in the design.

```
<span class="text-slate-50 text-3xl font-bold"> &dollar;29 </span>
<span class="text-lightGray/50 h-10 inline-flex align-middle px-1">per month</span>

```

### Useful resources

- [Grid Template Columns](https://tailwindcss.com/docs/grid-template-columns) - Utilities for specifying the columns in a grid layout.
- [Grid Column Start / End](https://tailwindcss.com/docs/grid-column) - Utilities for controlling how elements are sized and placed across grid columns.
- [How to center text in a span](https://stackoverflow.com/questions/732337/how-do-i-vertically-align-something-inside-a-span-tag)

## Author

👤 **Antonio Lopez**

- Website: [Antonio Lopez](https://www.antoniolopez.me/)
- Github: [@antonio-lopez](https://github.com/antonio-lopez)
- Frontend Mentor: [@antonio-lopez](https://www.frontendmentor.io/profile/antonio-lopez)
