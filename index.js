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
