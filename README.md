#namaste Reatc

#Parcel
It create dev build
Its creating local server for us
it is refreshing our page automatically which means its doing  HMR(hot module replacement)
It uses file watching algorithm - written in c++ (as soon as we save any file it will built again)


Two types of export & import
- Default export import

export default component
import component from "path";

-Named export import
(used when u have to export multiple things use named export)
export const component;
import {component} from "path";


-whenever a state variable updates react triggers a reconcilation cycle(will re-render the component) 

# Two types of routing in web apps
1. Client side routing 
2. server side routing

# Redux toolkit
- Install @reduxjs/toolkit & react-redux
- Build our store
- connect our store to our app
- creat Slice(cart slice)
- dispatch action
- read the data using selector

# In older Redux Version
 - Vanilaa(older redux)=> don't mutate the state, returning was mandatory(returning the newstate)
 - For ex. const newState =[...state];
          newState.items.push(action.payload);
          return newState
 - Uses middleware for async operation or api call.
 # Newer Redux-toolkit 
 -We have to modify the state
- redux-toolkit uses the immer behind the sceen to mutate the state.
- redux dosen't force to return over here.
- RTK Query used to call an api in redux toolkit

# Type of testing (developer)
- unit testing
  1. we test our react component in isolation
  2. testing one unit or one component in isolation
- Integration testing
   testing the integration of multiple components
   testing the flow of our application
- End to end testing (it is also known as e2e testing)

# Testing library
- React testing library
 - React testing library uses jest behind the scene

 # Setting up testing
 - install react testing library
 - install jest 
 - install babel dependencies 
 - configure babel (create babel.config.js file & put the configaration inside this file)
 - configure parcel config file to disable default babel transpilation( create .parcelrc file)
 - writing jest configuration (npx jest --init)
  - Install jest environment (jsDom )
  - Install @babel/preset-react to make jsx work in test cases(npm i -D @babel/preset-react)
  - Include @babel/preset-react inside my babel config(babel.config.js)
  - Install npm i -D @testing-library/jest-dom

  # we can use describe to group multiple test cases.
  -we can groupd multiple test cases inside describe block

  # it is just another name for test
  - it & test both the same thing
  - we can use it at the place of test in test cases