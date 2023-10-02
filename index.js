const EventEmmiter = require('node:events');

const emmiter = new EventEmmiter();

emmiter.on('order-pizza', (size, topping) => {
  console.log(`order recived ! baking a ${size} pizza with ${topping}`);
});

// you can add multiple listner

emmiter.on('order-pizza', (size) => {
  if (size === 'large') {
    console.log('serving complimentary drink');
  }
});

emmiter.emit('order-pizza', 'large', 'mushroom');
