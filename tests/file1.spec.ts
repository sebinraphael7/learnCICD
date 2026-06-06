import { test, expect } from '@playwright/test';
test.describe('file 1 tests @suite1',()=>{
test(' file1 pass1', async ({ page }) => {

  console.log(" file1 This is passing 1");



});
test('file1 pass2', async ({ page }) => {
    
  console.log(" file1 This is passing 2");


});
test('pass3', async ({ page }) => {
    
  console.log("file1 This is passing 3");


});
});