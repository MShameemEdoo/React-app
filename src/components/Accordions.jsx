import UIkit from "uikit";
import "./../stylesheet/AccCard.css"
import AccCard from "./AccCard";

function Accordions({accContent,resourcecontent}){
    return(
        <div className='accordion uk-margin-top'>
            <h2 className="uk-text-bold c-primary">Therapy Area</h2>       
                
            <ul id="therapy" uk-accordion="multiple: true">
                {accContent.slice(0,3).map((t,i) => (
                    <li key={i} id={t.title} className="uk-open">
                        <a className="uk-accordion-title uk-padding-small uk-text-decoration-none c-primary bg-accent" href="#">
                            <span  className="uk-flex">
                                <span className="uk-flex uk-width-1-1">
                                    <span className="icon uk-margin-small-right bg-primary">
                                        <img src={t.icon} alt="icon" />
                                    </span>
                                    <h4 className="uk-text-bold uk-margin-remove c-primary">{t.title}</h4>
                                </span>
                            <img src="src/assets/Arrow-up.png" alt="" className="acc-arrow"/>
                            </span>
                        </a>
                        <div className="uk-accordion-content uk-padding-small">
                            <AccCard accContent={t} resourcecontent={resourcecontent}/>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
}
export default Accordions