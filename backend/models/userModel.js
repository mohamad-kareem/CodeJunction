const mongoose = require("mongoose");
const bcrypt = require("bcrypt");



const codeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function() {
            return this._createdAt.toLocaleDateString();
        }
    },
    roomId:{
        type:String,
        required:true,
    },
    code:{
        type:String,
        required:false,
    },
});

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
      },
    job:{
        type:String,
        required:false
    },
    profession:{
        type:String,
        required:false
    },
    imageUrl:{
        type:String,
        required:false
    },
    points:{
        type:Number,
        required:false,
        default:0,
    },
    codes:[codeSchema]
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10);
    next()
})
userSchema.methods.matchPassword=async function(password){
    return bcrypt.compare(password,this.password)
}

const User = mongoose.model("User", userSchema);

module.exports = User;