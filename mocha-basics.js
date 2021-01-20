//Test suite
describe('Some Feature', function () {
  //Test case

  //beforeEach for individual tests
  //afterEach for individual tests
  before(function () {
    console.log('Before all test cases');
  });
  after(function () {
    console.log('after all test cases');
  });

  //Test case 1
  it('Should show error when missing email', function () {
    console.log('This is test one');
  });

  //Test case 2
  it('Should create an account successfully', function () {
    console.log('This is test 2');
  });
});
