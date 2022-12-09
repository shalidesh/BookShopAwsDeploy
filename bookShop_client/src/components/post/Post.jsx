import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  return (

    <div class="card bg-light mb-3 ml-2" style={{width: "18rem",height:"25rem"}}>
      <img class="card-img-top" src="https://dummyimage.com/600x350/ced4da/6c757d" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">{post.book_title}</h5>
        <p class="card-text">{new Date(post.createdAt).toDateString()}</p>
        <p class="card-text">{post.cost}</p>
        <a href="#" class="btn btn-primary">Leran More</a>
      </div>
    </div>
  );
}
