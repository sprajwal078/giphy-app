import { render, screen } from "@testing-library/react";
import GifItem from "./GifItem";

test("renders GifItem", () => {
  render(
    <GifItem
      height={200}
      width={300}
      title="Hello World"
      url="https://media2.giphy.com/media/2M3hZ6Mp1ykysFnhow/giphy.gif?cid=20bcfa04wr4tpr82hck3pnk0hu8bg507gchetx8pbgqczzgi&rid=giphy.gif&ct=g"
    />
  );
  const title = screen.getByText(/Hello World/);
  expect(title).toBeInTheDocument();
});
