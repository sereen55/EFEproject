/// <reference types= "cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {                    // باخده من النت ادا طلعلي ايرور 
  // returning false here prevents Cypress from
  // failing the test
  return false
  })

    // functions ==>>
  Cypress.Commands.add("VisetUrl",()=>{

    let websites = ["https://global.almosafer.com/ar" ,"https://global.almosafer.com/en"]

    let RandoumIndex = Math.floor(Math.random()*websites.length)

    cy.visit(websites[RandoumIndex])

    cy.get('.cta__saudi').click()
  })

describe('Aspier test Casess', () => {
   
 //  const TheDate = new Date()
 //  tody_date = TheDate.getDate()

 //  console.log(TheDate)

  it('Randomly enter the websites in aribic or english', () => {
 
    let websites = ["https://global.almosafer.com/ar" ,"https://global.almosafer.com/en"]
 
    let RandoumIndex = Math.floor(Math.random()*websites.length)
    cy.visit(websites[RandoumIndex])
      
    let ArabicCitises =["جده","دبي"]
    let ArabicRandumIndex= Math.floor(Math.random()*ArabicCitises.length)
    let EngilshCitises =["Jaddah","Riyadh","Dubai"]
    let EnglishRandumIndex= Math.floor(Math.random()*EngilshCitises.length)

    cy.get('.cta__saudi').click()
    cy.get('#uncontrolled-tab-example-tab-hotels').click();
    
    if (RandoumIndex == 0) {
      cy.get('[data-testid="AutoCompleteInput"]').type(
        ArabicCitises[ArabicRandumIndex]
      );
    } else {
      cy.get('[data-testid="AutoCompleteInput"]').type(
        EngilshCitises[EnglishRandumIndex]
      );
    }
  });
  
 //  it('test the date + retrn date', () => {
     
 //   cy.VisetUrl();
    
 //   cy.get('[data-testid="FlightSearchBox__ToDateButton]')


 //  });

});