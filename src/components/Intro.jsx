import UIkit from "uikit";
import "./../stylesheet/Intro.css"

function Intro({content, children, className=""}){
    return(
        <div className={`intro uk-flex uk-margin-large-bottom mob-no-flex ${className}`}>
            <div className="text uk-width-2-3@m uk-width-1-1@s uk-margin-large-right" >
                {children}
                {content.paragraphs.map((p, i) => (
                    <p className="uk-text-emphasis uk-text-justify" key={i}>{p}</p>
                ))}
                
            </div>
            <div className="image uk-width-1-3@m uk-width-1-1@s">
                <img src={content.image} className="" alt="image" />
            </div>
        </div>
    );
}
export default Intro

// desktop code
{/* 
    <div className={`intro uk-flex uk-margin-large-bottom ${className}`}>
        <div className="text uk-width-2-3 uk-margin-large-right" >
            {children}
            {content.paragraphs.map((p, i) => (
                <p className="uk-text-emphasis uk-text-justify" key={i}>{p}</p>
            ))}
            
        </div>
        <div className="image uk-width-1-3 ">
            <img src={content.image} className="" alt="image" />
        </div>
    </div> 
*/}