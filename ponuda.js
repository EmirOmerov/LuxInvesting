
function PickProfile(){
  var OptionItem = document.getElementById("slctPvc");
  var Oitem =OptionItem.options[OptionItem.selectedIndex].value;
  var profil=Oitem;
  if(profil==="Firatpen"){
    var Firat = profil;
    return Firat;
  }
  else if(profil==="Salamander Brugman"){
     var SalamB=profil;
     return SalamB;
  }
  else if(profil==="Salmander BluEvolution Antracit"){
    var salamBA=profil;
    return salamBA;
  }
  else if(profil==="Salamander BluEvolution Oak"){
    var SalamO=profil;
    return SalamO;
  }

}


function PvcCalculation(){
  var visina = document.getElementById("calcHeight").value;
  var sirina = document.getElementById("calcWidth").value;
  var mont =document.getElementsByName('dodatak');
  var OptionItem = document.getElementById("slctPvc");
  var Oitem =OptionItem.options[OptionItem.selectedIndex].value;
  var profil=Oitem;
  visina /=100;
  sirina /=100;
  var result;
  var msg ="Cijena prozora sa unesenim dimenzijama iznosi: ";
  var valuta=" KM.";

  if(profil==="Firatpen"){
    if (mont[0].checked && mont[1].checked) {
      result=visina*sirina*120+25+50;
     return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+firatpenSpec;
    }
    else if (mont[0].checked) {
      result=visina*sirina*120+25;
     return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+firatpenSpec;
    }
    else if(mont[1].checked){
      result=visina*sirina*120+50;
     return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+firatpenSpec;
    }
     result=visina*sirina*120;
    return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+firatpenSpec;
  }

  else if(profil==="Salamander Brugman"){
    if (mont[0].checked && mont[1].checked) {
      result=visina*sirina*140+25+50;
     return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+BrugmanSpec;
    }
    else if (mont[0].checked) {
      result=visina*sirina*140+25;
     return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+BrugmanSpec;
    }
    else if(mont[1].checked){
      result=visina*sirina*140+50;
     return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+BrugmanSpec;
    }
     result=visina*sirina*140;
    return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+BrugmanSpec;
  }

  else if(profil==="Salmander BluEvolution Antracit"){
    if (mont[0].checked && mont[1].checked) {
      result=visina*sirina*240+25+50;
     return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+blueESpec;
    }
    else if (mont[0].checked) {
      result=visina*sirina*240+25;
     return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+blueESpec;
    }
    else if(mont[1].checked){
      result=visina*sirina*240+50;
     return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+blueESpec;
    }
    result =visina*sirina*240;
    return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+blueESpec;
  }

  else if(profil==="Salamander BluEvolution Oak"){
    if (mont[0].checked && mont[1].checked) {
      result=visina*sirina*230+25+50;
     return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+blueESpec;
    }
    else if (mont[0].checked) {
      result=visina*sirina*230+25;
     return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+blueESpec;
    }
    else if(mont[1].checked){
      result=visina*sirina*230+50;
     return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+blueESpec;
    }
    result=visina*sirina*230;
    return document.getElementById("displeyponuda").innerHTML=msg+result.toFixed(2)+valuta+blueESpec;
  }
}

function specs(){
  var OptionItem = document.getElementById("slctPvc");
  var Oitem =OptionItem.options[OptionItem.selectedIndex].value;
  var profil=Oitem;
  if(profil==="Firatpen"){
    return changeImage("ff.jpg");
  }
  else if(profil==="Salamander Brugman"){
     return changeImage("brg.png");
  }
  else if(profil==="Salmander BluEvolution Antracit"){
    return changeImage("ant.jpg");
  }
  else if(profil==="Salamander BluEvolution Oak"){
    return changeImage("oak.jpg");
  }

}
var firatpenSpec=`<br>Firatpen je sistem profil s pet komora , dvije brtve i ugradbenom debljinom 70mm.<br> Toplinska prohodnost profila Up= 1,43 W/m2K.<br>Garancija: 5 godina.`;
var BrugmanSpec=`<br>Brügmann AD je sistem profila Salamander s pet komora , dvije brtve i ugradbenom debljinom 76mm.<br>Toplinska prohodnost profila Up= 1,3 W/m2K.<br>Garancija: 5 godina.`;
var blueESpec =`<br>BluEvolution je sistem profila Salamander sa sest komora, tri britve, izo staklom 36mm debljine, ukupne vrijednosti Us = 0.7 W/m²K.<br>Ugradbena debljina 82mm.<br>Toplinska prohodnost profila = 0.98 W/m²K.<br>Garancija: 5 godina.`;

//blueEvolution-U standardu kod ovog prozorskog sustava nudimo izo staklo 36 mm debljine, ukupne vrijednosti Us = 0.7 W/m²K.
//bluEvolution profila Up = 0.98 W/m²K.
//bluEvolution je prozorski sistem budućnosti i pravi izbor za Vaš životni ili radni prostor.



function changeImage(image){
  return document.getElementById("x").src=image;

}


function Aluroletne(){
  var visina=document.getElementById('AluHeight').value;
  var sirina=document.getElementById('AluWidth').value;
  visina /=100;
  sirina /=100;
  var mtg = "<br>Montaza je uracunata u cijenu."
  var valuta =" KM."
  var msg="Cijena Alu-roletni sa unesenim dimenzijama iznosi:";
  var rezultat = visina*sirina*100;
  return document.getElementById('aluprikaz').innerHTML=msg+rezultat.toFixed(2)+valuta+mtg;
}



























//
