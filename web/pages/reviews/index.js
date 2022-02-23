import client from '../../client';
import PropTypes from 'prop-types';

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default function Reviews({ reviews }) {
  return (
    <>
      {reviews.map(({ _id, author, body, date, rating }) => {
        return (
          <article key={_id}>
            <span>{rating}/5</span>
            <h2>{author}</h2>
            <h3>{date}</h3>
            <p>{body}</p>
          </article>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  // fetch all reviews that have isDisplayed set to true
  const reviews = await client.fetch(`
    *[_type == "review" && isDisplayed == true]
  `);
  return {
    props: {
      reviews,
    },
  };
}
