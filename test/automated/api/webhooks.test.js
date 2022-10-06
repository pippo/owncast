const express = require('express')
const supertest = require('supertest')
const request = supertest('http://127.0.0.1:8080');
const registerChat = require('./lib/chat').registerChat;
const sendChatMessage = require('./lib/chat').sendChatMessage;

const app = express()
var server
var webhookID

beforeAll(() => {
  return startServer();
})

afterAll(() => {
  return stopServer();
})


describe('with webhook', () => {
  beforeAll(() => {
    return registerWebhook(['CHAT', 'USER_JOINED']);
  })
  afterAll(() => {
    return cleanupWebhook(webhookID)
  })

  test('sending a message to a chat triggers a webhook call', async (done) => {
    const registration = await registerChat();
    console.log("new chat created:", registration)
    const accessToken = registration.accessToken;
    console.log("access token:", accessToken)

    await sendChatMessage({ body: 'message ', type: 'CHAT' }, accessToken, () => {
      done()
    });
  })
})


var startServer = () => {
  return new Promise((resolve, _) => {
    app.get('/', function (req, res) {
      console.log("[webhook] GET / HTTP/1.0")
      res.send('OK')
    });

    server = app.listen(3000, () => {
      resolve(true)
    })
  })
}

var stopServer = () => {
  return new Promise((resolve, _) => {
    server.close(() => {
      resolve(true)
    })
  })
}

var registerWebhook = (events) => {
  return request
    .post('/api/admin/webhooks/create')
    .auth('admin', 'abc123')
    .send({
      url: 'http://localhost:3000/',
      events: events,
    })
    .expect(200)
    .then((res) => {
      webhookID = res.body.id
    });
}

var cleanupWebhook = (id) => {
  return request
    .post('/api/admin/webhooks/delete')
    .auth('admin', 'abc123')
    .send({ id: id })
    .expect(200);
}