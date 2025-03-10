class CuentaBancaria {
    constructor(nombre, saldo = 0) {
        this.nombre = nombre;
        this.saldo = saldo;
        this.transacciones = [];
    }

    consignar(monto) {
        if (monto > 0) {
            this.saldo += monto;
            this.transacciones.push({ tipo: "Consignación", monto, fecha: new Date().toLocaleString() });
            console.log(`Consignación exitosa. Nuevo saldo: $${this.saldo.toFixed(2)}`);
        } else {
            console.log("El monto de consignación debe ser mayor a 0.");
        }
    }

    consultarSaldo() {
        console.log(`Saldo actual de ${this.nombre}: $${this.saldo.toFixed(2)}`);
    }

    verTransacciones() {
        console.log(`Historial de transacciones de ${this.nombre}:`, this.transacciones);
    }
}

// Ejemplo de uso
const cuenta = new CuentaBancaria("Juan", 100);
cuenta.consignar(200);  // Consignación exitosa. Nuevo saldo: $300.00
cuenta.consultarSaldo();  // Saldo actual de Juan: $300.00
cuenta.verTransacciones(); // Muestra historial de consignaciones
