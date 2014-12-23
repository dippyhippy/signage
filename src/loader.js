/**
 * Created by root on 23/12/14.
 */
var loader = function(loader, done) {
    console.log('loading components');

    console.log('registerComponent: %s', typeof(loader.registerComponent)==='function');
    console.log('registerGraph: %s', typeof(loader.registerGraph)==='function');


    done();
};

module.exports = loader;