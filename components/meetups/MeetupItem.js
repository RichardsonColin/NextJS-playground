import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import Image from 'next/image';

import Card from '../ui/Card';

import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const { id, title, image, dataUrl, address } = props;
  const router = useRouter();

  function showDetailsHandler() {
    router.push(`/${id}`);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
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
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

MeetupItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  dataUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default MeetupItem;
