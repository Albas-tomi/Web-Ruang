// KUBUS
function luasKubus() {
    let sisi = parseInt(document.getElementById("sisi").value);

    let lKubus = 6 * (sisi * sisi);
    document.getElementById("hasilKubus").innerHTML = `Volume Kubus = 6 x ( ${sisi} x ${sisi}) = Luas ${lKubus}`

}

function volumeKubus() {
    let sisi = parseInt(document.getElementById("sisi").value);
    let volKubus = sisi * sisi * sisi;
    document.getElementById("hasilKubus").innerHTML = `Luas Kubus = ${sisi} x ${sisi} x ${sisi} = Volume ${volKubus}`;
}



function hapusK() {
    document.getElementById("hasilKubus").innerHTML = "";
    document.getElementById("inputKubus").reset();

}

// ===================================================================================================


// Balok  2 × ( pl + lt + pt)
function volumeBalok() {
    let panjang = parseInt(document.getElementById("panjang").value);
    let lebar = parseInt(document.getElementById("lebar").value);
    let tinggi = parseInt(document.getElementById("tinggi").value);
    volBalok = panjang * lebar * tinggi;
    hasil = parseFloat(volBalok);
    document.getElementById("hasilBalok").innerHTML = `Volume Balok = ${panjang} x ${lebar} x ${tinggi} = Volume ${hasil}`;

}

function luasBalok() {
    let panjang = parseInt(document.getElementById("panjang").value);
    let lebar = parseInt(document.getElementById("lebar").value);
    let tinggi = parseInt(document.getElementById("tinggi").value);
    LBalok = 2 * (panjang * lebar + lebar * tinggi + panjang * tinggi);
    hasil = parseFloat(LBalok);
    document.getElementById("hasilBalok").innerHTML = `Luas Permukaan Balok = 2 x (${panjang} x ${lebar} + ${lebar} x ${tinggi} + ${panjang} x ${tinggi} = Luas ${hasil})`
}

function hapus() {
    document.getElementById("hasilBalok").innerHTML = "";
    document.getElementById("inputBalok").reset();

}
//=================================================================================================


// Tabung

function luasTabung() {

    let phi = 22 / 7;
    let tinggi = parseInt(document.getElementById("tinggiTabung").value);
    let jari = parseInt(document.getElementById("jari-jari").value);
    let lTabung = (2 * phi * jari) * (jari + tinggi);
    hasil = parseFloat(lTabung);

    document.getElementById("hasilTabung").innerHTML = `Luas Permukaan Tabung = 2 x ${phi} x ${jari} x (${jari} + ${tinggi}) = Luas ${lTabung}`;
}

function volumeTabung() {
    let phi = 22 / 7;
    let tinggi = parseInt(document.getElementById("tinggiTabung").value)
    let jari = parseInt(document.getElementById("jari-jari").value)
    let volTabung = phi * jari * jari * tinggi;
    hasil = parseFloat(volTabung);
    document.getElementById("hasilTabung").innerHTML = `Volume Tabung = ${phi} x ${jari} x ${jari} x ${tinggi}  = Volume ${hasil}`;
}

function hapusTabung() {
    document.getElementById("hasilTabung").innerHTML = "";
    document.getElementById("inputTabung").reset();

}

// =============================================================================================

// Bola
function luasBola() {
    phi = 22 / 7;
    let jari = (document.getElementById("jariBola").value)
    let lBola = 4 * phi * jari * jari;
    var hasil = parseFloat(lBola);
    document.getElementById("hasilBola").innerHTML = `Luas Permukaan 4 x ${phi} * ${jari} * ${jari} Luas = ${ hasil}`;
}

function volumeBola() {
    phi = 22 / 7;
    let jari = (document.getElementById("jariBola").value)
    let volBola = 4 / 3 * phi * jari * jari * jari;
    var hasil = parseFloat(volBola);
    document.getElementById("hasilBola").innerHTML = ` Volume 4/3 x ${phi} * ${jari} * ${jari} * ${jari} Luas = ${ hasil}`;
}

function hapusBola() {
    document.getElementById("hasilBola").innerHTML = "";
    document.getElementById("inputBola").reset();

}



// Dropdown
function dropMy() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var drop = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < drop.length; i++) {
            var openDropdown = drop[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}