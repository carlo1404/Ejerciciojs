
document.getElementById('formularioCuenta').addEventListener('submit', function(e) {

    e.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const saldo = document.getElementById('saldo').value;

 
    document.getElementById('confirmNombre').textContent = nombre;
    document.getElementById('confirmCorreo').textContent = correo;
    document.getElementById('confirmSaldo').textContent = saldo;

    document.getElementById('formularioCuenta').style.display = 'none';
    document.getElementById('confirmacion').style.display = 'block';

    console.log(nombre);
    console.log(correo);
    console.log(saldo);
    
});
