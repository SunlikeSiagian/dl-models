var validate = require('./validator').core;


it("#04. UoM should valid", function () {
    var UoM = require('../src/core/UoM').UoM;
    var UoM_Template = require('../src/core/UoM').UoM_Template;

    var template = new UoM_Template({
        mainUnit: 'M',
        mainValue: 1,
        convertedUnit: 'M',
        convertedValue: 1
    });

    var _units = [];
    _units.push(template);

    var uom = new UoM({
        category: 'UoM-Unit-Test',
        default: template,
        units: _units
    });

    validate.UoMDocs(uom);
})
 