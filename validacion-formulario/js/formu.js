function validarFormulario() {
    var usuarioInput = document.getElementById("usuario");
    var contrasenaInput = document.getElementById("contrasena");
    var repetirContrasenaInput = document.getElementById("repetirContrasena");
  
    var usuario = usuarioInput.value;
    var contrasena = contrasenaInput.value;
    var repetirContrasena = repetirContrasenaInput.value;
  
    var usuarioPattern = /^[a-zA-Z0-9_]{4,16}$/;
  
    if (!usuario.match(usuarioPattern)) {
      alert("El usuario debe contener solo números, letras y guion bajo (_), y tener entre 4 y 16 dígitos.");
      return false;
    }
  
    if (contrasena !== repetirContrasena) {
      alert("Esta mal tu contraseña.");
      return false;
    }
  
    return true;
  }