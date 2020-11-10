export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.calculateWords = function (string) {
  let words = [];
  let wordsLength = 0;
  words = string.split(" ");
  wordsLength = words.length;
  return wordsLength;
};


