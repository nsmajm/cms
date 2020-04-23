const jwt = require('jsonwebtoken');
module.exports = {
    generateToken: (user) => {
        return new Promise((resolve, reject) => {
            jwt.sign({user},
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImN1c3RvbWVyTGFzdE5hbWUiOiJBbmp1bSIsImN1c3RvbWVyRmlyc3ROYW1lIjoiTmFzaW0iLCJjdXN0b21lclN0YXR1cyI6ImFjdGl2ZSIsIl9pZCI6IjVjYzFmZmJmOTY2NzAyMWUyMGRjZWMxNCIsImN1c3RvbWVyRW1haWwiOiJuc21ham0xQGdtYWlsLmNvbSIsImN1c3RvbWVyUGhvbmUiOiIwMTc1MDYzODE2MiIsImN1c3RvbWVyVXNlck5hbWUiOiJuc21ham0iLCJjdXN0b21lclBhc3N3b3JkIjoiJDJhJDEwJGN6ck1VcFhnUi9kbmhlY01hSmZBQnVTT1M0ZzdPNWVvcEp5OHZzczlCak9Ud0VQSjhlTHNtIiwiY3VzdG9tZXJBZGRyZXNzIjoiRGhha2EiLCJ1c2VySW1hZ2UiOiJOdWxsIiwiY3JlYXRlZEF0IjoiMjAxOS0wNC0yNVQxODo0MzoxMS41MDdaIiwidXBkYXRlZEF0IjoiMjAxOS0wNC0yNVQxODo0MzoxMS41MDdaIiwiX192IjowfSwiaWF0IjoxNTU2MjE3NzkxLCJleHAiOjE1NTYyMjEzOTF9.QPrKirO8uFhQ4bRR8SLeMqL8VDCy1D9-sSMgRRnpLJI',
                {expiresIn: 60 * 60},
                (err, user) => {
                    if (err) reject(err);
                    resolve(user);
                });
        })
    }
}