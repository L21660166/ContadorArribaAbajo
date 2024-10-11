let contador = 0;

function subirparriba() {
    contador++;
    document.getElementById("contador").innerHTML = contador;
    document.getElementById("contador").style.transform = "translateY(-20px)"; // Brinco hacia arriba
    setTimeout(() => {
        document.getElementById("contador").style.transform = "translateY(0)"; // Regresa a la posición original
    }, 200);
}

function bajarparaabajdo() {
    contador--;
    document.getElementById("contador").innerHTML = contador;
    document.getElementById("contador").style.transform = "translateY(20px)"; // Brinco hacia abajo
    setTimeout(() => {
        document.getElementById("contador").style.transform = "translateY(0)"; // Regresa a la posición original
    }, 200);
}
