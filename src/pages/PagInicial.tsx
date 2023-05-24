import { useState, useEffect } from 'react';
import Header from './components/header';
import Cont from './components/cont';
import { links } from '../constants';
import Footer from './components/footer';
import { EmailUser, NameUser, RaUser } from '@/lib/controller';

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await Promise.all([NameUser(), EmailUser(), RaUser()]); // Call the functions concurrently

  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>; // Show a loading state while data is being fetched
  // }

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Header links={links} />
      <Cont />
      <Footer />
    </>
  );
}
