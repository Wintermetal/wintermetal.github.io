function taikanappi() {
    var code = prompt('Anna koodi:');
    if (code > 10000 && code < 400000){
        open("https://nhentai.net/g/" + code,);
    } else {
        location.reload(true);
    }
}
