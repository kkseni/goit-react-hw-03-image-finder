import { Component } from 'react';
import FallingLines from '../../shared/components/Loader/Loader';
import PostList from '../../shared/components/PostList/PostList';
import { getPosts } from '../../shared/api/Post';

export default class Posts extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    page: 1,
  };

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchPosts();
    }
  }

  async fetchPosts() {
    const { page } = this.state;
    this.setState({
      loading: true,
    });

    try {
      const data = await getPosts(page);
      this.setState(({ items }) => {
        return {
          items: [...items, data],
        };
      });
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  // fetchPosts() {
  //   const { page } = this.state;
  //   this.setState({
  //     loading: true,
  //   });

  //   axios
  //     .get()
  //     .then(({ data }) => {
  //       this.setState(({ items }) => {
  //         return {
  //           items: [...items, ...data],
  //         };
  //       });
  //     })
  //     .catch(error => {
  //       this.setState({
  //         error,
  //       });
  //     })
  //     .finally(() => this.setState({ loading: false }));
  // }

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  render() {
    const { items, loading, error } = this.state;
    const isPosts = Boolean(items.length);
    const { loadMore } = this;
    return (
      <div>
        <h2>Posts</h2>
        {loading && <FallingLines />}
        {error && <p>Будь ласка спробуйте пізніше...</p>}
        {isPosts && <PostList items={items} />}
        {isPosts && <button onClick={loadMore}>load more</button>}
      </div>
    );
  }
}
