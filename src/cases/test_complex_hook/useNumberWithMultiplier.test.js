import { renderHook, act } from "@testing-library/react-hooks";
import useNumberWithMultiplier from "./useNumberWithMultiplier";

describe("useNumberWithMultiplier", () => {
  test("returns correct data when no config", () => {
    const { result } = renderHook(() => useNumberWithMultiplier());

    expect(result.current.current).toBe(0);
    expect(result.current.isFrozen).toBe(false);
  });

  test("throw error when initialFreeze is not boolean", () => {
    const { result } = renderHook(() =>
      useNumberWithMultiplier({ initialFreeze: "cowabunga" })
    );

    expect(result.error).toEqual(Error("Initial freeze has to be boolean"));
  });

  test("throw error when initial is not integer", () => {
    const { result } = renderHook(() =>
      useNumberWithMultiplier({ initial: "cowabunga" })
    );

    expect(result.error).toEqual(Error("Initial has to be an integer"));
  });

  test("throw an error when multiplier is 0", () => {});

  describe("addToCurrent", () => {
    test("increments the value with multiplier", () => {});

    test("throws error when called with negative", () => {});

    describe("when frozen", () => {
      test("does not change value", () => {});

      test("does not throw error when provided value is negative", () => {});
    });
  });

  describe("removeFromCurrent", () => {
    test("decrements the value", () => {
      const { result } = renderHook(() => useNumberWithMultiplier({}));

      expect(result.current.current).toEqual(0);
      act(() => {
        result.current.removeFromCurrent(-10);
      });
      expect(result.current.current).toEqual(-10);
    });

    test("throws error when called with positive", () => {});

    describe("when frozen", () => {
      test("does not change value", () => {});

      test("does not throw error when provided value is positive", () => {});
    });
  });

  describe("toggleFreeze", () => {
    test("properly toggles freeze flag", () => {
      const { result } = renderHook(() => useNumberWithMultiplier({}));

      expect(result.current.isFrozen).toBe(false)
      act(() => result.current.toggleFreeze())
      expect(result.current.isFrozen).toBe(true)
    });
  });
});
