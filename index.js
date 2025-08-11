// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());
const githubData={
  
  "login": "ajitcodehub",
  "id": 169142757,
  "node_id": "U_kgDOChTp5Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/169142757?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ajitcodehub",
  "html_url": "https://github.com/ajitcodehub",
  "followers_url": "https://api.github.com/users/ajitcodehub/followers",
  "following_url": "https://api.github.com/users/ajitcodehub/following{/other_user}",
  "gists_url": "https://api.github.com/users/ajitcodehub/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ajitcodehub/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ajitcodehub/subscriptions",
  "organizations_url": "https://api.github.com/users/ajitcodehub/orgs",
  "repos_url": "https://api.github.com/users/ajitcodehub/repos",
  "events_url": "https://api.github.com/users/ajitcodehub/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ajitcodehub/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-05-07T09:00:54Z",
  "updated_at": "2025-08-09T12:50:09Z"
};

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Sample POST route
app.post('/greet', (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}!`);
});

app.get('/youtube', (req, res)=>{
    res.send('chai and express');
});
app.get('/githubData', (req, res) => {
    res.json(githubData);
});

// Start the server
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || PORT}`);
});
