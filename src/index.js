import css from 'w3-css'
import { h, app } from "hyperapp"

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const Container = (props, children) => (
  <div class="w3-container">{children}</div>
)

const Button = (props, children) => (
  <button class="w3-btn w3-white w3-border" onclick={props.action}>
    {children}
  </button>
)

const view = (state, actions) => (
  <Container>
    <h1>{state.count}</h1>
    <Button action={() => actions.down(1)}>-</Button>
    <Button action={() => actions.up(1)}>+</Button>
  </Container>
)

const counter = app(state, actions, view, document.body)
