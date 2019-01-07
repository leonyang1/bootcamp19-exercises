// In an alternate universe, coins have a `true` and a `false` side.
// Write code that first gets a user via a getUser() call, then in the callback,
// flips a coin and tells the user whether or not their guess was correct

const coinToss = (guess, callback1) => {
  const result = Math.round(Math.random());
  const didWin = guess === result;
  callback1(didWin);
};

const getUser = callback2 => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    guess: Math.round(Math.random())
  };
  callback2(user);
};

getUser((user) => {
  coinToss(user.guess, console.log)
})