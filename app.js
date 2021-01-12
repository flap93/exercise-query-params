// How would you get the value of queries and params in the following examples?
// PARAMS:
// 1:
// https://dummyexample.com/albums/123cool4lbum
app.get('/albums/:albumId', (req, res) => {
    console.log(req.params.albumId)
})
// 2:
// https://dummyexample.com/students/sandra
app.get('/students/:name', (req, res) => {
    console.log(req.params.name)
})
// 3: 
// https://dummyexample.com/nature/large/1
app.get('/:imageType/:imageSize/:id', (req, res) => {
    console.log( req.params.imagesType); // nature
    console.log( req.params.imageSize); // large
    console.log( req.params.id); // 1

    const {imageType, nature, 1} = req.params;
})
// 4:
// https://dummyexample.com/stefan/123
app.get('/:user/:albumId', (req, res) => {
    console.log( req.params.user);
    console.log( req.params.albumId);
    const {user, albumId} = req.params;
})
// QUERIES:
// 5:
// URL: https://localhost:3000/?category=coffee
app.get('/', (req, res) => {S
    console.log( req.query.category)
    
})
// 6:
// URL: https://localhost:3000/marketplace?category=code-review&type=apps
app.get('/marketplace', (req, res) => {
    console.log( req.query.category);
})
// 7:
// URL: https://localhost:3000/search?city=barcelona&accommodation=hotel&transport=public
app.get('/search', (req, res) => {
    console.log( req.query.city) // barcelona
    console.log( req.query.accomodation) // barcelona
    console.log( req.query.transport) // public
})
// 8: mix
// URL: https://localhost:3000/products/toys?prodID=123
app.get('/products/:category', (req, res) => {
    console.log( req.params.category) // toys
    console.log( req.quert.prodID) // 123
})