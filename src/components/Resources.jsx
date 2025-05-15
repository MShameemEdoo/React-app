import UIkit from "uikit";
import "./../stylesheet/AccCard.css"

function Resources({content}){
    return(
        <div className="uk-grid-small uk-child-width-1-3@m uk-grid-match" uk-grid="true">
            {content.map((c,i) => (
                <div key={i} className="resources uk-width-1-2@m uk-padding-small uk-padding-remove-top">
                    <a className="title c-primary uk-text-bold uk-text-decoration-none uk-flex uk-flex-middle uk-flex-between" href="#">
                        <p className="uk-margin-remove">{c.title}</p>
                        <img src="src/assets/Arrow-up.png" className="rotate-arrow" alt="arrow" />
                    </a>
                    <p className="para uk-margin-remove-bottom uk-padding uk-padding-remove-vertical uk-padding-remove-left">{c.paragraphs}</p>
                </div>
            ))}
        </div>
    );
}
export default Resources