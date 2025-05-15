import UIkit from "uikit";
import "./../stylesheet/AccCard.css"
import Resources from "./Resources";

function AccCard({accContent,resourcecontent}){
    return(
        <div className='acc-card uk-flex uk-width-1-1 uk-padding uk-padding-remove-bottom mob-no-flex'>
            <div className="desc uk-width-1-3@m uk-width-1-1@s uk-padding-small uk-padding-remove-vertical ">
                <p className="uk-text-bolder uk-text-emphasis uk-text-large ">{accContent.header}</p>
                <p className="uk-text-emphasis">{accContent.paragraph}</p>
            </div>
            <div className="resources uk-width-4-6 uk-margin-left">
                <Resources content={resourcecontent}/>
            </div>

        </div>
    );
}
export default AccCard