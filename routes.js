'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/').get(jsonku.index);
    app.route('/daftar').get(jsonku.daftar);
    app.route('/kontak/:id').get(jsonku.getbyid);
    app.route('/buat').post(jsonku.buat);
    app.route('/ubah').put(jsonku.ubah);
    app.route('/hapus').delete(jsonku.hapus);
}
