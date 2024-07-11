# Case Rating Component Usage

This document provides detailed instructions on how to use the `case-rating` component.

## Usage

Include the component in your HTML as shown below:

```html
<case-rating rating="3" total-stars="5" size="medium"></case-rating>

## Properties
rating: Number (default: 3) - The current rating value.
totalStars: Number (default: 5) - The total number of stars.
disabled: Boolean (default: false) - Disable the rating input.
size: String (default: 'medium') - The size of the stars. Options are 'small', 'medium', 'large'.

## Styles
You can customize the colors and sizes of the stars using CSS variables.

```css
--star-color-default: Default star color.
--star-color-selected: Selected star color.
--star-color-disabled: Disabled star color.
--star-size-small: Small star size.
--star-size-medium: Medium star size.
--star-size-large: Large star size.