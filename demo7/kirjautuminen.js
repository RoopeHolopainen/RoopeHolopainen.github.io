document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    let kirjautunut = 'kylla';
    if(kirjautunut === 'kylla'){
        document.getElementById("tervetuloa_teksti").textContent +=' Roope!';
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
}