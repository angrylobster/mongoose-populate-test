const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./user');
const { Skill } = require('./skill');
const { Types } = mongoose;
const app = express();

app.use(express.json());

app.post('/users', async (req, res) => {
    const newSkills = await Skill.create(req.body.skills.map(skill => ({ name: skill })));
    const { name: username } = req.body;
    await User.create({
        name: username,
        skills: newSkills.map(skill => new Types.ObjectId(skill._id)),
    });
    res.json({ success: true });
});

app.get('/users', async (req, res) => {
    const users = await User.find().populate('skills');
    res.json(users);
})

mongoose.connect('mongodb://localhost:27017/mongoose-populate-test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},(err) => {
    if (err) console.log(err);
    app.listen(3000, () => {
        console.log('app done');
    })
});