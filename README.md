# Lasting Dynamics - ASSESMENT*01*

## Live Preview

- this app was deployed using **Vercel** , can be accessed [here](https://lasting-dynamics-task1.vercel.app/)

## Installation

```bash
git clone https://github.com/w4t3r-45/LD_task_01
cd LD_task_01
npm install
npm start
```

## Remarks

### Components :

- Material UI **v5.8** was used for making all components.
- styling was passed using **sx** prop provided by MUI , there are other methods like **makeStyles** for some nice looking code that can be used or making customization from a custom theme that we need to create using **createTheme**.
- a basic custom theme was created to customize some basic properties (colors , Toolbar height , fontFamily ...).

### State Management

- **useReducer + useDispatch** technique was used to manage state since we don't have too much to worry about , it definetly gives a performant state management for such apps (Nearly like redux)
- redux could be used for state management but it's not the right app to be in the used technique can handle some **small ~ mid** apps perfectly.

### Good Additions to have :

- i prefer to make a custom library for the Icons using **Storybook** then publish it on npm and work with it as a hosted package instead of having those icons in our code.
- sometimes making custom libraries for the whole components **(when we have too much customization)** will be super useful when time passes since it makes updates super easy in the future.
