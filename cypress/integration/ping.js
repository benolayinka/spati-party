describe('ping', function() {
  it('tests functionality at spati.party', function() {
    cy.visit('https://www.spati.party')
    cy.url().should('be', 'https://spati.party/')
    cy.get('.btn')
    .click()
    cy.get('.Email')
    .click()
    cy.get('form').should('have.attr', 'action')
  })
})

describe('spätiparty redirect', function() {
  it('pings redirects on spati.party, spaeti.party, and späti.party', function() {

    cy.visit('https://späti.party')
    cy.url().should('be', 'https://spati.party/')
  })
})

describe('www.spätiparty redirect', function() {
  it('pings redirects on spati.party, spaeti.party, and späti.party', function() {
    cy.visit('https://www.späti.party')
    cy.url().should('be', 'https://spati.party/')
  })
})

describe('www.spaetiparty redirect', function() {
  it('pings redirects on spati.party, spaeti.party, and späti.party', function() {

    cy.visit('https://www.spaeti.party')
    cy.url().should('be', 'https://spati.party/')
  })
})

describe('spaetiparty redirect', function() {
  it('pings redirects on spati.party, spaeti.party, and späti.party', function() {

    cy.visit('https://spaeti.party')
    cy.url().should('be', 'https://spati.party/')
  })
})