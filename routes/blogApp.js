const express = require('express');
const router = express.Router();

let blogFour = {
    blogName: 'Flora & Fauna Of Dooars',
    image: 'baradighi-bird-picture.webp',
    imageA: 'Flora & Fauna Of Dooars',
    Slug: 'baradighi-flora-fauna',
    content: '<h4>Introduction to the Rich Flora & Fauna of Baradighi</h4><p>The Baradighi Tea Estate is home to a diverse range of flora and fauna, making it a haven for nature enthusiasts and wildlife lovers. Nestled in the rolling hills of the Dooars region, the estate spans over 507 hectares and is surrounded by lush tea gardens, rivers, and forests. This unique location provides the perfect habitat for a wide range of plant and animal species, including some that are rare and endangered.</p><h5>The Vibrant Plant Life of Baradighi</h5><p>One of the standout features of the Baradighi Tea Estate is its verdant gardens and lush forests. The estate is home to a wide variety of trees, shrubs, and flowers, many of which are native to the region. Some of the notable plant species found on the estate include:</p><ul><li>Sal trees</li><li>Eucalyptus trees</li><li>Tea bushes</li><li>Orchids</li><li>Bougainvillea</li><li>Hibiscus</li></ul><p>In addition to these, the estate is also home to a range of medicinal plants and herbs that are used in traditional Ayurvedic treatments. The gardens and forests of Baradighi provide a haven for birds and other wildlife, and are a popular spot for birdwatching and nature photography.</p><h5>The Fascinating Wildlife of Baradighi</h5><p>In addition to its rich plant life, the Baradighi Tea Estate is also home to a diverse range of animal species. The estate is located in the midst of the Gorumara Forest, which is home to a wide range of animals, including elephants, rhinos, deer, and a variety of bird species. The estate itself is home to a number of animals, including:</p><ul><li>Peacocks</li><li>Pheasants</li><li>Hornbills</li><li>Kingfishers</li><li>Mongooses</li></ul><p>The Baradighi Tea Estate is a popular destination for wildlife enthusiasts, as it offers a rare opportunity to see a wide range of animal and bird species in their natural habitat. The estate is also home to a number of endangered species, including the Indian one-horned rhinoceros and the Asian elephant, making it an important site for conservation efforts.</p><h5>Exploring the Flora & Fauna of Baradighi</h5><p>There are a number of ways to explore the rich flora and fauna of the Baradighi Tea Estate. One of the best ways is to take a guided tour of the estate, where you can learn about the various plant and animal species found on the property. The estate also offers a range of activities, such as birdwatching, nature photography, and forest walks, which provide an opportunity to experience the beauty of the estate up close.</p><p>Whether you are a nature enthusiast or simply looking for a peaceful retreat, the Baradighi Tea Estate is the perfect place for you.'
}

router.get('/', function (req, res) {
    res.render('blog', {page_name: 'blog'});
});

router.get('/:id', function (req, res) {
    res.render('blogOne', {data : blogFour});
});




module.exports = router;
