import React, {Component} from 'react';

class MyComponent1 extends Component {
    render () {
        return (<div>Component 1</div>);
    }
}

class MyComponent2 extends Component {
    render () {
        return (<div>Component 2</div>);
    }
}

console.log('###### MyComponent1', MyComponent1);
console.log('###### MyComponent2', MyComponent2);

export { MyComponent1, MyComponent2 };

export default function () {
    console.log('Monkey madness');
}
