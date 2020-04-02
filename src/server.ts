import app from './app';

const port = process.env.PORT || '3333';

app.listen(port, err => {
    if (err) return console.error(err);
    return console.log(`Servidor Online na porta: ${port}`)
});