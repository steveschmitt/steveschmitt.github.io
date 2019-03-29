(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/app/shared/deductions/company-deduction-item.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/deductions/company-deduction-item.ts ***!
  \*************************************************************/
/*! exports provided: CompanyDeductionItem, isNewCompanyDeductionItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionItem", function() { return CompanyDeductionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNewCompanyDeductionItem", function() { return isNewCompanyDeductionItem; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");

/** Company Deduction item visible for a user in the UI
 *  Maps with 1 master Deduction type
 *  Maps with 1..N rows in DB (CompanyDeduction)
 */
var CompanyDeductionItem = /** @class */ (function () {
    function CompanyDeductionItem(deduction, isDirty, companyDeductionList) {
        if (isDirty === void 0) { isDirty = true; }
        if (companyDeductionList === void 0) { companyDeductionList = []; }
        this.isCompleted = false;
        /** True if marked for deletion */
        this.isDeleted = false;
        this.deduction = deduction;
        this.isDirty = isDirty;
        this.companyDeductions = companyDeductionList;
        if (deduction.codeGroupId === 7) {
            this.name = 'Health Savings Account (HSA)';
            this.abbreviation = 'HSA';
        }
        else {
            if (companyDeductionList.length > 0) {
                this.name = (companyDeductionList[0].description || '').trim();
                this.abbreviation = (companyDeductionList[0].abbreviation || '').trim();
            }
            else {
                this.name = (deduction.defaultDescription || '').trim();
                this.abbreviation = (deduction.defaultAbbreviation || '').trim();
            }
        }
    }
    Object.defineProperty(CompanyDeductionItem.prototype, "isPreTax", {
        get: function () {
            if (!this.companyDeductions) {
                return null; // unknown
            }
            var filtered = this.companyDeductions.filter(notDeletedAndHasPrePosTax);
            if (filtered.length !== 1) {
                return null; // unknown
            }
            return filtered[0].deductionPlanTaxOptionCode === _model__WEBPACK_IMPORTED_MODULE_0__["DeductionPlanType"].PRETAX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyDeductionItem.prototype, "isPostTax", {
        get: function () {
            if (!this.companyDeductions) {
                return null; // unknown
            }
            var filtered = this.companyDeductions.filter(notDeletedAndHasPrePosTax);
            if (filtered.length !== 1) {
                return null; // unknown
            }
            return filtered[0].deductionPlanTaxOptionCode === _model__WEBPACK_IMPORTED_MODULE_0__["DeductionPlanType"].POSTTAX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyDeductionItem.prototype, "isCatchUp", {
        get: function () {
            return (this.deduction.codeGroupId === 6); // 6 === Retirement Plans Catch Up  (Group)
        },
        enumerable: true,
        configurable: true
    });
    CompanyDeductionItem.prototype.viewModelToEntity = function () {
        var _this = this;
        this.companyDeductions.map(function (t) {
            t.description = _this.name.trim();
            t.abbreviation = _this.abbreviation.trim();
        });
    };
    CompanyDeductionItem.prototype.isRetirement = function () {
        return this.deduction.codeGroupId === 1 || // retirements group
            this.deduction.codeGroupId === 6; // retirement group catch-up
    };
    CompanyDeductionItem.prototype.isP401KRepayment = function () {
        return this.deduction.codeType === '401k Loan Repayment'; // repay for 401K
    };
    CompanyDeductionItem.prototype.setCode = function (code) {
        var p = this.companyDeductions[0].parameters.find(function (p1) { return p1.key === 'code'; });
        if (p) {
            p.type = 'string';
            p.value = code;
        }
        else {
            this.companyDeductions[0].parameters.push(new _model__WEBPACK_IMPORTED_MODULE_0__["DeductionKeyValue"]('code', 'string', code));
        }
    };
    CompanyDeductionItem.prototype.getCode = function () {
        if (this.companyDeductions.length === 0) {
            return null;
        }
        var pCode = this.companyDeductions[0].parameters.find(function (p) { return p.key === 'code'; });
        if (pCode) {
            return pCode.value;
        }
        return null;
    };
    return CompanyDeductionItem;
}());

function notDeletedAndHasPrePosTax(d) {
    return !d.isRemoved &&
        (d.deductionCodeTypeId === 20 || // Pre tax Medical
            d.deductionCodeTypeId === 21 || // Pre tax Dental
            d.deductionCodeTypeId === 22 || // Pre tax Vision
            d.deductionCodeTypeId === 30 || // Post tax Medical
            d.deductionCodeTypeId === 31 || // Post tax Dental
            d.deductionCodeTypeId === 32 // Post tax Vision
        );
}
function isNewCompanyDeductionItem(cd) {
    if (!cd || !cd.companyDeductions || cd.companyDeductions.length === 0) {
        return true;
    }
    return cd.companyDeductions[0].id === null;
}


/***/ }),

/***/ "./src/app/shared/deductions/deduction-category.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/deductions/deduction-category.ts ***!
  \*********************************************************/
/*! exports provided: DeductionCategory, DeductionTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeductionCategory", function() { return DeductionCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeductionTitle", function() { return DeductionTitle; });
var DeductionCategory = /** @class */ (function () {
    function DeductionCategory(code, title, expanded) {
        if (expanded === void 0) { expanded = false; }
        this.expanded = false; // UI Accordion state: expanded/collapsed
        this.categoryId = code;
        this.category = title;
        this.deductionTitles = {};
        this.expanded = expanded;
    }
    return DeductionCategory;
}());

var DeductionTitle = /** @class */ (function () {
    function DeductionTitle(options) {
        this.codeSequencer = 1; // sequencer to indentify instances by code (UI only)
        this.allowPreAndPost = false;
        this.enabled = true;
        this.isHidden = false;
        this.hasPreTax = false;
        this.hasPostTax = false;
        options = options || {};
        this.key = options.key;
        this.code = options.code || '1';
        this.baseLabel = options.baseLabel;
        this.deductions = options.deductions || [];
        this.order = options.order || 1;
        this.maxAllowedToCreate = options.maxAllowedToCreate || 1;
        this.freeSlots = options.maxAllowedToCreate || 1;
        this.companyDeductionItem = options.companyDeductionItem;
    }
    Object.defineProperty(DeductionTitle.prototype, "label", {
        get: function () {
            if (this.allowPreAndPost) {
                if (this.hasPreTax && !this.hasPostTax) {
                    return this.baseLabel + " Post-Tax";
                }
                else if (!this.hasPreTax && this.hasPostTax) {
                    return this.baseLabel + " Pre-Tax";
                }
                else {
                    return this.baseLabel;
                }
            }
            if (this.maxAllowedToCreate > 1) {
                return this.baseLabel + " (" + this.freeSlots + ")";
            }
            return this.baseLabel;
        },
        enumerable: true,
        configurable: true
    });
    return DeductionTitle;
}());



/***/ }),

/***/ "./src/app/shared/deductions/deduction-command.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/deductions/deduction-command.ts ***!
  \********************************************************/
/*! exports provided: CreateCompanyDeductionCommand, EditCompanyDeductionCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyDeductionCommand", function() { return CreateCompanyDeductionCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompanyDeductionCommand", function() { return EditCompanyDeductionCommand; });
var CreateCompanyDeductionCommand = /** @class */ (function () {
    function CreateCompanyDeductionCommand() {
        this.type = 'create-company-deduction';
        this.askPreOrPostTax = false;
        this.forcePreTax = false;
        this.forcePostTax = false;
    }
    Object.defineProperty(CreateCompanyDeductionCommand.prototype, "isNew", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    return CreateCompanyDeductionCommand;
}());

var EditCompanyDeductionCommand = /** @class */ (function () {
    function EditCompanyDeductionCommand(cdi) {
        this.cdi = cdi;
        this.type = 'edit-company-deduction';
    }
    Object.defineProperty(EditCompanyDeductionCommand.prototype, "isNew", {
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    return EditCompanyDeductionCommand;
}());



/***/ }),

/***/ "./src/app/shared/deductions/get-deduction-categories.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/deductions/get-deduction-categories.ts ***!
  \***************************************************************/
/*! exports provided: getDeductionCategories, buildInitialCompanyDeductionsCategories, updateCompanyDeductionCategories, updateTreeState, buildCommandForCreation, buildCommandForEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeductionCategories", function() { return getDeductionCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildInitialCompanyDeductionsCategories", function() { return buildInitialCompanyDeductionsCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCompanyDeductionCategories", function() { return updateCompanyDeductionCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTreeState", function() { return updateTreeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildCommandForCreation", function() { return buildCommandForCreation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildCommandForEdit", function() { return buildCommandForEdit; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");
/* harmony import */ var _deduction_command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deduction-command */ "./src/app/shared/deductions/deduction-command.ts");
/* harmony import */ var _deduction_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deduction-category */ "./src/app/shared/deductions/deduction-category.ts");



/** Group deductions types to be shown in User Interface (UI grouping criteria)
 * Company Deduction Catalog */
function getDeductionCategories(ds) {
    return [
        buildDeductionCategoryRetirements(ds, 1, 'Retirement'),
        buildDeductionCategoryInsurancePremiums(ds, 2, 'Insurance Premiums'),
        buildDeductionCategoryHsa(ds, 3, 'HSA / FSA'),
        buildDeductionCategoryOther(ds, 4, 'Other (Post-Tax)')
    ];
}
/** Group deductions for employees
 * Employee Deduction Catalog showing CompanyDeductions
 * Inital setup
 */
function buildInitialCompanyDeductionsCategories() {
    var cat = new _deduction_category__WEBPACK_IMPORTED_MODULE_2__["DeductionCategory"](1, 'Company Deductions', true);
    return [cat];
}
/** Group deductions for employees
 * Employee Deduction Catalog showing CompanyDeductions
 * Update data based on current state: company deduction + employee deduction state
 */
function updateCompanyDeductionCategories(currentState, cdis, eds) {
    var cat = new _deduction_category__WEBPACK_IMPORTED_MODULE_2__["DeductionCategory"](1, 'Company Deductions', currentState[0].expanded);
    (cdis || []).sort(function (a, b) { return (a.name || '').localeCompare(b.name); })
        .map(function (cdi, index) {
        var dt = new _deduction_category__WEBPACK_IMPORTED_MODULE_2__["DeductionTitle"]({
            key: cdi.name,
            baseLabel: cdi.name,
            code: cdi.getCode(),
            maxAllowedToCreate: 1,
            order: index * 10,
            companyDeductionItem: cdi
        });
        cat.deductionTitles[dt.key] = dt;
    });
    return [cat];
}
/** Updates the Tree State based on created deductions
 * @param categories List of categories
 * @param cdis List of created Deductions Items
 * @param currentInEdit Current element in edition, null if no one is in edit
 */
function updateTreeState(categories, cdis, currentInEdit) {
    categories.map(function (cat) {
        Object.keys(cat.deductionTitles).map(function (key) {
            var dt = cat.deductionTitles[key];
            if (dt.maxAllowedToCreate === 1) {
                if (dt.allowPreAndPost) {
                    dt.hasPreTax = getIsPreInstantiated(dt, cdis);
                    dt.hasPostTax = getIsPostInstantiated(dt, cdis);
                    dt.enabled = !(dt.hasPreTax && dt.hasPostTax);
                }
                else {
                    dt.enabled = !isDeductionTypeInstantiated(dt, cdis);
                }
            }
            else if (dt.maxAllowedToCreate > 1) {
                var freeSlots = getFreeSlotsForDeductionsType(dt, cdis);
                dt.freeSlots = freeSlots;
                dt.enabled = (freeSlots > 0);
            }
        });
    });
}
// #region helper fns
function getIsPreInstantiated(dt, cdis) {
    return isInstantiatedByTaxMode(dt, cdis, true);
}
function getIsPostInstantiated(dt, cdis) {
    return isInstantiatedByTaxMode(dt, cdis, false);
}
function isInstantiatedByTaxMode(dt, cdis, isPreTax) {
    var d = dt.deductions.find(function (d1) { return d1.deductionPlanTaxOptionCode === (isPreTax ? 'PRETAX' : 'POSTTAX'); });
    var instances = cdis.filter(function (cdi) {
        return !cdi.isDeleted && cdi.deduction === d;
    });
    return instances.length === 1;
}
function getFreeSlotsForDeductionsType(dt, cdis) {
    var instances = cdis.filter(function (cdi) {
        return !cdi.isDeleted &&
            cdi.deduction.codeType === dt.key;
    });
    if (instances.length > 0) {
        return dt.maxAllowedToCreate - instances.length;
    }
    if (dt.key === 'Retirements') {
        return dt.maxAllowedToCreate - cdis.filter(function (cdi) {
            return !cdi.isDeleted && cdi.deduction.codeGroupId === 1;
        } // Retiremement Plans Group
        ).length;
    }
    if (dt.key === 'HSA') {
        return dt.maxAllowedToCreate - cdis.filter(function (cdi) {
            return !cdi.isDeleted && cdi.deduction.codeGroupId === 7;
        } // HSA
        ).length;
    }
    return dt.maxAllowedToCreate;
}
function isDeductionTypeInstantiated(dt, cdis) {
    var foundInstance = cdis.filter(function (cdi) { return !cdi.isDeleted; })
        .find(function (cdi) {
        return cdi.getCode() === dt.code &&
            cdi.deduction.codeType === dt.key;
    });
    if (foundInstance) {
        return true;
    }
    if (dt.key === 'Retirements') {
        return cdis.filter(function (cdi) { return !cdi.isDeleted; })
            .find(function (cdi) {
            return cdi.deduction.codeGroupId === 1;
        } // Retiremement Plans Group
        ) !== undefined;
    }
    if (dt.key === 'HSA') {
        return cdis.filter(function (cdi) { return !cdi.isDeleted; })
            .find(function (cdi) {
            return cdi.deduction.codeGroupId === 7;
        } // HSA
        ) !== undefined;
    }
    return false;
}
function buildCommandForCreation(dt) {
    var res = new _deduction_command__WEBPACK_IMPORTED_MODULE_1__["CreateCompanyDeductionCommand"]();
    res.askPreOrPostTax = dt.allowPreAndPost && !dt.hasPreTax && !dt.hasPostTax;
    res.forcePreTax = dt.allowPreAndPost && !dt.hasPreTax && dt.hasPostTax;
    res.forcePostTax = dt.allowPreAndPost && dt.hasPreTax && !dt.hasPostTax;
    if (res.forcePreTax) {
        res.deductions = dt.deductions.filter(function (d) { return d.deductionPlanTaxOptionCode === _model__WEBPACK_IMPORTED_MODULE_0__["DeductionPlanType"].PRETAX; });
        res.code = '2';
    }
    else if (res.forcePostTax) {
        res.deductions = dt.deductions.filter(function (d) { return d.deductionPlanTaxOptionCode === _model__WEBPACK_IMPORTED_MODULE_0__["DeductionPlanType"].POSTTAX; });
        res.code = '2';
    }
    else if (dt.maxAllowedToCreate > 1) {
        res.deductions = dt.deductions;
        res.code = (dt.codeSequencer++).toString();
    }
    else {
        res.deductions = dt.deductions;
        res.code = '1';
    }
    return res;
}
function buildCommandForEdit(cdi) {
    var res = new _deduction_command__WEBPACK_IMPORTED_MODULE_1__["EditCompanyDeductionCommand"](cdi);
    return res;
}
function buildDeductionCategoryRetirements(ds, code, title) {
    var cat = new _deduction_category__WEBPACK_IMPORTED_MODULE_2__["DeductionCategory"](code, title);
    var filteredDeductions = ds.filter(function (it) {
        return (it.codeGroupId === 1 || // Retirements plans
            it.codeGroupId === 6) && // Retirement Plans Catch Up
            it.codeType !== '401k Loan Repayment';
    });
    var plan401Replay = ds.filter(function (it) { return it.codeType === '401k Loan Repayment'; });
    var ret = new _deduction_category__WEBPACK_IMPORTED_MODULE_2__["DeductionTitle"]({
        key: 'Retirements',
        baseLabel: 'Retirements',
        deductions: filteredDeductions,
        order: 10
    });
    var loanRepayment = new _deduction_category__WEBPACK_IMPORTED_MODULE_2__["DeductionTitle"]({
        key: '401k Loan Repayment',
        baseLabel: '401k Loan Repayment',
        deductions: plan401Replay,
        order: 20
    });
    cat.deductionTitles = {
        Retirements: ret,
        '401K Repayment': loanRepayment
    };
    return cat;
}
function buildDeductionCategoryInsurancePremiums(ds, code, title) {
    var cat = buildDeductionCategory(ds, code, title);
    cat.deductionTitles['Medical'].allowPreAndPost = true;
    cat.deductionTitles['Vision'].allowPreAndPost = true;
    cat.deductionTitles['Dental'].allowPreAndPost = true;
    var miscPre = ds.find(function (it) {
        return it.codeType === 'Miscellaneous Pre-Tax' && it.codeGroupId === 2;
    }); // Pre-tax
    var miscPost = ds.find(function (it) {
        return it.codeType === 'Miscellaneous Post-Tax' && it.codeTypeId === 3;
    }); // Post-tax
    delete cat.deductionTitles['Miscellaneous Pre-Tax'];
    delete cat.deductionTitles['Miscellaneous Post-Tax'];
    var key = 'Miscellaneous Pre-Tax';
    var label = key;
    createCustomDeductionTitle(cat, key, null, label, [miscPre], 500, 5);
    var key2 = 'Miscellaneous Post-Tax';
    var label2 = key2;
    createCustomDeductionTitle(cat, key2, null, label2, [miscPost], 501, 5);
    return cat;
}
function buildDeductionCategoryHsa(ds, code, title) {
    var cat = buildDeductionCategory(ds, code, title);
    // Inject FSA prefix on labels (per reqs.)
    cat.deductionTitles['Dependent Care'].baseLabel = 'FSA Dependent Care';
    cat.deductionTitles['Transportation'].baseLabel = 'FSA Transportation';
    cat.deductionTitles['Parking'].baseLabel = 'FSA Parking';
    return cat;
}
function buildDeductionCategoryOther(ds, code, title) {
    var cat = buildDeductionCategory(ds, code, title);
    var keyGarnishmentGoal = 'Garnishment with Goal';
    var keyGarnishmentNoGoal = 'Garnishment No Goal';
    var keyChildSupport = 'Child Support';
    var keyMiscellaneousGoal = 'Miscellaneous with Goal';
    var keyMiscellaneousNoGoal = 'Miscellaneous No Goal';
    var garnishmentGoal = ds.find(function (it) { return it.codeType === keyGarnishmentGoal; });
    var garnishmentNoGoal = ds.find(function (it) { return it.codeType === keyGarnishmentNoGoal; });
    var childSupport = ds.find(function (it) { return it.codeType === keyChildSupport; });
    var customWithGoal = ds.find(function (it) { return it.codeType === keyMiscellaneousGoal; });
    var customNoGoal = ds.find(function (it) { return it.codeType === keyMiscellaneousNoGoal; });
    createCustomDeductionTitle(cat, keyGarnishmentGoal, null, keyGarnishmentGoal, [garnishmentGoal], 2, 8);
    createCustomDeductionTitle(cat, keyGarnishmentNoGoal, null, keyGarnishmentNoGoal, [garnishmentNoGoal], 3, 8);
    createCustomDeductionTitle(cat, keyChildSupport, null, keyChildSupport, [childSupport], 4, 5);
    var label1 = 'Custom with Goal';
    createCustomDeductionTitle(cat, keyMiscellaneousGoal, null, label1, [customWithGoal], 500, 5);
    var label2 = 'Custom No Goal';
    createCustomDeductionTitle(cat, keyMiscellaneousNoGoal, null, label2, [customNoGoal], 501, 5);
    return cat;
}
function createCustomDeductionTitle(cat, key, code, label, ds, order, maxToCreate) {
    var dt = new _deduction_category__WEBPACK_IMPORTED_MODULE_2__["DeductionTitle"]({
        key: key,
        code: code,
        baseLabel: label,
        deductions: ds,
        order: order,
        maxAllowedToCreate: maxToCreate
    });
    var dicKey = code ? (key + '_' + code) : key;
    cat.deductionTitles[dicKey] = dt;
}
function buildDeductionCategory(ds, code, title) {
    var cat = new _deduction_category__WEBPACK_IMPORTED_MODULE_2__["DeductionCategory"](code, title);
    var filteredDeductions;
    if (code === 2) {
        filteredDeductions = ds.filter(function (it) { return (it.codeGroupId === 2 || it.codeGroupId === 3); } // Pre-Tax Insurance Premiums // Post-Tax Insurance Premiums
        );
    }
    else if (code === 3) {
        filteredDeductions = ds.filter(function (it) { return it.codeGroupId === 7 || it.codeGroupId === 4; } // HSA // FSA
        );
    }
    else if (code === 4) {
        filteredDeductions = ds.filter(function (it) {
            return (it.codeGroupId !== 1 && // any other groups not grouped before
                it.codeGroupId !== 2 &&
                it.codeGroupId !== 3 &&
                it.codeGroupId !== 4 &&
                it.codeGroupId !== 5 &&
                it.codeGroupId !== 6 &&
                it.codeGroupId !== 7) ||
                (it.codeGroupId === 5 &&
                    !(it.codeType === 'Miscellaneous with Goal' || it.codeType === 'Miscellaneous No Goal') &&
                    it.codeType !== '401k Loan Repayment');
        });
    }
    cat.deductionTitles = groupTitles(filteredDeductions);
    groupItems(cat);
    reorderItems(cat);
    return cat;
}
/** Group HSA entries to have only one entry called:
 *  Health Savings Account (HSA) */
function groupItems(dc) {
    if (dc.categoryId === 2) {
        // Add two items for cafeteria 2
        var cafeteria2Entry = Object.values(dc.deductionTitles)
            .find(function (dt) { return dt.key === 'CAFE 2 deduction'; });
        delete dc.deductionTitles[cafeteria2Entry.key];
        var key = cafeteria2Entry.key;
        var label = 'Cafeteria Plan';
        createCustomDeductionTitle(dc, key, '1', label, cafeteria2Entry.deductions, 200, 2);
    }
    if (dc.categoryId === 3) {
        // HSA / FSA
        var hsaEntries = Object.values(dc.deductionTitles).filter(function (dt) { return dt.key.includes(' HSA'); });
        var hsa = new _deduction_category__WEBPACK_IMPORTED_MODULE_2__["DeductionTitle"]({
            key: 'HSA',
            baseLabel: 'Health Savings Account (HSA)',
            deductions: hsaEntries.map(function (it) { return it.deductions; }).reduce(function (a, b) { return a.concat(b); }, []),
            order: -1,
        });
        hsaEntries.map(function (it) {
            delete dc.deductionTitles[it.key];
        });
        dc.deductionTitles[hsa.key] = hsa;
    }
}
function reorderItems(dc) {
    if (dc.categoryId === 2) {
        // Insurance Premiums
        setItemOrder('Life Insurance', 100);
        setItemOrder('Cafeteria Plan', 200);
        setItemOrder('Miscellaneous', 300);
    }
    if (dc.categoryId === 3) {
        // HSA / FSA
        setItemOrder('HSA', -1);
    }
    if (dc.categoryId === 4) {
        // Others
        setItemOrder('Meals', -10);
        setItemOrder('Garnishment with Goal', -9);
        setItemOrder('Garnishment No Goal', -8);
        setItemOrder('Child Support', -7);
    }
    // WB: Set order only if magic string title is found
    // The magic strings worry me.
    // If simply set `dc.deductionTitles[title].order`, page would crash when title not found
    // App should not crash just because we displayed items in the wrong order
    function setItemOrder(title, order) {
        var item = dc.deductionTitles[title];
        if (item) {
            item.order = order;
        }
    }
}
function groupTitles(ds) {
    var dic = {};
    var index = 0;
    ds.map(function (d) {
        if (!dic[d.codeType]) {
            // first one
            dic[d.codeType] = new _deduction_category__WEBPACK_IMPORTED_MODULE_2__["DeductionTitle"]({
                key: d.codeType,
                baseLabel: d.codeType,
                deductions: [d],
                order: (index++) * 10
            });
        }
        else {
            // existing category, add additional one
            dic[d.codeType].deductions.push(d);
        }
    });
    // If multiple deductions on an item, build a selection criteria
    for (var key in dic) {
        if (dic.hasOwnProperty(key)) {
            var title = dic[key];
            if (title.deductions.length > 1) {
                title.selectionCriteria = buildSelectionCriteria(title.deductions);
            }
        }
    }
    return dic;
}
function buildSelectionCriteria(ds) {
    var preOrPostTax = ds.filter(function (it) { return it.codeGroupId === 2 || it.codeGroupId === 3; });
    if (preOrPostTax.length === ds.length) {
        return 'PRE_OR_POST_TAX';
    }
    return 'UNKNOWN';
}
// #endregion helper fns


/***/ }),

/***/ "./src/app/shared/deductions/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/deductions/index.ts ***!
  \********************************************/
/*! exports provided: CompanyDeductionItem, isNewCompanyDeductionItem, DeductionCategory, DeductionTitle, CreateCompanyDeductionCommand, EditCompanyDeductionCommand, getDeductionCategories, buildInitialCompanyDeductionsCategories, updateCompanyDeductionCategories, updateTreeState, buildCommandForCreation, buildCommandForEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _company_deduction_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-deduction-item */ "./src/app/shared/deductions/company-deduction-item.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionItem", function() { return _company_deduction_item__WEBPACK_IMPORTED_MODULE_0__["CompanyDeductionItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNewCompanyDeductionItem", function() { return _company_deduction_item__WEBPACK_IMPORTED_MODULE_0__["isNewCompanyDeductionItem"]; });

/* harmony import */ var _deduction_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deduction-category */ "./src/app/shared/deductions/deduction-category.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeductionCategory", function() { return _deduction_category__WEBPACK_IMPORTED_MODULE_1__["DeductionCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeductionTitle", function() { return _deduction_category__WEBPACK_IMPORTED_MODULE_1__["DeductionTitle"]; });

/* harmony import */ var _deduction_command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deduction-command */ "./src/app/shared/deductions/deduction-command.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyDeductionCommand", function() { return _deduction_command__WEBPACK_IMPORTED_MODULE_2__["CreateCompanyDeductionCommand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditCompanyDeductionCommand", function() { return _deduction_command__WEBPACK_IMPORTED_MODULE_2__["EditCompanyDeductionCommand"]; });

/* harmony import */ var _get_deduction_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-deduction-categories */ "./src/app/shared/deductions/get-deduction-categories.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDeductionCategories", function() { return _get_deduction_categories__WEBPACK_IMPORTED_MODULE_3__["getDeductionCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildInitialCompanyDeductionsCategories", function() { return _get_deduction_categories__WEBPACK_IMPORTED_MODULE_3__["buildInitialCompanyDeductionsCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateCompanyDeductionCategories", function() { return _get_deduction_categories__WEBPACK_IMPORTED_MODULE_3__["updateCompanyDeductionCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateTreeState", function() { return _get_deduction_categories__WEBPACK_IMPORTED_MODULE_3__["updateTreeState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildCommandForCreation", function() { return _get_deduction_categories__WEBPACK_IMPORTED_MODULE_3__["buildCommandForCreation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildCommandForEdit", function() { return _get_deduction_categories__WEBPACK_IMPORTED_MODULE_3__["buildCommandForEdit"]; });







/***/ })

}]);
//# sourceMappingURL=4.0ccb8f8b9d315ed9316e.js.map