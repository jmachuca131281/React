import '@testing-library/jest-dom';

import { getSaludo } from '../../base/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe retornar hola fernando', () => {
    const nombre = 'Fernando';
    const saludo = getSaludo(nombre);
    expect( saludo ).toBe( 'Hola ' + nombre + '!');
  })
  
})
