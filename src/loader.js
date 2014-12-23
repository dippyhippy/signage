var nano = require('nano')('http://localhost:5984');

var loader = function (loader, done) {
    console.log('loading components');

    var db = nano.use('signage');

    console.log('registerComponent: %s', typeof(loader.registerComponent) === 'function');

    db.view('signage', 'components', function (err, res) {
        if (!err) {
            res.rows.forEach(function (doc) {
                console.log(doc);
            });
        } else {
            done(err);
        }
    });

    if (typeof(loader.registerGraph) === 'function') {
        db.view('signage', 'graphs', function (err, res) {
            if (!err) {
                res.rows.forEach(function (doc) {
                    console.log('registering component %s', doc.id);
                    loader.registerGraph('signage', 'helloworld', 'signage/helloworld',{
                        getComponent: function () {
                            console.log('getComponent...');
                            return doc.json;
                        }
                    });
                    console.log(doc);
                });
            } else {
                done(err);
            }
        });
    }

    done();
};

module.exports = loader;