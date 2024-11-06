const { bot } = require('../lib/');

function randomDelay(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

bot({
  pattern: 'react ?(.*)',
  desc: 'React to msg',
  type: 'misc',
}, async (message, match) => {
  if (!match || !message.reply_message) return await message.send('_Example : react 😂')

  // Generate random delay (e.g., 5-30 seconds)
  const delay = randomDelay(5000, 30000);
  await new Promise(resolve => setTimeout(resolve, delay));

  return await message.send({
    text: match,
    key: message.reply_message.key,
  }, {}, 'react');
});
