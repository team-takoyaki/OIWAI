var Oiwai = function(json) {
    this.id = json.id;
    this.image_url = json.image_url;
    this.title = json.title;
};

var createOiwaiView = function(oiwai) {
    var div = $('<div />', {
                    'class': 'oiwai_view'
                });

    var title = $('<div />', {
                      'class': 'title'
                });
    title.text(oiwai.title);
    div.append(title);

    var div2 = $('<div />');

    var image = $('<img />', {
                      'class': 'image',
                      'src': oiwai.image_url
                  });
    div2.append(image);

    div.append(div2);

    var div3 = $('<div />');

    var omedetoButton = $('<img />', {
                      'class': 'omedeto_button',
                      'src': 'http://1.bp.blogspot.com/-dlT-NHOF1xA/UZSsgjH_ITI/AAAAAAAAS1w/8wln6JAVh4g/s400/party_cracker.png'
                  });
    div3.append(omedetoButton);

    div.append(div3);

    return div;
};

$.getJSON('/list', function(list) {
              for (var i = 0; i < list.length; i++) {
                  var oiwai = new Oiwai(list[i]);
                  var oiwaiView = createOiwaiView(oiwai);
                  $('body').append(oiwaiView);
              }
});

