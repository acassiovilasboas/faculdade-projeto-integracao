module.exports = {
    get : (req, res, next) => {
        res.status(201).send('listando as play lists!');
    },
    post : (req, res, next) => {
        res.status(201).send('Criando nova play list!');
    },
    put : (req, res, next) => {
        let id = req.params.id;
        res.status(201).send(`Alterando uma play list! ${id}`);
    },
    delete : (req, res, next) => {
        let id = req.params.id;
        res.status(200).send(`deletando uma plya list! ${id}`);
    }
}

/**
 * Criar Playlist
 * Adicionar Musicas na Playlist
 * Listar Playlist
 * Recomendas Musicas
 * 
 * endpoints:
 * path: https://api.spotify.com/
 * Client ID d049efc6e6d641d781f14e9dba8f8c72
 * Client Secret fe4e4be751b845d096020116b9e0df1e
 */