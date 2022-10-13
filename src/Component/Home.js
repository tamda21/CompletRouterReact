import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
class Home extends Component{
  state = {
    posts:[]
  };
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then(resp=>{
      //console.log(resp)
      this.setState({
        posts:resp.data.slice(0,10)
      })
    })
  }
  
  render(){
    const {posts} = this.state;
    const listPosts = posts.length?(
      posts.map(post=>{
        return (
  <div class="post card blue-grey darken-3" key ={post.id}>
     <div class="card-content white-text">
     <Link to ={'/'+post.id}>
    <span class="card-title">{post.title}</span>
    </Link>
    <p>{post.body}</p>
  </div>
</div>
          )
      })
      
      ):(
      <div className='container'>No Data In The Posts</div>
      )
  return (
    <div className="container">
        <h4 className="center">Home</h4>
        {listPosts}
    </div>
    )
  }
}
export default Home 