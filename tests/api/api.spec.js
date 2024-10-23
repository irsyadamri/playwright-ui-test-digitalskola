const { test, expect } = require('@playwright/test');
const { Ajv } = require("ajv");

const ajv = new Ajv();

test('GET', async ({request}) => {
   const response = await request.get("https://reqres.in/api/users?page=2")
   console.log(await response.json())

   expect(response.status()).toEqual(200)
   expect(response.ok()).toBeTruthy()
})

test('POST', async ({request}) => {

    const reqheaders = {
        Accept: 'application/json'
    }
    
    const body = {
        email: 'irsyad@reqres.in',
        first_name: 'Irsyad',
        last_name: 'Amri',
        avatar: 'https://reqres.in/img/faces/7-image.jpg'
    }
   const response = await request.post("https://reqres.in/api/users", {
        headers: reqheaders,
        data: body,
   })

//    console.log(await response.json())
   expect(response.status()).toEqual(201)
   expect(response.ok()).toBeTruthy()

   const resBody = await response.json()
   expect(resBody.first_name).toEqual('Irsyad')

   const valid = ajv.validate(require("./json-schema/add-object.schema.json"), resBody);
if (!valid) {
console.error("AJV Validation Errors:", ajv.errorsText());
}
expect(valid).toBe(true);
})




test('PUT', async ({request}) => {

    const reqheaders = {
        Accept: 'application/json'
    }
    
    const body = {
        email: 'irsyad@reqres.in',
        first_name: 'Irsyad',
        last_name: 'Amri',
        avatar: 'https://reqres.in/img/faces/7-image.jpg'
    }
   const response = await request.put("https://reqres.in/api/users/2", {
        headers: reqheaders,
        data: body,
   })

//    console.log(await response.json())
   expect(response.status()).toEqual(200)
   expect(response.ok()).toBeTruthy()

   const resBody = await response.json()
   expect(resBody.first_name).toEqual('Irsyad')

   const valid = ajv.validate(require("./json-schema/add-object.schema.json"), resBody);
if (!valid) {
console.error("AJV Validation Errors:", ajv.errorsText());
}
expect(valid).toBe(true);
})




test('DELETE', async ({request}) => {
    const response = await request.delete("https://reqres.in/api/users/2")
   
    expect(response.status()).toEqual(204)
    expect(response.ok()).toBeTruthy()
 })

