import UIkit from "uikit";
import "./../stylesheet/Featured.css"

function Featured({content}){
    function OpenAcc(index,title) {
        const acc = document.getElementById(title)
        const accordion = UIkit.accordion('#therapy')
        if (!acc.classList.contains("uk-open")){
            accordion.toggle(index-1,true)
        }
        acc.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return(
        <div className="featured uk-margin-large-bottom">
            <div uk-slider="infinite: true;">
                <div className="uk-position-relative">
                    <div className="uk-flex uk-margin-small-bottom">
                        <h4 className='uk-text-bold uk-width-1-1 uk-margin-remove '>FEATURED TOPICS</h4>
                        <a><img className='prev' src="src/assets/arrow-right.png" uk-slider-item="previous"></img></a>
                        <a><img className='next uk-margin-small-left' src="src/assets/arrow-right.png" uk-slider-item="next"></img></a>
                    </div>

                    <div className="uk-slider-container uk-padding-small">
                        <div className="uk-slider-items uk-child-width-1-3@m">
                            {content.map((c,i) => (
                                <div key={i} className="uk-card uk-margin-right">
                                    <div className="uk-card-header uk-margin-small-bottom uk-padding-remove-horizontal uk-margin-large-right uk-margin-medium-left uk-margin-small-bottom">
                                        <div className="uk-flex ">
                                            <span className="icon uk-margin-small-right bg-primary">
                                                <img src={c.icon} alt="icon" />
                                            </span>
                                            <h4 className="uk-margin-remove">{c.title}</h4>
                                        </div>
                                        <h3 className="uk-card-title uk-text-bold uk-margin-remove ">{c.header}</h3>
                                    </div>

                                    <div className="uk-card-body  uk-text-secondary uk-padding-remove uk-margin-large-right uk-margin-medium-left uk-margin-small-bottom">
                                        <p className="txt-clamp">{c.paragraph}</p>
                                    </div>

                                    <div className="uk-card-footer ">
                                        <a className="uk-flex uk-button uk-text-bold uk-padding-remove c-primary" 
                                            // href={`#${c.title}`} 
                                            uk-scroll="true"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                OpenAcc(c.index,c.title)
                                            }}>
                                        <p className="uk-margin-remove-bottom uk-margin-right">Learn More</p> 
                                        <img src="src/assets/Arrow-up.png" alt="" className="featured-arrow"/>
                                        </a>
                                    </div>
                                </div>                           
                            ))}
                        </div>
                    </div>
                </div>

                <ul className="uk-slider-nav uk-dotnav  uk-flex-center uk-margin"></ul>
            </div>
        </div>
    );
}
export default Featured;

