import * as types from '../../../src/actions/types'

[
    "ADD_TO_INVENTORY",
    "USE_FROM_INVENTORY"
]
.forEach((value) => {
    it('types has $value as a string with same text', () => {
        expect(types[value]).toBe(value)
    })

})