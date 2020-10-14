import { withRouter } from "react-router-dom";

const NavigationComponent = ({ pathname, state, history }) => {
  return history.push({
    pathname: pathname,
    state: state ? state : null,
  });
};

export default withRouter(NavigationComponent);
