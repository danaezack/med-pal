//===========================================================================
describe('loading the home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  
  it('renders the home page and expected elements', () => {
    cy.get('.heading').contains('Med');
    cy.get('.heading').contains('Pal');
    cy.get('.heading').then($element => {
      const backgroundImage = $element.css('background-image');
      expect(backgroundImage).to.not.equal('none');
    });
    cy.get('.nav-btn').contains('Home');
    cy.get('.nav-btn').contains('Med List');
    cy.get('input[name=search-input]').should('exist');
    cy.get('.search-btn').contains('Submit');
  })
})

//===========================================================================
describe('searching for a medication', () => {
  it('shows a list of medications if the keyword search was valid', () => {
    cy.intercept('GET', 'https://rxnav.nlm.nih.gov/REST/Prescribe/drugs.json?name=lipitor', {
      statusCode: 200,
      fixture: 'mock-lipitor'
    });
    cy.visit('http://localhost:3000/');
    cy.get('input[name=search-input]').type('lipitor').should('have.value', 'lipitor')
    cy.get('.search-btn').click()
    cy.get('.result').first().contains('atorvastatin 50 MG Oral Tablet [Lipitor]')
    cy.get('.result').last().contains('atorvastatin 450 MG Oral Tablet [Lipitor]')
  })

  it('shows an error message if the keyword search was invalid', () => {
    cy.intercept('GET', 'https://rxnav.nlm.nih.gov/REST/Prescribe/drugs.json?name=potato', {
      statusCode: 200,
      fixture: 'mock-potato'
    });
    cy.visit('http://localhost:3000/');
    cy.get('input[name=search-input]').type('potato').should('have.value', 'potato')
    cy.get('.search-btn').click()
    cy.get('.no-match-msg').contains('Sorry! There are no matching results. Triple check your spelling and try again!')
  })

  it('shows an error message if the GET request failed', () => {
    cy.intercept('GET', 'https://rxnav.nlm.nih.gov/REST/Prescribe/drugs.json?name=ibuprofen', {
      statusCode: 500
    });
    cy.visit('http://localhost:3000/');
    cy.get('input[name=search-input]').type('ibuprofen').should('have.value', 'ibuprofen')
    cy.get('.search-btn').click()
    cy.get('.no-match-msg').contains('Sorry! There are no matching results. Triple check your spelling and try again!')
  })
})

//===========================================================================
describe('selecting a medication and adding it to the med list page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rxnav.nlm.nih.gov/REST/Prescribe/drugs.json?name=lipitor', {
      statusCode: 200,
      fixture: 'mock-lipitor'
    });
    cy.visit('http://localhost:3000/');
  });

  it('populates the modal form (and all expected elements) when a medication is selected', () => {
    cy.get('input[name=search-input]').type('lipitor').should('have.value', 'lipitor')
    cy.get('.search-btn').click()
    cy.get('.result').first().contains('atorvastatin 50 MG Oral Tablet [Lipitor]').click()
    cy.get('.overlay').should('exist')
    cy.get('.modal').should('exist')
    cy.get('.close-btn').contains('X')
    cy.get('.modal-title').contains('You have selected:')
    cy.get('.medication-name').contains('atorvastatin 50 MG Oral Tablet [Lipitor]')
    cy.get('select').should('have.length', 2)
    cy.get('select').first().should('have.value', '')
    cy.get('select').last().should('have.value', '')
  })

  it('allows medications to be added to the med list page and populates all expected elements of med list page', () => {
    cy.get('input[name=search-input]').type('lipitor').should('have.value', 'lipitor')
    cy.get('.search-btn').click()
    cy.get('.result').first().contains('atorvastatin 50 MG Oral Tablet [Lipitor]').click()
    cy.get('select').first().select('1').should('have.value', '1')
    cy.get('select').last().select('2x daily').should('have.value', '2x daily')
    cy.get('.add-btn').click()
    cy.url().should('eq', 'http://localhost:3000/med-list');
    cy.get('.heading').contains('Med');
    cy.get('.heading').contains('Pal');
    cy.get('.heading').then($element => {
      const backgroundImage = $element.css('background-image');
      expect(backgroundImage).to.not.equal('none');
    });
    cy.get('.nav-btn').contains('Home');
    cy.get('.nav-btn').contains('Med List');
    cy.get('.med-list-title').contains('My Medication List:');
    cy.get('.saved-card').should('have.length', 1)
    cy.get('.saved-card').contains('atorvastatin 50 MG Oral Tablet [Lipitor]')
    cy.get('.saved-card').contains('Quantity: 1')
    cy.get('.saved-card').contains('Frequency: 2x daily')
    cy.get('.return-btn').contains('Click to add more').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('input[name=search-input]').type('lipitor').should('have.value', 'lipitor')
    cy.get('.search-btn').click()
    cy.get('.result').last().contains('atorvastatin 450 MG Oral Tablet [Lipitor]').click()
    cy.get('select').first().select('2').should('have.value', '2')
    cy.get('select').last().select('3x daily').should('have.value', '3x daily')
    cy.get('.add-btn').click()
    cy.url().should('eq', 'http://localhost:3000/med-list');
    cy.get('.saved-card').should('have.length', 2)
    cy.get('.saved-card').contains('atorvastatin 450 MG Oral Tablet [Lipitor]')
    cy.get('.saved-card').contains('Quantity: 2')
    cy.get('.saved-card').contains('Frequency: 3x daily')
  })

  it('alerts user if medications have not yet been added to med list', () => {
    cy.visit('http://localhost:3000/med-list').url().should('eq', 'http://localhost:3000/med-list');
    cy.get('p').contains('There are currently no medications in your medication list.')
  })

  it('allows user to close out of modal if incorrect medication was selected', () => {
    cy.get('input[name=search-input]').type('lipitor').should('have.value', 'lipitor')
    cy.get('.search-btn').click()
    cy.get('.result').first().contains('atorvastatin 50 MG Oral Tablet [Lipitor]').click()
    cy.get('.overlay').should('exist')
    cy.get('.modal').should('exist')
    cy.get('.close-btn').contains('X').click()
    cy.get('.overlay').should('not.exist')
    cy.get('.modal').should('not.exist')
  })
})

//===========================================================================
describe('navigating throughout website', () => {
  it('navigates between the home page and the med list page by various means', () => {
    cy.visit('http://localhost:3000/med-list');
    cy.url().should('eq', 'http://localhost:3000/med-list')
    cy.get('.nav-btn').contains('Home').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.go('back')
    cy.url().should('eq', 'http://localhost:3000/med-list')
    cy.go('forward')
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.nav-btn').contains('Med List').click()
    cy.url().should('eq', 'http://localhost:3000/med-list')
    cy.get('.return-btn').contains('Click to add more').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.nav-btn').contains('Med List').click()
    cy.url().should('eq', 'http://localhost:3000/med-list')
    cy.get('.full-title').contains('MedPal').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})

//===========================================================================
describe('navigating to a non-existent url', () => {
  it('renders the NotFound page and allows a user to return to the Home page', () => {
    cy.visit('http://localhost:3000/potato');
    cy.get('.not-found-msg').contains('Page not found!');
    cy.get('.return-btn').contains('Return to home').click();
    cy.url().should('eq', 'http://localhost:3000/')
  })
})