
describe('group', () => {
    describe('subgroup', () => {
        test('should keep this one', () => {
            expect('hello').toMatchSnapshot();
        })

        test('should update this one', () => {
            expect('bonjour').toMatchSnapshot();
        })
    })
})
