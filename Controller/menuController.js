import Menu from "../Model/menuModel.js";

export const getMenu = async (req, res) => {
    const menu = await Menu.find();
    res.json(menu);
};


export const addMenu = async (req, res) => {
    const item = new Menu(req.body);
    await item.save();
    res.json({ message: "Item Added" });
};


export const updateMenu = async (req, res) => {
    await Menu.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Item Updated" });
};


export const deleteMenu = async (req, res) => {
    await Menu.findByIdAndDelete(req.params.id);
    res.json({ message: "Item Deleted" });
};
