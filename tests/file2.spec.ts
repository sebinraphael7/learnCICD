import { test, expect } from '@playwright/test';

test.describe.serial('file2 tests @suite1', () => {
    test('file2 pass3', async ({ page }) => {
    
  console.log("file2 This is passing 3");


});
test('file2 pass2', async ({ page }) => {
    
  console.log("file2 This is passing 2");


});

test('file2 pass1', async ({ page }) => {

  console.log("file2 This is passing 1");


});
});
