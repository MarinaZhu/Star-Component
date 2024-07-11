import { css } from "lit";

export const styles = css`
  :host {
    --star-color-default: lightgray;
    --star-color-selected: #edb409;
    --star-color-disabled: #a6a6a5;
    --star-size-small: 20px;
    --star-size-medium: 26px;
    --star-size-large: 32px;
    display: inline-block;
  }

  /* Container Styles */
  .star-rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    outline: none;
  }

  /* Input Styles */
  .star-rating__input {
    opacity: 0;
    position: absolute;
  }

  /* Label Styles */
  .star-rating__label {
    cursor: pointer;
    padding: 0.2em;
    color: var(--star-color-default);
    display: flex;
    align-items: center;
    transition: color 0.3s;
  }

  .star-rating__label--selected {
    color: var(--star-color-selected);
  }

  .star-rating__label--disabled {
    color: var(--star-color-disabled);
  }

  /* Disabled State */
  .star-rating--disabled .star-rating__label {
    color: var(--star-color-disabled);
  }

  /* Focus State */
  .star-rating:focus {
    box-shadow: 0 0 0 2px rgba(21, 156, 228, 0.4);
  }

  /* Hover State */
  .star-rating input:not(:checked):not(:disabled) ~ label:hover,
  .star-rating input:not(:checked):not(:disabled) ~ label:hover ~ label {
    color: var(--star-color-selected);
  }

  /* SVG Size Styles */
  .star-rating__label--small svg {
    width: var(--star-size-small);
    height: var(--star-size-small);
  }

  .star-rating__label--medium svg {
    width: var(--star-size-medium);
    height: var(--star-size-medium);
  }

  .star-rating__label--large svg {
    width: var(--star-size-large);
    height: var(--star-size-large);
  }
`;
