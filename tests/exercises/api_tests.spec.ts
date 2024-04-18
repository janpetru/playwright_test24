import test from "@playwright/test";
import { faker } from '@faker-js/faker';


test.describe('API TESTS @githubactions', () => {
  
  test('GET requests', async ({ request }) => {
    const url = 'https://tegb-backend-877a0b063d29.herokuapp.com'
    const path = '/train'
    await request.get(`${url}${path}`);
  })


  test('GET requests with parameter', async ({ request }) => {
    const url = 'https://tegb-backend-877a0b063d29.herokuapp.com'
    const path = '/eshop'
    const parameters = ``
    await request.get(`${url}${path}`, {
        params: {
          userId: 3
        }
      }
    );
  })

  test('GET request with header', async ({ request }) => {
    const url = 'https://restful-booker.herokuapp.com/booking';
    await request.get(url, {
      headers: {
        "Accept-Language": `Accept-Language: en-US,en;q=0.9,cs-CZ;q=0.8,cs;q=0.7,it;q=0.6`
      }
    } 
  );
  })

  test('POST request with body', async ({ request }) => {
    const url = 'https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register';
    const body = {
      email: "test12312333@example.net",
      username: "test123TestujemeP",
      password: "123456"
    }
    await request.post(url),{
      data: body,
    }
  })

  test("POST Request with body 2", async ({ request }) => {
    request.post(
      "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
      {
        data: {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          password: "123456",
        },
      }
    );
  });

  // test('Data Transfer - authorization token', async ({ request }) => {
  //   const host = 'https://tegb-backend-877a0b063d29.herokuapp.com';
  //   const pathLogin = '/tegb/register'
  //   const pathRegister = '/tegb/login'
  //   // const pathProfile = '/tegb/profile'

  //   const email = faker.internet.email();
  //   const username = faker.internet.userName();
  //   const password = "123456";

  //   await request.post(`${host}${pathRegister}`,
  //     {
  //       data: {
  //         email,
  //         username,
  //         password,
  //       },
  //     }
  //   );

  //   await request.post(`${host}${pathLogin}`,
  //     {
  //       data: {
  //         username,
  //         password,
  //       }
  //     }
  //   )
    // await request.get(`${host}${pathProfile}`,
    //   {
    //     params: {
          
    //     }
    //   }
    // )
  // })


  test('Data Transfer - authorization token', async ({ request }) => {
    const host = 'https://tegb-backend-877a0b063d29.herokuapp.com';
    const pathLogin = '/tegb/register'
    const pathRegister = '/tegb/login'
    const pathProfile = '/tegb/profile'

    const email = faker.internet.email();
    const username = faker.internet.userName();
    const password = "123456";

    // * Registrace
    await request.post(
      "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register",
      {
        data: {
          email: email,
          username: username,
          password: password,
        },
      }
    );

    // * Přihlášení
    const loginResponse = await request.post("https://tegb-backend-877a0b063d29.herokuapp.com/tegb/login", {
      data: {
        username: username,
        password: password,
      },
    });
    const responseBody = await loginResponse.json();
    const token = responseBody.access_token;
    console.log(token)

    // * Profiles
    await request.get(`${host}${pathProfile}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  })
})

