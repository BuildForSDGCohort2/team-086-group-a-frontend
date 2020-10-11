import React from "react";
import Style from "../../Styles/TermsPage/terms.module.css";
import Button from "../../Common/Button.component/Button";

function TermsPage(){
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return(
        <main className={Style.main}>
            <div className={Style.top}></div>
            <div className={Style.over}>
                <p className={Style.caption}> Terms Of Conditions</p>
                <p className={Style.scroll}>
                    Ad minim aliqua deserunt veniam laborum. Aliquip fugiat voluptate ex nostrud sint nostrud ullamco ad consectetur do labore. Et pariatur sint 
                    eu deserunt ut sit magna irure magna laboris consectetur ea veniam ullamco. Est dolore nulla mollit amet do est veniam.

                    Consequat nulla est reprehenderit ut deserunt consequat do amet eu ea ea. Qui cupidatat proident amet velit commodo. Tempor id et enim 
                    aliquip aliqua fugiat dolor ullamco sit.
                    <br />
                    <br />
                    Aliqua qui non incididunt deserunt culpa ullamco aliqua officia in id occaecat. In fugiat aliqua non quis officia ea commodo in amet. 
                    Culpa deserunt ut aliqua consectetur do est ut tempor voluptate elit. Cillum ad tempor aute excepteur. Excepteur veniam tempor cillum qui non p
                    roident eu quis dolore mollit reprehenderit sit elit velit. Eiusmod minim ut aliqua laboris do aliqua ad laborum occaecat ad ut minim.

                    Consectetur do ipsum mollit fugiat veniam labore nostrud. Dolore magna mollit mollit anim cillum nisi. Anim laborum duis veniam eu culpa.

                    Occaecat minim ex in enim sint est non cillum. Pariatur consectetur veniam ea elit ipsum aute ad aliqua officia aliqua mollit ut. 
                    Id veniam ad ad et esse irure. Lorem aliqua est amet labore dolore proident in adipisicing eiusmod. Sint adipisicing labore mollit ullamco tempor elit aute Lorem.
                    <br />
                    <br />
                    Proident eu qui veniam aliqua minim culpa. Dolore cillum cupidatat esse ad sunt. Est officia incididunt magna reprehenderit fugiat adipisicing est.

                    Proident consectetur magna proident exercitation eu voluptate occaecat sunt do aute Lorem quis. Minim mollit dolore id do excepteur magna reprehenderit. 
                    Consequat esse irure veniam sit pariatur. Exercitation dolor magna qui commodo exercitation velit magna nisi adipisicing sint quis mollit ad. Tempor 
                    amet nostrud sunt eu ullamco excepteur.

                    Cupidatat irure sint enim nostrud incididunt nisi non ut officia cillum. Laboris Lorem mollit labore nisi fugiat excepteur eu deserunt consectetur 
                    mollit occaecat velit. Nostrud nisi qui dolor labore incididunt elit do.
                    <br />
                    Labore sint ipsum aliquip id eiusmod Lorem eu ad cupidatat in voluptate minim commodo. Officia eu veniam ea cupidatat cillum amet 
                    consectetur nisi velit anim incididunt amet. Aliquip non ut ipsum enim laborum ex et cillum deserunt ad et. Amet consequat cupidatat nostrud ipsum. 
                    Occaecat laboris tempor ipsum id elit esse. Proident deserunt aute cupidatat voluptate excepteur occaecat excepteur. Ea mollit irure pariatur qui.
                    <br />
                    <br />
                    Laborum cupidatat cillum pariatur in sit consequat labore anim. Reprehenderit nulla ea voluptate ullamco. Irure aliqua quis nulla dolore qui 
                    cillum mollit adipisicing reprehenderit ipsum est ipsum ea pariatur. Ullamco sit velit mollit et excepteur cupidatat ipsum in. 
                    Laboris duis reprehenderit fugiat laborum eu tempor reprehenderit.
                </p>
                <div className={Style.btn}>
                    <div className={Style.btn1}>

                        <Button backgroundColor="#fff" width="8em" borderRadius="8px" name="cancel" text="Cancel" color="black" click={handleSubmit}/>
                        <Button backgroundColor="#ff6347" width="8em" borderRadius="8px" name="submit" text="I Agree" click={handleSubmit}/>
                    </div>
                </div>
            </div>
            <div className={Style.under}></div>

        </main>
    );
}

export default TermsPage;