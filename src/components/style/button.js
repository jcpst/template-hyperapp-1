import { h } from 'hyperapp'

export default (props, children) => (
  <button class="w3-btn w3-white w3-border" onclick={props.action}>
    {children}
  </button>
)
