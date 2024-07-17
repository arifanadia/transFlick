// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { genSalt, hash } = bcrypt;


const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : false

    },
   lastName : {
        type : String,
        required : false

    },
    pin: {
        type: String, // Using String type for PIN to ensure compatibility with bcrypt hashing
        required: true,
        validate: {
            validator: function (v) {
                return /^\d+$/.test(v); // Validate that PIN contains only digits
            },
            message: props => `${props.value} is not a valid pin! Pin should contain only digits.`,
        },
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ['user', 'agent', 'admin'],
        default: 'user',
    },
    requestStatus: {
        type: String,
        enum: ['pending', 'active', 'blocked'],
        default: 'pending',
    },
    balance: {
        type: Number,
        default: 0,
    },
    bonusGiven: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

;


userSchema.pre("save", async function (next) {
    const salt = await genSalt();
    this.pin = await hash(this.pin, salt)
    next()
})

const User = mongoose.model('Users', userSchema);
module.exports = { User }
