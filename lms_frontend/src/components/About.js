import '../aboutus.css';


function About(){
    return(
        <>
        <img src="about_us.jpg" width="100%" />

        <div className="container mt-4">
        <h3 id="h-you-should-take-e-learning-seriously"><strong>You should&nbsp;take e-learning seriously&nbsp;</strong></h3>
        <p>The role of digital learning is only going to increase&nbsp;in the future, so you should&nbsp;not scoff at&nbsp;e-learning. This means that when you do digital classes, you should make sure they are done in an&nbsp;engaging way.&nbsp;Many have migrated their face-to-face training to a video conference format, but&nbsp;sitting on these calls&nbsp;can be&nbsp;intensive. Managing big masses is difficult, and&nbsp;participants’&nbsp;chances&nbsp;for&nbsp;interaction&nbsp;are limited.&nbsp;</p>
        <p>Treating digital learning like a “normal” classroom,&nbsp;where learners are&nbsp;expected&nbsp;to listen to long lectures,&nbsp;isn’t often the best way&nbsp;to conduct classes.&nbsp;Instead, you should try to include elements that promote interaction and activate learners, so that the people on the other end of the line&nbsp;won’t doze off after 20 minutes. Embrace the advantages&nbsp;of online learning&nbsp;and&nbsp;the&nbsp;possibilities of 21st century education. &nbsp;</p>
        <figure class="wp-block-pullquote figre">
            <blockquote>
                <p class="figrem"><b><em>There’s a big difference in how to structure your teaching when it takes place online instead of a physical classroom.&nbsp;</em></b></p>
            </blockquote>
        </figure>

        <h3><strong>Learners should collaborate with each other in the online learning platform&nbsp;</strong></h3>
        <p className="pra">With increased distance and remote learning, one of the biggest things that suffers is&nbsp;the&nbsp;sense of community,&nbsp;or a group atmosphere,&nbsp;surrounding the learning.&nbsp;Studies have shown that learning together increases motivation and promotes better results.&nbsp;Teachers and trainers should pay special attention to techniques and strategies&nbsp;that&nbsp;make&nbsp;team work an essential part of learning. They should create&nbsp;spaces&nbsp;for collaboration and&nbsp;strive for&nbsp;an atmosphere that promotes&nbsp;learning together.&nbsp;&nbsp;</p>
        <p className="pra">Aspire to build and foster a sense of community. When you see an opportunity to have learners collaborate, use it. Even if learners are communicating remotely, they should feel like they’re in this together. This is key to making your courses feel engaging.&nbsp;</p>


        <h3><strong>Clear instructions are crucial&nbsp;in online learning</strong></h3>
        <p className="pra">Instructions&nbsp;are&nbsp;crucially important in remote learning.&nbsp;Because of the lack of face-to-face&nbsp;instructional sessions&nbsp;and the spontaneous&nbsp;“aha” moments&nbsp;they might provoke, a learner might not have the same kind of opportunities to&nbsp;really understand how to proceed with their work and studies.&nbsp;</p>
        <p className="pra">Supplying&nbsp;learners&nbsp;clear and comprehensive instructions play a major role in mitigating&nbsp;feelings of&nbsp;confusion&nbsp;and&nbsp;a&nbsp;sense&nbsp;of&nbsp;being&nbsp;lost with&nbsp;their&nbsp;materials&nbsp;or&nbsp;studies. By clearly stating learning goals, expectations, and how to proceed,&nbsp;learners&nbsp;will&nbsp;feel confident&nbsp;to&nbsp;continue. Additionally,&nbsp;having clear instructions&nbsp;on&nbsp;how&nbsp;and&nbsp;who to contact&nbsp;when&nbsp;questions arise is critical to&nbsp;avoid unnecessary speed bumps. &nbsp;</p>

         {/* our mission */}
        <h3 className='ourmission'><strong>Our Mission</strong></h3>
        <p className="pra">The principal mission of online learning at LMS is to enhance student access to the University’s academic programs. Of equal importance, LMS's online education is intended to help students acquire the technical skills and online learning strategies important to the pursuit of their academic and career goals. By developing and teaching online courses, LMS faculty also acquire new instructional skills important to their professional growth and development. The University is committed to providing students and faculty the support and resources they need to succeed as participants in online education.</p>


        {/* our vission */}
        <h3 className='ourmission'><strong>Our Vision</strong></h3>
        <p className="pra">The Office of Online Learning strives to position Loyola University Chicago as a leading institution of higher education in the delivery of high-quality online degree programs that serve the evolving needs of diverse student learners. </p>





    <div class="father">
      <div class="front">
        <header>abdalla mohamed</header>
        <img src="#" width="100%" />
      </div>
      <div class="back">
        <header>Find Me On</header>
        <div class="container">
            <div>
                <p>I’m a web developer. I spend my whole day, practically every day, experimenting with coding . CODING IS LIFE</p>
                <p>Graduated from Benha University in 2020</p>
            </div>
            <ul className="d-flex align-items-center flex-row">
                <a className="btn btn-primary btn-floating m-1 mt-2 w-50" style={{backgroundColor: "#0082ca"}} href="tel:01143306714" role="button"><i className="fa fa-address-book"></i> Phone</a>
                <a className="btn btn-primary btn-floating m-1 mt-2 w-50" style={{backgroundColor: "#00ff00"}} href=" https://wa.me/01143306714" role="button"><i className="fa fa-whatsapp"></i> Whatsapp</a>
            </ul>
        </div>
      </div>
  
    </div>
  





        
        </div>
        </>
    )
}

export default About;