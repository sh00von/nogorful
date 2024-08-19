import Image from 'next/image';

const Volunteer = ({ imageSrc, name, title, description, socialLinks }) => {
  return (
    <div className="col-xl-4 col-lg-4">
      {/* Team One Single */}
      <div className="team-one__single">
        <div className="team-one__img-box">
          <div className="team-one__img">
            <Image
              src={imageSrc}
              alt={name}
              width={300} // Adjust width as needed
              height={300} // Adjust height as needed
              layout="responsive" // Adjust layout to fit your design
            />
          </div>
          <div className="team-one__member-name">
            <h2>{name}</h2>
          </div>
        </div>
        <div className="team-one__content">
          <h4 className="team-one__member-title">{title}</h4>
          <p className="team-one__text-box">{description}</p>
        </div>
        <div className="team-one__social">
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} aria-label={`Twitter profile of ${name}`}>
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} aria-label={`Facebook profile of ${name}`}>
              <i className="fab fa-facebook-square"></i>
            </a>
          )}
          {socialLinks.dribbble && (
            <a href={socialLinks.dribbble} aria-label={`Dribbble profile of ${name}`}>
              <i className="fab fa-dribbble"></i>
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} aria-label={`Instagram profile of ${name}`}>
              <i className="fab fa-instagram"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
