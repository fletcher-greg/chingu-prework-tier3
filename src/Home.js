import React from 'react';

import Header from './components/Header';
import WriteNotes from './components/WriteNotes';
import Notes from './components/Notes';
const Home = () => {
  return (
    <>
      <Header />
      <WriteNotes />
      <Notes />
    </>
  );
};

export default Home;
