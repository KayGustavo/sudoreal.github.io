var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
  .on({
    'products/:id': function () {
      setContent('Products');
    },
    'products': function () {
      setContent('About');
    },
    '*': function () {
      setContent('Home')
    }
  })
  .resolve();
