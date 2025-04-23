---
sidebar_position: 3
---

# Implementación del Gestor de Contraseñas

```js
// Paso 1: Conexión a la Base de Datos
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/gestorContraseñas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Paso 2: Esquema de Usuario
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Paso 3: Cifrado de Contraseñas
async function cifrarContraseña(contraseña) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(contraseña, salt);
}

// Paso 4: Verificación de Contraseñas
async function verificarContraseña(input, hashed) {
  return await bcrypt.compare(input, hashed);
}

// Paso 5: Registro y Autenticación
async function registrarUsuario(username, password) {
  const hash = await cifrarContraseña(password);
  const user = new User({ username, password: hash });
  await user.save();
}

async function autenticarUsuario(username, password) {
  const user = await User.findOne({ username });
  if (!user) throw new Error('No encontrado');
  const valido = await verificarContraseña(password, user.password);
  if (!valido) throw new Error('Incorrecta');
  return user;
}

// Ejemplo de uso
(async () => {
  try {
    await registrarUsuario('juan', '123456');
    const user = await autenticarUsuario('juan', '123456');
    console.log('Autenticado:', user.username);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    mongoose.disconnect();
  }
})();
