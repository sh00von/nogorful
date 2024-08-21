import SEO from '../components/SEO';
import Slider from '../components/Slider';
import IconCards from '../components/IconCards';
import Info from '../components/Info';
import Intro from '../components/Intro';
import JoinUs from '../components/JoinUs';
import News from '../components/News';
import CountersOne from '../components/CountersOne';

export default function Home() {
  return (
    <>
<SEO
  title="Home - Nogorful"
  description="Enhancing the lives of underprivileged and street children to become the 'Nogorful' (Flower of City)."
  keywords="organization, mission, initiatives, community involvement"
  image="https://nogorful.org/assets/images/nf/logo.jpg"
/>

      <div className="page-wrapper">
        <Slider />
        <Intro />
        <IconCards />
        <CountersOne />
        {/* <News /> */}
        <JoinUs />
        <Info />
      </div>
    </>
  );
}
