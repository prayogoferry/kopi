import React, { Component } from 'react';


class cardMenu extends Component {
    state = {  }
    render() { 
        return (
            <div class="row">
  <div class="column">
    <div class="card">
      <h3>Card 1</h3>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Card 2</h3>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 3</h3>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 4</h3>
    </div>
  </div>
</div>

        );
    }
}
 
export default cardMenu;