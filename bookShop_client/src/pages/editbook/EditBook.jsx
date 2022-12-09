import "./editbook.css";
import {  useState,useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function EditBook() {

  
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const path = location.pathname.split("/")[2];

  const [book_title, setTitle] = useState("");
  const [author_name, setAuthor] = useState("");
  const [desc, setDesc] = useState("");
  const [cost, setCost] = useState("");
  const [upadteposts, setUpdatePosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post/update",{params: { id:path}});
      setPosts(res.data);
    };
    fetchPosts();
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      book_title,
      author_name,
      cost
    };
    try {
      const res = await axios.put(`/post/${path}`,newPost);
      window.location.replace("/");
    } catch (err) {

    }
  };

  return (
    <div className="container">]
    <div className=" text-center mt-5 ">

        <h1 >Book Adding Form</h1>
            
        
    </div>


      <div className="row ">
        <div className="col-lg-7 mx-auto">
          <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
              <div className = "container">
                <form id="contact-form" role="form" onSubmit={handleSubmit} >
                  <div className="controls">

                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label for="form_name">Book Name *</label>
                                  <input id="form_name" type="text" name="name" onChange={e=>setTitle(e.target.value)} className="form-control" placeholder={posts.book_title} required="required" data-error="name is required."/>
                                  
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label for="form_lastname">Author Name *</label>
                                  <input id="form_lastname" type="text" name="surname" onChange={e=>setAuthor(e.target.value)} className="form-control" placeholder={posts.author_name} required="required" data-error="name is required."/>
                                                                  </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label for="form_email">Cost</label>
                                  <input id="form_email" type="text" name="email" onChange={e=>setCost(e.target.value)} className="form-control" placeholder={posts.cost} required="required" data-error="Valid email is required."/>
                                  
                              </div>
                          </div>
                          
                      </div>
                      <div className="row">
                          <div className="col-md-12">
                              <div className="form-group">
                                  <label for="form_message">Book Description *</label>
                                  <textarea id="form_message" name="message" onChange={e=>setDesc(e.target.value)} className="form-control" placeholder="Write your Description here." rows="4"  data-error="Please, leave us a message."></textarea
                                      >
                                  </div>

                              </div>


                          <div className="col-md-12">
                              
                              <input type="submit" className="btn btn-success btn-send  pt-2 btn-block
                                  " value="Update" />
                          
                      </div>
                
                      </div>
                  </div>
              </form>
              </div>
            </div>


</div>
    

</div>


</div>
</div>
   
  );
}
