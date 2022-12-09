import React from 'react'
import { useLocation,useNavigate } from "react-router";
import { useEffect, useState ,useContext} from "react";
import axios from "axios";
import { Context } from '../../context/Context';


export default function AllBooks({childToParent}) {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const navigate=useNavigate();
  const { user } = useContext(Context);
  

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post");
      setPosts(res.data);
      
    };

    fetchPosts();
  });

  async  function deletePosts(id){
    try {
    
      const res = await axios.delete(`/post/${id}`);

      const fetchPosts = async () => {
        const res = await axios.get("/post");
        setPosts(res.data);
        
      };
  
      fetchPosts();
      
    } catch (err) {

    }
  };



  function updatePostsRoot(id){
    navigate(`/updatebook/${id}`);
  };
 


  return (

    <> 
      <header className="py-5">
                  <div className="container px-5">
                      <div className="row justify-content-center">
                          <div className="col-lg-8 col-xxl-6">
                              <div className="text-center my-5">
                                  <h1 className="fw-bolder mb-3">Books Libruary for everyone.</h1>
                                  <p className="lead fw-normal text-muted mb-4">"Fill your house with stacks of books, in all the crannies and all the nooks."</p>
                                  <a className="btn btn-primary btn-lg" href="#scroll-target">Read our story</a>
                              </div>
                          </div>
                      </div>
                  </div>
      </header>
    
    
    <div className="container">
       
        <table className="table">
  <thead className='thead-dark'>
    <tr>
      <th scope="col">BookID</th>
      <th scope="col">Book Name</th>
      <th scope="col">Author Name</th>
      <th scope="col">Book Price</th>
      <th scope="col">Update or Delete</th>
    </tr>
  </thead>
  <tbody>

     {posts.map((p) => (
        
        <tr>
      <th scope="row">{p._id}</th>
      <td>{p.book_title}</td>
      <td>{p.author_name}</td>
      <td>{p.cost}</td>
      <td>
      <button type="button" className="btn btn-primary ml-3" onClick={() => updatePostsRoot(p._id)} >Update</button>
      &nbsp;&nbsp;&nbsp;
        
      <button type="button" className="btn btn-primary mr-5"  onClick={() =>deletePosts(p._id)}>Delete</button>
      
     
     
      </td>
    </tr>
  ))}
    
    
  </tbody>
</table>
    </div>
    </>
    
  );
}
