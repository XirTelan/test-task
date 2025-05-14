import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Controlls from "./Controlls";
import { useCatUpdateControl } from "@/widgets/catWidget/hooks/useCatControl";

jest.mock("@/widgets/catWidget/hooks/useCatControl", () => ({
  useCatUpdateControl: jest.fn(),
}));

describe("Controlls", () => {
  let toggleEnabledMock: jest.Mock;
  let toggleUpdateMock: jest.Mock;
  let refreshMock: jest.Mock;

  beforeEach(() => {
    toggleEnabledMock = jest.fn();
    toggleUpdateMock = jest.fn();
    refreshMock = jest.fn();

    (useCatUpdateControl as jest.Mock).mockReturnValue({
      isEnabled: false,
      isUpdate: false,
      refresh: refreshMock,
      toggleEnabled: toggleEnabledMock,
      toggleUpdate: toggleUpdateMock,
    });
  });

  it("renders checkboxes and button", () => {
    render(<Controlls />);
    expect(screen.getByLabelText("Enabled")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Auto-refresh every 5 second")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /get cat/i })
    ).toBeInTheDocument();
  });

  it("disables the button when isEnabled is false", () => {
    render(<Controlls />);
    const button = screen.getByRole("button", { name: /get cat/i });
    expect(button).toBeDisabled();
  });

  it("enables the button when isEnabled is true", () => {
    (useCatUpdateControl as jest.Mock).mockReturnValue({
      isEnabled: true,
      isUpdate: false,
      refresh: refreshMock,
      toggleEnabled: toggleEnabledMock,
      toggleUpdate: toggleUpdateMock,
    });
    render(<Controlls />);
    const button = screen.getByRole("button", { name: /get cat/i });
    expect(button).toBeEnabled();
  });

  it('calls toggleEnabled when the "Enabled" checkbox is clicked', async () => {
    render(<Controlls />);
    const checkbox = screen.getByLabelText("Enabled");
    await userEvent.click(checkbox);
    expect(toggleEnabledMock).toHaveBeenCalledTimes(1);
  });

  it('calls toggleUpdate when the "Auto-refresh every 5 second" checkbox is clicked', async () => {
    render(<Controlls />);
    const checkbox = screen.getByLabelText("Auto-refresh every 5 second");
    await userEvent.click(checkbox);
    expect(toggleUpdateMock).toHaveBeenCalledTimes(1);
  });

  it('calls refresh when the "Get Cat" button is clicked', async () => {
    (useCatUpdateControl as jest.Mock).mockReturnValue({
      isEnabled: true,
      isUpdate: false,
      refresh: refreshMock,
      toggleEnabled: toggleEnabledMock,
      toggleUpdate: toggleUpdateMock,
    });
    render(<Controlls />);
    const button = screen.getByRole("button", { name: /get cat/i });
    await userEvent.click(button);
    expect(refreshMock).toHaveBeenCalledTimes(1);
  });
});
