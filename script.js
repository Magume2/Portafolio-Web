var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Maria')
    .pauseFor(1500)
    .deleteAll()
    .typeString('programadora fronf-end Junior')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>entuciasta estudiante</strong>')
    .pauseFor(1500)
    .start();