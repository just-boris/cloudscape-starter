import { beforeEach, afterEach, expect, test, vi, MockInstance } from "vitest";
import { App } from "../src/app";
import { render } from "@testing-library/react";
import createWrapper from "@cloudscape-design/components/test-utils/dom";

const wrapper = createWrapper();

beforeEach(() => {
  vi.spyOn(window, "alert").mockImplementation(() => {});
});

afterEach(() => {
  (window.alert as unknown as MockInstance).mockClear();
});

test("should render app", () => {
  render(<App />);
  expect(wrapper.findAppLayout()).toBeTruthy();
});

test("shows alert when clicking on a button", () => {
  render(<App />);
  expect(window.alert).not.toHaveBeenCalled();

  wrapper.findButton('[data-testid="action-button"]')!.click();
  expect(window.alert).toHaveBeenCalled();
});
