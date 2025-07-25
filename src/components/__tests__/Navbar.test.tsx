import { render, screen } from "@testing-library/react";
import { Navbar } from "../shared/nav";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("renders all navigation items", () => {
    render(<Navbar />);
    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("blog")).toBeInTheDocument();
    expect(screen.getByText("deploy")).toBeInTheDocument();
  });
});
