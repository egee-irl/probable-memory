import { hello, world } from "./../lib/hello";

it("Returns 'Hello'", () => {
  const helloTest = hello();
  expect(helloTest).toBe("Hello");
});
it("Returns 'World'", () => {
  const worldTest = world();
  expect(worldTest).toBe("World");
});
