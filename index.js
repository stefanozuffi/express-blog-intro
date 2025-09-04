const express = require('express')
const blogServer = express()
const port = 3000

// Listen
blogServer.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

// Elementi Statici
blogServer.use(express.static('public'))

// Rotte
blogServer.get('/', (req, res) => {
    res.send('<h1> Server del mio Blog </h1>')
})

    // Creiamo l'array dei cinque post
    const postsArray = [
        {
            id: 1,
            title: 'Post 1',
            content: 'Contenuto del post 1',
            img: 'images/ciambellone.jpeg',
            tags: ['cucina', 'dolci', 'colazione']
        },
        {
            id: 2,
            title: 'Post 2',
            content: 'Contenuto del post 2',
            img: 'images/cracker_barbabietola.jpeg',
            tags: ['cucina', 'salato', 'snack']
        },
        {
            id: 3,
            title: 'Post 3',
            content: 'Contenuto del post 3',
            img: 'images/pane_fritto_dolce.jpeg',
            tags: ['cucina', 'dolci', 'snack']
        },
        {
            id: 4,
            title: 'Post 4',
            content: 'Contenuto del post 4',
            img: 'images/pasta_barbabietola.jpeg',
            tags: ['cucina', 'salato', 'primi']
        },
        {
            id: 5,
            title: 'Post 5',
            content: 'Contenuto del post 5',
            img: 'images/torta_paesana.jpeg',
            tags: ['cucina', 'dolci', 'dessert']
        }
       
    ]

blogServer.get('/bacheca/:id', (req, res) => {
    const post_id = req.params.id
    const res_post = postsArray.find((el) => el.id == post_id)

    if (!res_post) {
        res.json({ error: 'Post non trovato' })
    } else {
        res.json(res_post)
    }
    
})


// Rotta per visualizzare tutti i post
blogServer.get('/bacheca', (req, res) => {
    res.json(postsArray)
})
