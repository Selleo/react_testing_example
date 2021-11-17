import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WS from "jest-websocket-mock";

import ExampleWebsocketConnectionMock from "./ExampleWebsocketConnectionMock";

let wsServer;

const renderComponent = () => {
  return render(<ExampleWebsocketConnectionMock />);
};

describe("<ExampleWebsocketConnectionMock />", () => {
  beforeEach(() => {
    wsServer = new WS("ws://localhost:8080");
  });

  afterEach(() => {
    WS.clean();
  });

  test("should send connection message to backend", async () => {
    renderComponent();

    await wsServer.connected;
    await expect(wsServer).toReceiveMessage(
      JSON.stringify({
        type: "message",
        payload: {
          message: "new connection",
        },
      })
    );
  });

  test("should send message to backend after form submit", async () => {
    renderComponent();
    const messageInput = screen.getByPlaceholderText("Your message");
    const formButton = screen.getByRole("button", { name: "Send" });

    userEvent.type(messageInput, "chat message");
    userEvent.click(formButton);

    expect(messageInput).toHaveValue("");
    await expect(wsServer).toReceiveMessage(
      JSON.stringify({
        type: "message",
        payload: {
          message: "chat message",
        },
      })
    );
  });
});
