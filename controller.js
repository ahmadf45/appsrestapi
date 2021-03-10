'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Rest API sukses", res)
};

//get all data
exports.daftar = function(req, res){
    connection.query('SELECT * FROM kontak', function(error, rows, fields){
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    })
}

//get by id
exports.getbyid = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM kontak WHERE id = ?', [id], function(error, rows, fields){
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    })
}

//insert data
exports.buat = function(req, res){
    var nama = req.body.nama;
    var no_hp = req.body.no_hp;
    var email = req.body.email;

    connection.query('INSERT INTO kontak (nama,no_hp,email) VALUES(?,?,?)', [nama, no_hp, email], function(error, rows, fields){
        if (error) {
            connection.log(error);
        } else {
            response.ok('Berhasil menambahkan data', res);
        }
    })
}

//edit data by id
exports.ubah = function(req, res){
    var id = req.body.id;
    var nama = req.body.nama;
    var no_hp = req.body.no_hp;
    var email = req.body.email;

    connection.query('UPDATE kontak SET nama=?, no_hp=?, email=? WHERE id=?', [nama, no_hp, email, id], function(error, rows, fields){
        if (error) {
            connection.log(error);
        } else {
            response.ok('Berhasil merubah data', res);
        }
    })
}

//delete data by id
exports.hapus = function(req, res){
    let id = req.headers.id;
    connection.query('DELETE FROM kontak WHERE id = ?', [id], function(error, rows, fields){
        if (error) {
            connection.log(error);
        } else {
            response.ok('Berhasil menghapus data', res);
        }
    })
}