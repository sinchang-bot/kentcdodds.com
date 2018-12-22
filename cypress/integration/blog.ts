describe('blog', () => {
  it('should be able to navigate to a blog post', () => {
    cy.visit('/')
      .getByText(/blog/i)
      .click()
      .getByText(/array destructuring fundamentals/i)
      .click()
      .getByTestId('post')
      .should('contain', 'useState')
  })
})
