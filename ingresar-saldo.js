class CuentaBancaria {
    constructor(nombre, saldo = 0) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    ingresarSaldo(monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito exitoso. Nuevo saldo: $${this.saldo.toFixed(2)}`);
        } else {
            console.log("El monto debe ser mayor a 0.");
        }
    }

    consultarSaldo() {
        console.log(`Saldo actual de ${this.nombre}: $${this.saldo.toFixed(2)}`);
    }
}

const cuenta = new CuentaBancaria('andres', 100);
cuenta.ingresarSaldo(25);
cuenta.consultarSaldo(); 
