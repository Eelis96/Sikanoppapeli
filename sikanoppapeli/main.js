let pelaaja1 =  {
    kaikkiPisteet: 0,
    vuoroPisteet: 0,
    id: "pelaaja1"
}

let pelaaja2 =  {
    kaikkiPisteet: 0,
    vuoroPisteet: 0,
    id: "pelaaja2"
}



document.getElementById("pelaaja1-heitto").addEventListener("click", function() {pelaajaHeitto(pelaaja1);});
document.getElementById("pelaaja1-pida").addEventListener("click", function() {pelaajaPida(pelaaja1);});
document.getElementById("pelaaja2-heitto").addEventListener("click", function() {pelaajaHeitto(pelaaja2);});
document.getElementById("pelaaja2-pida").addEventListener("click", function() {pelaajaPida(pelaaja2);});

function pelaajaHeitto(aPelaaja){
    let rollNum = Math.randomInt(1, 7)
    document.getElementById(aPelaaja.id + "-heitto-kuva").src = "Kuvat/dice" + rollNum + ".png";

    if(rollNum != 1)    {
        //päivitä vuoropisteet
        aPelaaja.vuoroPisteet += rollNum;
        document.getElementById(aPelaaja.id + "-vuoro-pisteet").innerHTML = aPelaaja.vuoroPisteet;
    } else  {
        // menetä vuoropisteet
        aPelaaja.vuoroPisteet = 0;
        document.getElementById(aPelaaja.id + "-vuoro-pisteet").innerHTML = aPelaaja.vuoroPisteet;
        // vaihda vuoro
        if(aPelaaja.id == "pelaaja1")   {
            vaihdaVuoro("pelaaja1", "pelaaja2");
        } else  {
            vaihdaVuoro("pelaaja2", "pelaaja1");
        }
    }
}

function pelaajaPida(aPelaaja) {
    //siirrä vuoropisteet kaikkiin pisteisiin
    aPelaaja.kaikkiPisteet += aPelaaja.vuoroPisteet;
    document.getElementById(aPelaaja.id + "-pisteet").innerHTML = aPelaaja.kaikkiPisteet;
    //katso voittiko
    if(aPelaaja.kaikkiPisteet >= 100)   {
        alert(aPelaaja.id + " Voitti!")
        document.location.reload();
    } else  {
        aPelaaja.vuoroPisteet = 0;
        document.getElementById(aPelaaja.id + "-vuoro-pisteet").innerHTML = 0;

        // nollaa vuoropisteet
        pelaaja1.vuoroPisteet = 0;
        document.getElementById("pelaaja1-vuoro-pisteet").innerHTML = 0;
        //vaihda vuoro
        if(aPelaaja.id == "pelaaja1")   {
            vaihdaVuoro("pelaaja1", "pelaaja2");
        } else  {
            vaihdaVuoro("pelaaja2", "pelaaja1");
        }
    }
}

function vaihdaVuoro(id1, id2)  {
    document.getElementById(id1 + "-header").classList.remove("active");
    document.getElementById(id2 + "-header").classList.add("active");
    document.getElementById(id1 + "-heitto").disabled = true;
    document.getElementById(id1 + "-pida").disabled = true;
    document.getElementById(id2 + "-heitto").disabled = false;
    document.getElementById(id2 + "-pida").disabled = false;
}