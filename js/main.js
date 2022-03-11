$(document).ready(function (){
    $("button").parent().next().hide();
    $(".vise").click(function() {
        $(this).parent().next().toggle('slow');
              
    })

      $(".kupi").click(function(){
        $('html,body').animate({scrollTop:$('#forma').offset().top},'600')
     })
    $('#autor').hide()
    $('#Autorblok').click(function(e){
        e.preventDefault();
        $("#autor").toggle(500);
    });
    $('#lista2').hide();
    $('#meni li').hover(function(){
        $(this).find('ul').stop(true,true).slideDown(700);
    },function(){
        $(this).find('ul').stop(true,true).fadeOut(700);
    })
    $('#ReklamaX').click(function(){
        $(this).parent().css("display","none");
    })
    var dugmeGore=$("#dugmeGore");
    $(window).scroll(function(){
        if($(window).scrollTop()<200){
            dugmeGore.css('display','none')
        }
        else{
            dugmeGore.css('display','block')
        }
    })
     $('#sredina1').click(function(e){
         e.preventDefault()
         $('html,body').animate({scrollTop:$('#sredina').offset().top},'500')
     })
     $('#forma1').click(function(e){
        e.preventDefault()
        $('html,body').animate({scrollTop:$('#forma').offset().top},'500')
    })
    $('#AdresaPRodavnice1').click(function(e){
        e.preventDefault()
        $('html,body').animate({scrollTop:$('#AdresaPRodavnice').offset().top},'500')
    })
    dugmeGore.click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},'500')
    })
    
});

//Meni
var nizmeni1=["Početna","Prodavnica","Naručite","Kontakt"];
var nizMeniID=['a1','sredina1','forma1','AdresaPRodavnice1']
let meni=document.getElementById("lista2");
let unos=" ";
for(let j=0;j<nizmeni1.length;j++){
    unos+=`<li><a href="#" id='${nizMeniID[j]}' >${nizmeni1[j]}</a></li>`;
}
meni.innerHTML=unos;
//Slider
window.onload=function(){
    promena();
}
 var nizSlajder=['img/afonx3.jpg','img/ajfonxs3.jpg','img/iphone11s.jpg'];
 var is=0;
 function promena(){
     document.getElementById('slider1').src=nizSlajder[is];
     if(is<nizSlajder.length-1){
         is=is+1;
     }
    else{
        is=0;
     }
     setTimeout(promena,2000);
 } 

//PRODAVNICA    
var sredina=document.getElementById('sredina');
var nizslike=["img/a501.jpg","img/j71.jpg","img/m10.jpg","img/s8.jpg","img/h10.jpg","img/h20.jpg","img/nokia7.jpg","img/redmi.jpg"
,"img/note10.jpg"];
var nizNaslovi=['Samsung Galaxy A50',"Samsung Galaxy J7","Huawei Mate 10 Lite","Samsung Galaxy S8","Huawei Honor 10 Lite",
"Huawei Honor 20","Nokia 7.2","Xiaomi Redmi Note 8 ","Samsung Galaxy Note 10"];
var nizCene=["44.999 RSD","44.999 RSD","27.990 RSD","53.750 RSD","20.773 RSD","38.900 RSD","38.000 RSD","30.000 RSD","111.000 RSD"];
var nizDijagonala=["Dijagonala ekrana:6.5 inča","Dijagonala ekrana:5.5 inča","Dijagonala ekrana:5.9 inča","Dijagonala ekrana:5.8 inča"
,"Dijagonala ekrana:6.21 inča",
"Dijagonala ekrana:6.26 inča","Dijagonala ekrana:6.3 inča","Dijagonala ekrana:6.3 inča","Dijagonala ekrana:6.53 inča","Dijagonala ekrana:6.8 inča"];
var nizRam=[" RAM memorija:4GB","RAM memorija:3GB","RAM memorija:4GB","RAM memorija:4GB","RAM memorija:3GB","RAM memorija:6GB","RAM memorija:6GB","RAM memorija:6GB","RAM memorija:12GB"];
var nizMemorija=["Interna memorija:128 GB","Interna memorija:16GB","Interna memorija:64GB","Interna memorija:64GB","Interna memorija:32GB"
,"Interna memorija:128GB","Interna memorija:128GB","Interna memorija:128GB","Interna memorija:256GB"];
var nizKamera=["Zadnja kamera:48.0Mpx","Zadnja kamera:13Mpx","Zadnja kamera:16Mpx","Zadnja kamera:12Mpx","Zadnja kamera:13Mpx",
"Zadnja kamera:48Mpx","Zadnja kamera:48Mpx","Zadnja kamera:20Mpx","Zadnja kamera:40Mpx"];
var nizMasa=["Masa:166 grama","Masa:181 grama","Masa:164 grama","Masa:155 grama","Masa:162 grama","Masa:174 grama","Masa:180 grama","Masa:200 grama","Masa:196 grama"];
var nizRezolucija=["Rezolucija:2340x1080px","Rezolucija:1920x1080px","Rezolucija:2160x1080px","Rezolucija:2960x1440px","Rezolucija:2340x1080px"
,"Rezolucija:2340x1080px","Rezolucija:2280x1080px","Rezolucija:2340x1080px","Rezolucija:3040x1440px"];
for(let i=0;i<nizslike.length;i++){
    //UBACIVANJE SLIKE
    var div=document.createElement('div');
    div.classList.add("blok");
    var img=document.createElement('img');
    img.setAttribute('src',nizslike[i]);
    img.setAttribute('alt',"slika");
    img.classList.add('slika');
    div.appendChild(img);
    sredina.appendChild(div)
}
var blok=document.getElementsByClassName('blok');
for(var i=0;i<blok.length;i++){
        //NASLOV
        var naslovi=document.createElement('h2');
        var nasloviTekst=document.createTextNode(nizNaslovi[i])
        naslovi.appendChild(nasloviTekst);
        //CENA
        var cene=document.createElement('h3')
        var cenetekst=document.createTextNode(nizCene[i]);
        cene.appendChild(cenetekst);
        //DUGMAD
        var dugmici=document.createElement('div');
        dugmici.classList.add('dugmici');
        var dugme1=document.createElement('button')
        var dugme1text=document.createTextNode("detalji")
        dugme1.classList.add("vise")
        dugme1.appendChild(dugme1text);
        var dugme2=document.createElement('button')
        var dugme2text=document.createTextNode("kupi")
        dugme2.classList.add('kupi');
        dugme2.appendChild(dugme2text);
        dugmici.appendChild(dugme1);
        dugmici.appendChild(dugme2);
        //SAKRIVENI BLOK
        var sakriveno=document.createElement('div');
        //DIJAGONALA
        var tekstoviSakrivenoDijagonala=document.createElement('p');
        var tekstDijagonala=document.createTextNode(nizDijagonala[i]);
        tekstoviSakrivenoDijagonala.appendChild(tekstDijagonala);
        //RAM
        var tekstoviSakrivenoRam=document.createElement('p');
        var tekstRam=document.createTextNode(nizRam[i]);
        tekstoviSakrivenoRam.appendChild(tekstRam);
        //Memorija
        var tekstoviSakrivenoMemorija=document.createElement('p');
        var tekstMemorija=document. createTextNode(nizMemorija[i]);
        tekstoviSakrivenoMemorija.appendChild(tekstMemorija);
        //Kamera
        var tekstoviSakrivenoKamera=document.createElement('p');
        var tekstKamera=document.createTextNode(nizKamera[i]);
        tekstoviSakrivenoKamera.appendChild(tekstKamera);
        //MASA
        var tekstSakrivenoMasa=document.createElement('p');
        var tekstMasa=document.createTextNode(nizMasa[i]);
        tekstSakrivenoMasa.appendChild(tekstMasa);
        //Rezolucija
        var tekstsakrivenRezolucija=document.createElement('p');
        var tekstRezolucija=document.createTextNode(nizRezolucija[i]);
        tekstsakrivenRezolucija.appendChild(tekstRezolucija);
        //DODAVANJE KLASA
        tekstoviSakrivenoDijagonala.classList.add('sakriven');
        tekstoviSakrivenoKamera.classList.add('sakriven');
        tekstoviSakrivenoMemorija.classList.add('sakriven');
        tekstoviSakrivenoRam.classList.add('sakriven');
        tekstSakrivenoMasa.classList.add("sakriven");
        tekstsakrivenRezolucija.classList.add("sakriven");
        //SPAJANJE ELEMENATA
        sakriveno.appendChild(tekstsakrivenRezolucija);
        sakriveno.appendChild(tekstoviSakrivenoDijagonala);
        sakriveno.appendChild(tekstoviSakrivenoKamera);
        sakriveno.appendChild(tekstoviSakrivenoMemorija);
        sakriveno.appendChild(tekstoviSakrivenoRam);
        sakriveno.appendChild(tekstSakrivenoMasa);
        sakriveno.classList.add('sakrivenBlok')
        //DODAVANJE U GLAVNI ELEMENT
        blok[i].appendChild(naslovi);
        blok[i].appendChild(cene);
        blok[i].appendChild(dugmici);
        blok[i].appendChild(sakriveno);
    
}

 
//Datum 
var datum= new Date();
var datumGodina=datum.getFullYear();
var datumDan=datum.getDate();
var datumMesec=datum.getMonth();
var mesec=" ";
switch(datumMesec){
    case 0:
    mesec="Jan";
    break;
    case 1: 
    mesec="Feb";
    break; 
    case 2: 
    mesec="Mar";
    break;  
    case 3: 
    mesec="Apr";
    break;  
    case 4: 
    mesec="Maj";
    break;  
    case 5: 
    mesec="Jun";
    break;  
    case 6: 
    mesec="Jul";
    break;  
    case 7: 
    mesec="Avg";
    break;  
    case 8: 
    mesec="Sep";
    break;  
    case 9: 
    mesec="Okt";
    break;  
    case 10: 
    mesec="Nov";
    break;
    case 11: 
    mesec="Dec";
    break;      
} 
 ;
 var datumUpis="<p>"+datumDan+"/"+mesec+"/"+datumGodina+"</p>";

//FORMA
var nizOption=["Izaberite","PayPal","Western Union","Visa","Mastercard","Gotovina","Cekovi"]
var lista=document.getElementById('lista');
var listaUnost=" ";
for(let k=0;k<nizOption.length;k++){
    listaUnost+="<option>"+nizOption[k]+"</option>"
}
lista.innerHTML=listaUnost;
var listaArtikl=document.getElementById("listaArtikl");
var listaArtiklUnos="<option>Izaberite</option>";
for(let l=0;l<nizNaslovi.length;l++){
    listaArtiklUnos+="<option>"+nizNaslovi[l]+"</option>";
}
listaArtikl.innerHTML=listaArtiklUnos;
var ime=document.getElementById("ime"); 
var prezime=document.getElementById("prezime"); 
var adresa=document.getElementById("adresa"); 
var kontakt=document.getElementById("kontakt"); 
var narudzbina=document.getElementById("Narudzbina");
var grad=document.getElementById('grad');
var postanskiBroj=document.getElementById('postankiBroj');
var dugme=document.getElementById('dugme')
let reime=/^[A-ZČĆŠĐŽ][a-zčćšđž]{1,14}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{1,19}){0,}$/;
let rebroj=/^06([0-6]|9)[0-9]{5,6}$/;
let readresa=/^[A-ZČĆŠĐŽ][a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{0,10}){0,4}\s([0-9]{1,3}|[0-9]{1,3}[a-z])$/
var reGrad=/^[A-ZČĆŠĐŽ][a-zčćšđž]{1,10}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{1,15}){0,1}$/
var rePostanskiBroj=/^[0-9]{5}$/

var listaGreske=document.getElementById('listaGreske');

var greskaIme=''
dugme.addEventListener('click',function(){
    var ispisGreske="<ul>"
    var nizGreske=[];
    var validacijaliste=true;
    var imeVrednost=ime.value;
    console.log(imeVrednost)
    if(!reime.test(imeVrednost)){
        ime.nextElementSibling.innerHTML="<p>Pogresan unos imena</p>";
        ime.classList.add('greska')
        nizGreske.push("Ime treba biti u formatu npr:Ana ili Ana Marija")
       
    }
    else{
        ime.nextElementSibling.innerHTML=" ";
        ime.classList.remove('greska')
    }
    var prezimeVrednost=prezime.value;
    if(!reime.test(prezimeVrednost)){
        prezime.nextElementSibling.innerHTML="<p>Pogresan unos prezimena</p>";
        prezime.classList.add('greska')
        nizGreske.push('Prezime treba biti u formatu npr:Pop ili Pop Jovanov');
        
    }
    else{
        prezime.nextElementSibling.innerHTML=" ";
        prezime.classList.remove('greska')
        
    }
    var kontaktvrednost=kontakt.value;
    console.log(kontaktvrednost)
    if(!rebroj.test(kontaktvrednost)){
        console.log(kontaktvrednost)
        kontakt.nextElementSibling.innerHTML="<p>Pogresan unos kontakta</p>";
        kontakt.classList.add('greska');
        nizGreske.push('Kontakt treba biti npr:06*******');
        
    }
    else{
        kontakt.nextElementSibling.innerHTML=" ";
        kontakt.classList.remove('greska')
        
    }
    var adresavrednost=adresa.value;
    if(!readresa.test(adresavrednost)){
        adresa.nextElementSibling.innerHTML="<p>Pogresan unos adrese</p>";
        adresa.classList.add('greska');
        nizGreske.push('Adresa treba biti u formatu npr:Visnjicka 48');
        console.log(adresavrednost)
        
    }
    else{
        adresa.nextElementSibling.innerHTML=" ";
        adresa.classList.remove('greska')
    }
    var selektovani=lista.selectedIndex;
    if(selektovani==0){
        lista.classList.add('greska');
        lista.previousElementSibling.innerHTML="<p>Morate izabrati nacin placanja</p>";
        lista.previousElementSibling.classList.add('greskaLista');
        validacijaliste=false;
    } 
    else{
        lista.classList.remove('greska')
        lista.previousElementSibling.innerHTML="<p>Izabran nacin placanja</p>";
        lista.previousElementSibling.classList.remove('greskaLista');
    }
    var selektovaniartikl=listaArtikl.selectedIndex;
    if(selektovaniartikl==0){
        listaArtikl.classList.add('greska');
        listaArtikl.previousElementSibling.innerHTML="<p>Morate izabrati artikl</p>";
        listaArtikl.previousElementSibling.classList.add('greskaLista');
        validacijaliste=false;
    } 
    else{
        listaArtikl.classList.remove('greska');
        listaArtikl.previousElementSibling.innerHTML="<p>Izabran artikl</p>"
        listaArtikl.previousElementSibling.classList.remove('greskaLista');
    }
    var gradvrednost=grad.value;
    
     if(!reGrad.test(gradvrednost)){
         grad.nextElementSibling.innerHTML="<p>Pogresan unos grada</p>";
         grad.classList.add('greska');
         nizGreske.push('Grad treba biti u formatu npr:Beograd');
     }
     else{
         grad.nextElementSibling.innerHTML=" ";
         grad.classList.remove('greska')
     }
     var postanskiBrojvrednost=postanskiBroj.value;
     if(!rePostanskiBroj.test(postanskiBrojvrednost)){
        postanskiBroj.nextElementSibling.innerHTML="<p>Pogresan unos postanskog broja</p>";
        postanskiBroj.classList.add('greska');
        nizGreske.push('Postanski broj  treba biti u formatu npr:11060 ');
        
    }
    else{
        postanskiBroj.nextElementSibling.innerHTML=" ";
        postanskiBroj.classList.remove('greska')
    }
    if(nizGreske.length==0 && validacijaliste){
        ispisGreske+=`<li>Porudzbina je izvrsena  ${datumUpis}</li> `  
        listaGreske.classList.add('proslaValidacija'); 
    }
    else{
        for(let i=0;i<nizGreske.length;i++){
            ispisGreske+=`<li>${nizGreske[i]}</li>`
            listaGreske.classList.add('validacijafalse');
        }
        
    }
    ispisGreske+='</ul>'
    listaGreske.innerHTML=ispisGreske;

})





  