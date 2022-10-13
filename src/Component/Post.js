import React,{Component} from 'react';
import axios from 'axios';
class Post extends Component {
  state ={post:null}
  componentDidMount(){
    
  let id = this.props.match.params.id_post;
  axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then(res=>{
    this.setState({
      post :res.data
    });
    console.log(res)
  });
  
  }
  render(){
    let post = this.state.post? (
    <div class="card post blue darken-3" >
      <div class="card-content white-text">
         <span class="card-title center">{this.state.post.title}</span>
              <p>{this.state.post.body}</p>
      </div>
    </div>
      ) :
    (
      <div class="center"><h3>loading ...</h3></div>
      )
    return(
      <div className="container">
         {post}
      </div>
      )
  }
}
export default Post