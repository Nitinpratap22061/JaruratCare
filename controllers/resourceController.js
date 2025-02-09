const Resource = require("../model/Resource");

exports.createResource = async (req, res) => {
    const resource = new Resource(req.body);
    await resource.save();
    res.status(201).json(resource);
};

exports.getResources = async (req, res) => {
    const resources = await Resource.find();
    res.json(resources);
};

exports.updateResource = async (req, res) => {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(resource);
};

exports.deleteResource = async (req, res) => {
    await Resource.findByIdAndDelete(req.params.id);
    res.json({ message: "Resource deleted" });
};
