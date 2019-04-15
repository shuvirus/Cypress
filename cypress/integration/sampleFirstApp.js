describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
  })
describe('Visit the application',function(){
    it('we get visited',function(){
        cy.visit("http://demowebshop.tricentis.com/") 
        cy.contains("Register").click();
        cy.get('input#FirstName').type('Shubham')
        cy.get('input#LastName').type('Mohod')
        cy.get('input#Email').type('Shubham.mohod@gmail.com')
        cy.get('input#Password').type('Shubham22')
        cy.get('input#ConfirmPassword').type('Shubham22')
        cy.get('input#register-button').click()
    })
})