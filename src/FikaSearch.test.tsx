import { fireEvent, render, screen } from "@testing-library/react";
import FikaSearch from "./FikaSearch";

test("renders", () => {
  render(<FikaSearch />);
  const linkElement = screen.getByText(/FikaSearch/i);
  expect(linkElement).toBeInTheDocument();
});

test("searches", () => {
  render(<FikaSearch />);
  const searchInput: HTMLInputElement | null = screen.queryByPlaceholderText('Search...');
  if (!searchInput) return;
  fireEvent.change(searchInput, { target: { value: 'test' } });
  expect(searchInput.value).toBe('test');

  const text = screen.getByText(searchInput.value, {ignore: 'input'});
  expect(text).toBeInTheDocument();

});