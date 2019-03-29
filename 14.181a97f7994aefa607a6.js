(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./src/app/deductions/deductions-enabled.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/deductions/deductions-enabled.service.ts ***!
  \**********************************************************/
/*! exports provided: DeductionsEnabledService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeductionsEnabledService", function() { return DeductionsEnabledService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entity */ "./src/app/store/entity/index.ts");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_store_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/store/session */ "./src/app/store/session/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_entity_entity_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/entity/entity-selectors */ "./src/app/store/entity/entity-selectors.ts");
/* harmony import */ var _store_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/session/session.service */ "./src/app/store/session/session.service.ts");








var DeductionsEnabledService = /** @class */ (function () {
    function DeductionsEnabledService(entitySelectors, sessionService) {
        var _this = this;
        /** Feature flag. Delete after deductions go live */
        this.featureEnabled = !!_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].enableDeductions;
        this.hasCompanyDeductions$ = entitySelectors.companyDeduction.entities$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (deductions) { return deductions.filter(function (d) { return !d.isRemoved; }).length > 0; }));
        // defer because might toggle this.enabled for testing
        // TODO: remove dependency on featureEnabled when Deductions go live
        this.showDeductions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
            return _this.featureEnabled
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(_this.hasCompanyDeductions$, sessionService.currentCompany$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (c) { return !!c.needDeductionSetup; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
                    var hasCompanyDeductions = _a[0], needDeductionSetup = _a[1];
                    return hasCompanyDeductions || needDeductionSetup;
                }))
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
        });
    }
    DeductionsEnabledService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"]({ factory: function DeductionsEnabledService_Factory() { return new DeductionsEnabledService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_store_entity_entity_selectors__WEBPACK_IMPORTED_MODULE_6__["EntitySelectors"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_store_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"])); }, token: DeductionsEnabledService, providedIn: "root" });
    return DeductionsEnabledService;
}());



/***/ }),

/***/ "./src/app/earnings/earnings-enabled.service.ts":
/*!******************************************************!*\
  !*** ./src/app/earnings/earnings-enabled.service.ts ***!
  \******************************************************/
/*! exports provided: EarningsEnabledService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningsEnabledService", function() { return EarningsEnabledService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @session */ "./src/app/store/session/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/session/session.service */ "./src/app/store/session/session.service.ts");




var EarningsEnabledService = /** @class */ (function () {
    function EarningsEnabledService(sessionService) {
        this.showEarnings$ = sessionService.currentCompany$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (company) { return company.showEarningsTab; }));
    }
    EarningsEnabledService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function EarningsEnabledService_Factory() { return new EarningsEnabledService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_store_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"])); }, token: EarningsEnabledService, providedIn: "root" });
    return EarningsEnabledService;
}());



/***/ }),

/***/ "./src/app/employees/employee-setup-questions.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/employees/employee-setup-questions.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_EmployeeSetupQuestionsComponent, View_EmployeeSetupQuestionsComponent_0, View_EmployeeSetupQuestionsComponent_Host_0, EmployeeSetupQuestionsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmployeeSetupQuestionsComponent", function() { return RenderType_EmployeeSetupQuestionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeSetupQuestionsComponent_0", function() { return View_EmployeeSetupQuestionsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeSetupQuestionsComponent_Host_0", function() { return View_EmployeeSetupQuestionsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSetupQuestionsComponentNgFactory", function() { return EmployeeSetupQuestionsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/model.component.ngfactory */ "./src/app/shared/model.component.ngfactory.js");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/radio-group/radio-group.component.ngfactory */ "./src/app/shared/radio-group/radio-group.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");
/* harmony import */ var _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/radio-group/radio-button.component.ngfactory */ "./src/app/shared/radio-group/radio-button.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/radio-group/radio-button.component */ "./src/app/shared/radio-group/radio-button.component.ts");
/* harmony import */ var _employee_setup_questions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-setup-questions */ "./src/app/employees/employee-setup-questions.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_EmployeeSetupQuestionsComponent = [];
var RenderType_EmployeeSetupQuestionsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_EmployeeSetupQuestionsComponent, data: {} });

function View_EmployeeSetupQuestionsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 19, "sp-model", [["group", "employeeSetup"], ["modelType", "Company"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_2__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"], group: [2, "group"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 16777216, null, 0, 8, "sp-radio-group", [["label", "Have you paid any employees this year?"], ["name", "hasPriorPayroll"], ["propertyName", "hasPriorPayroll"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.hasPriorPayrollChanged() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_4__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_2__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, { change: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, 2, 2, "sp-radio-button", [["id", "priorPayrollNo"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 49152, [[1, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_6__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["No"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 2, 2, "sp-radio-button", [["id", "priorPayrollYes"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 49152, [[1, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_6__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Yes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 16777216, null, 0, 8, "sp-radio-group", [["label", "Do some employees have payroll deductions such as medical insurance, retirement plans, or garnishments?"], ["name", "needDeductionSetup"], ["propertyName", "needDeductionSetup"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.needDeductionSetupChanged() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_4__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_2__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, { change: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, 2, 2, "sp-radio-button", [["id", "deductionsNo"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_6__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["No"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, 2, 2, "sp-radio-button", [["id", "deductionsYes"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_6__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Yes"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.company; var currVal_1 = "Company"; var currVal_2 = "employeeSetup"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = "Have you paid any employees this year?"; var currVal_4 = "hasPriorPayroll"; var currVal_5 = "hasPriorPayroll"; _ck(_v, 3, 0, currVal_3, currVal_4, currVal_5); var currVal_6 = false; _ck(_v, 6, 0, currVal_6); var currVal_7 = true; _ck(_v, 9, 0, currVal_7); var currVal_8 = "Do some employees have payroll deductions such as medical insurance, retirement plans, or garnishments?"; var currVal_9 = "needDeductionSetup"; var currVal_10 = "needDeductionSetup"; _ck(_v, 12, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = false; _ck(_v, 15, 0, currVal_11); var currVal_12 = true; _ck(_v, 18, 0, currVal_12); }, null); }
function View_EmployeeSetupQuestionsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-ee-setup-questions", [], null, null, null, View_EmployeeSetupQuestionsComponent_0, RenderType_EmployeeSetupQuestionsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _employee_setup_questions__WEBPACK_IMPORTED_MODULE_7__["EmployeeSetupQuestionsComponent"], [], null, null)], null, null); }
var EmployeeSetupQuestionsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-ee-setup-questions", _employee_setup_questions__WEBPACK_IMPORTED_MODULE_7__["EmployeeSetupQuestionsComponent"], View_EmployeeSetupQuestionsComponent_Host_0, { company: "company" }, { companyChanged: "companyChanged" }, []);



/***/ }),

/***/ "./src/app/employees/employee-setup-questions.ts":
/*!*******************************************************!*\
  !*** ./src/app/employees/employee-setup-questions.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeSetupQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSetupQuestionsComponent", function() { return EmployeeSetupQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");


var EmployeeSetupQuestionsComponent = /** @class */ (function () {
    function EmployeeSetupQuestionsComponent() {
        this.companyChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EmployeeSetupQuestionsComponent.prototype.hasPriorPayrollChanged = function () {
        this.companyChanged.emit('hasPriorPayrollChanged');
    };
    EmployeeSetupQuestionsComponent.prototype.needDeductionSetupChanged = function () {
        this.companyChanged.emit('needDeductionSetupChanged');
    };
    return EmployeeSetupQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee-setup/employee-list/employee-list-container.component.ngfactory.js":
/*!*******************************************************************************************************!*\
  !*** ./src/app/employees/employee-setup/employee-list/employee-list-container.component.ngfactory.js ***!
  \*******************************************************************************************************/
/*! exports provided: RenderType_EmployeeListContainerComponent, View_EmployeeListContainerComponent_0, View_EmployeeListContainerComponent_Host_0, EmployeeListContainerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmployeeListContainerComponent", function() { return RenderType_EmployeeListContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeListContainerComponent_0", function() { return View_EmployeeListContainerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeListContainerComponent_Host_0", function() { return View_EmployeeListContainerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListContainerComponentNgFactory", function() { return EmployeeListContainerComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_setup_questions_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../employee-setup-questions.ngfactory */ "./src/app/employees/employee-setup-questions.ngfactory.js");
/* harmony import */ var _employee_setup_questions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../employee-setup-questions */ "./src/app/employees/employee-setup-questions.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/radio-group/radio-group.component.ngfactory */ "./src/app/shared/radio-group/radio-group.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/radio-group/radio-button.component.ngfactory */ "./src/app/shared/radio-group/radio-button.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/radio-group/radio-button.component */ "./src/app/shared/radio-group/radio-button.component.ts");
/* harmony import */ var _employee_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee-list.component.ngfactory */ "./src/app/employees/employee-setup/employee-list/employee-list.component.ngfactory.js");
/* harmony import */ var _employee_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employee-list.component */ "./src/app/employees/employee-setup/employee-list/employee-list.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/model.component.ngfactory */ "./src/app/shared/model.component.ngfactory.js");
/* harmony import */ var _employee_list_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee-list-container.component */ "./src/app/employees/employee-setup/employee-list/employee-list-container.component.ts");
/* harmony import */ var _employee_list_view_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employee-list-view.service */ "./src/app/employees/employee-setup/employee-list/employee-list-view.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_saver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/saver */ "./src/app/core/saver.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_EmployeeListContainerComponent = [];
var RenderType_EmployeeListContainerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_EmployeeListContainerComponent, data: { "animation": [{ type: 7, name: "ngIfAnim", definitions: [{ type: 0, name: "*", styles: { type: 6, styles: { height: "*", opacity: 1, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 0, name: "void", styles: { type: 6, styles: { height: "0", opacity: 0, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 1, expr: ":leave", animation: { type: 4, styles: null, timings: "250ms ease-out" }, options: null }, { type: 1, expr: ":enter", animation: { type: 4, styles: null, timings: "250ms ease-in" }, options: null }], options: {} }] } });

function View_EmployeeListContainerComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "sp-ee-setup-questions", [], null, [[null, "companyChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("companyChanged" === en)) {
        var pd_0 = (_co.saveCompanyImmediately() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _employee_setup_questions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_EmployeeSetupQuestionsComponent_0"], _employee_setup_questions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_EmployeeSetupQuestionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _employee_setup_questions__WEBPACK_IMPORTED_MODULE_2__["EmployeeSetupQuestionsComponent"], [], { company: [0, "company"] }, { companyChanged: "companyChanged" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "hr", [["class", "mb-4"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = _v.parent.parent.context.ngIf.company; _ck(_v, 2, 0, currVal_0); }, null); }
function View_EmployeeListContainerComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "button", [["class", "btn btn-cta btn-icon-combo mb-3"], ["id", "addAnotherEEButton"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.AddEmployee() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "i", [["class", "material-icons icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["add"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Add Another Employee"]))], null, null); }
function View_EmployeeListContainerComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeListContainerComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = !_v.parent.parent.context.ngIf.readOnly; _ck(_v, 2, 0, currVal_0); }, null); }
function View_EmployeeListContainerComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [], [[24, "@ngIfAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "button", [["class", "btn btn-cta btn-icon-combo"], ["id", "addFirstEEButton"], ["style", "margin-bottom: 0.7rem;"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.AddEmployee() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "i", [["class", "material-icons icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["add"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Add Employee"]))], null, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_EmployeeListContainerComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 8, "sp-radio-group", [["label", "Do you want to add employees at this time?"], ["name", "doneAddingEEs"], ["propertyName", "doneAddingEmployees"]], null, null, null, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_5__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_6__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 2, 2, "sp-radio-button", [["id", "doneAddingEEsNo"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, [[1, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_8__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["No"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 2, 2, "sp-radio-button", [["id", "doneAddingEEsYes"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 49152, [[1, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_8__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Yes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeListContainerComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = "Do you want to add employees at this time?"; var currVal_1 = "doneAddingEEs"; var currVal_2 = "doneAddingEmployees"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = true; _ck(_v, 5, 0, currVal_3); var currVal_4 = false; _ck(_v, 8, 0, currVal_4); var currVal_5 = (_v.parent.parent.parent.context.ngIf.company.doneAddingEmployees !== true); _ck(_v, 11, 0, currVal_5); }, null); }
function View_EmployeeListContainerComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" You have not entered any ", "employees yet. You will need to add at least one ", "employee before running your first payroll. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeListContainerComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_2 = !_v.parent.parent.context.ngIf.readOnly; _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = ((_v.parent.context.ngIf.length > 0) ? "active " : ""); var currVal_1 = ((_v.parent.context.ngIf.length > 0) ? "active " : ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_EmployeeListContainerComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-ee-list", [], null, [[null, "isRemovedChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("isRemovedChanged" === en)) {
        var pd_0 = (_co.setEmployeeIsRemoved($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _employee_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_EmployeeListComponent_0"], _employee_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_EmployeeListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _employee_list_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeListComponent"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"]], { employees: [0, "employees"], showRemoved: [1, "showRemoved"], readOnly: [2, "readOnly"] }, { isRemovedChanged: "isRemovedChanged" })], function (_ck, _v) { var currVal_0 = _v.parent.context.ngIf; var currVal_1 = _v.parent.parent.context.ngIf.showRemoved; var currVal_2 = _v.parent.parent.context.ngIf.readOnly; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_EmployeeListContainerComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "hr", [["class", "mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "sp-ee-setup-questions", [], null, [[null, "companyChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("companyChanged" === en)) {
        var pd_0 = (_co.saveCompanyImmediately() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _employee_setup_questions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_EmployeeSetupQuestionsComponent_0"], _employee_setup_questions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_EmployeeSetupQuestionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 49152, null, 0, _employee_setup_questions__WEBPACK_IMPORTED_MODULE_2__["EmployeeSetupQuestionsComponent"], [], { company: [0, "company"] }, { companyChanged: "companyChanged" })], function (_ck, _v) { var currVal_0 = _v.parent.parent.context.ngIf.company; _ck(_v, 3, 0, currVal_0); }, null); }
function View_EmployeeListContainerComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeListContainerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeListContainerComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["noActiveEes", 2]], null, 0, null, View_EmployeeListContainerComponent_6)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeListContainerComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeListContainerComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.ngIf.length === 0); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.hasActiveEes; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5); _ck(_v, 4, 0, currVal_1, currVal_2); var currVal_3 = (_v.context.ngIf.length > 0); _ck(_v, 7, 0, currVal_3); var currVal_4 = (_v.context.ngIf.length > 0); _ck(_v, 9, 0, currVal_4); }, null); }
function View_EmployeeListContainerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "sp-model", [["group", "employeeSetup"], ["modelType", "Company"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 573440, null, 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_6__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"], group: [2, "group"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 2, null, View_EmployeeListContainerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.ngIf.company; var currVal_1 = "Company"; var currVal_2 = "employeeSetup"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).transform(_co.employeeVms$)); _ck(_v, 4, 0, currVal_3); }, null); }
function View_EmployeeListContainerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_EmployeeListContainerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform(_co.vm$)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_EmployeeListContainerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-ee-list-container", [], null, null, null, View_EmployeeListContainerComponent_0, RenderType_EmployeeListContainerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _employee_list_container_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeListContainerComponent"], [_employee_list_view_service__WEBPACK_IMPORTED_MODULE_14__["EmployeeListViewService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _core_saver__WEBPACK_IMPORTED_MODULE_16__["SaverFactoryService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmployeeListContainerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-ee-list-container", _employee_list_container_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeListContainerComponent"], View_EmployeeListContainerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/employees/employee-setup/employee-list/employee-list-container.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/employees/employee-setup/employee-list/employee-list-container.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EmployeeListContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListContainerComponent", function() { return EmployeeListContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _employee_list_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-list-view.service */ "./src/app/employees/employee-setup/employee-list/employee-list-view.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");






var EmployeeListContainerComponent = /** @class */ (function () {
    function EmployeeListContainerComponent(employeeListViewService, router, saverFactory) {
        this.employeeListViewService = employeeListViewService;
        this.router = router;
        this.saverFactory = saverFactory;
        this.inflightSaveCounter = 0;
        this.inflightSaveCounterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.back = _core__WEBPACK_IMPORTED_MODULE_5__["WellKnownRoutes"].CompanyInfo;
        this.next = _core__WEBPACK_IMPORTED_MODULE_5__["WellKnownRoutes"].CompanyTaxInfo;
    }
    EmployeeListContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.vm$ = this.employeeListViewService.vm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (vm) { return _this.vm = vm; }) // need VM in this class
        );
        this.employeeVms$ = this.employeeListViewService.employeeVms$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ees) {
            var activeEes = ees.filter(function (ee) { return !ee.isRemoved; });
            _this.hasActiveEes = activeEes.length > 0; // template needs hasActiveEes
            return _this.vm && _this.vm.showRemoved ? ees : activeEes;
        }));
    };
    EmployeeListContainerComponent.prototype.ngOnDestroy = function () {
    };
    EmployeeListContainerComponent.prototype.canLeaveAfterSave = function () {
        return this.save();
    };
    EmployeeListContainerComponent.prototype.AddEmployee = function () {
        var _this = this;
        this.employeeListViewService.createNewEmployee().subscribe(function (ee) {
            _this.router.navigate([_core__WEBPACK_IMPORTED_MODULE_5__["WellKnownRoutes"].Employees + "/" + ee.id + "/'personal'"]);
        });
    };
    EmployeeListContainerComponent.prototype.setEmployeeIsRemoved = function (eeVm) {
        var _this = this;
        // Don't wait to leave the page. Start saving the removal immediately.
        // Incrementing count when start and decrementing when done.
        this.inflightSaveCounterSubject.next(this.inflightSaveCounter += 1);
        this.employeeListViewService.saveEmployeeIsRemoved(eeVm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.inflightSaveCounterSubject.next(_this.inflightSaveCounter -= 1); })).subscribe();
    };
    EmployeeListContainerComponent.prototype.save = function () {
        // When countdown to zero, no more pending removals
        var inflightSaveCountDown$ = this.inflightSaveCounterSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(1), // must emit at least once
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function (v) { return v > 0; }));
        return this.saverFactory.create()
            .add(this.employeeListViewService.saveCompany(this.vm.company), inflightSaveCountDown$ // wait until no more pending removals
        )
            .go();
    };
    /** Save company change immediately. Typically called when an answer to a setup question changes. */
    EmployeeListContainerComponent.prototype.saveCompanyImmediately = function () {
        var _this = this;
        // Don't wait to leave the page. Start saving the company immediately.
        // Incrementing count when start and decrementing when done.
        this.inflightSaveCounterSubject.next(this.inflightSaveCounter += 1);
        this.employeeListViewService.saveCompany(this.vm.company).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.inflightSaveCounterSubject.next(_this.inflightSaveCounter -= 1); })).subscribe();
    };
    return EmployeeListContainerComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee-setup/employee-list/employee-list-view.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/employees/employee-setup/employee-list/employee-list-view.service.ts ***!
  \**************************************************************************************/
/*! exports provided: EmployeeListViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListViewService", function() { return EmployeeListViewService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @entity */ "./src/app/store/entity/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @session */ "./src/app/store/session/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_busy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/busy.service */ "./src/app/core/services/busy.service.ts");
/* harmony import */ var _store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/entity/entity-services/company.service */ "./src/app/store/entity/entity-services/company.service.ts");
/* harmony import */ var _store_entity_entity_services_employee_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/entity/entity-services/employee.service */ "./src/app/store/entity/entity-services/employee.service.ts");
/* harmony import */ var _store_entity_entity_services_review_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/entity/entity-services/review.service */ "./src/app/store/entity/entity-services/review.service.ts");
/* harmony import */ var _store_session_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../store/session/session.service */ "./src/app/store/session/session.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};













var EmployeeListViewService = /** @class */ (function () {
    function EmployeeListViewService(busyService, companyService, employeeService, reviewService, sessionService) {
        this.busyService = busyService;
        this.companyService = companyService;
        this.employeeService = employeeService;
        this.sessionService = sessionService;
        // EE ids for employees with a validation error
        var eeErrors$ = reviewService.employeesErrors$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(employeeService.entities$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var ves = _a[0], employees = _a[1];
            return ves.reduce(function (acc, ve) {
                var model = ve.context.model;
                var eeId = Object(_entity__WEBPACK_IMPORTED_MODULE_3__["getEmployeeId"])(ve.context, employees);
                if (eeId) {
                    acc[eeId] = true;
                }
                return acc;
            }, {});
        }));
        this.employeeVms$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(employeeService.entities$, eeErrors$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(0), // let all inputs settle synchronously
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var ees = _a[0], eeErrors = _a[1];
            return ees.map(function (ee) {
                return {
                    id: ee.id,
                    name: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getFullName"])(ee) || 'Unnamed',
                    type: ee.isTerminated ? 'terminated' : ee.employeeType || '',
                    badgeStatus: ee.isRemoved ? 'Deleted' : eeErrors[ee.id] ? 'In Progress' : 'Complete',
                    isRemoved: ee.isRemoved === true
                };
            });
        }));
        this.vm$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(companyService.currentCompany$, sessionService.isAdmin$, sessionService.readOnly$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(0), // let all inputs settle synchronously
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var company = _a[0], isAdmin = _a[1], readOnly = _a[2];
            var co = __assign({}, company, { 
                // Force a true/false value. The default is false: not done
                doneAddingEmployees: company.doneAddingEmployees === true });
            // Used to `showRemoved` if user is Admin.
            // DISABLING until we're sure "unremove" is working. PR 516
            // const howRemoved$ = isAdmin;
            var showRemoved = false;
            var vm = {
                company: co,
                readOnly: readOnly,
                showRemoved: showRemoved
            };
            return vm;
        }));
    }
    EmployeeListViewService.prototype.createNewEmployee = function () {
        var _this = this;
        var result$ = this.sessionService.currentCompanyId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (currentCompanyId) {
            var ee = new _model__WEBPACK_IMPORTED_MODULE_4__["Employee"]();
            ee.id = _this.sessionService.generateId();
            ee.companyId = currentCompanyId;
            // Create the new Home Address to go with the new EE
            var home = _model__WEBPACK_IMPORTED_MODULE_4__["Address"].createNewEmployeeAddress(ee);
            home.id = _this.sessionService.generateId();
            home.companyId = currentCompanyId;
            ee.homeAddressId = home.id;
            // Create the new EmployeePaymentMethod to go with the new EE
            var epay = new _model__WEBPACK_IMPORTED_MODULE_4__["EmployeePaymentMethod"]();
            epay.id = _this.sessionService.generateId();
            epay.companyId = currentCompanyId;
            epay.employeeId = ee.id;
            return _this.employeeService.saveNewEmployee(ee, home, epay);
        }));
        return this.busyService.busy$('Saving new employee', result$);
    };
    EmployeeListViewService.prototype.saveCompany = function (companyVm) {
        var _this = this;
        return this.companyService.currentCompany$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (cachedCompany) {
            var chgCompany = __assign({}, cachedCompany, { 
                // only consider the properties that could change in this view
                doneAddingEmployees: companyVm.doneAddingEmployees === true, needDeductionSetup: companyVm.needDeductionSetup, hasPriorPayroll: companyVm.hasPriorPayroll });
            if ((Object(_utils__WEBPACK_IMPORTED_MODULE_2__["areDifferent"])(chgCompany, cachedCompany, 'Company'))) {
                return _this.companyService.update(chgCompany);
            }
            else {
                return _core__WEBPACK_IMPORTED_MODULE_5__["Saver"].NO_SAVE; // nothing to do
            }
        }));
    };
    EmployeeListViewService.prototype.saveEmployeeIsRemoved = function (eeVm) {
        return this.employeeService.saveEmployeeIsRemovedById(eeVm.id, eeVm.isRemoved);
    };
    EmployeeListViewService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_7__["defineInjectable"]({ factory: function EmployeeListViewService_Factory() { return new EmployeeListViewService(_angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_core_services_busy_service__WEBPACK_IMPORTED_MODULE_8__["BusyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_9__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_store_entity_entity_services_employee_service__WEBPACK_IMPORTED_MODULE_10__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_store_entity_entity_services_review_service__WEBPACK_IMPORTED_MODULE_11__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_store_session_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"])); }, token: EmployeeListViewService, providedIn: "root" });
    return EmployeeListViewService;
}());



/***/ }),

/***/ "./src/app/employees/employee-setup/employee-list/employee-list.component.ngfactory.js":
/*!*********************************************************************************************!*\
  !*** ./src/app/employees/employee-setup/employee-list/employee-list.component.ngfactory.js ***!
  \*********************************************************************************************/
/*! exports provided: RenderType_EmployeeListComponent, View_EmployeeListComponent_0, View_EmployeeListComponent_Host_0, EmployeeListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmployeeListComponent", function() { return RenderType_EmployeeListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeListComponent_0", function() { return View_EmployeeListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeListComponent_Host_0", function() { return View_EmployeeListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponentNgFactory", function() { return EmployeeListComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/input/input-text.component.ngfactory */ "./src/app/shared/input/input-text.component.ngfactory.js");
/* harmony import */ var _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/input/input-text.component */ "./src/app/shared/input/input-text.component.ts");
/* harmony import */ var _shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/input/input-mask-catalog */ "./src/app/shared/input/input-mask-catalog.ts");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _employee_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee-list.component */ "./src/app/employees/employee-setup/employee-list/employee-list.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_EmployeeListComponent = [];
var RenderType_EmployeeListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_EmployeeListComponent, data: {} });

function View_EmployeeListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Delete"]))], null, null); }
function View_EmployeeListComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "i", [["class", "material-icons icon d-inline btn-circle"], ["title", "Edit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["edit"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.toLink(_v.parent.context.$implicit); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_EmployeeListComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "a", [["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openDeleteConfirmation(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "i", [["class", "material-icons icon d-inline btn-circle"], ["title", "Remove"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["delete_forever"]))], null, null); }
function View_EmployeeListComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "td", [["title", "Remove"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [["removedCheckbox", 1]], null, 0, "input", [["type", "checkbox"]], [[8, "checked", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).checked = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).checked;
        var pd_0 = (_co.toggleIsRemoved(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.isRemoved; _ck(_v, 1, 0, currVal_0); }); }
function View_EmployeeListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 22, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "td", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 3, "td", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 6, "td", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 4, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 3, "span", [["class", "badge badge-sp"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](14, { "badge-complete": 0, "badge-inprogress": 1, "badge-warning": 2 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](15, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeListComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeListComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.toLink(_v.context.$implicit); _ck(_v, 2, 0, currVal_0); var currVal_2 = _co.toLink(_v.context.$implicit); _ck(_v, 6, 0, currVal_2); var currVal_4 = _co.toLink(_v.context.$implicit); _ck(_v, 10, 0, currVal_4); var currVal_5 = "badge badge-sp"; var currVal_6 = _ck(_v, 14, 0, (_v.context.$implicit.badgeStatus === "Complete"), (_v.context.$implicit.badgeStatus === "In Progress"), _v.context.$implicit.isRemoved); _ck(_v, 13, 0, currVal_5, currVal_6); var currVal_8 = !_v.context.$implicit.isRemoved; _ck(_v, 18, 0, currVal_8); var currVal_9 = (!_co.showRemoved && !_co.readOnly); _ck(_v, 20, 0, currVal_9); var currVal_10 = (_co.showRemoved && !_co.readOnly); _ck(_v, 22, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_1); var currVal_3 = _co.employeeTypeLookup[_v.context.$implicit.type]; _ck(_v, 8, 0, currVal_3); var currVal_7 = _v.context.$implicit.badgeStatus; _ck(_v, 15, 0, currVal_7); }); }
function View_EmployeeListComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "h4", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "i", [["class", "material-icons icon text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["warning"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["Delete ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.close('cancel') !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "i", [["aria-hidden", "true"], ["class", "material-icons icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 19, "div", [["class", "p-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Are you sure you want to "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](12, null, ["delete ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["? "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" This action "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["cannot"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" be undone and will "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["permanently"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" delete this employee and its corresponding information. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 5, "sp-input", [["autofocus", "true"], ["label", "Type the employee's exact full name to confirm deletion"], ["name", "deleteConfirmationName"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.deleteConfirmationName = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_5__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_6__["ModelComponent"]]], { autofocus: [0, "autofocus"], label: [1, "label"], name: [2, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 4, "div", [["class", "modal-footer d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "button", [["class", "btn btn-light"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.close('cancel') !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.close('delete') !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Delete"]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = "true"; var currVal_10 = "Type the employee's exact full name to confirm deletion"; var currVal_11 = "deleteConfirmationName"; _ck(_v, 23, 0, currVal_9, currVal_10, currVal_11); var currVal_12 = "deleteConfirmationName"; var currVal_13 = _co.deleteConfirmationName; _ck(_v, 25, 0, currVal_12, currVal_13); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selectedEe.name; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.selectedEe.name; _ck(_v, 12, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassPending; _ck(_v, 22, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_14 = !_co.isDeleteConfirmed; _ck(_v, 31, 0, currVal_14); }); }
function View_EmployeeListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { deleteModalContentEl: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 14, "table", [["class", "table interactive-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 13, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Edit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[1, 2], ["deleteModalContent", 2]], null, 0, null, View_EmployeeListComponent_6))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.readOnly; _ck(_v, 13, 0, currVal_0); var currVal_1 = _co.employees; var currVal_2 = _co.byId; _ck(_v, 15, 0, currVal_1, currVal_2); }, null); }
function View_EmployeeListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-ee-list", [], null, null, null, View_EmployeeListComponent_0, RenderType_EmployeeListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _employee_list_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeListComponent"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]], null, null)], null, null); }
var EmployeeListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-ee-list", _employee_list_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeListComponent"], View_EmployeeListComponent_Host_0, { employees: "employees", showRemoved: "showRemoved", readOnly: "readOnly" }, { isRemovedChanged: "isRemovedChanged" }, []);



/***/ }),

/***/ "./src/app/employees/employee-setup/employee-list/employee-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/employees/employee-setup/employee-list/employee-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(modalService) {
        this.modalService = modalService;
        this.showRemoved = false;
        this.readOnly = false;
        this.isRemovedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.employeeTypeLookup = {
            fulltime: 'Full-Time',
            parttime: 'Part-Time',
            contractor: 'Contractor',
            household: 'Househld',
            officer: 'Officer',
            terminated: 'Terminated',
            '': ''
        };
    }
    EmployeeListComponent.prototype.byId = function (eeVm) {
        return eeVm.id;
    };
    EmployeeListComponent.prototype.openDeleteConfirmation = function (selectedEe) {
        this.deleteConfirmationName = '';
        this.selectedEe = selectedEe;
        this.openDeleteModal();
    };
    Object.defineProperty(EmployeeListComponent.prototype, "isDeleteConfirmed", {
        get: function () {
            return this.selectedEe.name === this.deleteConfirmationName;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeListComponent.prototype.openDeleteModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.modalService.open(this.deleteModalContentEl).result];
                    case 1:
                        result = _a.sent();
                        if (result === 'delete' && this.isDeleteConfirmed) {
                            this.removeEmployee(this.selectedEe);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeListComponent.prototype.removeEmployee = function (eeVm) {
        eeVm.isRemoved = true;
        this.isRemovedChanged.emit(eeVm);
    };
    EmployeeListComponent.prototype.toggleIsRemoved = function (eeVm) {
        if (eeVm.isRemoved) {
            eeVm.isRemoved = false;
            this.isRemovedChanged.emit(eeVm);
        }
        else {
            this.openDeleteConfirmation(eeVm);
        }
    };
    EmployeeListComponent.prototype.toLink = function (eeVm) {
        return eeVm.isRemoved ? undefined : eeVm.id;
    };
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee-setup/employee-setup-container/employee-setup-container.component.ngfactory.js":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/employees/employee-setup/employee-setup-container/employee-setup-container.component.ngfactory.js ***!
  \*******************************************************************************************************************/
/*! exports provided: RenderType_EmployeeSetupContainerComponent, View_EmployeeSetupContainerComponent_0, View_EmployeeSetupContainerComponent_Host_0, EmployeeSetupContainerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmployeeSetupContainerComponent", function() { return RenderType_EmployeeSetupContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeSetupContainerComponent_0", function() { return View_EmployeeSetupContainerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeSetupContainerComponent_Host_0", function() { return View_EmployeeSetupContainerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSetupContainerComponentNgFactory", function() { return EmployeeSetupContainerComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/validation/validate-property.directive */ "./src/app/shared/validation/validate-property.directive.ts");
/* harmony import */ var _shared_nav_bottom_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/nav-bottom.component.ngfactory */ "./src/app/shared/nav-bottom.component.ngfactory.js");
/* harmony import */ var _shared_nav_bottom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/nav-bottom.component */ "./src/app/shared/nav-bottom.component.ts");
/* harmony import */ var _employee_setup_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee-setup-container.component */ "./src/app/employees/employee-setup/employee-setup-container/employee-setup-container.component.ts");
/* harmony import */ var _deductions_deductions_enabled_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../deductions/deductions-enabled.service */ "./src/app/deductions/deductions-enabled.service.ts");
/* harmony import */ var _earnings_earnings_enabled_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../earnings/earnings-enabled.service */ "./src/app/earnings/earnings-enabled.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _store_session_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/session/session.service */ "./src/app/store/session/session.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_EmployeeSetupContainerComponent = [];
var RenderType_EmployeeSetupContainerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_EmployeeSetupContainerComponent, data: { "animation": [{ type: 7, name: "tabRouteAnim", definitions: [{ type: 1, expr: "* <=> *", animation: [{ type: 11, selector: ".nav-button-container", animation: { type: 6, styles: { position: "absolute", opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter, :leave", animation: { type: 6, styles: { position: "absolute", top: "0rem", left: "0.95rem" }, offset: null }, options: { optional: true } }, { type: 3, steps: [{ type: 11, selector: ":enter", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: "300ms ease-in" }], options: { optional: true } }, { type: 11, selector: ":leave", animation: [{ type: 6, styles: { opacity: 1 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "300ms ease-out" }], options: { optional: true } }], options: null }], options: null }], options: {} }] } });

function View_EmployeeSetupContainerComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "a", [["routerLinkActive", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1720320, [["ads", 4]], 2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit.link; _ck(_v, 1, 0, currVal_2); var currVal_3 = ""; _ck(_v, 2, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _v.parent.context.$implicit.title; _ck(_v, 5, 0, currVal_4); }); }
function View_EmployeeSetupContainerComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "ngb-tab", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 2113536, [[2, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTab"], [], { id: [0, "id"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { titleTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { contentTpls: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_EmployeeSetupContainerComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, [[3, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.link; _ck(_v, 1, 0, currVal_0); }, null); }
function View_EmployeeSetupContainerComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "mb-3 mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "ngb-tabset", [], null, null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NgbTabset_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NgbTabset"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 2146304, [[1, 4], ["tabset", 4]], 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabset"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabsetConfig"]], { activeId: [0, "activeId"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeSetupContainerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.initialId; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.tabConfigurations; _ck(_v, 5, 0, currVal_1); }, null); }
function View_EmployeeSetupContainerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "div", [["class", "standard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeSetupContainerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 11, "div", [["class", "container m-0 p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 10, "div", [["class", "container"]], [[24, "@tabRouteAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 7, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 737280, null, 0, _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_6__["FormDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 212992, [["outlet", 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "sp-nav-bottom", [], null, null, null, _shared_nav_bottom_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_NavBottomComponent_0"], _shared_nav_bottom_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_NavBottomComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 114688, null, 0, _shared_nav_bottom_component__WEBPACK_IMPORTED_MODULE_8__["NavBottomComponent"], [], { back: [0, "back"], next: [1, "next"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.ngIf.showTabs; _ck(_v, 2, 0, currVal_0); _ck(_v, 10, 0); _ck(_v, 12, 0); var currVal_9 = _co.backLink; var currVal_10 = _co.nextLink; _ck(_v, 14, 0, currVal_9, currVal_10); }, function (_ck, _v) { var currVal_1 = undefined; _ck(_v, 4, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_EmployeeSetupContainerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { tabset: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 7, "div", [["class", "static-nav d-flex flex-column"], ["id", "employeeSetupComponent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "header", [["class", "header-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "div", [["class", "standard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Employee Setup"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_EmployeeSetupContainerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).transform(_co.vm$)); _ck(_v, 7, 0, currVal_0); }, null); }
function View_EmployeeSetupContainerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-employee-setup-container", [], null, null, null, View_EmployeeSetupContainerComponent_0, RenderType_EmployeeSetupContainerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _employee_setup_container_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeSetupContainerComponent"], [_deductions_deductions_enabled_service__WEBPACK_IMPORTED_MODULE_10__["DeductionsEnabledService"], _earnings_earnings_enabled_service__WEBPACK_IMPORTED_MODULE_11__["EarningsEnabledService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _store_session_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmployeeSetupContainerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-employee-setup-container", _employee_setup_container_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeSetupContainerComponent"], View_EmployeeSetupContainerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/employees/employee-setup/employee-setup-container/employee-setup-container.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/employees/employee-setup/employee-setup-container/employee-setup-container.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EmployeeSetupVm, EmployeeSetupContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSetupVm", function() { return EmployeeSetupVm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSetupContainerComponent", function() { return EmployeeSetupContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_deductions_deductions_enabled_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/deductions/deductions-enabled.service */ "./src/app/deductions/deductions-enabled.service.ts");
/* harmony import */ var _app_earnings_earnings_enabled_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/earnings/earnings-enabled.service */ "./src/app/earnings/earnings-enabled.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _app_store_session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/store/session */ "./src/app/store/session/index.ts");










var allTabConfigurations = {
    employees: { link: './', title: 'Employees' },
    deductions: { link: './company-deductions', title: 'Deductions' },
    earnings: { link: './earnings', title: 'Earnings' },
};
var EmployeeSetupVm = /** @class */ (function () {
    function EmployeeSetupVm() {
        this.showTabs = false;
    }
    return EmployeeSetupVm;
}());

var EmployeeSetupContainerComponent = /** @class */ (function () {
    function EmployeeSetupContainerComponent(deductionsEnabledService, earningsEnabledService, ngTitle, route, sessionService) {
        this.deductionsEnabledService = deductionsEnabledService;
        this.earningsEnabledService = earningsEnabledService;
        this.ngTitle = ngTitle;
        this.route = route;
        this.sessionService = sessionService;
        this.backLink = _core__WEBPACK_IMPORTED_MODULE_8__["WellKnownRoutes"].CompanyInfo;
        this.nextLink = _core__WEBPACK_IMPORTED_MODULE_8__["WellKnownRoutes"].CompanyTaxInfo;
        this.tabConfigurations = [allTabConfigurations.employees];
        this.currentTab = this.tabConfigurations[0];
    }
    EmployeeSetupContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vm$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.deductionsEnabledService.showDeductions$, this.earningsEnabledService.showEarnings$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var showDeductions = _a[0], showEarnings = _a[1];
            _this.tabConfigurations = [allTabConfigurations.employees];
            if (showEarnings) {
                _this.tabConfigurations.push(allTabConfigurations.earnings);
            }
            if (showDeductions) {
                _this.tabConfigurations.push(allTabConfigurations.deductions);
            }
            var forceHideTabs = false;
            _this.sessionService.currentEmployeeId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (val) { forceHideTabs = (val != null); });
            var vm = {
                showTabs: (showDeductions || showEarnings) && !forceHideTabs
            };
            return vm;
        }));
        this.watchRouteChange();
    };
    EmployeeSetupContainerComponent.prototype.getUrlPath = function () {
        if (this.route.snapshot.firstChild) {
            return './' + this.route.snapshot.firstChild.url.join('/');
        }
        return '';
    };
    EmployeeSetupContainerComponent.prototype.setBrowserTabTitle = function () {
        this.ngTitle.setTitle('SP ' + this.currentTab.title);
    };
    /** Listen for route changes. Many of them re-use this component **/
    EmployeeSetupContainerComponent.prototype.watchRouteChange = function () {
        var _this = this;
        this.route.url.subscribe(function (url) {
            window.scrollTo(0, 0);
            var link = _this.getUrlPath() || _this.tabConfigurations[0].link;
            _this.initialId = _this.initialId || link; // only useful first time
            // Wait a tick for tabs to draw
            setTimeout(function () { return _this.updateCurrentTabInfo(link); });
        });
    };
    /**
     * When the current tab changes, setup the tab-related info
     * such as the tab title, the browser tab title, the "next" link,
     */
    EmployeeSetupContainerComponent.prototype.updateCurrentTabInfo = function (tabLink) {
        this.currentTab = this.tabConfigurations.find(function (t) { return t.link === tabLink; }) ||
            this.tabConfigurations[0];
        if (this.tabset) {
            this.tabset.select(tabLink); // constraint: select expects an ID and not a link -> forcing id == link
        }
        this.setBrowserTabTitle();
    };
    return EmployeeSetupContainerComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee-container/employee-container.component.ngfactory.js":
/*!*************************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-container/employee-container.component.ngfactory.js ***!
  \*************************************************************************************************/
/*! exports provided: RenderType_EmployeeContainerComponent, View_EmployeeContainerComponent_0, View_EmployeeContainerComponent_Host_0, EmployeeContainerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmployeeContainerComponent", function() { return RenderType_EmployeeContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeContainerComponent_0", function() { return View_EmployeeContainerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeContainerComponent_Host_0", function() { return View_EmployeeContainerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeContainerComponentNgFactory", function() { return EmployeeContainerComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_pipes_fullname_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pipes/fullname.pipe */ "./src/app/shared/pipes/fullname.pipe.ts");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/validation/validate-property.directive */ "./src/app/shared/validation/validate-property.directive.ts");
/* harmony import */ var _shared_nav_bottom_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/nav-bottom.component.ngfactory */ "./src/app/shared/nav-bottom.component.ngfactory.js");
/* harmony import */ var _shared_nav_bottom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/nav-bottom.component */ "./src/app/shared/nav-bottom.component.ts");
/* harmony import */ var _employee_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employee-container.component */ "./src/app/employees/employee/employee-container/employee-container.component.ts");
/* harmony import */ var _deductions_deductions_enabled_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../deductions/deductions-enabled.service */ "./src/app/deductions/deductions-enabled.service.ts");
/* harmony import */ var _employee_view_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../employee-view.service */ "./src/app/employees/employee/employee-view.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_EmployeeContainerComponent = [];
var RenderType_EmployeeContainerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_EmployeeContainerComponent, data: { "animation": [{ type: 7, name: "tabRouteAnim", definitions: [{ type: 1, expr: "* <=> *", animation: [{ type: 11, selector: ".nav-button-container", animation: { type: 6, styles: { position: "absolute", opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter, :leave", animation: { type: 6, styles: { position: "absolute", top: "0rem", left: "0.95rem" }, offset: null }, options: { optional: true } }, { type: 3, steps: [{ type: 11, selector: ":enter", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: "300ms ease-in" }], options: { optional: true } }, { type: 11, selector: ":leave", animation: [{ type: 6, styles: { opacity: 1 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "300ms ease-out" }], options: { optional: true } }], options: null }], options: null }], options: {} }] } });

function View_EmployeeContainerComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "a", [["routerLinkActive", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 1720320, [["ads", 4]], 2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _v.parent.parent.context.$implicit.link; _ck(_v, 2, 0, currVal_2); var currVal_3 = ""; _ck(_v, 3, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_4 = _v.parent.parent.context.$implicit.title; _ck(_v, 6, 0, currVal_4); }); }
function View_EmployeeContainerComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](0, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.title; _ck(_v, 0, 0, currVal_0); }); }
function View_EmployeeContainerComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeContainerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["noTabLink", 2]], null, 0, null, View_EmployeeContainerComponent_4))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hasName; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_EmployeeContainerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "ngb-tab", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 2113536, [[2, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTab"], [], { id: [0, "id"], disabled: [1, "disabled"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { titleTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { contentTpls: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_EmployeeContainerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, [[3, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.id; var currVal_1 = !_co.hasName; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_EmployeeContainerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _shared_pipes_fullname_pipe__WEBPACK_IMPORTED_MODULE_4__["FullNamePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { tabset: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 28, "div", [["class", "static-nav d-flex flex-column"], ["id", "employeeComponent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 9, "header", [["class", "header-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 8, "div", [["class", "standard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 4, "a", [["class", "-flex nav-link font-weight-bold icon-left"], ["id", "backToSetup"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "i", [["class", "material-icons icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["arrow_backward"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Employee Setup "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 2, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](11, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 17, "div", [["class", "standard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 4, "ngb-tabset", [], null, null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_NgbTabset_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_NgbTabset"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 2146304, [[1, 4], ["tabset", 4]], 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabset"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabsetConfig"]], { activeId: [0, "activeId"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeContainerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 11, "div", [["class", "container m-0 p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 10, "div", [["class", "container "]], [[24, "@tabRouteAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 7, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 737280, null, 0, _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_7__["FormDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 212992, [["o", 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "sp-nav-bottom", [], null, null, null, _shared_nav_bottom_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_NavBottomComponent_0"], _shared_nav_bottom_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_NavBottomComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 114688, null, 0, _shared_nav_bottom_component__WEBPACK_IMPORTED_MODULE_9__["NavBottomComponent"], [], { disabled: [0, "disabled"], disableNext: [1, "disableNext"], back: [2, "back"], next: [3, "next"], nextLabel: [4, "nextLabel"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/employees"; _ck(_v, 6, 0, currVal_2); var currVal_4 = _co.initialId; _ck(_v, 15, 0, currVal_4); var currVal_5 = _co.tabConfigurations; _ck(_v, 18, 0, currVal_5); _ck(_v, 26, 0); _ck(_v, 28, 0); var currVal_14 = _co.disabled; var currVal_15 = _co.disableNext; var currVal_16 = _co.backLink; var currVal_17 = _co.nextLink; var currVal_18 = _co.nextLabel; _ck(_v, 30, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).href; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), _co.vm)) || "New Employee"); _ck(_v, 11, 0, currVal_3); var currVal_6 = undefined; _ck(_v, 20, 0, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassUntouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassTouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassPristine; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassDirty; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassValid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassInvalid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).ngClassPending; _ck(_v, 21, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); }); }
function View_EmployeeContainerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-ee-container", [], null, null, null, View_EmployeeContainerComponent_0, RenderType_EmployeeContainerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _employee_container_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeContainerComponent"], [_deductions_deductions_enabled_service__WEBPACK_IMPORTED_MODULE_11__["DeductionsEnabledService"], _employee_view_service__WEBPACK_IMPORTED_MODULE_12__["EmployeeViewService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmployeeContainerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-ee-container", _employee_container_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeContainerComponent"], View_EmployeeContainerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/employees/employee/employee-container/employee-container.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-container/employee-container.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EmployeeContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeContainerComponent", function() { return EmployeeContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_deductions_deductions_enabled_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/deductions/deductions-enabled.service */ "./src/app/deductions/deductions-enabled.service.ts");
/* harmony import */ var _employees_employee_employee_view_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @employees/employee/employee-view.service */ "./src/app/employees/employee/employee-view.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");









var commonTabs = {
    personal: { id: 'personal', title: 'Personal', link: 'personal' },
    employment: { id: 'employment', title: 'Employment', link: 'employment' },
    payment: { id: 'payment', title: 'Payment', link: 'payment' },
    deductionsTab: { id: 'deductions', title: 'Deductions', link: 'deductions' },
    taxTab: { id: 'tax', title: 'Taxes', link: 'tax' }
};
var EmployeeContainerComponent = /** @class */ (function () {
    function EmployeeContainerComponent(deductionsEnabledService, employeeViewService, ngTitle, route) {
        this.deductionsEnabledService = deductionsEnabledService;
        this.employeeViewService = employeeViewService;
        this.ngTitle = ngTitle;
        this.route = route;
        this.backLink = _core__WEBPACK_IMPORTED_MODULE_8__["WellKnownRoutes"].Employees;
        this.nextLink = commonTabs.employment.link;
        this.nextLabel = 'Continue';
        this.currentTabTitle = commonTabs.personal.title;
        this.isNew = false;
        this.sub = new _core__WEBPACK_IMPORTED_MODULE_8__["SubSink"]();
    }
    EmployeeContainerComponent.prototype.ngOnInit = function () {
        this.setTabs();
        this.watchRouteChange();
        this.watchVmChange();
    };
    EmployeeContainerComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    Object.defineProperty(EmployeeContainerComponent.prototype, "disabled", {
        get: function () {
            return !this.hasName && !this.isNew;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeContainerComponent.prototype, "disableNext", {
        get: function () {
            return !this.hasName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeContainerComponent.prototype, "hasName", {
        get: function () {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasName"])(this.vm);
        },
        enumerable: true,
        configurable: true
    });
    EmployeeContainerComponent.prototype.setTabs = function () {
        var _this = this;
        this.deductionsEnabledService.showDeductions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (showDeductions) {
            _this.tabConfigurations = [
                commonTabs.personal,
                commonTabs.employment,
                commonTabs.payment,
                commonTabs.deductionsTab,
                commonTabs.taxTab
            ]
                .filter(function (tab) { return showDeductions || tab.id !== commonTabs.deductionsTab.id; });
        });
    };
    /** Listen for route changes. Many of them re-use this component **/
    EmployeeContainerComponent.prototype.watchRouteChange = function () {
        var _this = this;
        this.sub.sink = this.route.url.subscribe(function (url) {
            var eeId = url.toString();
            _this.employeeViewService.setCurrentEmployeeId(eeId);
            window.scrollTo(0, 0);
            _this.tabLink = _this.route.snapshot.firstChild.url.toString() || _this.tabConfigurations[0].link;
            _this.initialId = _this.initialId || _this.tabLink; // only useful first time
            // Wait a tick for tabs to draw
            setTimeout(function () { return _this.updateCurrentTabInfo(_this.tabLink); });
        });
    };
    /** Listen for ViewModel change,  typically from setting a new EE Id or saving */
    EmployeeContainerComponent.prototype.watchVmChange = function () {
        var _this = this;
        this.sub.sink = this.employeeViewService.currentEmployee$.subscribe(function (ee) {
            _this.vm = ee;
            _this.isNew = !Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasName"])(ee); // is new if the employee-in-cache lacks a name
            _this.setBrowserTabTitle();
        });
    };
    EmployeeContainerComponent.prototype.setBrowserTabTitle = function () {
        this.ngTitle.setTitle(("SP EE " + Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getFullName"])(this.vm) + " " + this.currentTabTitle).trim());
    };
    /**
     * When the current tab changes, setup the tab-related info
     * such as the tab title, the browser tab title, the "next" link,
     */
    EmployeeContainerComponent.prototype.updateCurrentTabInfo = function (tabLink) {
        if (this.tabset) {
            this.tabset.select(tabLink);
        }
        var tabIx = this.tabConfigurations.findIndex(function (tt) { return tt.link === tabLink; });
        tabIx = tabIx < 0 ? 0 : tabIx;
        this.currentTabTitle = this.tabConfigurations[tabIx].title || '';
        var backTab = this.tabConfigurations[tabIx - 1];
        var nextTab = this.tabConfigurations[(tabIx += 1)];
        // On overflow, navigates away to the EmployeeList!
        this.backLink = backTab ? backTab.link : _core__WEBPACK_IMPORTED_MODULE_8__["WellKnownRoutes"].Employees;
        this.nextLink = nextTab ? nextTab.link : _core__WEBPACK_IMPORTED_MODULE_8__["WellKnownRoutes"].Employees;
        this.setBrowserTabTitle();
    };
    return EmployeeContainerComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee-employment/employee-employment.component.ngfactory.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-employment/employee-employment.component.ngfactory.js ***!
  \***************************************************************************************************/
/*! exports provided: RenderType_EmployeeEmploymentComponent, View_EmployeeEmploymentComponent_0, View_EmployeeEmploymentComponent_Host_0, EmployeeEmploymentComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmployeeEmploymentComponent", function() { return RenderType_EmployeeEmploymentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeEmploymentComponent_0", function() { return View_EmployeeEmploymentComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeEmploymentComponent_Host_0", function() { return View_EmployeeEmploymentComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEmploymentComponentNgFactory", function() { return EmployeeEmploymentComponentNgFactory; });
/* harmony import */ var _employee_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../employee-tab.scss.shim.ngstyle */ "./src/app/employees/employee/employee-tab.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/radio-group/radio-button.component.ngfactory */ "./src/app/shared/radio-group/radio-button.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/radio-group/radio-button.component */ "./src/app/shared/radio-group/radio-button.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_input_input_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/input/input-select.component.ngfactory */ "./src/app/shared/input/input-select.component.ngfactory.js");
/* harmony import */ var _shared_input_input_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/input/input-select.component */ "./src/app/shared/input/input-select.component.ts");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_input_control_wrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/input/control-wrap.component.ngfactory */ "./src/app/shared/input/control-wrap.component.ngfactory.js");
/* harmony import */ var _shared_input_control_wrap_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/input/control-wrap.component */ "./src/app/shared/input/control-wrap.component.ts");
/* harmony import */ var _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/model.component.ngfactory */ "./src/app/shared/model.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/radio-group/radio-group.component.ngfactory */ "./src/app/shared/radio-group/radio-group.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");
/* harmony import */ var _shared_input_input_date_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/input/input-date.component.ngfactory */ "./src/app/shared/input/input-date.component.ngfactory.js");
/* harmony import */ var _shared_input_input_date_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/input/input-date.component */ "./src/app/shared/input/input-date.component.ts");
/* harmony import */ var _shared_address_address_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/address/address-modal.component.ngfactory */ "./src/app/shared/address/address-modal.component.ngfactory.js");
/* harmony import */ var _shared_address_address_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/address/address-modal.component */ "./src/app/shared/address/address-modal.component.ts");
/* harmony import */ var _store_entity_entity_services_address_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../store/entity/entity-services/address.service */ "./src/app/store/entity/entity-services/address.service.ts");
/* harmony import */ var _core_services_tax_services_tax_collector_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../core/services/tax-services/tax-collector.service */ "./src/app/core/services/tax-services/tax-collector.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_pipes_address_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/pipes/address.pipe */ "./src/app/shared/pipes/address.pipe.ts");
/* harmony import */ var _employee_employment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./employee-employment.component */ "./src/app/employees/employee/employee-employment/employee-employment.component.ts");
/* harmony import */ var _employee_view_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../employee-view.service */ "./src/app/employees/employee/employee-view.service.ts");
/* harmony import */ var _core_saver__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../core/saver */ "./src/app/core/saver.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























var styles_EmployeeEmploymentComponent = [_employee_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_EmployeeEmploymentComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_EmployeeEmploymentComponent, data: {} });

function View_EmployeeEmploymentComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contractors:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Contractors are independent contractors."]))], null, null); }
function View_EmployeeEmploymentComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[3, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_3__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["1099 Contractor"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.EmployeeType.Contractor; _ck(_v, 1, 0, currVal_0); }, null); }
function View_EmployeeEmploymentComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.id; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), _v.context.$implicit)); _ck(_v, 3, 0, currVal_2); }); }
function View_EmployeeEmploymentComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "sp-select", [["name", "Work Location"], ["propertyName", "workAddressId"]], null, null, null, _shared_input_input_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_InputSelectComponent_0"], _shared_input_input_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_InputSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_input_input_select_component__WEBPACK_IMPORTED_MODULE_6__["InputSelectComponent"], [[2, _shared_model_component__WEBPACK_IMPORTED_MODULE_7__["ModelComponent"]]], { name: [0, "name"], propertyName: [1, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_EmployeeEmploymentComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Work Location"; var currVal_1 = "workAddressId"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.workAddresses; _ck(_v, 3, 0, currVal_2); }, null); }
function View_EmployeeEmploymentComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _co.mainWorkAddress)); _ck(_v, 1, 0, currVal_0); }); }
function View_EmployeeEmploymentComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 7, "sp-control", [["label", "Work Location"]], null, null, null, _shared_input_control_wrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ControlWrapComponent_0"], _shared_input_control_wrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ControlWrapComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1097728, null, 1, _shared_input_control_wrap_component__WEBPACK_IMPORTED_MODULE_10__["ControlWrapComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { label: [0, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { input: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_EmployeeEmploymentComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["oneAddress", 2]], 1, 0, null, View_EmployeeEmploymentComponent_7)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 1, 1, "a", [["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addWorkAddress() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+ Add a New Work Location"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Work Location"; _ck(_v, 1, 0, currVal_0); var currVal_1 = (_co.workAddresses.length > 1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5); _ck(_v, 4, 0, currVal_1, currVal_2); }, null); }
function View_EmployeeEmploymentComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 58, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 55, "sp-model", [["modelType", "Employee"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_7__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 16777216, null, 0, 24, "sp-radio-group", [["label", "Employee Status"], ["name", "employeeStatus"], ["propertyName", "employeeStatus"], ["tooltip", "true"]], null, null, null, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_13__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_7__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], tooltip: [3, "tooltip"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 12, "span", [["class", "label-tooltip"], ["tooltipText", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Active: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Select active for current employees"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New Hire: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Select new hire if you have not yet paid this employee"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Terminated: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Select terminated if this employee is no longer an employee but you have paid them in the past "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_3__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Active"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_3__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["New Hire"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_3__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Terminated"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 16777216, null, 0, 21, "sp-radio-group", [["label", "Employee Type"], ["name", "employeeType"], ["propertyName", "employeeType"], ["tooltip", "true"]], null, null, null, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_13__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_7__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], tooltip: [3, "tooltip"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 0, 10, "span", [["class", "label-tooltip"], ["tooltipText", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Full Time:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Most states define full time as 30 hours or more per week."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Part Time:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Most states define part time as less than 30 hours per week."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeEmploymentComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 49152, [[3, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_3__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Full Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 49152, [[3, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_3__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Part Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_EmployeeEmploymentComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, 0, 4, "sp-date", [["class", "input-medium"], ["id", "hireDate"], ["label", "Hire Date"], ["propertyName", "hireDate"], ["tooltip", "true"]], null, null, null, _shared_input_input_date_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_InputDateComponent_0"], _shared_input_input_date_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_InputDateComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_date_component__WEBPACK_IMPORTED_MODULE_15__["InputDateComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 4440064, null, 0, _shared_input_input_date_component__WEBPACK_IMPORTED_MODULE_15__["InputDateComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_7__["ModelComponent"]]], { label: [0, "label"], propertyName: [1, "propertyName"], tooltip: [2, "tooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, 0, 1, "span", [["class", "label-tooltip"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["This should be the first day of employment. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_EmployeeEmploymentComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "sp-address-modal", [], null, null, null, _shared_address_address_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_AddressModalComponent_0"], _shared_address_address_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_AddressModalComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 49152, [[1, 4]], 0, _shared_address_address_modal_component__WEBPACK_IMPORTED_MODULE_17__["AddressModalComponent"], [_store_entity_entity_services_address_service__WEBPACK_IMPORTED_MODULE_18__["AddressService"], _core_services_tax_services_tax_collector_service__WEBPACK_IMPORTED_MODULE_19__["TaxCollectorService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModal"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm; var currVal_1 = "Employee"; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = "Employee Status"; var currVal_3 = "employeeStatus"; var currVal_4 = "employeeStatus"; var currVal_5 = "true"; _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.EmployeeStatus.Active; _ck(_v, 20, 0, currVal_6); var currVal_7 = _co.EmployeeStatus.NewHire; _ck(_v, 23, 0, currVal_7); var currVal_8 = _co.EmployeeStatus.Terminated; _ck(_v, 26, 0, currVal_8); var currVal_9 = "Employee Type"; var currVal_10 = "employeeType"; var currVal_11 = "employeeType"; var currVal_12 = "true"; _ck(_v, 29, 0, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_13 = !_co.isHousehold; _ck(_v, 41, 0, currVal_13); var currVal_14 = _co.EmployeeType.FullTime; _ck(_v, 43, 0, currVal_14); var currVal_15 = _co.EmployeeType.PartTime; _ck(_v, 46, 0, currVal_15); var currVal_16 = !_co.isHousehold; _ck(_v, 49, 0, currVal_16); var currVal_17 = "Hire Date"; var currVal_18 = "hireDate"; var currVal_19 = "true"; _ck(_v, 52, 0, currVal_17, currVal_18, currVal_19); var currVal_20 = (_co.workAddresses.length > 0); _ck(_v, 56, 0, currVal_20); }, null); }
function View_EmployeeEmploymentComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_pipes_address_pipe__WEBPACK_IMPORTED_MODULE_21__["AddressPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { addressModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "standard d-flex flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeEmploymentComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm; _ck(_v, 4, 0, currVal_0); }, null); }
function View_EmployeeEmploymentComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sp-ee-employment", [], null, null, null, View_EmployeeEmploymentComponent_0, RenderType_EmployeeEmploymentComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _employee_employment_component__WEBPACK_IMPORTED_MODULE_22__["EmployeeEmploymentComponent"], [_employee_view_service__WEBPACK_IMPORTED_MODULE_23__["EmployeeViewService"], _core_saver__WEBPACK_IMPORTED_MODULE_24__["SaverFactoryService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmployeeEmploymentComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("sp-ee-employment", _employee_employment_component__WEBPACK_IMPORTED_MODULE_22__["EmployeeEmploymentComponent"], View_EmployeeEmploymentComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/employees/employee/employee-employment/employee-employment.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-employment/employee-employment.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EmployeeEmploymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEmploymentComponent", function() { return EmployeeEmploymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _employees_employee_employee_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @employees/employee/employee-view.service */ "./src/app/employees/employee/employee-view.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");






var EmployeeEmploymentComponent = /** @class */ (function () {
    function EmployeeEmploymentComponent(employeeViewService, saverFactory) {
        this.employeeViewService = employeeViewService;
        this.saverFactory = saverFactory;
        this.addWorkAddressLink = _core__WEBPACK_IMPORTED_MODULE_2__["WellKnownRoutes"].CompanyInfo;
        this.EmployeeStatus = _model__WEBPACK_IMPORTED_MODULE_5__["EmployeeStatus"];
        this.EmployeeType = _model__WEBPACK_IMPORTED_MODULE_5__["EmployeeType"];
        this.subs = new _core__WEBPACK_IMPORTED_MODULE_2__["SubSink"]();
    }
    EmployeeEmploymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.sink = this.employeeViewService.workAddresses$.subscribe(function (addresses) {
            _this.mainWorkAddress = addresses.find(function (addr) { return addr.isMain; });
            _this.workAddresses = addresses;
        });
        this.employeeViewService.currentEmployeeSnapshot$.subscribe(function (ee) {
            _this.vm = ee;
            var workAddressId = ee.workAddressId;
            if (!_this.mainWorkAddress) {
                // no main Company address (which should be an error)? Clear EE work address
                ee.workAddressId = null;
            }
            else if (!ee.workAddressId) {
                // no EE work address, initialize to the main work address
                ee.workAddressId = _this.mainWorkAddress.id;
            }
            else if (!_this.workAddresses.find(function (addr) { return addr.id === ee.workAddressId; })) {
                // old location no longer valid; reset to main location
                ee.workAddressId = _this.mainWorkAddress.id;
            }
        });
        this.employeeViewService.currentCompany$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (company) { return _this.isHousehold = company.isHousehold; });
    };
    EmployeeEmploymentComponent.prototype.addWorkAddress = function () {
        var _this = this;
        this.addressModal.addOrEditAddress({ isHome: false }).subscribe(function (addr) {
            if (addr) {
                _this.vm.workAddressId = addr.id;
            }
        });
    };
    EmployeeEmploymentComponent.prototype.canLeaveAfterSave = function () {
        return this.save();
    };
    EmployeeEmploymentComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    EmployeeEmploymentComponent.prototype.save = function () {
        return this.saverFactory.create()
            .add(this.employeeViewService.saveEmployee(this.vm))
            .go();
    };
    return EmployeeEmploymentComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee-payment/employee-payment-account-vm.ts":
/*!************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-payment/employee-payment-account-vm.ts ***!
  \************************************************************************************/
/*! exports provided: EmployeePaymentAccountVm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePaymentAccountVm", function() { return EmployeePaymentAccountVm; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");

/**
 * ViewModel for an individual EE payment account,
 * one of up to three in the EmployeePaymentMethodVm.
 * A payment account specifies how the receives some (or all) of the period pay.
 * An EE may have receive pay in up to three separate "accounts"
 */
var EmployeePaymentAccountVm = /** @class */ (function () {
    function EmployeePaymentAccountVm(
    /** Account name or name on printed check */
    accountName, 
    /** Account bank account number */
    accountNumber, 
    /** Account bank routing number */
    accountRn, 
    /** Account bank name associated with the bank RN */
    accountBankName, 
    /** Account type */
    accountType, 
    /** Share of payment */
    value, 
    /** Potential types allowed for the account (changed dynamically on UI). Not persisted */
    accountTypes) {
        if (accountName === void 0) { accountName = ''; }
        if (accountNumber === void 0) { accountNumber = ''; }
        if (accountRn === void 0) { accountRn = ''; }
        if (accountBankName === void 0) { accountBankName = ''; }
        if (accountType === void 0) { accountType = _model__WEBPACK_IMPORTED_MODULE_0__["PaymentAccountType"].Checking; }
        if (value === void 0) { value = 0; }
        if (accountTypes === void 0) { accountTypes = []; }
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.accountRn = accountRn;
        this.accountBankName = accountBankName;
        this.accountType = accountType;
        this.value = value;
        this.accountTypes = accountTypes;
        /**
         * Displayed bank name for the bank routing number.
         * Should parallel accountBankName but could contain error message instead.
         */
        this.bankNameVm = '';
        this.bankNameVm = accountBankName;
    }
    Object.defineProperty(EmployeePaymentAccountVm.prototype, "accountTypeDisplayName", {
        get: function () {
            var type = this.accountType;
            var result = type
                ? type === _model__WEBPACK_IMPORTED_MODULE_0__["PaymentAccountType"].PrintedCheck ? type : type + ' account'
                : 'account';
            return result.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeePaymentAccountVm.prototype, "isPrintedCheck", {
        get: function () {
            return this.accountType === _model__WEBPACK_IMPORTED_MODULE_0__["PaymentAccountType"].PrintedCheck;
        },
        enumerable: true,
        configurable: true
    });
    return EmployeePaymentAccountVm;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee-payment/employee-payment-accounts/employee-payment-account-view.service.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-payment/employee-payment-accounts/employee-payment-account-view.service.ts ***!
  \************************************************************************************************************************/
/*! exports provided: EmployeePaymentAccountViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePaymentAccountViewService", function() { return EmployeePaymentAccountViewService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @entity */ "./src/app/store/entity/index.ts");
/* harmony import */ var _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee-payment-method-vm */ "./src/app/employees/employee/employee-payment/employee-payment-method-vm.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_entity_entity_services_employee_payment_method_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/entity/entity-services/employee-payment-method.service */ "./src/app/store/entity/entity-services/employee-payment-method.service.ts");
/* harmony import */ var _store_entity_entity_services_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/entity/entity-services/employee.service */ "./src/app/store/entity/entity-services/employee.service.ts");








var EmployeePaymentAccountViewService = /** @class */ (function () {
    function EmployeePaymentAccountViewService(employeePaymentMethodService, employeeService) {
        this.employeePaymentMethodService = employeePaymentMethodService;
        this.employeeService = employeeService;
    }
    /**  Return terminating observable of payment record for the employee with the given id */
    EmployeePaymentAccountViewService.prototype.getEmployeePaymentMethodByEeId$ = function (eeId) {
        return this.employeeService.entityMap$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (eeMap) {
            var ee = eeMap[eeId];
            if (!ee) {
                throw new Error("Employee " + eeId + " not found in cache");
            }
            return ee;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.employeePaymentMethodService.entities$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var ee = _a[0], payments = _a[1];
            payments = payments.filter(function (p) { return p.employeeId === ee.id; });
            // there should be exactly one payments for the given employee
            if (payments.length > 1) {
                throw new Error("Employee " + ee.id + " has more than one EmployeePaymentMethod");
            }
            if (payments.length === 0) {
                throw new Error("Employee " + ee.id + " has no EmployeePaymentMethod");
            }
            var payment = payments[0];
            return { ee: ee, payment: payment };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    };
    /**  Return terminating observable of ViewModel for the EE payment method record of the employee with the given id */
    EmployeePaymentAccountViewService.prototype.getEmployeePaymentMethodVm$ = function (eeId) {
        return this.getEmployeePaymentMethodByEeId$(eeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var ee = _a.ee, payment = _a.payment;
            return ee && payment ? new _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_4__["EmployeePaymentMethodVm"](ee, payment) : null;
        }));
    };
    /**
     * Save the EmployeePaymentMethod for the given EmployeePaymentMethod ViewModel
     * @returns Observable of save operation emitting the saved EmployeePaymentMethod
     */
    EmployeePaymentAccountViewService.prototype.save = function (vm) {
        var _this = this;
        if (!vm) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }
        else if (!vm.employeeId) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('EmployeePaymentMethod must have an Employee id to save it');
        }
        else {
            return this.getEmployeePaymentMethodByEeId$(vm.employeeId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (_a) {
                var oldPayment = _a.payment;
                var newPayment = vm.toEmployeePaymentMethod();
                if (Object(_core__WEBPACK_IMPORTED_MODULE_2__["areDifferent"])(newPayment, oldPayment)) {
                    if (oldPayment && oldPayment.id) {
                        newPayment.id = oldPayment.id;
                    }
                    return _this.employeePaymentMethodService.upsert(newPayment);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(oldPayment);
                }
            }));
        }
    };
    EmployeePaymentAccountViewService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"]({ factory: function EmployeePaymentAccountViewService_Factory() { return new EmployeePaymentAccountViewService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_store_entity_entity_services_employee_payment_method_service__WEBPACK_IMPORTED_MODULE_6__["EmployeePaymentMethodService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_store_entity_entity_services_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"])); }, token: EmployeePaymentAccountViewService, providedIn: "root" });
    return EmployeePaymentAccountViewService;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee-payment/employee-payment-accounts/employee-payment-accounts.component.ngfactory.js":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-payment/employee-payment-accounts/employee-payment-accounts.component.ngfactory.js ***!
  \********************************************************************************************************************************/
/*! exports provided: RenderType_EmployeePaymentAccountsComponent, View_EmployeePaymentAccountsComponent_0, View_EmployeePaymentAccountsComponent_Host_0, EmployeePaymentAccountsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmployeePaymentAccountsComponent", function() { return RenderType_EmployeePaymentAccountsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeePaymentAccountsComponent_0", function() { return View_EmployeePaymentAccountsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeePaymentAccountsComponent_Host_0", function() { return View_EmployeePaymentAccountsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePaymentAccountsComponentNgFactory", function() { return EmployeePaymentAccountsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/input/input-text.component.ngfactory */ "./src/app/shared/input/input-text.component.ngfactory.js");
/* harmony import */ var _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/input/input-text.component */ "./src/app/shared/input/input-text.component.ts");
/* harmony import */ var _shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/input/input-mask-catalog */ "./src/app/shared/input/input-mask-catalog.ts");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/radio-group/radio-group.component.ngfactory */ "./src/app/shared/radio-group/radio-group.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");
/* harmony import */ var _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/radio-group/radio-button.component.ngfactory */ "./src/app/shared/radio-group/radio-button.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/radio-group/radio-button.component */ "./src/app/shared/radio-group/radio-button.component.ts");
/* harmony import */ var _shared_input_input_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/input/input-select.component.ngfactory */ "./src/app/shared/input/input-select.component.ngfactory.js");
/* harmony import */ var _shared_input_input_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/input/input-select.component */ "./src/app/shared/input/input-select.component.ts");
/* harmony import */ var _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/model.component.ngfactory */ "./src/app/shared/model.component.ngfactory.js");
/* harmony import */ var _employee_payment_accounts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employee-payment-accounts.component */ "./src/app/employees/employee/employee-payment/employee-payment-accounts/employee-payment-accounts.component.ts");
/* harmony import */ var _employee_payment_account_view_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employee-payment-account-view.service */ "./src/app/employees/employee/employee-payment/employee-payment-accounts/employee-payment-account-view.service.ts");
/* harmony import */ var _core_services_bank_routing_number_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../core/services/bank-routing-number.service */ "./src/app/core/services/bank-routing-number.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_EmployeePaymentAccountsComponent = [];
var RenderType_EmployeePaymentAccountsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_EmployeePaymentAccountsComponent, data: { "animation": [{ type: 7, name: "ngIfAnim", definitions: [{ type: 0, name: "*", styles: { type: 6, styles: { height: "*", opacity: 1, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 0, name: "void", styles: { type: 6, styles: { height: "0", opacity: 0, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 1, expr: ":leave", animation: { type: 4, styles: null, timings: "250ms ease-out" }, options: null }, { type: 1, expr: ":enter", animation: { type: 4, styles: null, timings: "250ms ease-in" }, options: null }], options: {} }] } });

function View_EmployeePaymentAccountsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](4, 1)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent.parent.parent.parent, 0), _v.context.$implicit)); _ck(_v, 3, 0, currVal_2); }); }
function View_EmployeePaymentAccountsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "bank-name-overlay"], ["helpText", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.parent.context.$implicit.bankNameVm; _ck(_v, 1, 0, currVal_0); }); }
function View_EmployeePaymentAccountsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [], [[24, "@ngIfAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "sp-input", [["class", "input-small"], ["modelType", "EmployeePaymentAccountVm"], ["name", "routingNumber"], ["propertyName", "accountRn"], ["required", ""]], null, [[null, "onExit"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onExit" === en)) {
        var pd_0 = (_co.routingNumberExit(_v.parent.parent.context.$implicit, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4440064, [["routingNumber", 4]], 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_4__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"]]], { model: [0, "model"], modelType: [1, "modelType"], name: [2, "name"], propertyName: [3, "propertyName"] }, { onExit: "onExit" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 3, 1, null, View_EmployeePaymentAccountsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_1 = _v.parent.parent.context.$implicit; var currVal_2 = "EmployeePaymentAccountVm"; var currVal_3 = "routingNumber"; var currVal_4 = "accountRn"; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_5 = _v.parent.parent.context.$implicit.bankNameVm; _ck(_v, 5, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_EmployeePaymentAccountsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [], [[24, "@ngIfAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "sp-input", [["class", "input-small"], ["disabled", "true"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_4__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"]]], { disabled: [0, "disabled"] }, null)], function (_ck, _v) { var currVal_1 = "true"; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_EmployeePaymentAccountsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [], [[24, "@ngIfAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "sp-input", [["class", "input-small"], ["modelType", "EmployeePaymentAccountVm"], ["name", "accountNumber"], ["propertyName", "accountNumber"], ["required", ""]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_4__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"]]], { model: [0, "model"], modelType: [1, "modelType"], name: [2, "name"], propertyName: [3, "propertyName"] }, null)], function (_ck, _v) { var currVal_1 = _v.parent.parent.context.$implicit; var currVal_2 = "EmployeePaymentAccountVm"; var currVal_3 = "accountNumber"; var currVal_4 = "accountNumber"; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_EmployeePaymentAccountsComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [], [[24, "@ngIfAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "sp-input", [["class", "input-small"], ["disabled", "true"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_4__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"]]], { disabled: [0, "disabled"] }, null)], function (_ck, _v) { var currVal_1 = "true"; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_EmployeePaymentAccountsComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "label", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" Split by ", " "]))], null, function (_ck, _v) { var currVal_0 = (_v.parent.parent.parent.parent.parent.context.ngIf.isPercent ? "%" : "$"); _ck(_v, 1, 0, currVal_0); }); }
function View_EmployeePaymentAccountsComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, "div", [], [[24, "@ngIfAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 8, "sp-radio-group", [["class", "select-indicator-off"], ["name", "splitType"], ["propertyName", "isPercent"]], null, null, null, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_8__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"]]], { name: [0, "name"], propertyName: [1, "propertyName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 2, 2, "sp-radio-button", [["id", "isNotPercent"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, [[4, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_10__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["$"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 2, 2, "sp-radio-button", [["id", "isPercent"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 49152, [[4, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_10__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["%"]))], function (_ck, _v) { var currVal_1 = "splitType"; var currVal_2 = "isPercent"; _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = false; _ck(_v, 5, 0, currVal_3); var currVal_4 = true; _ck(_v, 8, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_EmployeePaymentAccountsComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "label", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Amount"]))], null, null); }
function View_EmployeePaymentAccountsComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "sp-input", [["class", "input-xsmall2"], ["modelType", "EmployeePaymentAccountVm"], ["name", "value"], ["propertyName", "value"], ["required", ""]], null, [[null, "onExit"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onExit" === en)) {
        var pd_0 = (_co.valueChanged(_v.parent.parent.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_4__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"]]], { disabled: [0, "disabled"], model: [1, "model"], modelType: [2, "modelType"], name: [3, "name"], propertyName: [4, "propertyName"], maskType: [5, "maskType"] }, { onExit: "onExit" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLast(_v.parent.parent.parent.context.index); var currVal_1 = _v.parent.parent.parent.context.$implicit; var currVal_2 = "EmployeePaymentAccountVm"; var currVal_3 = "value"; var currVal_4 = "value"; var currVal_5 = (_v.parent.parent.parent.parent.parent.parent.context.ngIf.isPercent ? "percent" : "currency"); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_EmployeePaymentAccountsComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.isLast(_v.parent.parent.context.index) || _v.parent.parent.parent.parent.parent.context.ngIf.isPercent); _ck(_v, 2, 0, currVal_0); }, null); }
function View_EmployeePaymentAccountsComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "span", [["class", "remaining-amount"]], null, null, null, null, null))], null, null); }
function View_EmployeePaymentAccountsComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "remaining-amount label text-uppercase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Remaining Amount"]))], null, null); }
function View_EmployeePaymentAccountsComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = (_v.parent.parent.context.index === 0); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_v.parent.parent.context.index !== 0); _ck(_v, 4, 0, currVal_1); }, null); }
function View_EmployeePaymentAccountsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 39, "div", [["class", "wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "item-counter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 6, "div", [["class", "item-type-account"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "label", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 3, "sp-select", [["classNames", "account-combo"], ["modelType", "EmployeePaymentAccountVm"], ["name", "accountType"], ["propertyName", "accountType"]], null, [[null, "changed"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("changed" === en)) {
        var pd_0 = (_co.accountTypeChanged(_v.parent.context.$implicit, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_input_input_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_InputSelectComponent_0"], _shared_input_input_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_InputSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 114688, null, 0, _shared_input_input_select_component__WEBPACK_IMPORTED_MODULE_12__["InputSelectComponent"], [[2, _shared_model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"]]], { classNames: [0, "classNames"], model: [1, "model"], modelType: [2, "modelType"], name: [3, "name"], propertyName: [4, "propertyName"] }, { changed: "changed" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_EmployeePaymentAccountsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 6, "div", [["class", "item-routing"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "label", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Routing Number"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 6, "div", [["class", "item-account-number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "label", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Account Number"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 4, "div", [["class", "item-allocation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 6, "div", [["class", "item-amount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 3, "div", [["class", "item-clear"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 2, "a", [["class", "btn-clear"], ["title", "Clear Row"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clearAccount(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 1, "i", [["class", "material-icons icon d-inline btn-circle btn-filled-light"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["clear_all"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "account-combo"; var currVal_2 = _v.parent.context.$implicit; var currVal_3 = "EmployeePaymentAccountVm"; var currVal_4 = "accountType"; var currVal_5 = "accountType"; _ck(_v, 7, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _v.parent.context.$implicit.accountTypes; _ck(_v, 9, 0, currVal_6); var currVal_7 = (_v.parent.context.$implicit.accountType !== _co.PaymentAccountType.PrintedCheck); _ck(_v, 14, 0, currVal_7); var currVal_8 = (_v.parent.context.$implicit.accountType === _co.PaymentAccountType.PrintedCheck); _ck(_v, 16, 0, currVal_8); var currVal_9 = (_v.parent.context.$implicit.accountType !== _co.PaymentAccountType.PrintedCheck); _ck(_v, 21, 0, currVal_9); var currVal_10 = (_v.parent.context.$implicit.accountType === _co.PaymentAccountType.PrintedCheck); _ck(_v, 23, 0, currVal_10); var currVal_11 = _co.showAllocationCell; _ck(_v, 26, 0, currVal_11); var currVal_12 = _co.showAllocationCell; _ck(_v, 28, 0, currVal_12); var currVal_13 = _co.showAmountCell; _ck(_v, 31, 0, currVal_13); var currVal_14 = (_co.showAmountCell && !_co.isRemainingAmount(_v.parent.context.index)); _ck(_v, 33, 0, currVal_14); var currVal_15 = (_co.showAmountCell && _co.isRemainingAmount(_v.parent.context.index)); _ck(_v, 35, 0, currVal_15); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_v.parent.parent.parent.parent.context.ngIf.accountCount === _co.PaymentAccountCount.OneAccount) ? "" : (_v.parent.context.index + 1)); _ck(_v, 2, 0, currVal_0); }); }
function View_EmployeePaymentAccountsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.shouldShowAccount(_v.context.index, _v.context.$implicit); _ck(_v, 2, 0, currVal_0); }, null); }
function View_EmployeePaymentAccountsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 15, "div", [], [[24, "@ngIfAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 11, "sp-radio-group", [["name", "paymentSplit1"], ["propertyName", "accountCount"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.setValidAccountTypes() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_8__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"]]], { name: [0, "name"], propertyName: [1, "propertyName"] }, { change: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 2, 2, "sp-radio-button", [], [[2, "display-none", null]], null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, [[3, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_10__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["One Account "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 49152, [[3, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_10__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Two Accounts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 49152, [[3, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_10__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Three Accounts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "div", [["class", "liquid-design"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "paymentSplit1"; var currVal_2 = "accountCount"; _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_4 = _co.PaymentAccountCount.OneAccount; _ck(_v, 5, 0, currVal_4); var currVal_5 = _co.PaymentAccountCount.TwoAccounts; _ck(_v, 8, 0, currVal_5); var currVal_6 = _co.PaymentAccountCount.ThreeAccounts; _ck(_v, 11, 0, currVal_6); var currVal_7 = _co.accounts; _ck(_v, 15, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_3 = (_v.parent.parent.context.ngIf.paymentMethod === _co.PaymentMethod.Both); _ck(_v, 4, 0, currVal_3); }); }
function View_EmployeePaymentAccountsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], [[24, "@ngIfAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentAccountsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_v.parent.context.ngIf.paymentMethod !== _co.PaymentMethod.PrintedCheck); _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_EmployeePaymentAccountsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 18, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 17, "sp-model", [["modelType", "EmployeePaymentMethodVm"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 573440, [[1, 4]], 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["How do you want to pay ", "?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 16777216, null, 0, 11, "sp-radio-group", [["label", " "], ["name", "paymentMethod"], ["propertyName", "paymentMethod"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.setPaymentMethod() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_8__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, { change: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_10__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Printed Check"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_10__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Direct Deposit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_10__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Both"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_EmployeePaymentAccountsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.ngIf; var currVal_1 = "EmployeePaymentMethodVm"; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = " "; var currVal_4 = "paymentMethod"; var currVal_5 = "paymentMethod"; _ck(_v, 6, 0, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.PaymentMethod.PrintedCheck; _ck(_v, 9, 0, currVal_6); var currVal_7 = _co.PaymentMethod.DepositOrPaycard; _ck(_v, 12, 0, currVal_7); var currVal_8 = _co.PaymentMethod.Both; _ck(_v, 15, 0, currVal_8); var currVal_9 = _v.context.ngIf.paymentMethod; _ck(_v, 18, 0, currVal_9); }, function (_ck, _v) { var currVal_2 = _v.context.ngIf.employeeName; _ck(_v, 4, 0, currVal_2); }); }
function View_EmployeePaymentAccountsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { modelComponent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_EmployeePaymentAccountsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).transform(_co.vm$)); _ck(_v, 3, 0, currVal_0); }, null); }
function View_EmployeePaymentAccountsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-ee-payment-accounts", [], null, null, null, View_EmployeePaymentAccountsComponent_0, RenderType_EmployeePaymentAccountsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _employee_payment_accounts_component__WEBPACK_IMPORTED_MODULE_14__["EmployeePaymentAccountsComponent"], [_employee_payment_account_view_service__WEBPACK_IMPORTED_MODULE_15__["EmployeePaymentAccountViewService"], [2, _core_services_bank_routing_number_service__WEBPACK_IMPORTED_MODULE_16__["BankRoutingNumberService"]]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmployeePaymentAccountsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-ee-payment-accounts", _employee_payment_accounts_component__WEBPACK_IMPORTED_MODULE_14__["EmployeePaymentAccountsComponent"], View_EmployeePaymentAccountsComponent_Host_0, { eeId: "eeId" }, {}, []);



/***/ }),

/***/ "./src/app/employees/employee/employee-payment/employee-payment-accounts/employee-payment-accounts.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-payment/employee-payment-accounts/employee-payment-accounts.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: noopBankRoutingNumberService, EmployeePaymentAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noopBankRoutingNumberService", function() { return noopBankRoutingNumberService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePaymentAccountsComponent", function() { return EmployeePaymentAccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");
/* harmony import */ var _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../employee-payment-method-vm */ "./src/app/employees/employee/employee-payment/employee-payment-method-vm.ts");
/* harmony import */ var _employee_payment_account_view_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-payment-account-view.service */ "./src/app/employees/employee/employee-payment/employee-payment-accounts/employee-payment-account-view.service.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");








/** Instance of a "Do nothing" version for when real BankRoutingNumberService is unavailable */
var noopBankRoutingNumberService = {
    getBankName: function (rn) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ message: '', rn: rn, name: '', code: 0 }); }
};
var EmployeePaymentAccountsComponent = /** @class */ (function () {
    function EmployeePaymentAccountsComponent(viewService, bankRnService) {
        this.viewService = viewService;
        this.bankRnService = bankRnService;
        this.accountTypes2 = [
            _model__WEBPACK_IMPORTED_MODULE_4__["PaymentAccountType"].Checking,
            _model__WEBPACK_IMPORTED_MODULE_4__["PaymentAccountType"].Savings,
        ];
        this.accountTypes3 = this.accountTypes2.concat([
            _model__WEBPACK_IMPORTED_MODULE_4__["PaymentAccountType"].PrintedCheck
        ]);
        this.accountTypes = this.accountTypes3;
        // Enums exposed in the template
        this.PaymentMethod = _model__WEBPACK_IMPORTED_MODULE_4__["PaymentMethod"];
        this.PaymentAccountCount = _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"];
        this.PaymentAccountType = _model__WEBPACK_IMPORTED_MODULE_4__["PaymentAccountType"];
        if (!this.bankRnService) {
            // no op version
            this.bankRnService = noopBankRoutingNumberService;
        }
    }
    EmployeePaymentAccountsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vm$ = this.viewService.getEmployeePaymentMethodVm$(this.eeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (vm) {
            _this.vm = vm;
            _this.setPaymentMethod();
        }));
    };
    Object.defineProperty(EmployeePaymentAccountsComponent.prototype, "accounts", {
        get: function () {
            return this.vm.accounts;
        },
        enumerable: true,
        configurable: true
    });
    EmployeePaymentAccountsComponent.prototype.accountTypeChanged = function (account, newType) {
        account.accountType = newType;
        if (newType !== _model__WEBPACK_IMPORTED_MODULE_4__["PaymentAccountType"].PrintedCheck && !account.bankNameVm) {
            this.getBankName(account);
        }
        if (newType === _model__WEBPACK_IMPORTED_MODULE_4__["PaymentAccountType"].PrintedCheck) {
            // Only the current account can be a printedCheck: set others account to null if PrintedCheck
            this.vm.accounts.forEach(function (acc) {
                if (acc !== account) {
                    setNullIfPrintedCheck(acc);
                }
            });
        }
        this.setValidAccountTypes();
    };
    EmployeePaymentAccountsComponent.prototype.clearAccount = function (account) {
        account.accountType = null;
        account.accountBankName = null;
        account.accountName = null;
        account.accountNumber = null;
        account.accountRn = null;
        account.bankNameVm = null;
        account.value = 0;
        this.vm.recalc();
    };
    EmployeePaymentAccountsComponent.prototype.isPrintedCheck = function (account) {
        return account.accountType === _model__WEBPACK_IMPORTED_MODULE_4__["PaymentAccountType"].PrintedCheck;
    };
    /** True if this is the remaining amount account */
    EmployeePaymentAccountsComponent.prototype.isRemainingAmount = function (index) {
        if (this.vm.isPercent) {
            return false; // when percent split, no account is the remaining amount account
        }
        switch (this.vm.accountCount) {
            case _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].OneAccount: return index === 0;
            case _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].TwoAccounts: return index === 1;
            case _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].ThreeAccounts: return index === 2;
            default: return false;
        }
    };
    EmployeePaymentAccountsComponent.prototype.getBankName = function (account) {
        var _this = this;
        var accountType = account.accountType;
        var accountRn = (account.accountRn || '').trim();
        account.accountBankName = account.bankNameVm = '';
        if (accountType && accountType !== _model__WEBPACK_IMPORTED_MODULE_4__["PaymentAccountType"].PrintedCheck && accountRn) {
            this.bankRnService.getBankName(account.accountRn).subscribe(function (bn) {
                if (bn) {
                    account.accountBankName = account.bankNameVm = bn;
                }
                else {
                    account.bankNameVm = "No bank for " + account.accountRn;
                }
                _this.modelComponent.notifyOfModelChange(); // re-validates and updates the view
            });
        }
    };
    EmployeePaymentAccountsComponent.prototype.isLast = function (ix) {
        return ix === this.vm.lastAccountIx;
    };
    EmployeePaymentAccountsComponent.prototype.routingNumberExit = function (account, exitEvent) {
        if (exitEvent.isChanged && exitEvent.exitType !== 'destroyed') {
            this.getBankName(account);
        }
    };
    EmployeePaymentAccountsComponent.prototype.save = function () {
        return this.viewService.save(this.vm);
    };
    EmployeePaymentAccountsComponent.prototype.setPaymentMethod = function () {
        switch (this.vm.paymentMethod) {
            case _model__WEBPACK_IMPORTED_MODULE_4__["PaymentMethod"].PrintedCheck:
                this.vm.accountCount = _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].OneAccount;
                this.accounts[0].accountType = _model__WEBPACK_IMPORTED_MODULE_4__["PaymentAccountType"].PrintedCheck;
                break;
            case _model__WEBPACK_IMPORTED_MODULE_4__["PaymentMethod"].DepositOrPaycard:
                if (!this.vm.accountCount) {
                    this.vm.accountCount = _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].OneAccount;
                }
                // Ensure no account type is a printed check nor can become a printed check
                this.accounts.forEach(setNullIfPrintedCheck);
                this.accountTypes = this.accountTypes2;
                break;
            case _model__WEBPACK_IMPORTED_MODULE_4__["PaymentMethod"].Both:
                // An account type could be a printed check
                this.accountTypes = this.accountTypes3;
                // Have either two or three accounts
                if (this.vm.accountCount !== _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].ThreeAccounts) {
                    this.vm.accountCount = _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].TwoAccounts;
                }
                this.vm.isPercent = false;
        }
        this.setValidAccountTypes();
    };
    /**
     * Ensure:
     * 1. In Both mode printed-check can only be the last item (legacy limitation) per PKSP-21648
     */
    EmployeePaymentAccountsComponent.prototype.setValidAccountTypes = function () {
        var _this = this;
        var index = 0;
        this.vm.accounts.forEach(function (acc) {
            var last = (_this.vm.accountCount === _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].TwoAccounts && index === 1) ||
                (_this.vm.accountCount === _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].ThreeAccounts && index === 2);
            acc.accountTypes = (_this.vm.paymentMethod === _model__WEBPACK_IMPORTED_MODULE_4__["PaymentMethod"].Both && last)
                ? _this.accountTypes3
                : _this.accountTypes2;
            index++;
        });
    };
    EmployeePaymentAccountsComponent.prototype.shouldShowAccount = function (index, account) {
        switch (index) {
            case 0: return true;
            case 1: return this.vm.accountCount !== _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].OneAccount;
            case 2: return this.vm.accountCount === _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].ThreeAccounts;
            default: return false;
        }
    };
    Object.defineProperty(EmployeePaymentAccountsComponent.prototype, "showAllocationCell", {
        get: function () {
            return !((!this.vm.isPercent && this.vm.accountCount === _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].OneAccount) ||
                (this.vm.accountCount === _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].OneAccount &&
                    this.vm.paymentMethod === _model__WEBPACK_IMPORTED_MODULE_4__["PaymentMethod"].DepositOrPaycard) ||
                (this.vm.paymentMethod === _model__WEBPACK_IMPORTED_MODULE_4__["PaymentMethod"].Both));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeePaymentAccountsComponent.prototype, "showAmountCell", {
        get: function () {
            return this.vm.accountCount !== _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].OneAccount ||
                this.vm.paymentMethod !== _model__WEBPACK_IMPORTED_MODULE_4__["PaymentMethod"].DepositOrPaycard;
        },
        enumerable: true,
        configurable: true
    });
    EmployeePaymentAccountsComponent.prototype.splitValueChanged = function (account) {
        this.vm.recalc();
    };
    EmployeePaymentAccountsComponent.prototype.valueChanged = function (account) {
        if (this.vm.isPercent && this.vm.accountCount !== _employee_payment_method_vm__WEBPACK_IMPORTED_MODULE_5__["ActiveAccounts"].OneAccount) {
            this.vm.recalc();
        }
    };
    return EmployeePaymentAccountsComponent;
}());

function setNullIfPrintedCheck(account) {
    if (account.accountType === _model__WEBPACK_IMPORTED_MODULE_4__["PaymentAccountType"].PrintedCheck) {
        account.accountType = null;
    }
}


/***/ }),

/***/ "./src/app/employees/employee/employee-payment/employee-payment-method-vm.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/employees/employee/employee-payment/employee-payment-method-vm.ts ***!
  \***********************************************************************************/
/*! exports provided: ActiveAccounts, EmployeePaymentMethodVm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveAccounts", function() { return ActiveAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePaymentMethodVm", function() { return EmployeePaymentMethodVm; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");
/* harmony import */ var _employee_payment_account_vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-payment-account-vm */ "./src/app/employees/employee/employee-payment/employee-payment-account-vm.ts");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils */ "./src/app/core/utils/index.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



/** EE pay is split among one, two, or three active accounts */
var ActiveAccounts;
(function (ActiveAccounts) {
    ActiveAccounts["OneAccount"] = "one-account";
    ActiveAccounts["TwoAccounts"] = "two-accounts";
    ActiveAccounts["ThreeAccounts"] = "three-accounts";
})(ActiveAccounts || (ActiveAccounts = {}));
/**
 * ViewModel for an EE's payment method.
 * The payment method contains 1-3 Employee Payment Accounts that
 * specify how the EE's pay should be distributed into 1-3 payment accounts.
 */
var EmployeePaymentMethodVm = /** @class */ (function () {
    function EmployeePaymentMethodVm(ee, eePay) {
        var _this = this;
        this.ee = ee;
        this.companyId = ee.companyId;
        this.employeeId = ee.id;
        this.employeeName = Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__["getFullName"])(ee) || '';
        this.id = eePay.id;
        this.paymentMethod = eePay.paymentMethod;
        // tslint:disable-next-line:prefer-const
        var split1IsActive = eePay.split1IsActive, split2IsActive = eePay.split2IsActive, strategy = eePay.strategy;
        if (strategy === _model__WEBPACK_IMPORTED_MODULE_0__["PaymentStrategy"].SinglePayment) {
            this._accountCount = ActiveAccounts.OneAccount;
            split1IsActive = false;
            split2IsActive = false;
            // Payment method must be either printed check or deposit.
            // Can't be both which implies a split
            this.paymentMethod = eePay.defaultAccountType === _model__WEBPACK_IMPORTED_MODULE_0__["PaymentAccountType"].PrintedCheck
                ? _model__WEBPACK_IMPORTED_MODULE_0__["PaymentMethod"].PrintedCheck : _model__WEBPACK_IMPORTED_MODULE_0__["PaymentMethod"].DepositOrPaycard;
        }
        else if (split1IsActive) {
            this._accountCount = split2IsActive
                ? ActiveAccounts.ThreeAccounts
                : ActiveAccounts.TwoAccounts;
        }
        // Helper fns
        var getDefault = function () { return new _employee_payment_account_vm__WEBPACK_IMPORTED_MODULE_1__["EmployeePaymentAccountVm"](eePay.defaultAccountName || _this.employeeName, eePay.defaultAccountNumber || '', eePay.defaultAccountRn || '', eePay.defaultAccountBankName || '', eePay.defaultAccountType); };
        var getSplit1 = function () { return new _employee_payment_account_vm__WEBPACK_IMPORTED_MODULE_1__["EmployeePaymentAccountVm"](eePay.split1AccountName || _this.employeeName, eePay.split1AccountNumber || '', eePay.split1AccountRn || '', eePay.split1AccountBankName || '', eePay.split1AccountType, eePay.split1Value); };
        var getSplit2 = function () { return new _employee_payment_account_vm__WEBPACK_IMPORTED_MODULE_1__["EmployeePaymentAccountVm"](eePay.split2AccountName || _this.employeeName, eePay.split2AccountNumber || '', eePay.split2AccountRn || '', eePay.split2AccountBankName || '', eePay.split2AccountType, eePay.split2Value); };
        var makeNew = function () { return new _employee_payment_account_vm__WEBPACK_IMPORTED_MODULE_1__["EmployeePaymentAccountVm"](); };
        // Set the 3 accounts based on the number of active accounts
        switch (this._accountCount) {
            case ActiveAccounts.OneAccount:
                this.accounts = [getDefault(), makeNew(), makeNew()];
                break;
            case ActiveAccounts.TwoAccounts:
                this.accounts = [getSplit1(), getDefault(), makeNew()];
                break;
            case ActiveAccounts.ThreeAccounts:
                this.accounts = [getSplit1(), getSplit2(), getDefault()];
                break;
            default:
                this.accounts = [makeNew(), makeNew(), makeNew()];
        }
        this.setFlagsFromStrategy(strategy);
        this.recalc();
    }
    Object.defineProperty(EmployeePaymentMethodVm.prototype, "accountCount", {
        get: function () {
            return this._accountCount;
        },
        set: function (value) {
            this._accountCount = value || ActiveAccounts.OneAccount;
            if (this._accountCount !== ActiveAccounts.OneAccount && this._isPercent == null) {
                this._isPercent = false; // split by amount by default
            }
            var last = this.lastAccountIx;
            // removed PrintedCheck from unused accounts so it becomes available as a choice
            for (var i = last + 1; i < 3; i++) {
                var acct = this.accounts[i];
                if (acct.isPrintedCheck) {
                    acct.accountType = _model__WEBPACK_IMPORTED_MODULE_0__["PaymentAccountType"].Checking;
                }
            }
            this.recalc();
        },
        enumerable: true,
        configurable: true
    });
    /** Set all account values to zero and recalc */
    EmployeePaymentMethodVm.prototype.clearAccountValues = function () {
        // Clear split values whenever the strategy changes;
        this.accounts.forEach(function (a) { return (a.value = 0); });
        this.recalc();
    };
    Object.defineProperty(EmployeePaymentMethodVm.prototype, "isPercent", {
        get: function () {
            return this._isPercent;
        },
        set: function (value) {
            if (value !== this._isPercent) {
                this._isPercent = value;
                this.clearAccountValues();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeePaymentMethodVm.prototype, "lastAccountIx", {
        /** Index of the last active account in accounts[] */
        get: function () {
            switch (this.accountCount) {
                case ActiveAccounts.OneAccount:
                    return 0;
                case ActiveAccounts.TwoAccounts:
                    return 1;
                case ActiveAccounts.ThreeAccounts:
                    return 2;
                default:
                    return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Recalculate the EmployeePaymentMethodVm accounts based on changes to that VM.
     * @returns The updated (mutated) EmployeePaymentMethodVm
     */
    EmployeePaymentMethodVm.prototype.recalc = function () {
        var _this = this;
        var _a = this, accounts = _a.accounts, accountCount = _a.accountCount, paymentMethod = _a.paymentMethod;
        // Reset the strategy based on current flags
        if (accountCount == null || paymentMethod == null) {
            this._strategy = null;
            this._isPercent = undefined;
        }
        else if (paymentMethod === _model__WEBPACK_IMPORTED_MODULE_0__["PaymentMethod"].PrintedCheck) {
            this._strategy = _model__WEBPACK_IMPORTED_MODULE_0__["PaymentStrategy"].SinglePayment;
        }
        else if (accountCount === ActiveAccounts.OneAccount) {
            this._strategy = _model__WEBPACK_IMPORTED_MODULE_0__["PaymentStrategy"].SinglePayment;
        }
        else {
            this._strategy = this.isPercent === true ? _model__WEBPACK_IMPORTED_MODULE_0__["PaymentStrategy"].SplitPercent : _model__WEBPACK_IMPORTED_MODULE_0__["PaymentStrategy"].SplitAmount;
        }
        var last = this.lastAccountIx;
        var remaining = 100;
        this.accounts.forEach(function (a, ix) {
            if (ix > last) {
                a.value = 0;
            }
            else if (ix === last) {
                a.value = _this.isPercent ? remaining : 0;
            }
            else if (_this.isPercent) {
                a.value = Math.min(remaining, 100, Math.max(0, Math.floor(a.value)));
                remaining -= a.value;
            }
        });
        return this;
    };
    EmployeePaymentMethodVm.prototype.setFlagsFromStrategy = function (strategy) {
        this._strategy = strategy;
        if (strategy == null) {
            this._isPercent = undefined;
        }
        else if (strategy === _model__WEBPACK_IMPORTED_MODULE_0__["PaymentStrategy"].SinglePayment) {
            this._accountCount = ActiveAccounts.OneAccount;
        }
        else {
            this._isPercent = strategy === _model__WEBPACK_IMPORTED_MODULE_0__["PaymentStrategy"].SplitPercent;
        }
    };
    Object.defineProperty(EmployeePaymentMethodVm.prototype, "strategy", {
        get: function () {
            if (this.accountCount === ActiveAccounts.OneAccount) {
                return _model__WEBPACK_IMPORTED_MODULE_0__["PaymentStrategy"].SinglePayment;
            }
            else if (this.isPercent) {
                return _model__WEBPACK_IMPORTED_MODULE_0__["PaymentStrategy"].SplitPercent;
            }
            else {
                return _model__WEBPACK_IMPORTED_MODULE_0__["PaymentStrategy"].SplitAmount;
            }
        },
        set: function (strategy) {
            if (strategy !== this._strategy) {
                this.setFlagsFromStrategy(strategy);
                this.clearAccountValues();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Convert this EmployeePaymentMethodVm to an EmployeePaymentMethod record (internal)
     * "Normalizes" when split1 and/or split2 are inactive.
     */
    EmployeePaymentMethodVm.prototype.toEmployeePaymentMethod = function () {
        this.recalc(); // to ensure VM is "clean";
        var payment = __assign({}, new _model__WEBPACK_IMPORTED_MODULE_0__["EmployeePaymentMethod"](this.id, this.companyId), { employeeId: this.employeeId, strategy: this.strategy, paymentMethod: this.paymentMethod });
        var last = this.lastAccountIx;
        // start with the "default", balance account which is the last one
        var acct = this.accounts[last];
        payment.defaultAccountName = acct.accountName;
        payment.defaultAccountType = acct.accountType;
        if (acct.accountType !== _model__WEBPACK_IMPORTED_MODULE_0__["PaymentAccountType"].PrintedCheck) {
            payment.defaultAccountBankName = acct.accountBankName;
            payment.defaultAccountNumber = acct.accountNumber;
            payment.defaultAccountRn = acct.accountRn;
        }
        if (last > 0) {
            // 1st account is split1
            acct = this.accounts[0];
            payment.split1IsActive = true;
            payment.split1AccountName = acct.accountName;
            payment.split1AccountType = acct.accountType;
            payment.split1Value = acct.value;
            if (acct.accountType !== _model__WEBPACK_IMPORTED_MODULE_0__["PaymentAccountType"].PrintedCheck) {
                payment.split1AccountBankName = acct.accountBankName,
                    payment.split1AccountNumber = acct.accountNumber;
                payment.split1AccountRn = acct.accountRn;
            }
        }
        if (last > 1) {
            // 2nd account is split2
            acct = this.accounts[1];
            payment.split2IsActive = true;
            payment.split2AccountName = acct.accountName;
            payment.split2AccountType = acct.accountType;
            payment.split2Value = acct.value;
            if (acct.accountType !== _model__WEBPACK_IMPORTED_MODULE_0__["PaymentAccountType"].PrintedCheck) {
                payment.split2AccountBankName = acct.accountBankName,
                    payment.split2AccountNumber = acct.accountNumber;
                payment.split2AccountRn = acct.accountRn;
            }
        }
        return payment;
    };
    return EmployeePaymentMethodVm;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee-payment/employee-payment/employee-payment-earnings-list.component.ngfactory.js":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-payment/employee-payment/employee-payment-earnings-list.component.ngfactory.js ***!
  \****************************************************************************************************************************/
/*! exports provided: RenderType_EmployeePaymentEarningsListComponent, View_EmployeePaymentEarningsListComponent_0, View_EmployeePaymentEarningsListComponent_Host_0, EmployeePaymentEarningsListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmployeePaymentEarningsListComponent", function() { return RenderType_EmployeePaymentEarningsListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeePaymentEarningsListComponent_0", function() { return View_EmployeePaymentEarningsListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeePaymentEarningsListComponent_Host_0", function() { return View_EmployeePaymentEarningsListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePaymentEarningsListComponentNgFactory", function() { return EmployeePaymentEarningsListComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_payment_earnings_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-payment-earnings-list.component */ "./src/app/employees/employee/employee-payment/employee-payment/employee-payment-earnings-list.component.ts");
/* harmony import */ var _store_entity_entity_services_company_earning_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/entity/entity-services/company-earning.service */ "./src/app/store/entity/entity-services/company-earning.service.ts");
/* harmony import */ var _store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/entity/entity-services/company.service */ "./src/app/store/entity/entity-services/company.service.ts");
/* harmony import */ var _store_entity_entity_services_earning_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/entity/entity-services/earning.service */ "./src/app/store/entity/entity-services/earning.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_EmployeePaymentEarningsListComponent = [".earningUL[_ngcontent-%COMP%] {\n    list-style: none;\n    padding-left: 0;\n    margin-top: 20px;\n    margin-bottom: 30px;\n    display: block;\n    overflow: hidden;\n  }\n\n  .earningLI[_ngcontent-%COMP%] {\n    float: left;\n    width: 25%;\n  }"];
var RenderType_EmployeePaymentEarningsListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_EmployeePaymentEarningsListComponent, data: {} });

function View_EmployeePaymentEarningsListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "li", [["class", "earningLI"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.description; _ck(_v, 1, 0, currVal_0); }); }
function View_EmployeePaymentEarningsListComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "li", [["class", "earningLI"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.description; _ck(_v, 1, 0, currVal_0); }); }
function View_EmployeePaymentEarningsListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 18, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Here are some common earnings set up to save you time."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 6, "ul", [["class", "earningUL"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_EmployeePaymentEarningsListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_EmployeePaymentEarningsListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 8, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Need additional earnings? "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 6, "a", [["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](14, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Go to Earnings Setup"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).transform(_co.vm.defaultEarnings$)); _ck(_v, 5, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).transform(_co.vm.additionalEarnings$)); _ck(_v, 8, 0, currVal_1); var currVal_4 = _ck(_v, 14, 0, "/employees/earnings"); _ck(_v, 13, 0, currVal_4); var currVal_5 = "active"; _ck(_v, 15, 0, currVal_5); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).href; _ck(_v, 12, 0, currVal_2, currVal_3); }); }
function View_EmployeePaymentEarningsListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_EmployeePaymentEarningsListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform(((_co.vm == null) ? null : _co.vm.displayEarnings$))); _ck(_v, 1, 0, currVal_0); }, null); }
function View_EmployeePaymentEarningsListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-payment-earnings-list", [], null, null, null, View_EmployeePaymentEarningsListComponent_0, RenderType_EmployeePaymentEarningsListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _employee_payment_earnings_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeePaymentEarningsListComponent"], [_store_entity_entity_services_company_earning_service__WEBPACK_IMPORTED_MODULE_4__["CompanyEarningService"], _store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"], _store_entity_entity_services_earning_service__WEBPACK_IMPORTED_MODULE_6__["EarningService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmployeePaymentEarningsListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-payment-earnings-list", _employee_payment_earnings_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeePaymentEarningsListComponent"], View_EmployeePaymentEarningsListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/employees/employee/employee-payment/employee-payment/employee-payment-earnings-list.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-payment/employee-payment/employee-payment-earnings-list.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: EarningVm, EmployeePaymentEarningsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningVm", function() { return EarningVm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePaymentEarningsListComponent", function() { return EmployeePaymentEarningsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @entity */ "./src/app/store/entity/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");





/** ViewModel for display of an individual Earning */
var EarningVm = /** @class */ (function () {
    function EarningVm() {
    }
    return EarningVm;
}());

var EmployeePaymentEarningsListComponent = /** @class */ (function () {
    function EmployeePaymentEarningsListComponent(companyEarningsService, companyService, earningService) {
        this.companyEarningsService = companyEarningsService;
        this.companyService = companyService;
        this.earningService = earningService;
    }
    EmployeePaymentEarningsListComponent.prototype.ngOnInit = function () {
        var displayEarnings$ = this.companyService.currentCompany$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (c) { return c.hasPriorPayroll; }));
        var defaultEarnings$ = this.earningService.earnings$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (defaultEarning) {
            return defaultEarning
                .filter(function (q) { return q.earningsCategory.toUpperCase() === _model__WEBPACK_IMPORTED_MODULE_4__["EarningsCategory"].DEFAULTOTHERCOMPENSATION; })
                .map(function (earning) {
                return {
                    code: earning.code,
                    name: earning.name,
                    description: earning.description,
                    typeName: earning.earningTypeName
                };
            });
        }));
        var additionalEarnings$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.companyEarningsService.companyEarnings$, this.earningService.earnings$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var companyEarning = _a[0], earnings = _a[1];
            return companyEarning
                .filter(function (ce) { return !ce.isRemoved; })
                .map(function (ce) {
                return {
                    code: ce.earningCode,
                    name: ce.name,
                    description: ce.description,
                    typeName: (earnings.find(function (e) { return e.code === ce.earningCode; }) || {}).earningTypeName || ''
                };
            })
                .sort(function (a, b) { return a.typeName.toLowerCase().localeCompare(b.typeName.toLowerCase()); });
        }));
        this.vm = { displayEarnings$: displayEarnings$, defaultEarnings$: defaultEarnings$, additionalEarnings$: additionalEarnings$ };
    };
    return EmployeePaymentEarningsListComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee-payment/employee-payment/employee-payment.component.ngfactory.js":
/*!**************************************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-payment/employee-payment/employee-payment.component.ngfactory.js ***!
  \**************************************************************************************************************/
/*! exports provided: RenderType_EmployeePaymentComponent, View_EmployeePaymentComponent_0, View_EmployeePaymentComponent_Host_0, EmployeePaymentComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmployeePaymentComponent", function() { return RenderType_EmployeePaymentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeePaymentComponent_0", function() { return View_EmployeePaymentComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeePaymentComponent_Host_0", function() { return View_EmployeePaymentComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePaymentComponentNgFactory", function() { return EmployeePaymentComponentNgFactory; });
/* harmony import */ var _employee_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../employee-tab.scss.shim.ngstyle */ "./src/app/employees/employee/employee-tab.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/input/input-text.component.ngfactory */ "./src/app/shared/input/input-text.component.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/input/input-text.component */ "./src/app/shared/input/input-text.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/input/input-mask-catalog */ "./src/app/shared/input/input-mask-catalog.ts");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _employee_payment_accounts_employee_payment_accounts_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../employee-payment-accounts/employee-payment-accounts.component.ngfactory */ "./src/app/employees/employee/employee-payment/employee-payment-accounts/employee-payment-accounts.component.ngfactory.js");
/* harmony import */ var _employee_payment_accounts_employee_payment_accounts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../employee-payment-accounts/employee-payment-accounts.component */ "./src/app/employees/employee/employee-payment/employee-payment-accounts/employee-payment-accounts.component.ts");
/* harmony import */ var _employee_payment_accounts_employee_payment_account_view_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../employee-payment-accounts/employee-payment-account-view.service */ "./src/app/employees/employee/employee-payment/employee-payment-accounts/employee-payment-account-view.service.ts");
/* harmony import */ var _core_services_bank_routing_number_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/bank-routing-number.service */ "./src/app/core/services/bank-routing-number.service.ts");
/* harmony import */ var _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/validation/validate-property.directive */ "./src/app/shared/validation/validate-property.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/model.component.ngfactory */ "./src/app/shared/model.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/radio-group/radio-group.component.ngfactory */ "./src/app/shared/radio-group/radio-group.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");
/* harmony import */ var _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/radio-group/radio-button.component.ngfactory */ "./src/app/shared/radio-group/radio-button.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/radio-group/radio-button.component */ "./src/app/shared/radio-group/radio-button.component.ts");
/* harmony import */ var _employee_payment_earnings_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./employee-payment-earnings-list.component.ngfactory */ "./src/app/employees/employee/employee-payment/employee-payment/employee-payment-earnings-list.component.ngfactory.js");
/* harmony import */ var _employee_payment_earnings_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./employee-payment-earnings-list.component */ "./src/app/employees/employee/employee-payment/employee-payment/employee-payment-earnings-list.component.ts");
/* harmony import */ var _store_entity_entity_services_company_earning_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../store/entity/entity-services/company-earning.service */ "./src/app/store/entity/entity-services/company-earning.service.ts");
/* harmony import */ var _store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../store/entity/entity-services/company.service */ "./src/app/store/entity/entity-services/company.service.ts");
/* harmony import */ var _store_entity_entity_services_earning_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../store/entity/entity-services/earning.service */ "./src/app/store/entity/entity-services/earning.service.ts");
/* harmony import */ var _employee_payment_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./employee-payment.component */ "./src/app/employees/employee/employee-payment/employee-payment/employee-payment.component.ts");
/* harmony import */ var _employee_view_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../employee-view.service */ "./src/app/employees/employee/employee-view.service.ts");
/* harmony import */ var _core_saver__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../core/saver */ "./src/app/core/saver.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



























var styles_EmployeePaymentComponent = [_employee_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_EmployeePaymentComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_EmployeePaymentComponent, data: { "animation": [{ type: 7, name: "ngIfAnim", definitions: [{ type: 0, name: "*", styles: { type: 6, styles: { height: "*", opacity: 1, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 0, name: "void", styles: { type: 6, styles: { height: "0", opacity: 0, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 1, expr: ":leave", animation: { type: 4, styles: null, timings: "250ms ease-out" }, options: null }, { type: 1, expr: ":enter", animation: { type: 4, styles: null, timings: "250ms ease-in" }, options: null }], options: {} }] } });

function View_EmployeePaymentComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "sp-input", [["label", "Pay Rate"], ["name", "payRate"], ["placeholder", "0.00"], ["propertyName", "payRate"]], [[24, "@ngIfAnim", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.payRateChanged() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "input-small": 0, "input-medium": 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_6__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_7__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], placeholder: [2, "placeholder"], propertyName: [3, "propertyName"], maskType: [4, "maskType"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 3, 0, (((_co.vm.payType === "hourly") || (_co.vm.payType === "unit")) || (_co.vm.payType === "mile")), (_co.vm.payType === "salary")); _ck(_v, 2, 0, currVal_1); var currVal_2 = "Pay Rate"; var currVal_3 = "payRate"; var currVal_4 = "0.00"; var currVal_5 = "payRate"; var currVal_6 = _co.getMaskType(); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_EmployeePaymentComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [], [[24, "@ngIfAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Other Compensation (Optional)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "sp-input", [["class", "input-small"], ["label", "Overtime Hourly Rate (Optional)"], ["maskType", "currency_per_hour"], ["name", "overtime"], ["placeholder", "0.00"], ["propertyName", "overtimeRate"], ["required", ""]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_6__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_7__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], placeholder: [2, "placeholder"], propertyName: [3, "propertyName"], maskType: [4, "maskType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 1, 1, "p", [["class", "input-help-text"], ["helpTextAbove", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["The overtime rate is generally 1 \u00BD times the regular hourly rate. Check your local laws for more information."]))], function (_ck, _v) { var currVal_1 = "Overtime Hourly Rate (Optional)"; var currVal_2 = "overtime"; var currVal_3 = "0.00"; var currVal_4 = "overtimeRate"; var currVal_5 = "currency_per_hour"; _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_EmployeePaymentComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sp-ee-payment-accounts", [], null, null, null, _employee_payment_accounts_employee_payment_accounts_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_EmployeePaymentAccountsComponent_0"], _employee_payment_accounts_employee_payment_accounts_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_EmployeePaymentAccountsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[1, 4], ["paymentAccounts", 4]], 0, _employee_payment_accounts_employee_payment_accounts_component__WEBPACK_IMPORTED_MODULE_9__["EmployeePaymentAccountsComponent"], [_employee_payment_accounts_employee_payment_account_view_service__WEBPACK_IMPORTED_MODULE_10__["EmployeePaymentAccountViewService"], [2, _core_services_bank_routing_number_service__WEBPACK_IMPORTED_MODULE_11__["BankRoutingNumberService"]]], { eeId: [0, "eeId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm.id; _ck(_v, 1, 0, currVal_0); }, null); }
function View_EmployeePaymentComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 32, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, [["form", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 737280, null, 0, _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_12__["FormDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 22, "sp-model", [["modelType", "Employee"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 573440, null, 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_7__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Primary Earnings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 16777216, null, 0, 14, "sp-radio-group", [["label", "Pay Rate Type"], ["name", "payType"], ["propertyName", "payType"]], null, null, null, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_16__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_7__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 2, 2, "sp-radio-button", [["id", "hourly"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_18__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Hourly"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 2, 2, "sp-radio-button", [["id", "salary"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_18__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Salary"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 2, 2, "sp-radio-button", [["id", "unit"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_18__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Units"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 2, 2, "sp-radio-button", [["id", "mile"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_18__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Miles"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_EmployeePaymentComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_EmployeePaymentComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "sp-payment-earnings-list", [], null, null, null, _employee_payment_earnings_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_EmployeePaymentEarningsListComponent_0"], _employee_payment_earnings_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_EmployeePaymentEarningsListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, null, 0, _employee_payment_earnings_list_component__WEBPACK_IMPORTED_MODULE_20__["EmployeePaymentEarningsListComponent"], [_store_entity_entity_services_company_earning_service__WEBPACK_IMPORTED_MODULE_21__["CompanyEarningService"], _store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_22__["CompanyService"], _store_entity_entity_services_earning_service__WEBPACK_IMPORTED_MODULE_23__["EarningService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_7 = _co.vm; var currVal_8 = "Employee"; _ck(_v, 7, 0, currVal_7, currVal_8); var currVal_9 = "Pay Rate Type"; var currVal_10 = "payType"; var currVal_11 = "payType"; _ck(_v, 11, 0, currVal_9, currVal_10, currVal_11); var currVal_12 = "hourly"; _ck(_v, 14, 0, currVal_12); var currVal_13 = "salary"; _ck(_v, 17, 0, currVal_13); var currVal_14 = "unit"; _ck(_v, 20, 0, currVal_14); var currVal_15 = "mile"; _ck(_v, 23, 0, currVal_15); var currVal_16 = _co.vm.payType; _ck(_v, 26, 0, currVal_16); var currVal_17 = (_co.vm.payType === "hourly"); _ck(_v, 28, 0, currVal_17); _ck(_v, 30, 0); var currVal_18 = (_co.vm && !_co.vm.isTerminated); _ck(_v, 32, 0, currVal_18); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_EmployeePaymentComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { paymentAccountsComponent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "standard d-flex flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeePaymentComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm; _ck(_v, 3, 0, currVal_0); }, null); }
function View_EmployeePaymentComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sp-ee-payment", [], null, null, null, View_EmployeePaymentComponent_0, RenderType_EmployeePaymentComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _employee_payment_component__WEBPACK_IMPORTED_MODULE_24__["EmployeePaymentComponent"], [_employee_view_service__WEBPACK_IMPORTED_MODULE_25__["EmployeeViewService"], _core_saver__WEBPACK_IMPORTED_MODULE_26__["SaverFactoryService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmployeePaymentComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("sp-ee-payment", _employee_payment_component__WEBPACK_IMPORTED_MODULE_24__["EmployeePaymentComponent"], View_EmployeePaymentComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/employees/employee/employee-payment/employee-payment/employee-payment.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-payment/employee-payment/employee-payment.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EmployeePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePaymentComponent", function() { return EmployeePaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employees_employee_employee_view_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @employees/employee/employee-view.service */ "./src/app/employees/employee/employee-view.service.ts");
/* harmony import */ var _employee_payment_accounts_employee_payment_accounts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee-payment-accounts/employee-payment-accounts.component */ "./src/app/employees/employee/employee-payment/employee-payment-accounts/employee-payment-accounts.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");




var EmployeePaymentComponent = /** @class */ (function () {
    function EmployeePaymentComponent(employeeViewService, saverFactory) {
        this.employeeViewService = employeeViewService;
        this.saverFactory = saverFactory;
    }
    EmployeePaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeViewService.currentEmployeeSnapshot$.subscribe(function (ee) { return _this.vm = ee; });
    };
    EmployeePaymentComponent.prototype.canLeaveAfterSave = function () {
        return this.save();
    };
    EmployeePaymentComponent.prototype.payRateChanged = function () {
        if (this.vm.payType === 'hourly' && this.vm.payRate) {
            this.vm.overtimeRate = this.vm.payRate * 1.5; // Initialize to 1.5 * payrate
        }
    };
    EmployeePaymentComponent.prototype.getMaskType = function () {
        switch (this.vm.payType) {
            case 'hourly':
                return 'currency_per_hour';
            case 'salary':
                return 'currency_per_year';
            case 'unit':
                return 'currency_per_unit';
            case 'mile':
                return 'currency_per_mile';
            default:
                return 'currency_per_year';
        }
    };
    EmployeePaymentComponent.prototype.save = function () {
        return this.saverFactory.create()
            .add(this.employeeViewService.saveEmployee(this.vm))
            .add(this.paymentAccountsComponent ? this.paymentAccountsComponent.save() : null)
            .go();
    };
    return EmployeePaymentComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee-personal/employee-personal.component.ngfactory.js":
/*!***********************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-personal/employee-personal.component.ngfactory.js ***!
  \***********************************************************************************************/
/*! exports provided: RenderType_EmployeePersonalComponent, View_EmployeePersonalComponent_0, View_EmployeePersonalComponent_Host_0, EmployeePersonalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmployeePersonalComponent", function() { return RenderType_EmployeePersonalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeePersonalComponent_0", function() { return View_EmployeePersonalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeePersonalComponent_Host_0", function() { return View_EmployeePersonalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePersonalComponentNgFactory", function() { return EmployeePersonalComponentNgFactory; });
/* harmony import */ var _employee_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../employee-tab.scss.shim.ngstyle */ "./src/app/employees/employee/employee-tab.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/radio-group/radio-button.component.ngfactory */ "./src/app/shared/radio-group/radio-button.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/radio-group/radio-button.component */ "./src/app/shared/radio-group/radio-button.component.ts");
/* harmony import */ var _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/input/input-text.component.ngfactory */ "./src/app/shared/input/input-text.component.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/input/input-text.component */ "./src/app/shared/input/input-text.component.ts");
/* harmony import */ var _shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/input/input-mask-catalog */ "./src/app/shared/input/input-mask-catalog.ts");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/model.component.ngfactory */ "./src/app/shared/model.component.ngfactory.js");
/* harmony import */ var _shared_address_address_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/address/address-form.component.ngfactory */ "./src/app/shared/address/address-form.component.ngfactory.js");
/* harmony import */ var _shared_address_address_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/address/address-form.component */ "./src/app/shared/address/address-form.component.ts");
/* harmony import */ var _core_services_location_services_address_finder_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/services/location-services/address-finder.service */ "./src/app/core/services/location-services/address-finder.service.ts");
/* harmony import */ var _core_services_tax_services_tax_address_validation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/services/tax-services/tax-address-validation.service */ "./src/app/core/services/tax-services/tax-address-validation.service.ts");
/* harmony import */ var _core_services_location_services_geolocation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/services/location-services/geolocation.service */ "./src/app/core/services/location-services/geolocation.service.ts");
/* harmony import */ var _store_session_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../store/session/session.service */ "./src/app/store/session/session.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_input_input_date_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/input/input-date.component.ngfactory */ "./src/app/shared/input/input-date.component.ngfactory.js");
/* harmony import */ var _shared_input_input_date_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/input/input-date.component */ "./src/app/shared/input/input-date.component.ts");
/* harmony import */ var _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/radio-group/radio-group.component.ngfactory */ "./src/app/shared/radio-group/radio-group.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");
/* harmony import */ var _shared_address_address_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/address/address-modal.component.ngfactory */ "./src/app/shared/address/address-modal.component.ngfactory.js");
/* harmony import */ var _shared_address_address_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/address/address-modal.component */ "./src/app/shared/address/address-modal.component.ts");
/* harmony import */ var _store_entity_entity_services_address_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../store/entity/entity-services/address.service */ "./src/app/store/entity/entity-services/address.service.ts");
/* harmony import */ var _core_services_tax_services_tax_collector_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../core/services/tax-services/tax-collector.service */ "./src/app/core/services/tax-services/tax-collector.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _employee_personal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./employee-personal.component */ "./src/app/employees/employee/employee-personal/employee-personal.component.ts");
/* harmony import */ var _employee_view_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../employee-view.service */ "./src/app/employees/employee/employee-view.service.ts");
/* harmony import */ var _core_saver__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../core/saver */ "./src/app/core/saver.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





























var styles_EmployeePersonalComponent = [_employee_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_EmployeePersonalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_EmployeePersonalComponent, data: { "animation": [{ type: 7, name: "ngIfAnim", definitions: [{ type: 0, name: "*", styles: { type: 6, styles: { height: "*", opacity: 1, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 0, name: "void", styles: { type: 6, styles: { height: "0", opacity: 0, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 1, expr: ":leave", animation: { type: 4, styles: null, timings: "250ms ease-out" }, options: null }, { type: 1, expr: ":enter", animation: { type: 4, styles: null, timings: "250ms ease-in" }, options: null }], options: {} }] } });

function View_EmployeePersonalComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-cta"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.editAddress(_co.vm.home) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Verify"]))], null, null); }
function View_EmployeePersonalComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "sp-radio-button", [], [[8, "id", 0]], null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[3, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_3__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.value; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "sex-", _v.context.$implicit.value, ""); _ck(_v, 0, 0, currVal_0); var currVal_2 = _v.context.$implicit.displayName; _ck(_v, 2, 0, currVal_2); }); }
function View_EmployeePersonalComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [], [[24, "@ngIfAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To contact this employee, we need an email address and phone number."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "input-group input-split"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "sp-input", [["id", "email"], ["label", "Email Address"], ["name", "email"], ["propertyName", "email"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_6__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_6__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_7__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_8__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "sp-input", [["id", "phone"], ["label", "Mobile Phone Number"], ["maskType", "phone"], ["name", "mobilePhoneNumber"], ["propertyName", "phone"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_6__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_6__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_7__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_8__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], maskType: [3, "maskType"] }, null)], function (_ck, _v) { var currVal_1 = "Email Address"; var currVal_2 = "email"; var currVal_3 = "email"; _ck(_v, 6, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = "Mobile Phone Number"; var currVal_5 = "mobilePhoneNumber"; var currVal_6 = "phone"; var currVal_7 = "phone"; _ck(_v, 9, 0, currVal_4, currVal_5, currVal_6, currVal_7); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_EmployeePersonalComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 40, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 39, "sp-model", [["modelType", "Employee"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_8__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 6, "div", [["class", "input-group input-split"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "sp-input", [["id", "firstName"], ["label", "First Name"], ["name", "firstName"], ["placeholder", "First Name"], ["propertyName", "firstName"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_6__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_6__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_7__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_8__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], placeholder: [2, "placeholder"], propertyName: [3, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "sp-input", [["id", "lastName"], ["label", "Last Name"], ["name", "lastName"], ["placeholder", "Last Name"], ["propertyName", "lastName"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_6__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_6__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_7__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_8__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], placeholder: [2, "placeholder"], propertyName: [3, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Home Address"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 1, "sp-address-form", [["class", "input-split"]], null, [[null, "failedValidation"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("failedValidation" === en)) {
        var pd_0 = (_co.editAddress(_co.vm.home) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_address_address_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_AddressFormComponent_0"], _shared_address_address_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_AddressFormComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 245760, [[2, 4]], 0, _shared_address_address_form_component__WEBPACK_IMPORTED_MODULE_11__["AddressFormComponent"], [_core_services_location_services_address_finder_service__WEBPACK_IMPORTED_MODULE_12__["AddressFinderService"], _core_services_tax_services_tax_address_validation_service__WEBPACK_IMPORTED_MODULE_13__["TaxAddressValidationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _core_services_location_services_geolocation_service__WEBPACK_IMPORTED_MODULE_14__["GeolocationService"], _store_session_session_service__WEBPACK_IMPORTED_MODULE_15__["SessionService"]], { address: [0, "address"], inline: [1, "inline"] }, { failedValidation: "failedValidation" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_EmployeePersonalComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 1, "h2", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Other"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 2, "sp-date", [["class", "input-medium"], ["id", "birthDate"], ["label", "Birthdate"], ["propertyName", "birthDate"]], null, null, null, _shared_input_input_date_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_InputDateComponent_0"], _shared_input_input_date_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_InputDateComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_date_component__WEBPACK_IMPORTED_MODULE_18__["InputDateComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 4440064, null, 0, _shared_input_input_date_component__WEBPACK_IMPORTED_MODULE_18__["InputDateComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_8__["ModelComponent"]]], { label: [0, "label"], propertyName: [1, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 16777216, null, 0, 6, "sp-radio-group", [["label", "Sex"], ["name", "sex"], ["propertyName", "sex"], ["tooltip", "true"]], null, null, null, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_20__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_8__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], tooltip: [3, "tooltip"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 1, "span", [["class", "label-tooltip"], ["tooltipText", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" This is required for new hire compliance reporting in most states.\" "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_EmployeePersonalComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 16777216, null, 0, 10, "sp-radio-group", [["id", "canContact"], ["label", "Enable Employee Portal"], ["name", "employeeAccess"], ["propertyName", "canContact"]], null, null, null, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_20__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_8__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 1, 1, "p", [["helpTextAbove", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Grant this employee online access to view pay stubs and W2's, and update personal information."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, 2, 2, "sp-radio-button", [["id", "canContactYes"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 49152, [[4, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_3__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Yes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 2, 2, "sp-radio-button", [["id", "canContactNo"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 49152, [[4, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_3__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["No"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_EmployeePersonalComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm; var currVal_1 = "Employee"; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = "First Name"; var currVal_3 = "firstName"; var currVal_4 = "First Name"; var currVal_5 = "firstName"; _ck(_v, 6, 0, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = "Last Name"; var currVal_7 = "lastName"; var currVal_8 = "Last Name"; var currVal_9 = "lastName"; _ck(_v, 9, 0, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_10 = _co.vm.home; var currVal_11 = true; _ck(_v, 13, 0, currVal_10, currVal_11); var currVal_12 = _co.canVerify(_co.vm.home); _ck(_v, 15, 0, currVal_12); var currVal_13 = "Birthdate"; var currVal_14 = "birthDate"; _ck(_v, 20, 0, currVal_13, currVal_14); var currVal_15 = "Sex"; var currVal_16 = "sex"; var currVal_17 = "sex"; var currVal_18 = "true"; _ck(_v, 22, 0, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_19 = _co.sexes; _ck(_v, 27, 0, currVal_19); var currVal_20 = "Enable Employee Portal"; var currVal_21 = "employeeAccess"; var currVal_22 = "canContact"; _ck(_v, 29, 0, currVal_20, currVal_21, currVal_22); var currVal_23 = true; _ck(_v, 34, 0, currVal_23); var currVal_24 = false; _ck(_v, 37, 0, currVal_24); var currVal_25 = (_co.vm.canContact === true); _ck(_v, 40, 0, currVal_25); }, null); }
function View_EmployeePersonalComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { addressModal: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, { addressForm: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "standard d-flex flex-column"], ["id", "employeePersonalComponent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeePersonalComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "sp-address-modal", [], null, null, null, _shared_address_address_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AddressModalComponent_0"], _shared_address_address_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AddressModalComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, [[1, 4]], 0, _shared_address_address_modal_component__WEBPACK_IMPORTED_MODULE_22__["AddressModalComponent"], [_store_entity_entity_services_address_service__WEBPACK_IMPORTED_MODULE_23__["AddressService"], _core_services_tax_services_tax_collector_service__WEBPACK_IMPORTED_MODULE_24__["TaxCollectorService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModal"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm; _ck(_v, 4, 0, currVal_0); }, null); }
function View_EmployeePersonalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sp-ee-personal", [], null, null, null, View_EmployeePersonalComponent_0, RenderType_EmployeePersonalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _employee_personal_component__WEBPACK_IMPORTED_MODULE_26__["EmployeePersonalComponent"], [_employee_view_service__WEBPACK_IMPORTED_MODULE_27__["EmployeeViewService"], _core_saver__WEBPACK_IMPORTED_MODULE_28__["SaverFactoryService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmployeePersonalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("sp-ee-personal", _employee_personal_component__WEBPACK_IMPORTED_MODULE_26__["EmployeePersonalComponent"], View_EmployeePersonalComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/employees/employee/employee-personal/employee-personal.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-personal/employee-personal.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EmployeePersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePersonalComponent", function() { return EmployeePersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _employees_employee_employee_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @employees/employee/employee-view.service */ "./src/app/employees/employee/employee-view.service.ts");
/* harmony import */ var _model_codes_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @model/codes-enums */ "./src/app/model/codes-enums/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_shared_address_address_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/address/address-form.component */ "./src/app/shared/address/address-form.component.ts");








var EmployeePersonalComponent = /** @class */ (function () {
    function EmployeePersonalComponent(employeeViewService, saverFactory) {
        this.employeeViewService = employeeViewService;
        this.saverFactory = saverFactory;
        this.sexes = _model_codes_enums__WEBPACK_IMPORTED_MODULE_5__["SexCodes"].codes;
        this.isModalOpen = false;
        this.isNew = false;
    }
    EmployeePersonalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeViewService.currentEmployeeWithAddressesSnapshot$.subscribe(function (vm) {
            _this.vm = vm;
            _this.originalAddressCodes = {
                geoCode: vm.home.geoCode,
                schoolDistrictCode: vm.home.schoolDistrictCode,
                psdCode: vm.home.psdCode,
                isVerified: vm.home.isVerified && !!vm.home.geoCode
            };
            _this.isNew = !vm.hasName;
        });
    };
    EmployeePersonalComponent.prototype.editAddress = function (address) {
        var _this = this;
        if (!this.isModalOpen) {
            this.isModalOpen = true;
            this.addressModal.addOrEditAddress(address)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.isModalOpen = false; }))
                .subscribe(function (addr) {
                if (addr) {
                    _this.addressForm.confirmAddress(addr);
                }
            });
        }
    };
    EmployeePersonalComponent.prototype.canLeaveAfterSave = function () {
        return this.vm ? this.save() : true; // can leave immediately if no VM
    };
    EmployeePersonalComponent.prototype.canVerify = function (address) {
        return !this.isModalOpen && !address.isVerified &&
            !this.isModalOpen && address.street1 && address.city && address.state && address.zip;
    };
    EmployeePersonalComponent.prototype.save = function () {
        var saver = this.saverFactory.create();
        if (this.vm.hasName) {
            // can save and leave if the EE has a name
            saver.add(this.employeeViewService.saveEmployeeWithHome(this.vm));
        }
        else if (this.isNew) {
            // No name but it is a new EE; set soft delete (isRemoved:true), save that, and then leave.
            this.vm.isRemoved = true;
            saver.add(this.employeeViewService.saveEmployeeIsRemoved(this.vm));
        }
        else {
            // Blocker: user cleared name of existing EE; don't leave
            saver.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false));
        }
        return saver.go();
    };
    return EmployeePersonalComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee-tab.scss.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/employees/employee/employee-tab.scss.shim.ngstyle.js ***!
  \**********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  padding: inherit; }"];



/***/ }),

/***/ "./src/app/employees/employee/employee-tax/employee-tax.component.ngfactory.js":
/*!*************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-tax/employee-tax.component.ngfactory.js ***!
  \*************************************************************************************/
/*! exports provided: RenderType_EmployeeTaxComponent, View_EmployeeTaxComponent_0, View_EmployeeTaxComponent_Host_0, EmployeeTaxComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmployeeTaxComponent", function() { return RenderType_EmployeeTaxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeTaxComponent_0", function() { return View_EmployeeTaxComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeTaxComponent_Host_0", function() { return View_EmployeeTaxComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeTaxComponentNgFactory", function() { return EmployeeTaxComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/radio-group/radio-group.component.ngfactory */ "./src/app/shared/radio-group/radio-group.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/radio-group/radio-button.component.ngfactory */ "./src/app/shared/radio-group/radio-button.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/radio-group/radio-button.component */ "./src/app/shared/radio-group/radio-button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_input_input_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/input/input-select.component.ngfactory */ "./src/app/shared/input/input-select.component.ngfactory.js");
/* harmony import */ var _shared_input_input_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/input/input-select.component */ "./src/app/shared/input/input-select.component.ts");
/* harmony import */ var _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/input/input-text.component.ngfactory */ "./src/app/shared/input/input-text.component.ngfactory.js");
/* harmony import */ var _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/input/input-text.component */ "./src/app/shared/input/input-text.component.ts");
/* harmony import */ var _shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/input/input-mask-catalog */ "./src/app/shared/input/input-mask-catalog.ts");
/* harmony import */ var _shared_input_control_wrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/input/control-wrap.component.ngfactory */ "./src/app/shared/input/control-wrap.component.ngfactory.js");
/* harmony import */ var _shared_input_control_wrap_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/input/control-wrap.component */ "./src/app/shared/input/control-wrap.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/model.component.ngfactory */ "./src/app/shared/model.component.ngfactory.js");
/* harmony import */ var _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/validation/validate-property.directive */ "./src/app/shared/validation/validate-property.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_tax_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./employee-tax.component */ "./src/app/employees/employee/employee-tax/employee-tax.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var styles_EmployeeTaxComponent = [];
var RenderType_EmployeeTaxComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_EmployeeTaxComponent, data: { "animation": [{ type: 7, name: "ngIfAnim", definitions: [{ type: 0, name: "*", styles: { type: 6, styles: { height: "*", opacity: 1, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 0, name: "void", styles: { type: 6, styles: { height: "0", opacity: 0, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 1, expr: ":leave", animation: { type: 4, styles: null, timings: "250ms ease-out" }, options: null }, { type: 1, expr: ":enter", animation: { type: 4, styles: null, timings: "250ms ease-in" }, options: null }], options: {} }] } });

function View_EmployeeTaxComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "input-help-text"], ["helpText", ""]], [[24, "@ngIfAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Most employees must have taxes withheld. If this person is exempt from withholding, make sure you have a current year W-4 copy on file. "]))], null, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_EmployeeTaxComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 10, "sp-radio-group", [["label", "Tax Exemption Status"], ["name", "isExempt"], ["propertyName", "isExempt"]], null, null, null, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 2, 2, "sp-radio-button", [], [[8, "id", 0]], null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, [[1, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Subject"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 2, 2, "sp-radio-button", [], [[8, "id", 0]], null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 49152, [[1, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Exempt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 3, 1, null, View_EmployeeTaxComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Tax Exemption Status"; var currVal_1 = "isExempt"; var currVal_2 = "isExempt"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = false; _ck(_v, 5, 0, currVal_4); var currVal_6 = true; _ck(_v, 8, 0, currVal_6); var currVal_7 = _co.vm.isExempt; _ck(_v, 11, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_subject"); _ck(_v, 4, 0, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_exempt"); _ck(_v, 7, 0, currVal_5); }); }
function View_EmployeeTaxComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.value; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.value; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.displayName; _ck(_v, 3, 0, currVal_2); }); }
function View_EmployeeTaxComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "sp-select", [["label", "Exemption Reason"], ["name", "exemptReasonCode"], ["propertyName", "exemptReasonCode"]], [[8, "id", 0]], null, null, _shared_input_input_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_InputSelectComponent_0"], _shared_input_input_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_InputSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _shared_input_input_select_component__WEBPACK_IMPORTED_MODULE_9__["InputSelectComponent"], [[2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_EmployeeTaxComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "Exemption Reason"; var currVal_2 = "exemptReasonCode"; var currVal_3 = "exemptReasonCode"; _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.exemptReasons; _ck(_v, 4, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_exemptReason"); _ck(_v, 1, 0, currVal_0); }); }
function View_EmployeeTaxComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.code; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.code; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.description; _ck(_v, 3, 0, currVal_2); }); }
function View_EmployeeTaxComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "sp-select", [["label", "Filing Status"], ["name", "filingStatus"], ["propertyName", "filingStatus"]], [[8, "id", 0]], null, null, _shared_input_input_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_InputSelectComponent_0"], _shared_input_input_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_InputSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _shared_input_input_select_component__WEBPACK_IMPORTED_MODULE_9__["InputSelectComponent"], [[2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_EmployeeTaxComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "Filing Status"; var currVal_2 = "filingStatus"; var currVal_3 = "filingStatus"; _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.vm.behavior.filingStatuses; _ck(_v, 4, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_filingStatus"); _ck(_v, 1, 0, currVal_0); }); }
function View_EmployeeTaxComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "sp-input", [["class", "input-small mr-5"], ["label", "Withholding Allowance"], ["maskType", "whAllowance"], ["name", "withholdingAllowance"], ["propertyName", "withholdingAllowance"], ["type", "number"], ["value", "0"]], [[8, "id", 0]], null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_11__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_11__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_12__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], type: [3, "type"], maskType: [4, "maskType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "sp-input", [["class", "input-medium"], ["label", "Extra Withholding"], ["maskType", "currency"], ["name", "extraWithholding"], ["propertyName", "extraWithholding"], ["type", "number"], ["value", "0"]], [[8, "id", 0]], null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_11__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_11__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_12__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], type: [3, "type"], maskType: [4, "maskType"] }, null)], function (_ck, _v) { var currVal_1 = "Withholding Allowance"; var currVal_2 = "withholdingAllowance"; var currVal_3 = "withholdingAllowance"; var currVal_4 = "number"; var currVal_5 = "whAllowance"; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_7 = "Extra Withholding"; var currVal_8 = "extraWithholding"; var currVal_9 = "extraWithholding"; var currVal_10 = "number"; var currVal_11 = "currency"; _ck(_v, 6, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_allowanceWithholding"); _ck(_v, 1, 0, currVal_0); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_extraWithholding"); _ck(_v, 4, 0, currVal_6); }); }
function View_EmployeeTaxComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 21, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 20, "sp-control", [["label", "Is Low Income Exempt"]], null, null, null, _shared_input_control_wrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ControlWrapComponent_0"], _shared_input_control_wrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ControlWrapComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1097728, null, 1, _shared_input_control_wrap_component__WEBPACK_IMPORTED_MODULE_14__["ControlWrapComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { label: [0, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 2, { input: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 1, 17, "div", [["class", "btn-group btn-group-toggle"], ["controlName", "isLowIncomeExempt"], ["name", "isLowIncomeExempt"], ["ngbRadioGroup", ""], ["role", "group"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.vm.isLowIncomeTaxExempt = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbRadioGroup"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbRadioGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 5, "label", [["class", "btn-outline-primary"], ["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["ɵa"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "input", [["ngbButton", ""], ["type", "radio"]], [[8, "id", 0], [8, "checked", 0], [8, "disabled", 0], [8, "name", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onChange() !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).focused = true) !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).focused = false) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 147456, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["ɵb"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["ɵa"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "span", [["class", "multi-choice-option-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Subject"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 5, "label", [["class", "btn-outline-primary"], ["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["ɵa"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "input", [["ngbButton", ""], ["type", "radio"]], [[8, "id", 0], [8, "checked", 0], [8, "disabled", 0], [8, "name", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).onChange() !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).focused = true) !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).focused = false) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 147456, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["ɵb"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["ɵa"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "span", [["class", "multi-choice-option-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Exempt"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Is Low Income Exempt"; _ck(_v, 2, 0, currVal_0); var currVal_8 = "isLowIncomeExempt"; _ck(_v, 5, 0, currVal_8); var currVal_9 = "isLowIncomeExempt"; var currVal_10 = _co.vm.isLowIncomeTaxExempt; _ck(_v, 7, 0, currVal_9, currVal_10); var currVal_19 = false; _ck(_v, 13, 0, currVal_19); var currVal_28 = true; _ck(_v, 19, 0, currVal_28); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_11 = true; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).active; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).disabled; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).focused; _ck(_v, 10, 0, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_lowIncomeExempt_subject"); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).checked; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).disabled; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).nameAttr; _ck(_v, 12, 0, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_20 = true; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).active; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).disabled; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).focused; _ck(_v, 16, 0, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_lowIncomeExempt_exempt"); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).checked; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).disabled; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).nameAttr; _ck(_v, 18, 0, currVal_24, currVal_25, currVal_26, currVal_27); }); }
function View_EmployeeTaxComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 15, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 14, "sp-model", [["modelType", "TaxBehaviorWrapper<EmployeeTax>"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 573440, null, 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", " Tax"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_EmployeeTaxComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_EmployeeTaxComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_EmployeeTaxComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_EmployeeTaxComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_EmployeeTaxComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm; var currVal_1 = "TaxBehaviorWrapper<EmployeeTax>"; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _co.vm.behavior.hasExemption; _ck(_v, 7, 0, currVal_3); var currVal_4 = (_co.vm.isExempt && _co.vm.behavior.hasExemptionReason); _ck(_v, 9, 0, currVal_4); var currVal_5 = _co.vm.behavior.hasFilingStatus; _ck(_v, 11, 0, currVal_5); var currVal_6 = _co.vm.behavior.hasWithholding; _ck(_v, 13, 0, currVal_6); var currVal_7 = _co.vm.behavior.hasLowIncomeExempt; _ck(_v, 15, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.vm.name; _ck(_v, 5, 0, currVal_2); }); }
function View_EmployeeTaxComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "form", [["novalidate", ""]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 4210688, [["form", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 737280, null, 0, _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_17__["FormDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_8 = _co.vm.behavior.shouldShow; _ck(_v, 7, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_container"); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_EmployeeTaxComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-employee-tax", [], null, null, null, View_EmployeeTaxComponent_0, RenderType_EmployeeTaxComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _employee_tax_component__WEBPACK_IMPORTED_MODULE_19__["EmployeeTaxComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmployeeTaxComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-employee-tax", _employee_tax_component__WEBPACK_IMPORTED_MODULE_19__["EmployeeTaxComponent"], View_EmployeeTaxComponent_Host_0, { vm: "vm" }, {}, []);



/***/ }),

/***/ "./src/app/employees/employee/employee-tax/employee-tax.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/employees/employee/employee-tax/employee-tax.component.ts ***!
  \***************************************************************************/
/*! exports provided: EmployeeTaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeTaxComponent", function() { return EmployeeTaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/model */ "./src/app/model/index.ts");


var EmployeeTaxComponent = /** @class */ (function () {
    function EmployeeTaxComponent() {
        this.namePrefix = null;
    }
    EmployeeTaxComponent.prototype.ngOnInit = function () {
        this.namePrefix = this.vm.mtsTaxCode;
        this.determineRenderState();
        this.determineFormatting();
    };
    EmployeeTaxComponent.prototype.determineRenderState = function () {
        this.vm.behavior.shouldShow = this.vm.behavior.shouldShow || true;
        this.vm.behavior.hasExemption = this.vm.behavior.hasExemption || false;
        this.vm.behavior.hasExemptionReason = this.vm.behavior.hasExemptionReason || false;
        this.vm.behavior.hasEin = false;
        this.vm.behavior.hasRate = this.vm.behavior.hasRate || false;
        this.vm.behavior.hasFilingStatus = this.vm.behavior.hasFilingStatus || false;
        this.vm.behavior.hasLowIncomeExempt = this.vm.behavior.hasLowIncomeExempt || false;
        this.vm.behavior.hasWithholding = this.vm.behavior.hasWithholding || false;
        this.vm.behavior.hasUbi = this.vm.behavior.hasUbi || false;
        this.vm.behavior.hasBusinessStartDate = this.vm.behavior.hasBusinessStartDate || false;
        this.vm.behavior.taxEinFormats = [];
        this.vm.behavior.filingStatuses = this.vm.behavior.filingStatuses || [];
    };
    EmployeeTaxComponent.prototype.determineFormatting = function () {
        this.exemptReasons = _app_model__WEBPACK_IMPORTED_MODULE_1__["TaxExemptionReasonsCodes"].codes;
    };
    return EmployeeTaxComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee-tax/employee-taxes.component.ngfactory.js":
/*!***************************************************************************************!*\
  !*** ./src/app/employees/employee/employee-tax/employee-taxes.component.ngfactory.js ***!
  \***************************************************************************************/
/*! exports provided: RenderType_EmployeeTaxesComponent, View_EmployeeTaxesComponent_0, View_EmployeeTaxesComponent_Host_0, EmployeeTaxesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmployeeTaxesComponent", function() { return RenderType_EmployeeTaxesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeTaxesComponent_0", function() { return View_EmployeeTaxesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeeTaxesComponent_Host_0", function() { return View_EmployeeTaxesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeTaxesComponentNgFactory", function() { return EmployeeTaxesComponentNgFactory; });
/* harmony import */ var _employee_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../employee-tab.scss.shim.ngstyle */ "./src/app/employees/employee/employee-tab.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-tax.component.ngfactory */ "./src/app/employees/employee/employee-tax/employee-tax.component.ngfactory.js");
/* harmony import */ var _employee_tax_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-tax.component */ "./src/app/employees/employee/employee-tax/employee-tax.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/model.component.ngfactory */ "./src/app/shared/model.component.ngfactory.js");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/input/input-text.component.ngfactory */ "./src/app/shared/input/input-text.component.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/input/input-text.component */ "./src/app/shared/input/input-text.component.ts");
/* harmony import */ var _shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/input/input-mask-catalog */ "./src/app/shared/input/input-mask-catalog.ts");
/* harmony import */ var _employee_taxes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employee-taxes.component */ "./src/app/employees/employee/employee-tax/employee-taxes.component.ts");
/* harmony import */ var _employee_view_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../employee-view.service */ "./src/app/employees/employee/employee-view.service.ts");
/* harmony import */ var _core_saver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/saver */ "./src/app/core/saver.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_EmployeeTaxesComponent = [_employee_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_EmployeeTaxesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_EmployeeTaxesComponent, data: { "animation": [{ type: 7, name: "ngIfAnim", definitions: [{ type: 0, name: "*", styles: { type: 6, styles: { height: "*", opacity: 1, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 0, name: "void", styles: { type: 6, styles: { height: "0", opacity: 0, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 1, expr: ":leave", animation: { type: 4, styles: null, timings: "250ms ease-out" }, options: null }, { type: 1, expr: ":enter", animation: { type: 4, styles: null, timings: "250ms ease-in" }, options: null }], options: {} }] } });

function View_EmployeeTaxesComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "my-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sp-employee-tax", [], null, null, null, _employee_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_EmployeeTaxComponent_0"], _employee_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_EmployeeTaxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _employee_tax_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeTaxComponent"], [], { vm: [0, "vm"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_EmployeeTaxesComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "my-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sp-employee-tax", [], null, null, null, _employee_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_EmployeeTaxComponent_0"], _employee_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_EmployeeTaxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _employee_tax_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeTaxComponent"], [], { vm: [0, "vm"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_EmployeeTaxesComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h2", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["State Taxes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getStateTaxes(true); _ck(_v, 5, 0, currVal_0); }, null); }
function View_EmployeeTaxesComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "my-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sp-employee-tax", [], null, null, null, _employee_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_EmployeeTaxComponent_0"], _employee_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_EmployeeTaxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _employee_tax_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeTaxComponent"], [], { vm: [0, "vm"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_EmployeeTaxesComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h2", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Local Taxes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getLocalTaxes(true); _ck(_v, 5, 0, currVal_0); }, null); }
function View_EmployeeTaxesComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Show All Taxes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "i", [["class", "icon material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["expand_more"]))], null, null); }
function View_EmployeeTaxesComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hide Additional Taxes "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "i", [["class", "icon material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["expand_less"]))], null, null); }
function View_EmployeeTaxesComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "my-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sp-employee-tax", [], null, null, null, _employee_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_EmployeeTaxComponent_0"], _employee_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_EmployeeTaxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _employee_tax_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeTaxComponent"], [], { vm: [0, "vm"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_EmployeeTaxesComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "tax-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Other Federal Taxes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getFederalTaxes(false); _ck(_v, 4, 0, currVal_0); }, null); }
function View_EmployeeTaxesComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "my-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sp-employee-tax", [], null, null, null, _employee_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_EmployeeTaxComponent_0"], _employee_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_EmployeeTaxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _employee_tax_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeTaxComponent"], [], { vm: [0, "vm"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_EmployeeTaxesComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "tax-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h2", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Other State Taxes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getStateTaxes(false); _ck(_v, 5, 0, currVal_0); }, null); }
function View_EmployeeTaxesComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "my-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sp-employee-tax", [], null, null, null, _employee_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_EmployeeTaxComponent_0"], _employee_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_EmployeeTaxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _employee_tax_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeTaxComponent"], [], { vm: [0, "vm"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_EmployeeTaxesComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "tax-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h2", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Local Taxes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getLocalTaxes(false); _ck(_v, 5, 0, currVal_0); }, null); }
function View_EmployeeTaxesComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "additional-taxes mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Additional Taxes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hasFederalTaxes(false); _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.hasStateTaxes(false); _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.hasLocalTaxes(false); _ck(_v, 8, 0, currVal_2); }, null); }
function View_EmployeeTaxesComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["For brevity, some taxes are not displayed."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "a", [["class", "icon-right"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.showOtherTaxes = !_co.showOtherTaxes) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](5, { "active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "icon-right"; var currVal_1 = _ck(_v, 5, 0, _co.showOtherTaxes); _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = !_co.showOtherTaxes; _ck(_v, 7, 0, currVal_2); var currVal_3 = _co.showOtherTaxes; _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.showOtherTaxes; _ck(_v, 11, 0, currVal_4); }, null); }
function View_EmployeeTaxesComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please go to the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["personal"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" tab and make sure your address is valid."]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.eeTaxes.employeeLocation.homeLink; _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_EmployeeTaxesComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please go to the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["employment"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" tab and set your work address."]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.eeTaxes.employeeLocation.workLink; _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_EmployeeTaxesComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please go to the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["company info"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" tab and make sure your work address is valid."]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 4, 0, _co.WellKnownRoutes.CompanyInfo); _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_EmployeeTaxesComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To collect other than federal taxes, we need to verify your address."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.eeTaxes.employeeLocation.isHomeAddressVerified; _ck(_v, 4, 0, currVal_0); var currVal_1 = !_co.isWorkAddressSet(); _ck(_v, 6, 0, currVal_1); var currVal_2 = (_co.isWorkAddressSet() && !_co.eeTaxes.employeeLocation.isWorkAddressVerified); _ck(_v, 8, 0, currVal_2); }, null); }
function View_EmployeeTaxesComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Federal Taxes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Refer to your employee's "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "a", [["href", "https://www.irs.gov/pub/irs-pdf/fw4.pdf"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["W4 form."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getFederalTaxes(true); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.hasStateTaxes(true); _ck(_v, 10, 0, currVal_1); var currVal_2 = _co.hasLocalTaxes(true); _ck(_v, 12, 0, currVal_2); var currVal_3 = _co.hasOtherTaxes(); _ck(_v, 14, 0, currVal_3); var currVal_4 = !_co.eeTaxes.addressVerified; _ck(_v, 16, 0, currVal_4); }, null); }
function View_EmployeeTaxesComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["We do not need additional tax information for this contractor."]))], null, null); }
function View_EmployeeTaxesComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["TaxExcluded", 2]], null, 0, null, View_EmployeeTaxesComponent_23))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.eeTaxes.employeeLocation.isTaxesExcluded; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_EmployeeTaxesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "standard d-flex flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "sp-model", [["modelType", "Employee"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_7__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 3, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "sp-input", [["id", "ssn"], ["label", "Social Security Number"], ["maskType", "ssn"], ["name", "ssn"], ["propertyName", "ssn"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_11__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_7__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], maskType: [3, "maskType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.employee; var currVal_1 = "Employee"; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = "Social Security Number"; var currVal_3 = "ssn"; var currVal_4 = "ssn"; var currVal_5 = "ssn"; _ck(_v, 6, 0, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.eeTaxes; _ck(_v, 8, 0, currVal_6); }, null); }
function View_EmployeeTaxesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmployeeTaxesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.employee; _ck(_v, 1, 0, currVal_0); }, null); }
function View_EmployeeTaxesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sp-ee-tax", [], null, null, null, View_EmployeeTaxesComponent_0, RenderType_EmployeeTaxesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _employee_taxes_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeTaxesComponent"], [_employee_view_service__WEBPACK_IMPORTED_MODULE_13__["EmployeeViewService"], _core_saver__WEBPACK_IMPORTED_MODULE_14__["SaverFactoryService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmployeeTaxesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("sp-ee-tax", _employee_taxes_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeTaxesComponent"], View_EmployeeTaxesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/employees/employee/employee-tax/employee-taxes.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/employees/employee/employee-tax/employee-taxes.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EmployeeTaxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeTaxesComponent", function() { return EmployeeTaxesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _core_well_known_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/well-known-routes */ "./src/app/core/well-known-routes.ts");
/* harmony import */ var _employees_employee_employee_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @employees/employee/employee-view.service */ "./src/app/employees/employee/employee-view.service.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");





var EmployeeTaxesComponent = /** @class */ (function () {
    function EmployeeTaxesComponent(employeeViewService, saverFactory) {
        this.employeeViewService = employeeViewService;
        this.saverFactory = saverFactory;
        this.WellKnownRoutes = _core_well_known_routes__WEBPACK_IMPORTED_MODULE_2__["WellKnownRoutes"];
        this.showOtherTaxes = false;
    }
    EmployeeTaxesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeViewService.currentEmployeeWithTaxesSnapshot$.subscribe(function (snapshot) {
            _this.employee = snapshot.ee;
            _this.eeTaxes = snapshot.eeTaxes;
        });
    };
    EmployeeTaxesComponent.prototype.canLeaveAfterSave = function () {
        return this.save();
    };
    EmployeeTaxesComponent.prototype.isWorkAddressSet = function () {
        return this.eeTaxes.employeeLocation.workAddressId != null && this.eeTaxes.employeeLocation.workAddressId !== '';
    };
    EmployeeTaxesComponent.prototype.hasFederalTaxes = function (requireInput) {
        return this.eeTaxes.taxes.some(function (t) {
            return t.taxTypeCode === _model__WEBPACK_IMPORTED_MODULE_4__["TaxTypeCode"].Federal &&
                t.behavior.shouldShow &&
                t.behavior.requireUserInput === requireInput;
        });
    };
    EmployeeTaxesComponent.prototype.hasStateTaxes = function (requireInput) {
        return this.eeTaxes.taxes.some(function (t) {
            return t.taxTypeCode === _model__WEBPACK_IMPORTED_MODULE_4__["TaxTypeCode"].State &&
                t.behavior.shouldShow &&
                t.behavior.requireUserInput === requireInput;
        });
    };
    EmployeeTaxesComponent.prototype.hasLocalTaxes = function (requireInput) {
        return this.eeTaxes.taxes.some(function (t) {
            return t.taxTypeCode !== _model__WEBPACK_IMPORTED_MODULE_4__["TaxTypeCode"].Federal &&
                t.taxTypeCode !== _model__WEBPACK_IMPORTED_MODULE_4__["TaxTypeCode"].State &&
                t.behavior.shouldShow &&
                t.behavior.requireUserInput === requireInput;
        });
    };
    EmployeeTaxesComponent.prototype.getFederalTaxes = function (requireInput) {
        return this.eeTaxes.taxes.filter(function (t) {
            return t.taxTypeCode === _model__WEBPACK_IMPORTED_MODULE_4__["TaxTypeCode"].Federal &&
                t.behavior.shouldShow &&
                t.behavior.requireUserInput === requireInput;
        });
    };
    EmployeeTaxesComponent.prototype.getStateTaxes = function (requireInput) {
        return this.eeTaxes.taxes.filter(function (t) {
            return t.taxTypeCode === _model__WEBPACK_IMPORTED_MODULE_4__["TaxTypeCode"].State &&
                t.behavior.shouldShow &&
                t.behavior.requireUserInput === requireInput;
        });
    };
    EmployeeTaxesComponent.prototype.getLocalTaxes = function (requireInput) {
        return this.eeTaxes.taxes.filter(function (t) {
            return t.taxTypeCode !== _model__WEBPACK_IMPORTED_MODULE_4__["TaxTypeCode"].Federal &&
                t.taxTypeCode !== _model__WEBPACK_IMPORTED_MODULE_4__["TaxTypeCode"].State &&
                t.behavior.shouldShow &&
                t.behavior.requireUserInput === requireInput;
        });
    };
    EmployeeTaxesComponent.prototype.hasOtherTaxes = function () {
        if (this.eeTaxes == null || this.eeTaxes.taxes.length === 0) {
            return false;
        }
        return this.eeTaxes.taxes.some(function (e) { return e.behavior.shouldShow && e.behavior.requireUserInput === false; });
    };
    EmployeeTaxesComponent.prototype.save = function () {
        return this.saverFactory.create()
            .add(this.employeeViewService.saveEmployee(this.employee))
            .add(this.employeeViewService.saveEmployeeTaxes(this.eeTaxes))
            .go();
    };
    return EmployeeTaxesComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee-view.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/employees/employee/employee-view.service.ts ***!
  \*************************************************************/
/*! exports provided: EmployeeViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeViewService", function() { return EmployeeViewService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @entity */ "./src/app/store/entity/index.ts");
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @session/session.service */ "./src/app/store/session/session.service.ts");
/* harmony import */ var _core_services_tax_services_tax_collector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/tax-services/tax-collector.service */ "./src/app/core/services/tax-services/tax-collector.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_entity_entity_services_address_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/entity/entity-services/address.service */ "./src/app/store/entity/entity-services/address.service.ts");
/* harmony import */ var _store_entity_entity_services_employee_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/entity/entity-services/employee.service */ "./src/app/store/entity/entity-services/employee.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};














var employeesFeatureUrl = _core__WEBPACK_IMPORTED_MODULE_3__["WellKnownRoutes"].Employees;
/**
 * Share an Employee view model and persistence services among a set
 * of closely cooperating Employee components
 * TODO: consider delegating work to sub-services targeting particular components.
 */
var EmployeeViewService = /** @class */ (function () {
    function EmployeeViewService(addressService, employeeService, router, sessionService, taxCollectorService) {
        var _this = this;
        this.addressService = addressService;
        this.employeeService = employeeService;
        this.router = router;
        this.sessionService = sessionService;
        this.taxCollectorService = taxCollectorService;
        this.currentCompany$ = this.sessionService.currentCompany$;
        this.currentEmployeeId$ = this.sessionService.currentEmployeeId$;
        /**
         * Observable of a clone of the current Employee when current Employee exists and changes in any way
         * Emits null when no current Employee.
         * Do NOT expose to consumers.
         * They should only see non-null Employee.
         */
        var currentEmployee$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.currentEmployeeId$, this.sessionService.currentEmployee$, this.sessionService.companyPackageLoaded$, this.sessionService.isSignedIn$).pipe(
        // debounce synchronous chatter from input observables by waiting one tick
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(0), 
        // Map to a clone of the current Employee if it exists
        // else map to null (which is not emitted)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var eeId = _a[0], employee = _a[1], isLoaded = _a[2], isSignedIn = _a[3];
            // Can arrive here with no eeId because some other service cleared it
            // or with an existing EE but no company package (because returning to admin console)
            // or while signing-out.
            // Do NOT emit an Employee. Continue instead without error.
            if (!eeId || !isLoaded || !isSignedIn) {
                return null;
            }
            if (employee) {
                return _model__WEBPACK_IMPORTED_MODULE_4__["Employee"].create(employee); // cloned Employee instance
            }
            // No valid Employee for the currentEmployeeId
            // Can happen if deep link here with bad id in browser address bar
            // Could report it as follows ... but won't for now.
            // const error = `EmployeeViewService did not find EE record for id=${eeId}`;
            // this.sessionService.logger.error(error);
            // Clear the currentEmployeeId and navigate to EE setup
            _this.setCurrentEmployeeId(null);
            _this.router.navigate([_core__WEBPACK_IMPORTED_MODULE_3__["WellKnownRoutes"].Employees], { replaceUrl: true });
            return null;
        }), 
        // Expensive to calculate so hold onto last value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        // Non-null currentEmployee$ (do not emit a null EE because EE views will fail).
        this.currentEmployee$ = currentEmployee$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (ee) { return ee != null; }));
        this.currentEmployeeSnapshot$ = this.currentEmployee$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        this.currentEmployeeWithAddressesSnapshot$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.currentEmployee$, this.addressService.entityMap$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var ee = _a[0], addressMap = _a[1];
            var home = addressMap[ee.homeAddressId];
            if (!home) {
                // No Home Address record for this id. Shouldn't happen (but it did during db migration issue #93!)
                var error = "EmployeeViewService did not find home address (" + ee.homeAddressId + ") for EE id=" + ee.id;
                throw new Error(error);
            }
            var work = addressMap[ee.workAddressId];
            var vm = ee;
            vm.home = _model__WEBPACK_IMPORTED_MODULE_4__["Address"].create(home);
            vm.work = work == null ? null : _model__WEBPACK_IMPORTED_MODULE_4__["Address"].create(work);
            return vm;
        }));
        this.currentEmployeeWithTaxesSnapshot$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.currentEmployee$, this.taxCollectorService.taxes$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var ee = _a[0], taxes = _a[1];
            var eeTaxes = taxes
                ? taxes.employeeTaxes.find(function (e) { return e.employeeLocation.id === ee.id; })
                : null;
            return { ee: ee, eeTaxes: eeTaxes };
        }));
        // Clear current employee if leaving Employees Feature or going to EE Setup to pick an EE
        // Service never dies so no need to unsubscribe
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            var url = event.urlAfterRedirects;
            return !url.startsWith(employeesFeatureUrl) || url === employeesFeatureUrl;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (shouldClear) {
            if (shouldClear) {
                _this.setCurrentEmployeeId(null);
            }
        });
        this.workAddresses$ = addressService.workAddresses$;
    }
    /** Save existing EE vm (or part of one) by merging it with the EE in cache */
    EmployeeViewService.prototype.saveEmployee = function (eeVm) {
        var _this = this;
        if (eeVm == null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null); // nothing to save
        }
        if (!eeVm.id) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('saveEmployee: no Employee or lacks its id');
        }
        // Trick: extract pure employee data from the eeVm,
        // by assigning the addresses into (unused) vars
        var home = eeVm.home, work = eeVm.work, ee = __rest(eeVm, ["home", "work"]);
        return this.employeeService.entityMap$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (eeMap) {
            var oldEe = eeMap[ee.id];
            // strip off the prototype before comparing
            var newEe = Object.assign({}, oldEe, ee);
            var changed = Object(_core__WEBPACK_IMPORTED_MODULE_3__["areDifferent"])(newEe, oldEe, 'EE');
            var computeTaxes = oldEe.workAddressId !== newEe.workAddressId ||
                ((oldEe.employeeType === _model__WEBPACK_IMPORTED_MODULE_4__["EmployeeType"].Contractor || newEe.employeeType === _model__WEBPACK_IMPORTED_MODULE_4__["EmployeeType"].Contractor) &&
                    oldEe.employeeType !== newEe.employeeType);
            return {
                eeMap: eeMap,
                changed: changed,
                computeTaxes: computeTaxes,
                newEe: newEe,
                oldEe: oldEe
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (context) {
            return context.changed
                ? _this.employeeService.update(context.newEe, { isOptimistic: true })
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(context.oldEe);
        }, function (context, updateResult) { return (__assign({}, context, { updateResult: updateResult })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (context) {
            return context.computeTaxes ? _this.taxCollectorService.computeTaxes() : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
        }, function (context, _) { return context; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (context) {
            return context.updateResult;
        }));
    };
    // Save using multi-entity save
    EmployeeViewService.prototype.saveEmployeeWithHome = function (eeVm) {
        return this.employeeService.saveEmployeeUpdate(eeVm, eeVm.home);
    };
    EmployeeViewService.prototype.saveEmployeeIsRemoved = function (eeVm) {
        return this.employeeService.saveEmployeeIsRemovedById(eeVm.id, eeVm.isRemoved);
    };
    /** Save the configured taxes array */
    EmployeeViewService.prototype.saveEmployeeTaxes = function (employeeTaxes) {
        if (!employeeTaxes) {
            return _core__WEBPACK_IMPORTED_MODULE_3__["Saver"].NO_SAVE; // no vm to save
        }
        return this.taxCollectorService.saveEmployeeTaxes(employeeTaxes);
    };
    /** Set new current EmployeeId */
    EmployeeViewService.prototype.setCurrentEmployeeId = function (eeId) {
        this.sessionService.setCurrentEmployeeId(eeId);
    };
    EmployeeViewService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_8__["defineInjectable"]({ factory: function EmployeeViewService_Factory() { return new EmployeeViewService(_angular_core__WEBPACK_IMPORTED_MODULE_8__["inject"](_store_entity_entity_services_address_service__WEBPACK_IMPORTED_MODULE_9__["AddressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["inject"](_store_entity_entity_services_employee_service__WEBPACK_IMPORTED_MODULE_10__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["inject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["inject"](_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["inject"](_core_services_tax_services_tax_collector_service__WEBPACK_IMPORTED_MODULE_7__["TaxCollectorService"])); }, token: EmployeeViewService, providedIn: "root" });
    return EmployeeViewService;
}());



/***/ }),

/***/ "./src/app/employees/employees-container.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/employees/employees-container.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_EmployeesContainerComponent, View_EmployeesContainerComponent_0, View_EmployeesContainerComponent_Host_0, EmployeesContainerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmployeesContainerComponent", function() { return RenderType_EmployeesContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeesContainerComponent_0", function() { return View_EmployeesContainerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmployeesContainerComponent_Host_0", function() { return View_EmployeesContainerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesContainerComponentNgFactory", function() { return EmployeesContainerComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employees_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employees-container.component */ "./src/app/employees/employees-container.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_EmployeesContainerComponent = [];
var RenderType_EmployeesContainerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_EmployeesContainerComponent, data: { "animation": [{ type: 7, name: "eeSetupAnim", definitions: [{ type: 1, expr: "* <=> EmployeeSetup", animation: [{ type: 6, styles: { position: "relative" }, offset: null }, { type: 11, selector: ".nav-button-container", animation: { type: 6, styles: { position: "absolute", opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter, :leave", animation: [{ type: 6, styles: { position: "absolute", top: 0, left: 0, width: "100%" }, offset: null }], options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 9, options: null }, options: { optional: true } }, { type: 3, steps: [{ type: 11, selector: ":leave", animation: { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "300ms ease-out" }, options: { optional: true } }, { type: 11, selector: ":enter", animation: { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: "300ms ease-in" }, options: { optional: true } }], options: null }, { type: 11, selector: ":enter", animation: { type: 9, options: null }, options: { optional: true } }], options: null }], options: {} }] } });

function View_EmployeesContainerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "d-flex flex-column"], ["id", "employeesComponent"]], [[24, "@eeSetupAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 212992, [["outlet", 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.prepareRoute(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)); _ck(_v, 0, 0, currVal_0); }); }
function View_EmployeesContainerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-ees-container", [], null, null, null, View_EmployeesContainerComponent_0, RenderType_EmployeesContainerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _employees_container_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesContainerComponent"], [], null, null)], null, null); }
var EmployeesContainerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-ees-container", _employees_container_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesContainerComponent"], View_EmployeesContainerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/employees/employees-container.component.ts":
/*!************************************************************!*\
  !*** ./src/app/employees/employees-container.component.ts ***!
  \************************************************************/
/*! exports provided: EmployeesContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesContainerComponent", function() { return EmployeesContainerComponent; });
var EmployeesContainerComponent = /** @class */ (function () {
    function EmployeesContainerComponent() {
    }
    EmployeesContainerComponent.prototype.prepareRoute = function (outlet) {
        /** Animation relies on title data property to recognize a state change */
        return ((outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']) || 'Employee');
    };
    return EmployeesContainerComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/employees/employees-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EmployeesRoutingModule, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesRoutingModule", function() { return EmployeesRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_employee_container_employee_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee/employee-container/employee-container.component */ "./src/app/employees/employee/employee-container/employee-container.component.ts");
/* harmony import */ var _employees_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employees-container.component */ "./src/app/employees/employees-container.component.ts");
/* harmony import */ var _employee_employee_employment_employee_employment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee-employment/employee-employment.component */ "./src/app/employees/employee/employee-employment/employee-employment.component.ts");
/* harmony import */ var _employee_setup_employee_list_employee_list_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-setup/employee-list/employee-list-container.component */ "./src/app/employees/employee-setup/employee-list/employee-list-container.component.ts");
/* harmony import */ var _employee_employee_payment_employee_payment_employee_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee/employee-payment/employee-payment/employee-payment.component */ "./src/app/employees/employee/employee-payment/employee-payment/employee-payment.component.ts");
/* harmony import */ var _employee_employee_personal_employee_personal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee/employee-personal/employee-personal.component */ "./src/app/employees/employee/employee-personal/employee-personal.component.ts");
/* harmony import */ var _employee_employee_tax_employee_taxes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee-tax/employee-taxes.component */ "./src/app/employees/employee/employee-tax/employee-taxes.component.ts");
/* harmony import */ var _core_routing_guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/routing-guards */ "./src/app/core/routing-guards/index.ts");
/* harmony import */ var _employee_setup_employee_setup_container_employee_setup_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee-setup/employee-setup-container/employee-setup-container.component */ "./src/app/employees/employee-setup/employee-setup-container/employee-setup-container.component.ts");










var ɵ0 = { animation: 'EmployeeSetup' }, ɵ1 = { title: 'Employees' };
var routes = [
    {
        path: '',
        component: _employees_container_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesContainerComponent"],
        canActivateChild: [_core_routing_guards__WEBPACK_IMPORTED_MODULE_8__["DataEntryPageGuard"]],
        canDeactivate: [_core_routing_guards__WEBPACK_IMPORTED_MODULE_8__["PageLeaveGuard"]],
        children: [
            {
                path: '',
                component: _employee_setup_employee_setup_container_employee_setup_container_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeSetupContainerComponent"],
                // canDeactivate: [PageLeaveGuard], // this is a read-only component
                data: ɵ0,
                children: [
                    {
                        path: '',
                        component: _employee_setup_employee_list_employee_list_container_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListContainerComponent"],
                        canDeactivate: [_core_routing_guards__WEBPACK_IMPORTED_MODULE_8__["PageLeaveGuard"]],
                        data: ɵ1,
                    },
                    {
                        path: 'earnings',
                        loadChildren: '@app/earnings/earnings.module#EarningsModule',
                    },
                    {
                        path: 'company-deductions',
                        loadChildren: '@app/deductions/company/company-deductions.module#CompanyDeductionsModule',
                    },
                ]
            },
            {
                path: ':id',
                component: _employee_employee_container_employee_container_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeContainerComponent"],
                children: [
                    { path: '', redirectTo: 'personal' },
                    {
                        path: 'personal',
                        component: _employee_employee_personal_employee_personal_component__WEBPACK_IMPORTED_MODULE_6__["EmployeePersonalComponent"],
                        canDeactivate: [_core_routing_guards__WEBPACK_IMPORTED_MODULE_8__["PageLeaveGuard"]],
                    },
                    {
                        path: 'employment',
                        component: _employee_employee_employment_employee_employment_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeEmploymentComponent"],
                        canDeactivate: [_core_routing_guards__WEBPACK_IMPORTED_MODULE_8__["PageLeaveGuard"]],
                    },
                    {
                        path: 'payment',
                        component: _employee_employee_payment_employee_payment_employee_payment_component__WEBPACK_IMPORTED_MODULE_5__["EmployeePaymentComponent"],
                        canDeactivate: [_core_routing_guards__WEBPACK_IMPORTED_MODULE_8__["PageLeaveGuard"]],
                    },
                    {
                        path: 'tax',
                        component: _employee_employee_tax_employee_taxes_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeTaxesComponent"],
                        canDeactivate: [_core_routing_guards__WEBPACK_IMPORTED_MODULE_8__["PageLeaveGuard"]],
                    },
                    {
                        path: 'deductions',
                        loadChildren: '@app/deductions/employee/employee-deductions.module#EmployeeDeductionsModule',
                    },
                    { path: '**', redirectTo: 'personal' } // bad routes redirect to personal
                ]
            },
            { path: '**', pathMatch: 'prefix', redirectTo: '' }
        ]
    }
];
var EmployeesRoutingModule = /** @class */ (function () {
    function EmployeesRoutingModule() {
    }
    return EmployeesRoutingModule;
}());




/***/ }),

/***/ "./src/app/employees/employees.module.ngfactory.js":
/*!*********************************************************!*\
  !*** ./src/app/employees/employees.module.ngfactory.js ***!
  \*********************************************************/
/*! exports provided: EmployeesModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModuleNgFactory", function() { return EmployeesModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employees_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees.module */ "./src/app/employees/employees.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _employees_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees-container.component.ngfactory */ "./src/app/employees/employees-container.component.ngfactory.js");
/* harmony import */ var _employee_setup_employee_setup_container_employee_setup_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-setup/employee-setup-container/employee-setup-container.component.ngfactory */ "./src/app/employees/employee-setup/employee-setup-container/employee-setup-container.component.ngfactory.js");
/* harmony import */ var _employee_setup_employee_list_employee_list_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-setup/employee-list/employee-list-container.component.ngfactory */ "./src/app/employees/employee-setup/employee-list/employee-list-container.component.ngfactory.js");
/* harmony import */ var _employee_employee_container_employee_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee-container/employee-container.component.ngfactory */ "./src/app/employees/employee/employee-container/employee-container.component.ngfactory.js");
/* harmony import */ var _employee_employee_personal_employee_personal_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee/employee-personal/employee-personal.component.ngfactory */ "./src/app/employees/employee/employee-personal/employee-personal.component.ngfactory.js");
/* harmony import */ var _employee_employee_employment_employee_employment_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee/employee-employment/employee-employment.component.ngfactory */ "./src/app/employees/employee/employee-employment/employee-employment.component.ngfactory.js");
/* harmony import */ var _employee_employee_payment_employee_payment_employee_payment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employee/employee-payment/employee-payment/employee-payment.component.ngfactory */ "./src/app/employees/employee/employee-payment/employee-payment/employee-payment.component.ngfactory.js");
/* harmony import */ var _employee_employee_tax_employee_taxes_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employee/employee-tax/employee-taxes.component.ngfactory */ "./src/app/employees/employee/employee-tax/employee-taxes.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/routing-guards/page-leave-guard */ "./src/app/core/routing-guards/page-leave-guard.ts");
/* harmony import */ var _store_session_session_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store/session/session.service */ "./src/app/store/session/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _employees_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./employees-routing.module */ "./src/app/employees/employees-routing.module.ts");
/* harmony import */ var _employees_container_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./employees-container.component */ "./src/app/employees/employees-container.component.ts");
/* harmony import */ var _core_routing_guards_data_entry_page_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/routing-guards/data-entry-page-guard */ "./src/app/core/routing-guards/data-entry-page-guard.ts");
/* harmony import */ var _employee_setup_employee_setup_container_employee_setup_container_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./employee-setup/employee-setup-container/employee-setup-container.component */ "./src/app/employees/employee-setup/employee-setup-container/employee-setup-container.component.ts");
/* harmony import */ var _employee_setup_employee_list_employee_list_container_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./employee-setup/employee-list/employee-list-container.component */ "./src/app/employees/employee-setup/employee-list/employee-list-container.component.ts");
/* harmony import */ var _employee_employee_container_employee_container_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./employee/employee-container/employee-container.component */ "./src/app/employees/employee/employee-container/employee-container.component.ts");
/* harmony import */ var _employee_employee_personal_employee_personal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./employee/employee-personal/employee-personal.component */ "./src/app/employees/employee/employee-personal/employee-personal.component.ts");
/* harmony import */ var _employee_employee_employment_employee_employment_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./employee/employee-employment/employee-employment.component */ "./src/app/employees/employee/employee-employment/employee-employment.component.ts");
/* harmony import */ var _employee_employee_payment_employee_payment_employee_payment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./employee/employee-payment/employee-payment/employee-payment.component */ "./src/app/employees/employee/employee-payment/employee-payment/employee-payment.component.ts");
/* harmony import */ var _employee_employee_tax_employee_taxes_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./employee/employee-tax/employee-taxes.component */ "./src/app/employees/employee/employee-tax/employee-taxes.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






























var EmployeesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_employees_module__WEBPACK_IMPORTED_MODULE_1__["EmployeesModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵzNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵbaNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵsNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵwNgFactory"], _employees_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["EmployeesContainerComponentNgFactory"], _employee_setup_employee_setup_container_employee_setup_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["EmployeeSetupContainerComponentNgFactory"], _employee_setup_employee_list_employee_list_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["EmployeeListContainerComponentNgFactory"], _employee_employee_container_employee_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["EmployeeContainerComponentNgFactory"], _employee_employee_personal_employee_personal_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["EmployeePersonalComponentNgFactory"], _employee_employee_employment_employee_employment_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["EmployeeEmploymentComponentNgFactory"], _employee_employee_payment_employee_payment_employee_payment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["EmployeePaymentComponentNgFactory"], _employee_employee_tax_employee_taxes_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["EmployeeTaxesComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["ɵbb"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_15__["PageLeaveGuard"], _core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_15__["PageLeaveGuard"], [_store_session_session_service__WEBPACK_IMPORTED_MODULE_16__["SessionService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__["TextMaskModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__["TextMaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _employees_routing_module__WEBPACK_IMPORTED_MODULE_20__["EmployeesRoutingModule"], _employees_routing_module__WEBPACK_IMPORTED_MODULE_20__["EmployeesRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _employees_module__WEBPACK_IMPORTED_MODULE_1__["EmployeesModule"], _employees_module__WEBPACK_IMPORTED_MODULE_1__["EmployeesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTES"], function () { return [[{ path: "", component: _employees_container_component__WEBPACK_IMPORTED_MODULE_21__["EmployeesContainerComponent"], canActivateChild: [_core_routing_guards_data_entry_page_guard__WEBPACK_IMPORTED_MODULE_22__["DataEntryPageGuard"]], canDeactivate: [_core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_15__["PageLeaveGuard"]], children: [{ path: "", component: _employee_setup_employee_setup_container_employee_setup_container_component__WEBPACK_IMPORTED_MODULE_23__["EmployeeSetupContainerComponent"], data: _employees_routing_module__WEBPACK_IMPORTED_MODULE_20__["ɵ0"], children: [{ path: "", component: _employee_setup_employee_list_employee_list_container_component__WEBPACK_IMPORTED_MODULE_24__["EmployeeListContainerComponent"], canDeactivate: [_core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_15__["PageLeaveGuard"]], data: _employees_routing_module__WEBPACK_IMPORTED_MODULE_20__["ɵ1"] }, { path: "earnings", loadChildren: "@app/earnings/earnings.module#EarningsModule" }, { path: "company-deductions", loadChildren: "@app/deductions/company/company-deductions.module#CompanyDeductionsModule" }] }, { path: ":id", component: _employee_employee_container_employee_container_component__WEBPACK_IMPORTED_MODULE_25__["EmployeeContainerComponent"], children: [{ path: "", redirectTo: "personal" }, { path: "personal", component: _employee_employee_personal_employee_personal_component__WEBPACK_IMPORTED_MODULE_26__["EmployeePersonalComponent"], canDeactivate: [_core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_15__["PageLeaveGuard"]] }, { path: "employment", component: _employee_employee_employment_employee_employment_component__WEBPACK_IMPORTED_MODULE_27__["EmployeeEmploymentComponent"], canDeactivate: [_core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_15__["PageLeaveGuard"]] }, { path: "payment", component: _employee_employee_payment_employee_payment_employee_payment_component__WEBPACK_IMPORTED_MODULE_28__["EmployeePaymentComponent"], canDeactivate: [_core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_15__["PageLeaveGuard"]] }, { path: "tax", component: _employee_employee_tax_employee_taxes_component__WEBPACK_IMPORTED_MODULE_29__["EmployeeTaxesComponent"], canDeactivate: [_core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_15__["PageLeaveGuard"]] }, { path: "deductions", loadChildren: "@app/deductions/employee/employee-deductions.module#EmployeeDeductionsModule" }, { path: "**", redirectTo: "personal" }] }, { path: "**", pathMatch: "prefix", redirectTo: "" }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/employees/employees.module.ts":
/*!***********************************************!*\
  !*** ./src/app/employees/employees.module.ts ***!
  \***********************************************/
/*! exports provided: EmployeesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModule", function() { return EmployeesModule; });
var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    return EmployeesModule;
}());



/***/ }),

/***/ "./src/app/shared/input/input-date.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/shared/input/input-date.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_InputDateComponent, View_InputDateComponent_0, View_InputDateComponent_Host_0, InputDateComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_InputDateComponent", function() { return RenderType_InputDateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InputDateComponent_0", function() { return View_InputDateComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InputDateComponent_Host_0", function() { return View_InputDateComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDateComponentNgFactory", function() { return InputDateComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation/validate-property.directive */ "./src/app/shared/validation/validate-property.directive.ts");
/* harmony import */ var _store_validation_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/validation/validation.service */ "./src/app/store/validation/validation.service.ts");
/* harmony import */ var _input_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-date.component */ "./src/app/shared/input/input-date.component.ts");
/* harmony import */ var _model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model.component */ "./src/app/shared/model.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_InputDateComponent = [];
var RenderType_InputDateComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_InputDateComponent, data: {} });

function View_InputDateComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "i", [["class", "material-icons tooltip-icon clickable"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.open = !_co.open) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["info"]))], null, null); }
function View_InputDateComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null); }
function View_InputDateComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.prepend; _ck(_v, 2, 0, currVal_0); }); }
function View_InputDateComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.append; _ck(_v, 2, 0, currVal_0); }); }
function View_InputDateComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { child: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { inputPicker: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 33, "div", [["class", "form-group input-small"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 7, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["class", "label-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 4, "span", [["class", "tooltip-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_InputDateComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_InputDateComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 23, "div", [["class", "input-group"]], [[2, "input-prepend", null], [2, "input-append", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_InputDateComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, [[1, 0], ["child", 1]], null, 11, "input", [["class", "form-control date-field"], ["spAsyncValidateProperty", ""], ["spValidateProperty", ""], ["type", "text"]], [[8, "id", 0], [8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "blur"], [null, "keydown"], [null, "keyup.enter"], [null, "keyup.esc"], [null, "focus"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).blur() !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_co.onBlur() !== false);
        ad = (pd_5 && ad);
    } if (("keydown" === en)) {
        var pd_6 = (_co.filterKeys($event) !== false);
        ad = (pd_6 && ad);
    } if (("keyup.enter" === en)) {
        var pd_7 = (_co.exit("enterKey") !== false);
        ad = (pd_7 && ad);
    } if (("keyup.esc" === en)) {
        var pd_8 = (_co.escaped() !== false);
        ad = (pd_8 && ad);
    } if (("focus" === en)) {
        var pd_9 = (_co.onFocus() !== false);
        ad = (pd_9 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 147456, null, 0, _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_3__["ValidatePropertyDirective"], [_store_validation_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"]], { model: [0, "model"], modelType: [1, "modelType"], propertyName: [2, "propertyName"], group: [3, "group"], modelContext: [4, "modelContext"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_3__["ValidatePropertyDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 147456, null, 0, _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_3__["AsyncValidatePropertyDirective"], [_store_validation_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"]], { model: [0, "model"], modelType: [1, "modelType"], propertyName: [2, "propertyName"], group: [3, "group"], modelContext: [4, "modelContext"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_ASYNC_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_3__["AsyncValidatePropertyDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 671744, [["input", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_ASYNC_VALIDATORS"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], isDisabled: [1, "isDisabled"], model: [2, "model"], options: [3, "options"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](22, { updateOn: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 737280, null, 0, _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_3__["ValidationStatusDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_3__["FormDirective"]]], { spValidationStatus: [0, "spValidationStatus"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, [[2, 0], ["inputPicker", 1]], null, 0, "input", [["class", "picker"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 3, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 2, "span", [["class", "input-group-text"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openPicker() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["calendar_today"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_InputDateComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "div", [["class", "validationError"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 671744, null, 0, _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_3__["ValidationFeedbackDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_3__["FormDirective"]]], { spValidationFeedback: [0, "spValidationFeedback"], displayName: [1, "displayName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.tooltip; _ck(_v, 8, 0, currVal_2); var currVal_3 = (_co.tooltip && _co.open); _ck(_v, 10, 0, currVal_3); var currVal_6 = !!_co.prepend; _ck(_v, 13, 0, currVal_6); var currVal_16 = _co.model; var currVal_17 = _co.modelType; var currVal_18 = _co.propertyName; var currVal_19 = _co.group; var currVal_20 = _co.modelContext; _ck(_v, 16, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_21 = _co.model; var currVal_22 = _co.modelType; var currVal_23 = _co.propertyName; var currVal_24 = _co.group; var currVal_25 = _co.modelContext; _ck(_v, 18, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); var currVal_26 = _co.name; var currVal_27 = _co.disabled; var currVal_28 = _co.getRenderValue(); var currVal_29 = _ck(_v, 22, 0, "blur"); _ck(_v, 21, 0, currVal_26, currVal_27, currVal_28, currVal_29); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21); _ck(_v, 25, 0, currVal_30); var currVal_31 = !!_co.append; _ck(_v, 32, 0, currVal_31); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21); var currVal_33 = _co.label; _ck(_v, 34, 0, currVal_32, currVal_33); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.name; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.label; _ck(_v, 5, 0, currVal_1); var currVal_4 = _co.prepend; var currVal_5 = (_co.append || _co.picker); _ck(_v, 11, 0, currVal_4, currVal_5); var currVal_7 = _co.name; var currVal_8 = _co.placeholder; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassPending; _ck(_v, 14, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); }); }
function View_InputDateComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "sp-date", [], null, null, null, View_InputDateComponent_0, RenderType_InputDateComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_input_date_component__WEBPACK_IMPORTED_MODULE_5__["InputDateComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 4440064, null, 0, _input_date_component__WEBPACK_IMPORTED_MODULE_5__["InputDateComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _model_component__WEBPACK_IMPORTED_MODULE_6__["ModelComponent"]]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var InputDateComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-date", _input_date_component__WEBPACK_IMPORTED_MODULE_5__["InputDateComponent"], View_InputDateComponent_Host_0, { append: "append", autofocus: "autofocus", classNames: "classNames", defaultDate: "defaultDate", disabled: "disabled", group: "group", label: "label", maxDate: "maxDate", minDate: "minDate", model: "model", modelType: "modelType", name: "name", picker: "picker", placeholder: "placeholder", prepend: "prepend", propertyName: "propertyName", tooltip: "tooltip" }, { blur: "blur", focus: "focus", onChange: "onChange", onExit: "onExit", onTouched: "onTouched" }, ["*", "[helpText]"]);



/***/ })

}]);
//# sourceMappingURL=14.181a97f7994aefa607a6.js.map