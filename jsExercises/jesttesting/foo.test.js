const calculateDaysBetweenDates = require("./foo");

describe("calculateDaysBetweenDates", () => {
  it("should return the correct number of days between two valid dates", () => {
    const begin = "2022-01-01";
    const end = "2022-01-05";
    const result = calculateDaysBetweenDates(begin, end);
    expect(result).toEqual(4);
  });

  it("should return 0 when passed the same date twice", () => {
    const begin = "2022-01-01";
    const end = "2022-01-01";
    const result = calculateDaysBetweenDates(begin, end);
    expect(result).toEqual(0);
  });

  it("should return NaN when passed an invalid date string", () => {
    const begin = "2022-13-01";
    const end = "2022-01-01";
    const result = calculateDaysBetweenDates(begin, end);
    expect(result).toBeNaN();
  });
});
