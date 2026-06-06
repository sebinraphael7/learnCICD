import { test, expect } from '@playwright/test';
test.describe('file 1 tests @suite1',()=>{
test('file3 pass1', async ({ page }) => {

  console.log("file3 This is passing 1");
//  expect(true).toBe(false);

});
test.skip('file3 pass2', async ({ page }) => {
    
  console.log("file3 This is passing 2");


});
test.fail('file3 pass3', async ({ page }) => {
      console.log("file3 This is intentionally failing but passing in report");
    expect(true).toBe(false);

});
});
