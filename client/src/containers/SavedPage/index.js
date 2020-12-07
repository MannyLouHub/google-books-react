import React, {Component} from "react";
import API from '../../utils/API';
import './index.css'


class SavedPage extends Component {
  state = {
    savedBooks: []
  };

  //when this component mounts, grab all books that were save to the database
  componentDidMount() {
    API.getbooks()
        .then(res => this.setState({savedBooks: res.data}))
        .catch(err => console.log(err))
  }

  //function to remove book by id
  handleDeleteButton = id => {
    API.deletebook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
  }

  render() {
    return (
        <div className={'container'}>
          <div className={'row'}>
            <div className={'card col-12 mt-3 p-3 text-center'}>
              <h1> (React) Google Books Search </h1>
              <h5> Search and Save Books of Interest</h5>
            </div>
          </div>
          <div className={'row'}>
            <div className={'card col-12 p-3 mt-5 savedList'}>
              <h1> Saved List: </h1>
              <div className={'card-body savedCard'}>
                {this.state.savedBooks.map(savedbook => {
                  return (
                      <div className={'saved-list'}>
                        <div className={'row'}>
                          <div className={'col-3'}>
                            <h3 className={'saved-title'}>Title: {savedbook.title}</h3>
                            <p className={'saved-title'}>Publisher: {savedbook.publisher ? savedbook.publisher : ''}</p>
                            <p className={'saved-title'}>Author: {savedbook.author ? savedbook.author.join(', ') : ''}</p>
                            <img className={'saved-image'} src={savedbook?.image} alt={savedbook.title}/>
                          </div>
                          <div className={'col-9'}>
                            <p className={'card-body'}>{savedbook.description} </p>
                          </div>
                          <div className={'col-12'}>
                            <div className={'row'}>
                              <div className={'pt-3 col-10'}>
                                <a href={savedbook.link}> View on Google Books </a>
                              </div>
                              <div className={'col-1'}>
                                <button type="button" className="btn btn-primary" id={savedbook._id}
                                        onClick={() => this.handleDeleteButton(savedbook._id)} > Delete </button>
                              </div>
                            </div>
                            <hr/>
                          </div>
                        </div>
                      </div>

                  )
                })}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default SavedPage