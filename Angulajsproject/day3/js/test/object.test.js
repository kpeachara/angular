describe('hello test', function () {
    var greeter;
    beforeEach(function () {
        greeter = new Greeter();

    });
    it('should say hello to Murthy', function () {
        expect(greeter.say('Murthy').toEqual('Hello,Murthy'))
    })
})