function save_json() {
    var data = fs.readFileSync('words.json');
    var words = JSON.parse(data);
    console.log(words);
}