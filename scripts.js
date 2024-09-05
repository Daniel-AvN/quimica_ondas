document.getElementById('quantumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const n = parseInt(document.getElementById('principalQuantumNumber').value);
    const resultsBody = document.getElementById('resultsBody');
    resultsBody.innerHTML = '';
    
    // Mostrar la tabla
    document.getElementById('resultsTable').style.display = 'table';

    let totalElectrons = 0;
    let totalOrbitals = 0;

    // Para cada subnivel l (de 0 a n-1)
    for (let l = 0; l < n; l++) {
        const sublevelName = getSublevelName(l); // Obtener el nombre del subnivel (s, p, d, f)
        const maxElectronsInSublevel = 2 * (2 * l + 1); // 2 * número de orbitales = número máximo de electrones
        totalElectrons += maxElectronsInSublevel;
        totalOrbitals += 2 * l + 1; // Número de orbitales en el subnivel
        
        // Para cada valor de ml (-l a +l)
        for (let ml = -l; ml <= l; ml++) {
            // Cada orbital puede tener dos electrones con diferentes spins (ms = +1/2 o -1/2)
            for (let ms of [+0.5, -0.5]) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${n}</td>
                    <td>${sublevelName}</td>
                    <td>${ml}</td>
                    <td>${ms}</td>
                    <td>${2 * l + 1}</td>
                    <td>${maxElectronsInSublevel}</td>
                `;
                resultsBody.appendChild(row);
            }
        }
    }
});

function getSublevelName(l) {
    switch (l) {
        case 0: return 's';
        case 1: return 'p';
        case 2: return 'd';
        case 3: return 'f';
        default: return 'g';
    }
}
