 
it('should keep this one', () => {
  expect('hello').toMatchSnapshot();
})

it.only('should add this one', () => {
  expect('bonjour').toMatchSnapshot();
})