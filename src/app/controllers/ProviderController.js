class ProviderController {
  async index(req, res) {
    return res.render("provider/index");
  }
}
module.exports = new ProviderController();
