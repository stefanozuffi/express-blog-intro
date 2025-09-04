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
            title: 'Post 1',
            content: 'Contenuto del post 1',
            img: 'images/ciambellone.jpeg',
            tags: ['cucina', 'dolci', 'colazione']
        },
        {
            title: 'Post 2',
            content: 'Contenuto del post 2',
            img: 'images/cracker_barbabietola.jpeg',
            tags: ['cucina', 'salato', 'snack']
        },
        {
            title: 'Post 3',
            content: 'Contenuto del post 3',
            img: 'images/pane_fritto_dolce.jpeg',
            tags: ['cucina', 'dolci', 'snack']
        },
        {
            title: 'Post 4',
            content: 'Contenuto del post 4',
            img: 'images/pasta_barbabietola.jpeg',
            tags: ['cucina', 'salato', 'primi']
        },
        {
            title: 'Post 5',
            content: 'Contenuto del post 5',
            img: 'images/torta_paesana.jpeg',
            tags: ['cucina', 'dolci', 'dessert']
        }
       
    ]

// Rotta per visualizzare tutti i post
blogServer.get('/bacheca', (req, res) => {
    res.json(postsArray)
})
