/* 

Central store in each react app stores entire apps state giant JS object

Components wants access to app state redux gives us a nice easy way to manage global state

First point is ACTIONS which are dispatched from your components an action is an information package with a type like addIngredient it also has a payload (most cases) a new piece of state we send to redux this doesn't update the store it's just the messenger

REDUCERS these take the action and then update the store. You generally have one root reducer. The reducer is a pure function receives the action and then old state and then spits out updated state. This only activates synchronous code input in input out. This updated state then replaces the old state in the store in an immutable way new state is new JS obj as we don't want reference type issues

REDUCERS are a function that get two arg the old state and the action function returns the updated state

Store triggers all subscriptions when all state is updated in the store a subscription modal. Components can subscribe store updates and get notified when state changes. This is a redux flow.

STORE needs to be initialized with a reducer. We only have one reducer its strongly connected to the store it's the only thing that updates the state. Thats why it has to be passed to createStore

STORE dispatch is a function that takes an arg which is an action it needs a type prop in obj you pass payloads which are js objects

STORE initial creation should generally happen in index js

SUBSCRIBE takes an argument which is a function which is executed whenever the state is updated or whenever an action reaches the reducer trigged whenever action is dispatched


*/
