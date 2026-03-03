const events = require('node:events');

const listenerLimit = 50;

events.defaultMaxListeners = Math.max(
  events.defaultMaxListeners,
  listenerLimit
);
process.setMaxListeners(Math.max(process.getMaxListeners(), listenerLimit));
