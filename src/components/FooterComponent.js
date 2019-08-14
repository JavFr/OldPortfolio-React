import React from 'react';

function Footer(props) {
    return(
        <div className="footer" id="section-4">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-12">
                        <p className='text-white'>Gracias por visitar mi sitio. 
                            Podés comunicarte conmigo por medio de cualquiera de las redes sociales disponibles. 
                            O simplemente enviarme un correo electrónico.</p>
                    </div> 
                    </div>
                    <div className="row justify-content-center">
                        <div className="text-center col-12 col-md-6">
                            <a className="btn btn-social-icon btn-github" target="_blank" href="https://github.com/JavFr/"><i className="fa fa-codepen"></i></a>
                            <a className="btn btn-social-icon btn-github" target="_blank" href="https://github.com/JavFr/"><i className="fa fa-github"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" target="_blank" href="https://www.linkedin.com/in/javfr/"><i className="fa fa-linkedin"></i></a>
                        </div>
                        <div className="col-12 col-md-6 text-center">
                            <a href="mailto:jfbrustolon@gmail.com"> <i className="fa fa-envelope fa-lg"></i>:
                                jfbrustolon@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Footer;