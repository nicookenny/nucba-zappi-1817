import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { toggleUserMenu } from '../../redux/user/user-actions';
import { LayoutWrapper } from './LayoutStyles';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { visible } = useSelector(state => state.user);
  const { pathname } = useLocation();

  useEffect(() => {
    if (visible) {
      dispatch(toggleUserMenu());
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
