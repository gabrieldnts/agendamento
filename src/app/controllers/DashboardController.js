const { User } = require("../models");

class DashboardController {
  async index(req, res) {
    const providers = await User.findAll({ where: { provider: true } });
    console.log(req.query.stored);
    return res.render("dashboard", {
      providers,
      appointment: { stored: req.query.stored }
    });
  }
}
module.exports = new DashboardController();
