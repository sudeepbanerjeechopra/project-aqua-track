// import style from './HomePage.module.css';

import { Helmet } from 'react-helmet-async';
import Home from '../../components/Home/Home';
import UserSettingsModal from '../../components/Modals/UserSettingsModal/UserSettingsModal';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>AquaTrack</title>
      </Helmet>
      <Home />
      <UserSettingsModal/>
    </>
  );
};

export default HomePage;
