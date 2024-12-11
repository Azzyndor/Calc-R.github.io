function calculateOhmsLaw(event) {
    event.preventDefault();
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const resistance = voltage / current;
    document.getElementById('result-ohms-law').innerText = `Сопротивление: ${resistance.toFixed(2)} Ом`;
}

function calculateActiveResistance(event) {
    event.preventDefault();
    const resistance = parseFloat(document.getElementById('resistance').value);
    document.getElementById('result-active-resistance').innerText = `Активное сопротивление: ${resistance.toFixed(2)} Ом`;
}

function calculateResistanceCapacitanceSeries(event) {
    event.preventDefault();
    const resistance = parseFloat(document.getElementById('resistance-r3').value);
    const frequency = parseFloat(document.getElementById('frequency3').value);
    const capacitance = parseFloat(document.getElementById('capacitance3').value);
    const reactance = 1 / (2 * Math.PI * frequency * capacitance);
    const impedance = Math.sqrt(resistance ** 2 + reactance ** 2);
    document.getElementById('result-resistance-capacitance-series').innerText = `Импеданс: ${impedance.toFixed(2)} Ом`;
}

function calculateResistanceInductanceSeries(event) {
    event.preventDefault();
    
    const resistance = parseFloat(document.getElementById('resistance4').value);
    const inductance = parseFloat(document.getElementById('inductance').value);
    const frequency = parseFloat(document.getElementById('frequency4').value);

    const reactanceInductive = 2 * Math.PI * frequency * inductance;

    const impedance = Math.sqrt(resistance ** 2 + reactanceInductive ** 2);
    document.getElementById('result-resistance-inductance-series').innerText = `Импеданс: ${impedance.toFixed(2)} Ом`;
}

function calculateResistanceCapacitanceInductanceSeries(event) {
    event.preventDefault();
    
    const resistance = parseFloat(document.getElementById('resistance5').value);
    const capacitance = parseFloat(document.getElementById('capacitance5').value);
    const inductance = parseFloat(document.getElementById('inductance5').value);
    const frequency = parseFloat(document.getElementById('frequency5').value);

    const reactanceCapacitive = 1 / (2 * Math.PI * frequency * capacitance);
    const reactanceInductive = 2 * Math.PI * frequency * inductance;

    const impedance = Math.sqrt(resistance ** 2 + (reactanceCapacitive - reactanceInductive) ** 2);
    document.getElementById('result-resistance-capacitance-inductance-series').innerText = `Импеданс: ${impedance.toFixed(2)} Ом`;
}

function calculateResistanceCapacitanceParallel(event) {
    event.preventDefault();
    
    const resistance = parseFloat(document.getElementById('resistance6').value);
    const capacitance = parseFloat(document.getElementById('capacitance6').value);
    const frequency = parseFloat(document.getElementById('frequency6').value);

    const reactanceCapacitive = 1 / (2 * Math.PI * frequency * capacitance);

    const impedance = 1 / Math.sqrt((1 / resistance ** 2) + (1 / reactanceCapacitive ** 2));
    document.getElementById('result-resistance-capacitance-parallel').innerText = `Импеданс: ${impedance.toFixed(2)} Ом`;
}

function calculateResistanceInductanceParallel(event) {
    event.preventDefault();
    
    const resistance = parseFloat(document.getElementById('resistance7').value);
    const inductance = parseFloat(document.getElementById('inductance7').value);
    const frequency = parseFloat(document.getElementById('frequency7').value);

    const reactanceInductive = 2 * Math.PI * frequency * inductance;

    const impedance = 1 / Math.sqrt((1 / resistance ** 2) + (1 / reactanceInductive ** 2));
    document.getElementById('result-resistance-inductance-parallel').innerText = `Импеданс: ${impedance.toFixed(2)} Ом`;
}

function calculateResistanceCapacitanceInductanceParallel(event) {
    event.preventDefault();
    
    const resistance = parseFloat(document.getElementById('resistance8').value);
    const capacitance = parseFloat(document.getElementById('capacitance8').value);
    const inductance = parseFloat(document.getElementById('inductance8').value);
    const frequency = parseFloat(document.getElementById('frequency8').value);
    

    const reactanceCapacitive = 1 / (2 * Math.PI * frequency * capacitance);
    const reactanceInductive = 2 * Math.PI * frequency * inductance;
    

    const impedance = 1 / Math.sqrt((1 / resistance ** 2) + (1 / reactanceCapacitive ** 2) + (1 / reactanceInductive ** 2));
    document.getElementById('result-resistance-capacitance-inductance-parallel').innerText = `Импеданс: ${impedance.toFixed(2)} Ом`;
}

function calculateResistanceCapacitanceInductanceCombination(event) {
    event.preventDefault();
    
    const resistance = parseFloat(document.getElementById('resistance9').value);
    const capacitance = parseFloat(document.getElementById('capacitance9').value);
    const inductance = parseFloat(document.getElementById('inductance9').value);
    const frequency = parseFloat(document.getElementById('frequency9').value);

    const reactanceCapacitive = 1 / (2 * Math.PI * frequency * capacitance);
    const reactanceInductive = 2 * Math.PI * frequency * inductance;

    const impedance = Math.sqrt(resistance ** 2 + (reactanceCapacitive + reactanceInductive) ** 2);
    document.getElementById('result-resistance-capacitance-inductance-combination').innerText = `Импеданс: ${impedance.toFixed(2)} Ом`;
}

function calculateResistanceInductanceCapacitanceCombination(event) {
    event.preventDefault();
    
    const resistance = parseFloat(document.getElementById('resistance10').value);
    const inductance = parseFloat(document.getElementById('inductance10').value);
    const capacitance = parseFloat(document.getElementById('capacitance10').value);
    const frequency = parseFloat(document.getElementById('frequency10').value);
    

    const reactanceInductive = 2 * Math.PI * frequency * inductance;
    const reactanceCapacitive = 1 / (2 * Math.PI * frequency * capacitance);

    const impedance = Math.sqrt(resistance ** 2 + (reactanceInductive + reactanceCapacitive) ** 2);
    document.getElementById('result-resistance-inductance-capacitance-combination').innerText = `Импеданс: ${impedance.toFixed(2)} Ом`;
}
