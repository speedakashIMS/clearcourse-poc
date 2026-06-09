import Slider from 'react-slick';
import AwardCardMolecule from './molecules/AwardCardMolecule';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AwardsCards = ({
  items = [], // [{ title, subtitle, linkText, linkHref, linkVariant, mediaProps }]
  className = '',
  ...props
}) => {
  const carouselSettings = {
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
    ],
  };

  return (
    <div className={`container ${className}`} {...props}>
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-24">
        {items.map((item, index) => (
          <div key={item.key ?? index} className="h-full" {...item.attributes}>
            <AwardCardMolecule
              title={item.title}
              subtitle={item.subtitle}
              linkText={item.linkText}
              linkHref={item.linkHref}
              linkVariant={item.linkVariant}
              mediaProps={item.mediaProps}
              className="h-full"
            />
          </div>
        ))}
      </div>
      <div className="md:hidden -mx-20">
        <Slider {...carouselSettings} className="awards-carousel">
          {items.map((item, index) => (
            <div key={item.key ?? index} className="px-20 h-full">
              <AwardCardMolecule
                title={item.title}
                subtitle={item.subtitle}
                linkText={item.linkText}
                linkHref={item.linkHref}
                linkVariant={item.linkVariant}
                mediaProps={item.mediaProps}
                className="h-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AwardsCards;
