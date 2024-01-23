$(document).ready(
    function (){
        for(i=1; i<4; i++){
        cardClass="card mb-2";
        switch(i){
            case 1:
                cardClass+=" bg-primary";
                unitLabel="Grams";
                unitAbrev="gm";
                break;
            case 2:
                cardClass+=" bg-success";
                unitLabel="Kilograms";
                unitAbrev="kl";
                break;
            case 3:
                cardClass+=" bg-danger";
                unitLabel="Ounces";
                unitAbrev="oz";
                break;
                default:
                    cardClass=" ";
        }
        $("#result").append(`
        <div class="${cardClass}">
            <div class="card-body">
                <h4>${unitLabel}</h4>
                <div id="${unitAbrev}">Output</div>
            </div>
        </div>`);
        }
    $("#result").hide("drop", { direction: "down" }, "slow");
    $("#lbsInput").keyup(
        function(){
            let lbs = $(this).val();
            $("#result").show("fold",1000);
            $("#gm").text(lbs/0.00220462);
            $("#kl").text(lbs/2.20462);
            $("#oz").text(lbs*16);
            }
    );
    }
);

// function (){
//     for(i=1; i<4; i++){
//     cardClass="card mb-2";
//     switch(i){
//         case 1:
//             cardClass+=" bg-primary";
//             unitLabel="Grams";
//             unitAbrev="gm";
//             break;
//         case 2:
//             cardClass+=" bg-success";
//             unitLabel="Kilograms";
//             unitAbrev="kl";
//             break;
//         case 3:
//             cardClass+=" bg-danger";
//             unitLabel="Ounces";
//             unitAbrev="oz";
//             break;
//             default:
//                 cardClass=" ";
//     }
//     // cardClass+=" bg-primary";
//     // unitLabel="Grams";
//     // unitAbrev="gm";
//     $("#result").append(`
//     <div class="${cardClass}">
//         <div class="card-body">
//             <h4>${unitLabel}</h4>
//             <div id="${unitAbrev}">Output</div>
//         </div>
//     </div>`);
//     }
// $("#result").hide("drop", { direction: "down" }, "slow");
// $("#lbsInput").keyup(
//     function(){
//         let lbs = $(this).val();
//         $("#result").show("fold",1000);
//         $("#gm").text(lbs/0.00220462);
//         $("#kl").text(lbs/2.20462);
//         $("#oz").text(lbs*16);
//         }
// );
// }


