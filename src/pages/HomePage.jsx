import Features from '../layouts/Features';
import Advantages from '../layouts/Advantages';
import Testimonial from '../layouts/Testimonial';
import Faq from '../layouts/Faq';
import GetStarted from '../layouts/GetStarted';
import Hero from '../layouts/Hero';

const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <Features />
        <Advantages />
        <Testimonial />
        <Faq />
        <GetStarted />
      </main>
    </>
  );
};

export default HomePage;
