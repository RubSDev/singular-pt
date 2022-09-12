import { serie } from "./components/Calculation";

test("input number 1", () => {
  expect(serie(1)).toMatchObject({ totalNumber: 3 });
});

test("input number 2", () => {
  expect(serie(2)).toMatchObject({ totalNumber: 7 });
});

test("input number 3", () => {
  expect(serie(3)).toMatchObject({ totalNumber: 12 });
});

test("input number 4", () => {
  expect(serie(4)).toMatchObject({ totalNumber: 19 });
});

test("input number 5", () => {
  expect(serie(5)).toMatchObject({ totalNumber: 25 });
});

test("input number 6", () => {
  expect(serie(6)).toMatchObject({ totalNumber: 38 });
});

test("input number 7", () => {
  expect(serie(7)).toMatchObject({ totalNumber: 51 });
});

test("input number 8", () => {
  expect(serie(8)).toMatchObject({ totalNumber: 73 });
});

test("input number 9", () => {
  expect(serie(9)).toMatchObject({ totalNumber: 98 });
});

test("input number 10", () => {
  expect(serie(10)).toMatchObject({ totalNumber: 129 });
});
