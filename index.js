const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const handlebars = require('handlebars');
const fs = require('fs');

app.use(express.static('template'));

var promises = [];

function getTemplate(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      resolve(handlebars.compile(data, {
        strict: true
      }));
    });
  })
};

function getData(path, template) {
  return new Promise((resolve, reject) => {
    // var article = require(path);
    fs.readFile(path, "utf8", (err, data) => {
      if (err != null ) {
        reject();
      } else {
        data = JSON.parse(data);
        resolve(template(data));
      }
    })
  });
}

app.get('/', (req, res) => {
  var path = './' + req.query.article + ".json";
  console.log(path);
  getTemplate('./template/article.html')
    .then((template) => {
      return getData(path, template)
    })
    .then((html) => {
      res.send(html);
    })
    .catch(() => {
      fs.readFile('./template/404.html', 'utf8', (err, data) => {
        if (err != null) {
          res.sendStatus(404);
        } else {
          res.send(data);
        }
      })
    });
})

app.get('/test', (req, res) => {
  console.log(req.query);
  res.send(200);
});

app.listen(8080, () => {
  console.log('on air 8080');
});
