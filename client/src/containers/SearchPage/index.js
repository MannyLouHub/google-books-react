import React, {useState, useEffect} from "react";
import API from '../../utils/API';
import './index.css';


function SearchForm(props) {

  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  function handleInputChange(event) {
    const {name, value} = event.target;
    setFormObject({...formObject, [name]: value})
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    let query = formObject.search;
    if (!query) return

    API.searchGoogle(query).then(response => {
      console.log(response);
      let results = response.items
      results = results.map((results) => {
        results = {
          key: results.id,
          id: results.id,
          title: results.volumeInfo.title,
          author: results.volumeInfo.authors,
          publisher: results.volumeInfo.publisher,
          description: results.volumeInfo.description,
          image: results.volumeInfo.imageLinks.thumbnail,
          link: results.volumeInfo.infoLink
        }
        return(results)
      })
      setBooks(results)
    })
  }

  function handleSaveBtn(event) {
    event.preventDefault();

    let savedBooks = books.find(book => book.id === event.target.id)
    console.log(savedBooks);
    API.savebook(savedBooks);
  }

  return (
      <div className={'container'}>
        <div className={'row'}>
          <div className={'card col-12 mt-3 p-3 text-center'}>
            <h1> (React) Google Books Search </h1>
            <h5> Search and Save Books of Interest</h5>
          </div>
        </div>
        <div className={'row'}>
          <div className={'card col-12 p-3 mt-5'}>
            <form>
              <div className="form-group">
                <label htmlFor="search">Book:</label>
                <input
                    onChange={handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search For a Book"
                    id="search"
                />
                <br/>
                <button onClick={handleFormSubmit} className="btn btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={'row'}>
          {books && books.length === 0 ? <div/> :
              <div className={'card col-12 p-3 mt-5 results'}>
                <h1> Results: </h1>
                <div className={'card-body resultsCard'}>
                  {books ? books.map((book, index) => {
                    return (
                        <div key={book.id} className={'row'}>

                          <div className={'col-3'}>
                            <h3 className={'card-title'}>Title: {book.title}</h3>
                            <p className={'card-title'}>Publisher: {book.publisher ? book.publisher : ''}</p>
                            <p className={'card-title'}>Author: {book.author ? book.author.join(', ') : ''}</p>
                            <img className={'card-image'} src={book?.image} alt={book.title}/>
                          </div>
                          <div className={'col-9'}>
                            <p className={'card-body'}> {book.description} </p>
                          </div>
                          <div className={'col-12'}>
                            <div className={'row'}>
                              <div className={'pt-3 col-10'}>
                                <a href={book.link}> View on Google Books </a>
                              </div>
                              <div className={'col-1'}>
                                <button type="button" className="btn btn-primary" id={book.id}
                                  onClick={handleSaveBtn}> Save </button>
                              </div>
                            </div>
                            <hr/>
                          </div>
                        </div>
                    )
                  }) : <h3> No results found </h3>}
                </div>
              </div>
          }
        </div>
      </div>
  );
}

export default SearchForm;
