import './App.css';

import Layout from './Layout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import Home from './components/Home/Home';
import FindExpert from './components/FindExpert/FindExpert';
import AboutUs from './components/About/AboutUs';
import Blogs from './components/Blogs/Blogs';
import Faq from './components/FAQ/Faq';
import Contact from './components/Contact/Contact';
import BookDemo from './components/BookDemo/BookDemo';

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<FindExpert />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
        <Route path='bookdemo' element={<BookDemo />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
