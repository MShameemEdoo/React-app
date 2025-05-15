import UIkit from "uikit";
import "./../stylesheet/Intro.css"

function Goal({content, children, className=""}){
    return(
        <div className={`goal uk-flex uk-padding uk-padding-remove-vertical mob-no-flex ${className}`}>
            <div className="uk-width-3-6@m uk-width-1-1@s uk-margin-large-right">
                {children}
                {content.paragraphs.map((p, i) => (
                    <p className="uk-text-emphasis uk-text-justify" key={i}>{p}</p>
                ))}
                
            </div>
            <div className="image uk-width-2-6@m uk-width-1-1@s">
                <img src={content.image} className="" alt="image" />
            </div>
        </div>
    );
}
export default Goal