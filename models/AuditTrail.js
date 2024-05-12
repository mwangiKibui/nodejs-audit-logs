const {Schema,model} = require('mongoose');

const auditTrail = new Schema({
    url:{
        type:Schema.Types.String,
        required:true
    },
    activity:{
        type:Schema.Types.String,
        required:true
    },
    params:{
        type:Schema.Types.String,
        required:true
    },
    query:{
        type:Schema.Types.String,
        required:true
    },
    payload:{
        type:Schema.Types.String,
        required:true
    },
    response:{
        type:Schema.Types.String,
        required:true
    }
},{
    timestamps:true
});

module.exports = model('auditTrail',auditTrail);