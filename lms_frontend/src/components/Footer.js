
function Footer() {
  return (
    <footer className="text-muted py-2 border-top mt-5" style={{backgroundColor: "#262626",marginTop:10}}>
      <div className="">
          {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
        <div>

        <footer className="text-center text-white">
        {/* <!-- Grid container --> */}
        <div className="container p-2 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            <p>you can find us in :</p>
            {/* <!-- Facebook --> */}
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998"}} href="https://www.facebook.com/ITI.eg" role="button"><i className="fa fa-facebook-f"></i></a>

            {/* <!-- Google --> */}
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#dd4b39"}} href="https://www.iti.gov.eg" role="button"><i className="fa fa-google"></i></a>

            {/* <!-- Linkedin --> */}
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="https://www.linkedin.com/in/abdallah-mohamed-52893322b/" role="button"><i className="fa fa-linkedin"></i></a>
            {/* <!-- Github --> */}
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}} href="https://github.com/PROFabdalla" role="button"><i className="fa fa-github"></i></a>
           {/* <!-- call --> */} 
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca",fontSize:17}} href="tel:01143306714" role="button"><i className="fa fa-address-book"></i></a>
            {/* <!-- whats app --> */}       
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#00ff00",fontSize:17}} href=" https://wa.me/01143306714" role="button"><i className="fa fa-whatsapp"></i></a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3">
          © 2020 Copyright : 
          <a className="text-white" href="https://www.iti.gov.eg/iti/home">  Information Technology Institute</a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    
  </div>
  </div>
  </footer>
  );
}

export default Footer;