// Polyfill completo para crypto.randomUUID - Versão 2025-09-18
console.log('Carregando polyfill crypto...');

// Garantir que crypto existe
if (typeof globalThis === 'undefined') {
  var globalThis = window || global || self;
}

if (!globalThis.crypto) {
  globalThis.crypto = {};
}

// Polyfill para randomUUID
if (!globalThis.crypto.randomUUID) {
  globalThis.crypto.randomUUID = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };
}

// Polyfill para getRandomValues se não existir
if (!globalThis.crypto.getRandomValues) {
  globalThis.crypto.getRandomValues = function(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
    return array;
  };
}

console.log('Polyfill crypto carregado com sucesso!');
