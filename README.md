# Hangman Game

Sample React-redux front-end app playing hangman game. 

This is my first app is to learn front-end frameworks [React.js](https://github.com/facebookincubator/create-react-app), [React-Redux](https://github.com/reactjs/redux).

<img width="600" alt="screen shot 2018-02-14 at 16 53 36" src="https://user-images.githubusercontent.com/32798242/36214422-be0b67d4-11a9-11e8-9121-c9924548ad83.png">

## Game instruction
A word is selected on a random basis. A player types in an appropriate letter of alphabet to make a guess. If the letter is contained in the word, the player takes another turn guessing a letter. If it is a right guess, the letter within the word is revealed. If the letter is not contained in the word, a portion of the hangman is added. The game continues until all letters within a word or all portions of the hangman are revealed.

## Steps
These are the steps I followed when working on this app:
1. Play hangman games online to understand the game rules
2. Draw wireframes, sketch out how players interact in online game platform
3. Design React containers, components, and Redux reducers
4. Create initial seed data
5. Set up front-end view

## Work-in-progress
I built this final individual assignment within a weekend for Codaisseur Academy weekly assessment. After graduation, I'm currently working on the following features:
  * Display winner or loser

## Running Locally
Make sure you have [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/) installed.

```bash
git clone git@github.com:fandytcc/hangman-react-redux.git
cd hangman-react-redux
yarn install
yarn start
```

## Related documentation
For more information about using React-Redux, see these links:

* [React](https://facebook.github.io/react-native/)
* [Redux](https://redux.js.org/)
