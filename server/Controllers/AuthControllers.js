const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models/UserModel');

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.ACCESS_SECRET_TOKEN_KEY, { expiresIn: maxAge });
};

const register = async (req, res) => {
    try {
        const { pin, email } = req.body;
        console.log(req.body);
        

        if (!email || !pin) {
            return res.status(400).send("Email and PIN are required");
        }

        const user = await User.create({ email, pin });
        res.cookie('jwt', createToken(email, user.id), {
            maxAge,
            httpOnly: true,
            secure: true,
            sameSite: 'None'
        });
        return res.status(201).json({
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const login = async (req, res) => {
    try {
        const { email, pin } = req.body;
        if (!email || !pin) {
            return res.status(400).send("Email and PIN are required");
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send("User with the given email not found");
        }

        // Example `compare` function to verify PIN (you should implement this)
        const auth = await bcrypt.compare(pin, user.pin);
        if (!auth) {
            return res.status(400).send("PIN is incorrect");
        }

        res.cookie('jwt', createToken(email, user.id), {
            maxAge,
            httpOnly: true,
            secure: true,
            sameSite: 'None'
        });

        return res.status(200).json({
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                firstName: user.firstName,
                lastName: user.lastName,
                requestStatus: user.requestStatus,
                balance: user.balance,
                bonusGiven: user.bonusGiven
            }
        });

    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    register,
    login,
};
