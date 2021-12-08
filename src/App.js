import './App.css'

import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

function App() {

  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)
    emailjs.sendForm('service_fzzoj1b', 'template_nhczuui', form.current, 'user_WrgqrjlRAXz6voNYEaVMJ')
      .then((res) => {
        // console.log(res,"res");
        Swal.fire({
          title: 'Message Sent',
          icon: 'success',
          confirmButtonText: 'Cool'
        }).then(() => {
          e.target.reset();

        })
      })
      .catch((err) => {
        console.log(err, "err");
        Swal.fire({
          title: 'Oops! Some error occurred',
          text: 'Please try again later',
          icon: 'error',
          confirmButtonText: 'Close'
        }).then(() => {
          e.target.reset();

        })
      }

      );

  };



  return <> <div className='welcome' >
    <h1><i className="fab fa-pagelines fa-sm"></i> Welcome <i className="fab fa-pagelines fa-sm"></i> </h1>
  </div>

    <h1 className='brand'>RAKAUSHA</h1>
    <hr className='line' style={{ height: '2px', backgroundColor: 'rgb(85, 63, 49)', margin: 'auto', marginBottom: '40px' }} />
    <div className='img-cont'>
      <img src={`./coming-soon.png`} id='img-one' className="img-fluid" alt="" />
      <img src={`./image.jpg`} id='img-two' className='img-fluid' alt="" style={{width:"100%"}} />
      <button className='button' type="button" data-toggle="modal" data-target="#exampleModal" > GET IN TOUCH </button>

    </div>

    <h2 style={{ fontFamily: 'serif', paddingTop: '30px' }}>Connect With Quality products</h2>
    <p style={{ fontFamily: 'sans-serif', paddingTop: '30px' }} >Copyright 2021 Rakausha - all rights reserved</p>
    <p style={{ fontFamily: 'sans-serif', paddingTop: '30px' }} >Created by Arctic Devs</p>



    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">

            <form ref={form} onSubmit={sendEmail} >
              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                <input type="text" className="form-control" name='name' id="recipient-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                <input type="email" className="form-control" name='user_email' id="recipient-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label">Message:</label>
                <textarea className="form-control" rows="5" name='message' id="message-text" required></textarea>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type='submit' className="btn btn-primary">Send message</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default App;
