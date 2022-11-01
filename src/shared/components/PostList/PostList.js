import styles from './styles.module.scss';

const PostList = ({ items, onClick }) => {
  const elements = items.map(({ id, webformatURL, id }) => (
    <li
      key={id}
      onClick={() => onClick({ webformatURL, id })}
      className={styles.ImageGalleryItem}
    >
      <img src={webformatURL} alt={id} />
    </li>
  ));

  return <ul className={styles.ImageGallery}>{elements}</ul>;
};

export default PostList;

PostList.defaultProps = {
  items: [],
};
