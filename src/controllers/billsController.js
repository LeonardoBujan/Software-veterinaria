//Controlador de facturación

const billsController = {
    bills: (req, res) => {
        res.render("bills");
    }
};

module.exports = billsController;