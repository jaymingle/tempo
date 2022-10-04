# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Approach

The application manages it's data using hooks.\
It shows the list of teams and fetches the team details after a team is clicked

There is a search box which allows the user to filter by the name of the team. The search is implemented in realtime as the user types. One improvement in this aspect will be to debounce the state update and search so each change does not trigger a filter. This way, batch changes will cause a filter without affecting user experience.\

When a team is clicked, the team details are fetched. The user information is fetched as well. This information is also indexed by userID to help in quick retrieval

Team information is also cached, so that clicking on the same team does not result in a further api call