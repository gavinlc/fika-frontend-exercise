import React from "react";
import { render, screen } from "@testing-library/react";
import FikaSearch from "./FikaSearch";

test("renders learn react link", () => {
  render(<FikaSearch />);
  const linkElement = screen.getByText(/Fika Search/i);
  expect(linkElement).toBeInTheDocument();
});
