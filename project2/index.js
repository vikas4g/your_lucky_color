const slect = document.getElementById("slect");
const body = document.body;
const p = document.div;


 const colors = () => {
    let col="";
    const color = ["#0000FF","#FFA500","#00FFFF","#FFFF00","#FF0000","#00FF00","#FF00FF","#7FFFD4","#FF007F","#FA2A55","#6A0DAD","#A23BEC","#FA2A55","#FF1493","#B1FB17"];
  const random = (Math.random()*12).toFixed(0);
  col=color[random];
    return col ;
 } ;
const v1 = colors();
const v2 = colors();
const v3 = colors();
const v4 = colors();
const v5 = colors();
const v6 = colors();
const v7 = colors();
const v8 = colors();
const v9= colors();
const v10= colors();
const v11 = colors();
const v12 = colors();





const text = () => {
    let tt="";
    const rtext = ["“Live as if you were to die tomorrow”",
    "“Everything you can imagine is real.” ",
    "“Because you are alive, everything is possible.”", 
    "Simplicity is the ultimate sophistication. ",
    "“Lead from the heart, not the head.”",
      "“Mistakes are proof that you are trying.”",
    "“Stay hungry, stay foolish.” " ,
    "“Tomorrow is now.”"  ,
  "“Folks are usually about as happy as they make their minds up to be.”",
"“Either you run the day or the day runs you.” ",
"“The simplest things are often the truest.” ",
"“Every moment is a fresh beginning.” " ];
  const random = (Math.random()*4).toFixed(0);
  tt=rtext[random];
    return tt ;
 } ;
const t1 = text();
const t2 = text();
const t3 = text();
const t4 = text();
const t5 = text();
const t6 = text();
const t7 = text();
const t8 = text();
const t9= text();
const t10= text();
const t11 = text();
const t12 = text();
 

const changeBackground = () => {
    switch(slect.value){

        case "Aries":
            body.style.backgroundColor = v1;
            div.innerText=t1;
            break;

            case "Taurus":
            body.style.backgroundColor = v2;
            div.innerText=t2;
            break;

            case "Gemini":
            body.style.backgroundColor = v3;
            div.innerText=t3;
            break;

            case "Cancer":
            body.style.backgroundColor = v4;
            div.innerText=t4;
            break;

            case "Leo":
            body.style.backgroundColor = v5;
            div.innerText=t5;
            break;

            case "Virgo":
            body.style.backgroundColor = v6;
            div.innerText=t6;
            break;

            case "Libra":
            body.style.backgroundColor = v7;
            div.innerText=t7;
            break;

            case "Scorpio":
            body.style.backgroundColor = v8;
            div.innerText=t8;
            break;

            case "Sagittarius":
            body.style.backgroundColor = v9;
            div.innerText=t9;
            break;

            case "Capricorn":
            body.style.backgroundColor = v10;
            div.innerText=t10;
            break;

            case "Aquarius":
            body.style.backgroundColor = v11;
            div.innerText=t11;
            break;

            case "Pisces":
            body.style.backgroundColor = v12;
            div.innerText=t12;
            break;

            default:
                break;
    }

};
