import { Component } from 'react';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleQueryChange = evt => {
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    const { searchQuery } = this.state;
    evt.preventDefault();

    if (searchQuery.trim() === '') {
      toast.warn('Введите ключевое слово поиска!');
      return;
    }

    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    const { handleQueryChange, handleSubmit } = this;
    return (
      <header className="searchbar">
        <form onSubmit={handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={handleQueryChange}
          />
        </form>
      </header>
    );
  }
}
