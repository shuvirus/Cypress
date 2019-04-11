describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
  })
describe('Visit the application',function(){
    it('we get visited',function(){
        cy.visit("http://demowebshop.tricentis.com/") 
        cy.contains("Register").click();
        var shell = WScript.CreateObject("WScript.Shell");
        shell.Run("command here");
    })
})