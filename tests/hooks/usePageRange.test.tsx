// import { describe, it, expect } from 'vitest';

// describe('something truthy and falsy', () => {
//   it('true to be true', () => {
//     expect(true).toBe(true);
//   });

//   it('false to be false', () => {
//     expect(false).toBe(false);
//   });
// });

import { expect, it, describe } from "vitest";
import { renderHook } from "@testing-library/react";
import usePageRange from "../../src/hooks/usePageRange";
import _ from "lodash";

describe("usePageRange", () => {
  it("should return empty range for 1 page", () => {
    const current = 1;
    const total = 1;

    const { result } = renderHook(() => usePageRange(current, total));

    expect(result.current[0]).toEqual([]);
  });

  it("should return empty range for 2 pages", () => {
    const current = 1;
    const total = 2;

    const { result } = renderHook(() => usePageRange(current, total));

    expect(result.current[0]).toEqual([]);
  });

  it("should return full middle for <= 5 total pages", () => {
    for (let i = 2; i <= 5; i++) {
      const current = 1;
      const total = i;

      const { result } = renderHook(() => usePageRange(current, total));

      expect(result.current[0]).toEqual(_.range(2, i));
    }
  });

  it("should dot left if too far", () => {
    const current = 5;
    const total = 10;

    const { result } = renderHook(() => usePageRange(current, total));

    expect(result.current[1]).toBe(true);
  });

  it("should dot right if too far", () => {
    const current = 1;
    const total = 10;

    const { result } = renderHook(() => usePageRange(current, total));

    expect(result.current[2]).toBe(true);
  });

  it("should double pad if current is at boundary", () => {
    const current = 1;
    const total = 10;

    const { result } = renderHook(() => usePageRange(current, total));

    expect(result.current[0]).toEqual([2, 3, 4]);
  });
});
