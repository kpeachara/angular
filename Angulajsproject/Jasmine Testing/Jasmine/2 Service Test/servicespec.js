describe('ExampleApp.DataService', function() {

  var dataService;

  beforeEach(module('ExampleApp'));
  beforeEach(inject(function($injector) {
    dataService = $injector.get('DataService');
  }));

  it('Should output correct data', function () {

    expect(dataService.getData()).toBe("Bank of America");
    
  });

});