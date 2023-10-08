import React, { useState } from 'react';

const BookSearch = ({ books }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    author: '',
    title: '',
    country: '',
    language: '',
    year: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const filterBooks = () => books.filter((book) => {
    const {
      author, title, country, language, year,
    } = searchCriteria;
    const lowerAuthor = book.author.toLowerCase();
    const lowerTitle = book.title.toLowerCase();
    const lowerCountry = book.country.toLowerCase();
    const lowerLanguage = book.language.toLowerCase();
    const bookYear = book.year.toString();

    return (
      lowerAuthor.includes(author.toLowerCase().trim())
        && lowerTitle.includes(title.toLowerCase().trim())
        && lowerCountry.includes(country.toLowerCase().trim())
        && lowerLanguage.includes(language.toLowerCase().trim())
        && bookYear.includes(year.trim())
    );
  });

  const renderBooks = () => {
    const filteredBooks = filterBooks();

    return filteredBooks.map((book, index) => (
      <div key={index} data-testid="book">
        <p data-testid="author">Author: {book.author}</p>
        <p data-testid="country">Country: {book.country}</p>
        <p data-testid="language">Language: {book.language}</p>
        <p data-testid="year">Year: {book.year}</p>
        <p data-testid="title">Title: {book.title}</p>
        <p data-testid="pages">Pages: {book.pages}</p>
      </div>
    ));
  };

  return (
    <div>
      <input
        type="text"
        name="author"
        placeholder="Author"
        data-testid="author"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        data-testid="title"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        data-testid="country"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="language"
        placeholder="Language"
        data-testid="language"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="year"
        placeholder="Year"
        data-testid="year"
        onChange={handleInputChange}
      />
      {renderBooks()}
    </div>
  );
};

export default BookSearch;
