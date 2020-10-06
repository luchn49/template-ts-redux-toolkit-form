import React from 'react';
import './Banner.scss';

interface IBannerProps {
  backgroundUrl?: string;
  title: string;
}

const Banner = (props: IBannerProps): JSX.Element => {
  const { backgroundUrl, title } = props;
  const bannerStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : {};

  return (
    <div>
      <section className="banner" style={bannerStyle}>
        <h1 className="banner__title">{title}</h1>
      </section>
    </div>
  );
};

Banner.defaultProps = {
  backgroundUrl: '',
};

export default Banner;
