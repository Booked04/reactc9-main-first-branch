import React from 'react'
import Heading from './components/Heading'
import Card from './components/Card'
import Counter from './components/Counter'
import GithubSearch from './components/GithubSearch'

export default function App() {
  return (
    <div>
      {/* <Heading text="First heading" />
      <Heading text="Second heading"  />
      <Heading text="Third heading" />

      <Card title="Product 1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ratione quaerat facere, vero sequi quibusdam provident aliquid totam mollitia. Ratione odit cumque voluptas fuga, laboriosam facere nemo officiis atque neque.
        <p>asdasd</p>
        <button>CLick</button>
      </Card> */}

      <Counter />
      <GithubSearch />

    </div>
  )
}
