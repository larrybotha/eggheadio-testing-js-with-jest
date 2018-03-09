// This function is now a dependency in get-adder. If an error is introduced
// here, Jest will use a dependency tree to run all fiels that have the dependency
const sum = (a, b) => a + b;

// By default Jest in watch mode will compare changed files to git's HEAD.
// This can be changed to the last commit by running:
// $ jest --watch --lastCommit

// Jest can be put in a run-all mode by pressing 'a' when active. 'o' will change
// Jest back to running tests only on files that have changed.

// Pattern mode can be entered by pressing 'p'. Files matching a pattern will only
// be watched, e.g. 'p', then 'sum' will only watch files that contain 'sum'

export default sum;
