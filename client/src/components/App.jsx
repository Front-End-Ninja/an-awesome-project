import React, { Component } from 'react';
import '../assets/output.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };  componentDidMount() {
    this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
  }  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();    if (response.status !== 200) throw Error(body.message);    return body;
  };  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();    this.setState({ responseToPost: body });
  };
  render() {
    return (
        <div className="App">
          <header className="App--header">
            <h1 className='header--title'>Express website for learning purpose</h1>
          </header>
          <p className='hello'>{this.state.response}</p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <strong>Post to Server:</strong>
            </p>
            <input
                className='form--input'
                type="text"
                placeholder='Type here, Your message will be send to API'
                value={this.state.post}
                onChange={e => this.setState({ post: e.target.value })}
            />
            <button className='api--button' type="submit">Submit</button>
          </form>
          <p className='post--message'>{this.state.responseToPost}</p>
          <footer className='copy--footer'>
            © 2020 - {(new Date().getFullYear())} Łukasz Barylak & Kamil Duliniec

          </footer>
        </div>
    );
  }
}export default App;