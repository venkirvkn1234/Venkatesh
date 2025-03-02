describe('Blockstream Transaction List Test', () => {
  it('should validate the transaction heading and filter transactions with 1 input & 2 outputs', () => {
    
    cy.visit('https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732')
    cy.log('blockstream URL open ') 
    cy.get('#explorer > div > div > div:nth-child(3) > div.container > div.transactions > h3',{timeout:4000}).should('have.text','25 of 2875 Transactions')
    cy.log('Validated 25 of 2875 Transactions succefully')
    cy.get('#transaction-box > div.ins-and-outs > div.vins > div > div > div > span:nth-child(1)').each(($tx) => {
    cy.wrap($tx).within(() => {
    cy.get('a').first().invoke('text').then((txHash) => {
    cy.get('div.vin').should('have.length', 1)
    cy.get('div.vout').should('have.length', 2).then(() => {
    y.log(`Transaction Hash: ${txHash}`)
    console.log(`Transaction Hash: ${txHash}`)
                  })
              })
          })
      })
  })
})
