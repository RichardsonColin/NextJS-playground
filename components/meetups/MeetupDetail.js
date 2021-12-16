import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <div>
        <img src={props.image} alt={props.title} />
        {/* <Image
          src={props.image}
          alt={props.title}
          quality={90}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={props.dataUrl}
        /> */}
      </div>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
