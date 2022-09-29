import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchData } from 'services/api';

export class App extends Component {
  state = {
    image: null,
    searchQuery: '',
    loading: false,
  };

  async componentDidUpdate(_, prevState) {
    const prevSearchQuery = prevState.searchQuery;
    const currentSearchQuery = this.state.searchQuery;

    try {
      if (prevSearchQuery !== currentSearchQuery) {
        this.setState({ loading: true });
        const response = await fetchData(currentSearchQuery);
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ loading: false });
    }
  }

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
        <ToastContainer autoClose={2500} />
      </Container>
    );
  }
}
