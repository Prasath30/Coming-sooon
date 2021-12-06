import './App.css'
import react from 'react';

function App() {
  return <> <div className='welcome' >
    <h1><i class="fab fa-pagelines fa-sm"></i> Welcome <i class="fab fa-pagelines fa-sm"></i> </h1>
  </div>
   
   <h1 className='brand'>RAKAUSHA</h1>
   <hr className='line'  style={{height:'2px',backgroundColor:'rgb(85, 63, 49)',margin:'auto',marginBottom:'40px'}} />
   <div className='img-cont'>
     <img src={`./coming-soon.png`} id='img-one'  className="img-fluid" alt="" />
     <img src={`./image.jpg`}  id='img-two'  className='img-fluid' alt="" />
     <button className='button'  type="button"  data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" > GET IN TOUCH </button>

   </div>

   <h2 style={{fontFamily:'serif',paddingTop:'30px'}}>Connect With Quality products</h2>
   <p style={{fontFamily:'sans-serif',paddingTop:'30px'}} >Copyright 2021 Rakausha - all rights reserved</p>
   <p style={{fontFamily:'sans-serif',paddingTop:'30px'}} >Created by Arctic Devs</p>






<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" id="recipient-name" />
          </div>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Email:</label>
            <input type="email" class="form-control" id="recipient-name" />
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
</>}

export default App;
