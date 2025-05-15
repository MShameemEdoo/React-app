import 'uikit/dist/css/uikit.min.css';
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Featured from "../components/Featured";
import Goal from "../components/Goal";
import Accordions from "../components/Accordions";
function Landing(){
    const heroContent = {
        title: "Driven by commitment to life",
        paragraphs: [
            "Everything we do at Kyowa Kirin is driven by our mission to improve health, ease suffering and prolong life. It's a mission that has guided our development and expansion for over 70 years",
            "As well as introducing and explaining the major products in our portfolio, this site contains a range of materials to support healthcare professionals. These free online medical resources include overviews of specific therapy areas, diagnostic materials and treatment guidelines.",
            "We hope you find them of value as you continue to support and treat the patients under your care.",
            "Simply register your details to gain full access to the site and all the information it contains."
        ],
        image: "src/assets/Frame 1747.png"
    };
    const goal = {
        title: "H2 Around 145,000 people live with (Disease Y) in the UK",
        paragraphs: ["This website is intended to help people understand (Disease Y) and improve awareness of the condition."],
        image: "src/assets/Image-space.png"
    };
    const resources = [
        {
            title: "MEDICAL EDUCATION",
            paragraphs: "Here you will find educational resources focused on the diagnosis and treatment of OIC."
        },
        {
            title: "MEDICAL RESOURCES",
            paragraphs: "Here you will find a collection of published data, clinical expertise and guidance for the various treatment options available for OIC."
        },
        {
            title: "DISEASE PAGES",
            paragraphs: "Here you will find expert medical resources delving into the pathology and epidemiology of OIC as well as its impact on patient quality of life."
        },
    ];
    const acc= [
        {
            index: 1,
            icon: "src/assets/icon-1.png",
            title: "Gastrointestinal",
            header: "Opioid-induced Constipation",
            paragraph: "OIC is a common, yet frequently under-recognised, poorly managed complication of opioid therapy.¹"
        },
        {
            index:2,
            icon: "src/assets/icon-2.png",
            title: "Oncology",
            header: "Breakthrough Cancer Pain",
            paragraph: "Transient exacerbations of pain, known as BtCP, are a common problem in cancer patients, as a direct or indirect result of the cancer itself, or the cancer treatment.²"
        },
        {
            index:3,
            icon: "src/assets/icon-1.png",
            title: "Injury",
            header: "Strain Muscle",
            paragraph: "A muscle strain happens when fibers in a muscle are overstretched or torn. It often occurs during sudden movements, like sprinting or jumping."
        },
        {
            index: 1,
            icon: "src/assets/icon-1.png",
            title: "Gastrointestinal",
            header: "Opioid-induced Constipation",
            paragraph: "OIC is a common, yet frequently under-recognised, poorly managed complication of opioid therapy.¹"
        },
        {
            index:2,
            icon: "src/assets/icon-2.png",
            title: "Oncology",
            header: "Breakthrough Cancer Pain",
            paragraph: "Transient exacerbations of pain, known as BtCP, are a common problem in cancer patients, as a direct or indirect result of the cancer itself, or the cancer treatment.²"
        },
        {
            index:3,
            icon: "src/assets/icon-1.png",
            title: "Injury",
            header: "Strain Muscle",
            paragraph: "A muscle strain happens when fibers in a muscle are overstretched or torn. It often occurs during sudden movements, like sprinting or jumping."
        },
        
    ];


    return(
        <>
            <Navbar/>
            <div className="content uk-container uk-margin-large-top uk-margin-xlarge-bottom">
                <Intro className="desc" content={heroContent}>
                    <h1 className="uk-text-bold uk-height-small">{heroContent.title}</h1>
                </Intro>
                <Featured content={acc}/>
                <Goal className="goal" content={goal}>
                    <h2 className="uk-text-bold uk-height-small c-primary">{goal.title}</h2>
                </Goal>
                <Accordions accContent={acc} resourcecontent={resources}/>
            </div>
        </>
    );
}
export default Landing;