import React from 'react'
import axios from 'axios'
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = {
    name:"",
    img: "",
    followers:[],
    search:{}
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/Arison13`)
      .then(res=> {
        // console.log(res.data)
        this.setState({
          search:res.data,
        });
        // console.log("search data:", this.state.search)
      }).catch(err => {
        console.error(err);
      })
  }

  getUserOnSearch = (username) => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(res=> {
        this.setState({
          search:res.data
        });
      }).catch(err => {
        console.error(err);
      })
  }
  getFollowersOnClick = () =>{
    axios.get(`https://api.github.com/users/Arison13/followers`)
    .then(res => {
      this.setState({
        followers:res.data,
      })
      console.log("FOLLOWERS DATA:", this.state.followers)
    })
  }

  render() {
    return (
    <div className="main">
      <SearchBar data={this.state.followers}/>
      {/* still need to add functionality to the searchbar, im just doing this as a side project now */}

      <h1>User Card 2.0</h1>
      <div className="user-card"> 
        <img width="80"src={this.state.search.avatar_url} alt={this.state.search.avatar_url}/>
        <h3> Name: {this.state.search.login} </h3>
        <p> Repos: {this.state.search.public_repos} </p>
        <p> Location:{this.state.search.location} </p>
        <button onClick={this.getFollowersOnClick} className="btn"> Get Followers! </button>
      </div>
        {this.state.followers.map(item => {
          return (
            <div key={item.id}>
              <img width="80" src={item.avatar_url} alt={item.avatar_url}/>
              <p>Name: {item.login}</p>
              <p>Profile: <a href={item.html_url} rel="noreferrer" target="_blank"> Visit </a> </p>
            </div>
          )
        })}
      
    </div>)
  }
    
}

export default App;
