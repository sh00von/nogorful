import Link from 'next/link';
import Image from 'next/image';

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <section className="page-header">
      <div className="page-header__bg">
        <Image
          src="/assets/images/nf/bb.jpg" // Path to your background image
          alt="Page Header Background" // Alternative text for the image
          layout="fill" // Covers the entire background area
          objectFit="cover" // Ensures the image covers the area without distortion
          quality={100} // Optional: adjust quality if needed
        />
      </div>
      <div className="container">
        <h2>{title}</h2>
        <ul className="thm-breadcrumb list-unstyled">
          <li><Link href="/">Home</Link></li>
          <li className="color-thm-gray">/</li>
          <li><span>{breadcrumb}</span></li>
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;
