import AboutComponents from './components/AboutComponents';
import HomeComponents from './components/HomeComponents';
import LoaderComponents from './components/LoaderComponents';
import NavbarComponents from './components/NavbarComponents'
import ProductComponents from './components/ProductComponents';
import ServiceComponents from './components/ServiceComponents';
import TestimonialComponents from './components/TestimonialComponents';

const App = () => {
  return <div className='overflow-hidden'>
    <LoaderComponents/>
    <NavbarComponents/>
    <HomeComponents/>
    <AboutComponents/>
    <ProductComponents/>
    <ServiceComponents/>
    <TestimonialComponents/>
  </div>;
};

export default App;
