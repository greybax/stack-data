# stack-data

[![Greenkeeper badge](https://badges.greenkeeper.io/greybax/stack-data.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Simple stack implementation on ES6

## Install

    npm install --save stack-data

## Usage

### 2 ways for adding element in stack:

* in constructor ```new Stack(1,"2",3,[4, 5],6);```
* via ```push(elem)``` method

Also supports chaining mechanism like:

```js
 new Stack()
 .push(1)
 .push(2)
 .push(3)
 .push(4)
 
 // creates object with 4 elements 1,2,3,4
```

```js
// Examples of using stack-data

//Added stack elements in constructor
let preInitStack = new Stack(1,"2",3,[4, 5],6);
preInitStack.size;       //5

//Added elements classically via push()
let stack = new Stack();
stack.size;              //0
stack.push(1).push("2");
stack.size;              //2
stack.pop();             //"2"
stack.size;              //1
stack.peek();            //1
stack.size;              //1
```

## API

### push(elem)

```push``` - Pushes element into stack. Throws an ```StackException``` when parameter is empty.

#### elem

*Required*  
Type: `Object`

```elem``` - object which will be putted into stack

### pop()

```pop``` - Takes top element from the stack. Throws an ```StackException``` when the stack is empty.

### peek()

```peek``` - Peeks at the top element of the stack. Throws an ```StackException``` when the stack is empty.

### size

```size``` - Returns the size of the stack.

## License

MIT © Aleksandr Filatov <greybax@gmail.com> 

[npm-url]: https://npmjs.org/package/stack-data
[npm-image]: https://img.shields.io/npm/v/stack-data.svg?style=flat-square

[travis-url]: https://travis-ci.org/greybax/stack-data
[travis-image]: https://img.shields.io/travis/greybax/stack-data/master.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/greybax/stack-data
[coveralls-image]: https://img.shields.io/coveralls/greybax/stack-data/master.svg?style=flat-square

[depstat-url]: https://david-dm.org/greybax/stack-data
[depstat-image]: https://david-dm.org/greybax/stack-data.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/greybax/stack-data#info=devDependencies
[depstat-dev-image]: https://david-dm.org/greybax/stack-data/dev-status.svg?style=flat-square