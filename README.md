I couldn´t test the App component because of time constraints. However, I can tell you the way in which I would test it:
First we would have to mock the window listener. This could be done this way:

```javascript
const map = {};
window.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});
```

Then, we would have to mock the user interaction with this listener:

```javascript
const map.keyPress("ArrowLeft")
```

And then we just need to assert whether the ball is in the proper location in the array or not.
