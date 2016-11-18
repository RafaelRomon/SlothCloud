function makedir(prevdir){
    if (prevdir != "") {
        prevdir = prevdir.substr(prevdir.length - (prevdir.length - 1))
        prevdir += '/';
    }

    var dirname = prevdir + prompt("Name of the folder to be created:");
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                document.body.className = 'ok';
                var err = request.responseText;
                err ? alert(err) : "";
            } else {
                document.body.className = 'error';
            }
        }
    };
    var err = request.open("GET", "{{ url_for('makedir', dirname='')}}" + dirname , true);
    request.send(null);
    window.location = window.location;
}
