import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PrivateRoutesProps, Store } from "../../types";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

const PrivateRoute: React.FC<PrivateRoutesProps> = props => {
  if (props.loading) {
    return <Route {...props} component={LoadingIcon} />;
  }

  if (!props.auth.user) {
    return <Redirect to={{ pathname: props.redirectPath }} />;
  } else {
    return <Route {...props} />;
  }
};

const mapStateToProps = (state: Store) => ({
  auth: state.auth,
  loading: state.loading,
});

export default connect(mapStateToProps)(PrivateRoute);
