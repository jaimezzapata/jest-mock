import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  // Accede al método original
  const originalAdd = math.add;
  // Mockea la copia del método
  math.add = jest.fn(originalAdd);
  // Testea el método doAdd de app
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // Espía el llamado al método
  math.add.mockImplementation(() => "mock");
  // Sobreescribe el método mock
  expect(app.doAdd(1, 2)).toEqual("mock");
  // Evalúa el retorno "mock" del método sobreescrito
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // Vuelve a la implementación original
  math.add = originalAdd;
  // Evalúa la respuesta del método original
  expect(app.doAdd(1, 2)).toEqual(3);
});