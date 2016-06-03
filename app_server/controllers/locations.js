module.exports.homeList = function (req, res) {
   res.render('locations-list', {title: 'Calling from Home'}) ;
};

module.exports.locationInfo = function (req, res) {
   res.render('location-info', {title: 'Calling from Location Info'}) ;
};

module.exports.addReview = function (req, res) {
   res.render('location-review-form', {title: 'Calling from Add Review'}) ;
};