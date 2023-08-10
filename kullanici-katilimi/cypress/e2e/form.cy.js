describe("Login Form Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Test E-mail Validation", () => {
    cy.get("#user-mail").type("kjds");
    cy.contains("Not an email");
  });
  it("Test Password Validation", () => {
    cy.get("#user-pass").type("asasdh");
    cy.contains("Passwords must be at least 8 characters long.");
  });

  it("Test Login-Button Disable func", () => {
    cy.get("[data-cy=login-botton]").should("be.disabled");
  });
  it("Test Login-Button Disable func2", () => {
    cy.get("[data-cy=login-botton]").should("be.disabled");
  });
  it("enable login button test", () => {
    cy.get("#user-mail").type("asasd@j.com");
    cy.get("#user-pass").type("asasdh1asf");
    cy.get("#terms").check();
    cy.get("[data-cy=radio-button]").check();
    cy.get("[data-cy=select-button]").select("Writer");
    cy.get("[data-cy=login-botton]").should("be.enabled");
  });

  it("no email login button test", () => {
    cy.get("#user-mail:empty");
    cy.get("#user-pass").type("asasdh1asf");
    cy.get("#terms").check();
    cy.get("[data-cy=radio-button]").check();
    cy.get("[data-cy=select-button]").select("Writer");
    cy.get("[data-cy=login-botton]").should("be.disabled");
  });

  it("no password login button test", () => {
    cy.get("#user-mail").type("asasd@j.com");
    cy.get("#user-pass:empty");
    cy.get("#terms").check();
    cy.get("[data-cy=radio-button]").check();
    cy.get("[data-cy=select-button]").select("Writer");
    cy.get("[data-cy=login-botton]").should("be.disabled");
  });

  it("terms forgetten login button test", () => {
    cy.get("#user-mail").type("asasd@j.com");
    cy.get("#user-pass").type("asasdh1asf");

    cy.get("[data-cy=radio-button]").check();
    cy.get("[data-cy=select-button]").select("Writer");
    cy.get("[data-cy=login-botton]").should("be.disabled");
  });

  it("radio button forgetten login button test", () => {
    cy.get("#user-mail").type("asasd@j.com");
    cy.get("#user-pass").type("asasdh1asf");
    cy.get("#terms").check();

    cy.get("[data-cy=select-button]").select("Writer");
    cy.get("[data-cy=login-botton]").should("be.disabled");
  });

  it("roles forgetten login button test", () => {
    cy.get("#user-mail").type("asasd@j.com");
    cy.get("#user-pass").type("asasdh1asf");
    cy.get("#terms").check();
    cy.get("[data-cy=radio-button]").check();

    cy.get("[data-cy=login-botton]").should("be.disabled");
  });
});
