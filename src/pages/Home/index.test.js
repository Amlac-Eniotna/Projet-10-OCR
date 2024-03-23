import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      setTimeout(async () => {await screen.findByText("Message envoyé !");}, 900)
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    await screen.findByText("Catégories");
    document.querySelector("#nos-realisations .Select");
  })
  it("a list a people is displayed", async () => {
    render(<Home />);
    await screen.findByText("Une équipe d’experts dédiés à l’ogranisation de vos événements");
    expect(document.querySelector(".ListContainer")).toBeTruthy();
  })
  it("a footer is displayed", async () => {
    render(<Home />);
    expect(document.querySelector("footer")).toBeTruthy();
    await screen.findByText("Une agence événementielle propose des prestations de service spécialisées dans la conception et l'organisation de divers événements tels que des événements festifs, des manifestations sportives et culturelles, des événements professionnels")
  })
  it("an event card, with the last event, is displayed", async () => {
    render(<Home />);
    expect(setTimeout(() => {screen.queryByTestId("card-testid")}, 100)).toBeTruthy();
  })
});
