import PropTypes from 'prop-types';

import Image from 'next/image';

import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  const { title, image, dataUrl, address, description } = props;
  return (
    <section className={classes.detail}>
      <div>
        <img src={image} alt={title} />
        <Image
          src={image}
          alt={title}
          quality={90}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={dataUrl}
        />
      </div>
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

MeetupDetail.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  dataUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MeetupDetail;
