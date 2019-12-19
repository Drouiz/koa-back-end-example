const mongoose = require('mongoose');

const Bso = new mongoose.Schema({
    name: { type: String, required: true, trim: true},
    year: { type: Number, required: false },
    group: { type: String, required: false }
});

module.exports = mongoose.model('Bso', Bso);