const exercise = require('../scripts/exercise.js');

describe('Can you drive?', () => {
    test('should say she can drive', () => {
      expect(exercise(21)).toEqual('She can drive');
    });

    test("should say he can't drive", () => {
        expect(exercise(16)).toEqual("He can't drive");
    });
})