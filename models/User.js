const { Schema, model, Types } = require('mongoose')

const userSchema = new Schema(
    {
        fullName: String,

        // occupation: {type: String,
        //             required: true},

        email: {type: String,
                unique: true,
                required: true},

        password: { type: String, 
            required: true
                }
    }
)

module.exports = model("User", userSchema);