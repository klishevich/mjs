// class MyButtonAlaReact {
//   constructor(name) {
//     this.name = name;
//     // this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     console.log(this.name);
//   }

//   render() {
//     return {
//         type: 'button',
//         buttonClick: this.handleClick
//         // buttonClick: this.handleClick.bind(this)
//         // buttonClick: () => this.handleClick()
//     };
//   }
// }

// const myButton = new MyButtonAlaReact('I am button, I am good!');
// const buttonRender = myButton.render();
// document.getElementById('hi').innerHTML = "<button onclick='buttonRender.buttonClick()'>Click Me</button>";

// function example
function MyButtonAlaReactConstructor(name) {
  this.name = name;
  this.handleClick = function () {
    console.log(this.name);
  }
  this.render = function () {
    return {
        type: 'button',
        buttonClick: this.handleClick
        // buttonClick: this.handleClick.bind(this)
        // buttonClick: () => this.handleClick()
    }
  }
  // this.handleClick = this.handleClick.bind(this);
}

const myButton = new MyButtonAlaReactConstructor('I am button, I am good!');
const buttonRender = myButton.render();
document.getElementById('hi').innerHTML = "<button onclick='buttonRender.buttonClick()'>Click Me</button>";
