describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
  })
describe('Visit the application',function(){
    it('we get visited',function(){
        cy.visit("https://172.20.162.24:8443/identityiq/home.jsf") 
        cy.contains("Register").click();
    })
})