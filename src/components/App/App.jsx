import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchData } from 'services/api';

export class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    page: 1,
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.getImage(this.state.searchQuery, this.state.page);
    }
  }

  getImage = async (searchQuery, page) => {
    if (!searchQuery) {
      return;
    }
    try {
      this.setState({ loading: true });

      const { hits } = await fetchData(searchQuery, page);
      if (hits.length === 0) {
        return;
      }

      this.setState(prevState => {
        return {
          hits: [...prevState.hits, ...hits],
        };
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { handleFormSubmit } = this;
    return (
      <Container>
        <Searchbar onSubmit={handleFormSubmit} />
        {this.state.loading && <h1>Загружаем...</h1>}
        {this.state.image && <p>{this.state.image[0].id}</p>}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}
