var fs = require("fs");
var request = require("request");

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls,
  echo: echo,
  cat: cat,
  head: head,
  tail: tail,
  curl: curl


}

function pwd(n, cb) {
  cb(process.cwd())
}

function date(n, cb) {
  cb(Date());
}

function ls(n, cb) {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
      files.forEach(function(file) {
      cb(file.toString() + "\n")
    })
  });
}


function echo (argArray, cb) {
  cb(argArray.join(" "));
}

function cat(argArray, cb) {
  fs.readFile(argArray[0], "utf8", function (err, data) {
    if (err) throw err;
    cb(data);
  });
}

function head(argArray, cb) {
  var accumulator = "";
  fs.readFile(argArray[0], "utf8", function (err, data) {
    if (err) throw err;
    var output = data.split("\n").slice(0,5);
    accumulator = output.join("\n");

    cb(accumulator);
  });
  
}

function tail(argArray, cb) {
  var accumulator = "";
  fs.readFile(argArray[0], "utf8", function (err, data) {
    if (err) throw err;
    var output = data.split("\n");
    output = output.slice(output.length - 5, output.length);
    accumulator = output.join("\n");

    cb(accumulator);
  });
  
}

// curl www.google.com
function curl(argArray, cb){
  var URL = argArray[0];

  request(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      cb(body)
    }
  })

}

