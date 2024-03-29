import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

// import SignIn from "../sign-in/sign-in.component";
import './navigation.styles.scss'

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
          <Link className="link-container" to='/'>
            <CrwnLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>SHOP</Link>
            <Link className="nav-link" to='/signIn'>SIGN IN</Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;