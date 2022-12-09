import "./addbook.css";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function AddBook() {

  const [book_title, setTitle] = useState("");
  const [author_name, setAuthor] = useState("");
  const [desc, setDesc] = useState("");
  const [cost, setCost] = useState("");

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      book_title,
      author_name,
      cost
    };
    try {
      
      const res = await axios.post("/post", newPost);
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
                                      <input id="form_name" type="text" name="name" onChange={e=>setTitle(e.target.value)} className="form-control" placeholder="Please enter Book Name *" required="required" data-error="name is required."/>
                                      
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label for="form_lastname">Author Name *</label>
                                      <input id="form_lastname" type="text" name="surname" onChange={e=>setAuthor(e.target.value)} className="form-control" placeholder="Please enter author name *" required="required" data-error="name is required."/>
                                                                      </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label for="form_email">Cost</label>
                                      <input id="form_email" type="text" name="email" onChange={e=>setCost(e.target.value)} className="form-control" placeholder="Please enter price *" required="required" data-error="Valid email is required."/>
                                      
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
                                      " value="Add Book" />
                              
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
