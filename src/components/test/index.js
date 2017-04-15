define(function(require,deps,callback){
    ko.components.register('like-or-dislike', {
        viewModel: { require: 'components/test/test.js' },
        template: { require: 'text!components/test/index.html' }
    });
})
