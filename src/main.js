import { createElement, Components, render } from './toy-react';

class MyComponents extends Components {
  constructor() {
    super()
    this.state = {
      a: 1,
      b: 2,
    }
  }
  render(){
    return <div>
      <h1>my Components</h1>
      <span>{this.state.a.toString()}</span>
      {this.children}
    </div>
  }
}

render(<MyComponents id="a" class="b">
  <div>123</div>
  <div></div>
  <div></div>
</MyComponents>, document.body)