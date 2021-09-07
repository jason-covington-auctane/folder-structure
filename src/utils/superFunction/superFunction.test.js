import { superFunction } from "./superFunction";

describe("super function", () => {
  test("It renders", () => {
    expect(superFunction()).toBe(2);
  });
});
