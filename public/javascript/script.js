var Oiwai = function(json) {
    this.id = json.id;
    this.image_url = json.image_url;
    this.title = json.title;
};

var createOiwaiView = function(oiwai) {
    var div = $('<div />', {
                    'class': 'oiwai'
                });

    var image = $('<img />', {
                  'src': oiwai.image_url
                  });
    div.append(image);
    return div;
};

$.getJSON('/list', function(list) {
              for (var i = 0; i < list.length; i++) {
                  var oiwai = new Oiwai(list[i]);
                  var oiwaiView = createOiwaiView(oiwai);
                  $('body').append(oiwaiView);
              }

});

