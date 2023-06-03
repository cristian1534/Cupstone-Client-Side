describe("Navigation", () => {
  it("Should navigate to ADMIN page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("a[href*='admin']").click();

    cy.url().should("include", "/admin");

    cy.get("h1").contains("WELCOME TO BACKOFFICE");

    cy.wait(5000);
  });

  it("Should add a new Product.", () => {
    cy.visit("/admin");

    cy.get("input[name='name']").clear().type("Webcam");

    cy.get("input[name='image_url']")
      .clear()
      .type(
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/296/2965755160225126228/previews/G03-200x200.jpg"
      );

    cy.get("textarea[name='description']")
      .clear()
      .type("Webcam WiFi HD resolution");

    cy.get("input[name='price']").clear().type(150);

    cy.contains("button", "Confirm").click();

    cy.wait(5000);
  });

  it("Should delete the added Product", () => {
    cy.request("GET", "http://localhost:5000/api/get-all").then((response) => {
      const product = response.body.find(
        (product) => product.name === "Webcam"
      );
      const productId = product._id;

      cy.visit("/admin");

      cy.wait(5000);

      cy.get('input[type="radio"][value="DELETE"]').check();

      cy.get('input[type="radio"][value="DELETE"]').should("be.checked");

      cy.get("input[name='id']").clear().type(`${productId}`);

      cy.contains("button", "Confirm").click();

      // cy.request(
      //   "DELETE",
      //   `http://localhost:5000/api/delete/${productId}`
      // ).then((response) => {
      //   expect(response.status).to.eq(200);
      // });
    });
  });
});
