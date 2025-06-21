
import News from "@/components/News";
import SEO from "@/components/SEO";
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
<News />
      </div>
    </>
  );
}
