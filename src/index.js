import css from 'w3-css'
import { h, app } from "hyperapp"
import { Button, Container } from './components/style'

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const view = (state, actions) => (
  <Container>
    <h1>{state.count}</h1>
    <Button action={() => actions.down(1)}>-</Button>
    <Button action={() => actions.up(1)}>+</Button>
  </Container>
)

const counter = app(state, actions, view, document.body)
