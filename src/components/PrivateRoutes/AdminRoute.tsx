import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PrivateRoutesProps, Store } from "../../types";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

const AdminRoute: React.FC<PrivateRoutesProps> = props => {
  if (props.loading) {
    return <Route {...props} component={LoadingIcon} />;
  }

  if (props.auth.user && props.auth.user.role === "admin") {
    return <Route {...props} />;
  } else {
    return <Redirect to={{ pathname: props.redirectPath }} />;
  }
};

const mapStateToProps = (state: Store) => ({
  auth: state.auth,
  loading: state.loading,
});

export default connect(mapStateToProps)(AdminRoute);
