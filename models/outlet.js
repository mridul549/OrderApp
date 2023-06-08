const mongoose = require('mongoose');

const outletSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    outletName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    },
    menu: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    activeOrders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    completedOrders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    outletImage: {
        url: {
            type: String
        }, 
        imageid: {
            type: String
        }
    },
    outletqr: {
        url: {
            type: String
        }, 
        qrid: {
            type: String
        }
    },
    currentOrderNumber: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Outlet', outletSchema);
