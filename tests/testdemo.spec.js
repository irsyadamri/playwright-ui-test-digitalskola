const { test } = require("@playwright/test")



test('Test case 1', async () => {
    console.log("hello word");
})

test('Test case 2', async () => {
    console.log("hello word");
})

test('Test case 3', async () => {
    console.log("hello word");
})

test.describe('positive test', () => {
    test('Test case 1', async () => {
        console.log("hello word");
    })
    
    test('Test case 2', async () => {
        console.log("hello word");
    })
    
    test('Test case 3', async () => {
        console.log("hello word");
    })
})

test.describe('negative test', () => {
    test('Test case 1', async () => {
        console.log("hello word");
    })
    
    test('Test case 2', async () => {
        console.log("hello word");
    })
    
    test('Test case 3', async () => {
        console.log("hello word");
    })
})