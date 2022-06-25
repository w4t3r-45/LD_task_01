import { render, screen } from "@testing-library/react";
import { BaseCard } from "../components/cards/baseCard";
import { CustomLink } from "../components/CustomLink/customLink";
// this icon has explicitly as data-testid for test purpose
import { ToolIcon } from "../components/icons";

const TestCard = () => {
  return (
    <BaseCard
      HeaderIcon={ToolIcon}
      title="Configure your shop"
      CardBody={<p>This is body</p>}
      CardFooter={<CustomLink URL="#" content="footer link" hasIcon />}
    />
  );
};

const ExpectNodes = (nodes: HTMLElement[]) => {
  nodes.forEach((elm) => {
    expect(elm).toBeInTheDocument();
    expect(elm).toBeVisible();
  });
};

describe("BaseCard Component Tests", () => {
  it("Renders without Crashing", () => {
    render(<TestCard />);
  });

  it("Renders all elements", () => {
    render(<TestCard />);
    const title = screen.getByText(/Configure your shop/i);
    const Cardbody = screen.getByText(/This is body/i);
    const CardFooter = screen.getByText(/footer link/i);
    const icon = screen.getByTestId("tool_icon");
    ExpectNodes([title, Cardbody, CardFooter, icon]);
  });
});
