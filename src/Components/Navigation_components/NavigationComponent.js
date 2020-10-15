import { withRouter } from "react-router-dom";

const NavigationComponent = ({ pathname, state, history }) => {
  console.log("pathname", pathname);
  return history.push({
    pathname: pathname,
    state: state ? state : null,
  });
};

export default withRouter(NavigationComponent);
