document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Formularioform').addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('Nombre').value.trim();
        const apellido = document.getElementById('Apellido').value.trim();

        const tipoDocumento = document.querySelector('input[name="Tipo de Documento"]:checked');
        const nacionalidad = document.querySelector('input[name="Nacionalidad"]:checked');
        const paisesFavoritos = document.querySelector('input[name="Paises_Favoritos"]:checked');
    
        if (!nombre || !apellido) {
            Swal.fire({
                icon: 'error',
                title: 'Formulario incompleto',
                text: 'Por favor, completa todos los campos.',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (!tipoDocumento) {
            Swal.fire({
                icon: 'error',
                title: 'Formulario incompleto',
                text: 'Selecciona un tipo de documento.',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (!nacionalidad) {
            Swal.fire({
                icon: 'error',
                title: 'Formulario incompleto',
                text: 'Selecciona una nacionalidad.',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (!paisesFavoritos) {
            Swal.fire({
                icon: 'error',
                title: 'Formulario incompleto',
                text: 'Selecciona al menos un país favorito.',
                confirmButtonText: 'OK'
            });
            return;
        }
        

        window.location.href = `bienvenida.html?nombre=${encodeURIComponent(nombre)}&apellido=${encodeURIComponent(apellido)}`;
    });
});
