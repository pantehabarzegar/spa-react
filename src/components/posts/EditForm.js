import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EditForm = ({ post }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                body,
                userId: 1,
                id: post.id
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setError(null)
                Swal.fire({
                    title: "Vielen Dank!",
                    text: "Die Bearbeitung war erfolgreich.",
                    icon: "success",
                    confirmButtonText: "Okay",
                });
            }).catch(err => {
                setLoading(false)
                setError(err.message)
                Swal.fire({
                    title: "Error!",
                    text: err.message,
                    icon: "warning",
                    confirmButtonText: "Ok",
                });
            });
    }

    useEffect(() => {
        setTitle(post.title)
        setBody(post.body)
    }, [post])

    return (
        <div className="container bg-light edit-margin ">
           
               
               <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row mt-5  ">
        <div className="col-md-6 d-flex align-items-stretch mb-5 mb-lg-0">
         
          <div className="card shadow w-100">
            <div className="card-body">
              
              <p className="card-title fw-bold ms-2 text-muted"><i className="bi bi-wrench fs-4 me-2"></i>Bestellformular</p>
              <hr className="fs-5"/>
              
                <div className="mb-3">
                    <label for="frame" className="form-label">Rahmen</label>
                    <select className="form-select" id="frame" required>
                        <option value="" disabled selected>Bitte auswählen</option>
                        <option value="frame1">Modell 1</option>
                        <option value="frame2">Modell 2</option>
                        <option value="frame3">Modell 3</option>
                      </select>
                </div>
                <div className="mb-3">
                    <label for="handlebars" className="form-label">Lenker</label>
                    <select className="form-select" id="handlebars" required>
                        <option value="" disabled selected>Bitte auswählen</option>
                        <option value="handlebars1">Modell 1</option>
                        <option value="handlebars2">Modell 2</option>
                        <option value="handlebars3">Modell 3</option>
                        
                    </select>
                </div>
                <div className="mb-3">
                    <label for="wheels" className="form-label">Räder</label>
                    <select className="form-select" id="wheels" required>
                        <option value="" disabled selected>Bitte auswählen</option>
                        <option value="wheels1">Modell 1</option>
                        <option value="wheels2">Modell 2</option>
                        <option value="wheels3">Modell 3</option>
                        
                    </select>
                </div>
                <div className="mb-3">
                    <label for="saddle" className="form-label">Sattel</label>
                    <select className="form-select" id="saddle" required>
                        <option value="" disabled selected>Bitte auswählen</option>
                        <option value="saddle1">Modell 1</option>
                        <option value="saddle2">Modell 2</option>
                        <option value="saddle3">Modell 3</option>
                        
                    </select>
                </div>
                
            


            </div>
          </div>



        </div>

        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card shadow  w-100 ">
            <div className="card-body">
              
              <p className="card-title fw-bold ms-2 text-muted"><i className="bi bi-x-diamond-fill fs-4 me-2"></i>FahrradeigenschaftenTitle</p>
              <hr className="fs-5"/>
              
                <div className="mb-3">
                    <label className="form-label d-block">Rahmengröße</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="frameSize" id="frameSmall" value="small" required/>
                        <label className="form-check-label" for="frameSmall">Klein</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="frameSize" id="frameMedium" value="medium"/>
                        <label className="form-check-label" for="frameMedium">Mittel</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="frameSize" id="frameLarge" value="large"/>
                        <label className="form-check-label" for="frameLarge">Groß</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label d-block">Bremssystem</label>
                    <select className="form-select" id="brakeSystem" required>
                        <option value="" disabled selected>Bitte auswählen</option>
                        <option value="disc">Scheibenbremse</option>
                        <option value="v-brake">V-Bremse</option>
                        <option value="hydraulic">Hydraulische Bremse</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label d-block">Gangschaltung</label>
                    <select className="form-select" id="gears" required>
                        <option value="" disabled selected>Bitte auswählen</option>
                        <option value="single-speed">Einzelgang</option>
                        <option value="multi-speed">Mehrgang</option>
                        <option value="automatic">Automatik</option>
                    </select>
                </div>
                
           

            </div>
          </div>
        
        </div>
      </div>

      <div className="row mt-5 ">

        <div className="col-md-6 mb-5 mb-lg-0">
          <div className="card shadow ">
            <div className="card-body">
              
              <p className="card-title fw-bold ms-2 text-muted"><i className="bi bi-x-diamond-fill fs-4 me-2"></i>Kundeninformationen und Lieferdetails</p>
              <hr className="fs-5"/>
       
                <div className="mb-3">
                    <label for="name" className="form-label">Vorname :</label>
                    <input onChange={(e) => setTitle(e.target.value)}  type="text" className="form-control" id="name" required/>
                <div className="form-text text-danger">
                    {title ? '' : 'vorname ist erforderlig;)'}
                </div>
                </div>
                <div className="mb-3">
                    <label for="surname" className="form-label">Nachname :</label>
                    <input onChange={(e) => setBody(e.target.value)} type="text" className="form-control" id="surname" required/>
                    <div className="form-text text-danger ">
                    {body ? '' : 'Nachname ist erforderlig ;)'}
                </div>
                </div>
                <div className="mb-3">
                    <label for="address" className="form-label">Adresse :</label>
                    <input type="text" className="form-control" id="address" required/>
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Telefonnummer :</label>
                    <input type="tel" className="form-control" id="phone" required/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">E-Mail-Adresse :</label>
                    <input type="email" className="form-control" id="email" required/>
                </div>
                <div className="mb-3">
                    <label for="urgency" className="form-label">Eilbestellung :</label>
                    <select className="form-select" id="urgency" required>
                        <option value="" disabled selected>Bitte auswählen</option>
                        <option value="normal">Normal (1-4 Wochen)</option>
                        <option value="urgent">Eilt (1 Woche)</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label for="deliveryTime" className="form-label">Geschätzte Lieferzeit</label>
                    <input type="number" className="form-control" id="deliveryTime" min="1" max="4" required/>
                    <small className="form-text text-muted">Bitte geben Sie die geschätzte Lieferzeit in Wochen an (zwischen 1 und 4).</small>
                </div>
                
          
            </div>
          </div>
        
        </div>


        <div className="col-md-6 d-flex align-items-stretch">
         
          <div className="card shadow w-100 ">
            <div className="card-body">
              
              <p className="card-title fw-bold ms-2 text-muted"><i className="bi bi-wrench fs-4 me-2"></i>Zusätzliche Anfragen </p>
              <hr className="fs-5"/>
       
                <div className="mb-3">
                    <label for="additionalRequests" className="form-label">Zusätzliche Anfragen</label>
                    <textarea className="form-control" id="additionalRequests" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-dark  "  disabled={title === '' || body=== ''} >{loading && <div className="spinner-border" />}Erstellen</button>
                 {error && <div className=" mt-2 fw-bold text-danger" >{error}</div>}
                 <p className="fs-sm text-dark">Das Formular wird erst dann an den Server(JSONPlaceholder :Free fake API for testing and prototyping.) gesendet, wenn alle Felder ausgefüllt sind.</p>
            </div>
          </div>




        </div>

       
      </div>
    </form>
                
            
        </div>
    )
}

export default EditForm;