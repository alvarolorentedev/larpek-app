import main from '../../../src/reducers/index'

describe('index of reducers', () => {
    test('should combine inventory reducers', () => {
        expect(main(undefined, {}).inventory).toBeDefined()
    });
});