function leggTilPenger() {
    var totaltBudsjett = parseInt(document.getElementById("totaltBudsjett").innerHTML);
    var balanse = parseInt(document.getElementById("balanse").innerHTML);
        var penger = parseInt(document.getElementById('penger').value);
        if (penger == " " || isNaN(penger)) {
            alert("Skriv inn et tall");
        } else {
            totaltBudsjett += penger;
            balanse += penger;
            document.getElementById("totaltBudsjett").innerHTML = totaltBudsjett;
            document.getElementById("balanse").innerHTML = balanse;
        }
    }
    
    function leggTilUtgift() {
        var balanse = parseInt(document.getElementById("balanse").innerHTML);
        var utgiftNavn = document.getElementById("utgiftNavn").value;
            var utgiftMengde = parseInt(document.getElementById("utgiftMengde").value);
            if(utgiftNavn.length == ""){
                alert("Skriv inn navnet på utgiften");
            }
            else if (utgiftMengde == " " || isNaN(utgiftMengde) ) {
                alert("Skriv inn mengden på utgift")
            }
            else if (utgiftMengde <= balanse){
                balanse -= utgiftMengde;
                document.getElementById('balanse').innerHTML = balanse
                var para = document.createElement('p')
            para.innerHTML = `Vare/Tjeneste: ${utgiftNavn} <br> Kostnad : ${utgiftMengde} kr`;
            document.getElementById("tillagteUtgifter").appendChild(para);
            }
            else{
                alert("Utgiften koster mer enn budsjettet inneholder")
            }
    }