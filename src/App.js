import React, { useEffect } from 'react';

import Routes from './routes/Routes';

import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { onAuthStateChanged } from 'firebase/auth';
import { auth, getOrCreateUserProfile } from './firebase/firebase-utils';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';

const onAuthChange = (dispatch, action) => {
  return onAuthStateChanged(auth, async user => {
    if (user) {
      const snapshot = await getOrCreateUserProfile(user);
      dispatch(action({ id: snapshot.id, ...snapshot.data() }));
    } else {
      dispatch(action(null));
    }
  });
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = onAuthChange(dispatch, setCurrentUser);

    return () => unsuscribe();
  }, [dispatch]);

  return (
    <Layout>
      <Navbar />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
