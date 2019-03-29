(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./src/app/company-tax-info/company-fed-tax-info/company-fed-tax-info.component.ngfactory.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/company-tax-info/company-fed-tax-info/company-fed-tax-info.component.ngfactory.js ***!
  \***************************************************************************************************/
/*! exports provided: RenderType_CompanyFedTaxInfoComponent, View_CompanyFedTaxInfoComponent_0, View_CompanyFedTaxInfoComponent_Host_0, CompanyFedTaxInfoComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CompanyFedTaxInfoComponent", function() { return RenderType_CompanyFedTaxInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyFedTaxInfoComponent_0", function() { return View_CompanyFedTaxInfoComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyFedTaxInfoComponent_Host_0", function() { return View_CompanyFedTaxInfoComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyFedTaxInfoComponentNgFactory", function() { return CompanyFedTaxInfoComponentNgFactory; });
/* harmony import */ var _company_tax_info_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../company-tax-info-tab.scss.shim.ngstyle */ "./src/app/company-tax-info/company-tax-info-tab.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/model.component.ngfactory */ "./src/app/shared/model.component.ngfactory.js");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/radio-group/radio-group.component.ngfactory */ "./src/app/shared/radio-group/radio-group.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");
/* harmony import */ var _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/radio-group/radio-button.component.ngfactory */ "./src/app/shared/radio-group/radio-button.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/radio-group/radio-button.component */ "./src/app/shared/radio-group/radio-button.component.ts");
/* harmony import */ var _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/input/input-text.component.ngfactory */ "./src/app/shared/input/input-text.component.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/input/input-text.component */ "./src/app/shared/input/input-text.component.ts");
/* harmony import */ var _shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/input/input-mask-catalog */ "./src/app/shared/input/input-mask-catalog.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/validation/validate-property.directive */ "./src/app/shared/validation/validate-property.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tin_check_tin_check_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../tin-check/tin-check.component.ngfactory */ "./src/app/tin-check/tin-check.component.ngfactory.js");
/* harmony import */ var _tin_check_tin_check_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../tin-check/tin-check.component */ "./src/app/tin-check/tin-check.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _tin_check_tin_check_view_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../tin-check/tin-check-view.service */ "./src/app/tin-check/tin-check-view.service.ts");
/* harmony import */ var _company_fed_tax_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./company-fed-tax-info.component */ "./src/app/company-tax-info/company-fed-tax-info/company-fed-tax-info.component.ts");
/* harmony import */ var _company_fed_tax_view_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../company-fed-tax-view.service */ "./src/app/company-tax-info/company-fed-tax-view.service.ts");
/* harmony import */ var _household_fed_tax_view_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../household-fed-tax-view.service */ "./src/app/company-tax-info/household-fed-tax-view.service.ts");
/* harmony import */ var _core_saver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../core/saver */ "./src/app/core/saver.ts");
/* harmony import */ var _company_state_tax_view_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../company-state-tax-view.service */ "./src/app/company-tax-info/company-state-tax-view.service.ts");
/* harmony import */ var _core_services_tax_services_tax_selector_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../core/services/tax-services/tax-selector.service */ "./src/app/core/services/tax-services/tax-selector.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























var styles_CompanyFedTaxInfoComponent = [_company_tax_info_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CompanyFedTaxInfoComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CompanyFedTaxInfoComponent, data: { "animation": [{ type: 7, name: "ngIfAnim", definitions: [{ type: 0, name: "*", styles: { type: 6, styles: { height: "*", opacity: 1, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 0, name: "void", styles: { type: 6, styles: { height: "0", opacity: 0, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 1, expr: ":leave", animation: { type: 4, styles: null, timings: "250ms ease-out" }, options: null }, { type: 1, expr: ":enter", animation: { type: 4, styles: null, timings: "250ms ease-in" }, options: null }], options: {} }] } });

function View_CompanyFedTaxInfoComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "p", [["class", "input-help-text"], ["helpText", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Don't have one? "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "a", [["href", "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Apply for it now"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [". "]))], null, null); }
function View_CompanyFedTaxInfoComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "input-help-text"], ["helpText", ""]], [[24, "@ngIfAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Federal unemployment tax is mandated by the Federal Unemployment Tax Act (FUTA). However, there are some exeptions. Please verify that you have selected the correct status. "]))], null, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_CompanyFedTaxInfoComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "sp-model", [["group", "fedTax"], ["modelType", "Company"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"], group: [2, "group"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 16777216, null, 0, 8, "sp-radio-group", [["label", "Are you an agricultural business required to file the 943 form ?"], ["name", "isAgricultural"], ["propertyName", "isAgricultural"]], null, null, null, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_5__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, [[3, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_7__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Yes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, [[3, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_7__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["No"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fedTaxVm; var currVal_1 = "Company"; var currVal_2 = "fedTax"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = "Are you an agricultural business required to file the 943 form ?"; var currVal_4 = "isAgricultural"; var currVal_5 = "isAgricultural"; _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5); var currVal_6 = true; _ck(_v, 7, 0, currVal_6); var currVal_7 = false; _ck(_v, 10, 0, currVal_7); }, null); }
function View_CompanyFedTaxInfoComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [["class", "pt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Spouse"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "input-group input-split"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "sp-input", [["label", "First Name"], ["name", "spouseFirstName"], ["placeholder", "First"], ["propertyName", "spouseFirstName"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_11__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], placeholder: [2, "placeholder"], propertyName: [3, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "sp-input", [["label", "Last Name"], ["name", "spouseLastName"], ["placeholder", "Last"], ["propertyName", "spouseLastName"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_11__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], placeholder: [2, "placeholder"], propertyName: [3, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "sp-input", [["class", "input-medium"], ["label", "Social Security Number"], ["maskType", "ssn"], ["name", "spouseSsn"], ["propertyName", "spouseSsn"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_11__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], maskType: [3, "maskType"] }, null)], function (_ck, _v) { var currVal_0 = "First Name"; var currVal_1 = "spouseFirstName"; var currVal_2 = "First"; var currVal_3 = "spouseFirstName"; _ck(_v, 6, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = "Last Name"; var currVal_5 = "spouseLastName"; var currVal_6 = "Last"; var currVal_7 = "spouseLastName"; _ck(_v, 9, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = "Social Security Number"; var currVal_9 = "spouseSsn"; var currVal_10 = "spouseSsn"; var currVal_11 = "ssn"; _ck(_v, 12, 0, currVal_8, currVal_9, currVal_10, currVal_11); }, null); }
function View_CompanyFedTaxInfoComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [["class", "pt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tax Filing"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 24, "sp-model", [["group", "fedTax"], ["modelType", "HouseholdFedTaxViewModel"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 573440, null, 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"], group: [2, "group"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 16777216, null, 0, 8, "sp-radio-group", [["label", "How do you file your taxes?"], ["name", "filingStatus"], ["propertyName", "filingStatus"]], null, null, null, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_5__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, [[4, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_7__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Single"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 49152, [[4, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_7__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Joint"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 1, "h3", [["class", "pt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Primary Filer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 6, "div", [["class", "input-group input-split"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "sp-input", [["label", "First Name"], ["name", "primaryFirstName"], ["placeholder", "First"], ["propertyName", "primaryFirstName"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_11__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], placeholder: [2, "placeholder"], propertyName: [3, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "sp-input", [["label", "Last Name"], ["name", "primaryLastName"], ["placeholder", "Last"], ["propertyName", "primaryLastName"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_11__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], placeholder: [2, "placeholder"], propertyName: [3, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 2, "sp-input", [["class", "input-medium"], ["label", "Social Security Number"], ["maskType", "ssn"], ["name", "primarySsn"], ["propertyName", "primarySsn"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_11__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], maskType: [3, "maskType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CompanyFedTaxInfoComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hhFilers; var currVal_1 = "HouseholdFedTaxViewModel"; var currVal_2 = "fedTax"; _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = "How do you file your taxes?"; var currVal_4 = "filingStatus"; var currVal_5 = "filingStatus"; _ck(_v, 6, 0, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.HouseholdFilersStatus.Single; _ck(_v, 9, 0, currVal_6); var currVal_7 = _co.HouseholdFilersStatus.Joint; _ck(_v, 12, 0, currVal_7); var currVal_8 = "First Name"; var currVal_9 = "primaryFirstName"; var currVal_10 = "First"; var currVal_11 = "primaryFirstName"; _ck(_v, 19, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = "Last Name"; var currVal_13 = "primaryLastName"; var currVal_14 = "Last"; var currVal_15 = "primaryLastName"; _ck(_v, 22, 0, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = "Social Security Number"; var currVal_17 = "primarySsn"; var currVal_18 = "primarySsn"; var currVal_19 = "ssn"; _ck(_v, 25, 0, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = (_co.hhFilers.filingStatus === _co.HouseholdFilersStatus.Joint); _ck(_v, 27, 0, currVal_20); }, null); }
function View_CompanyFedTaxInfoComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 34, "div", [["class", "standard d-flex flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 33, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4210688, [["form", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ControlContainer"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_13__["FormDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 10, "sp-model", [["group", "fedTax"], ["modelType", "Company"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 573440, null, 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"], group: [2, "group"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 7, "div", [["class", "d-flex flex-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "sp-input", [["class", "fixed-width-300 input-medium flex-grow-0"], ["id", "fein"], ["label", "Federal Tax ID Number"], ["maskType", "fein"], ["name", "fein"], ["placeholder", "EIN"], ["propertyName", "fein"]], null, [[null, "blur"], [null, "onChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_co.validateFein() !== false);
        ad = (pd_0 && ad);
    } if (("onChange" === en)) {
        var pd_1 = (_co.setFeinModified() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_11__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], placeholder: [2, "placeholder"], propertyName: [3, "propertyName"], maskType: [4, "maskType"] }, { blur: "blur", onChange: "onChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 3, 1, null, View_CompanyFedTaxInfoComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "sp-tin-check", [["class", "position-verify flex-grow-1"]], null, null, null, _tin_check_tin_check_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_TinCheckComponent_0"], _tin_check_tin_check_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_TinCheckComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 114688, [[1, 4], ["tincheck", 4]], 0, _tin_check_tin_check_component__WEBPACK_IMPORTED_MODULE_16__["TinCheckComponent"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModal"], _tin_check_tin_check_view_service__WEBPACK_IMPORTED_MODULE_18__["TinCheckViewService"]], { fedTaxVm: [0, "fedTaxVm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 12, "sp-model", [["group", "fedTax"], ["modelType", "CompanyTax"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 573440, null, 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"], group: [2, "group"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 16777216, null, 0, 10, "sp-radio-group", [["label", "Federal Unemployment Tax Status"], ["name", "futaExempt"], ["propertyName", "isExempt"]], null, null, null, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_5__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_7__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Subject"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 2, 2, "sp-radio-button", [], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_7__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Exempt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 3, 1, null, View_CompanyFedTaxInfoComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyFedTaxInfoComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyFedTaxInfoComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_7 = _co.fedTaxVm; var currVal_8 = "Company"; var currVal_9 = "fedTax"; _ck(_v, 8, 0, currVal_7, currVal_8, currVal_9); var currVal_10 = "Federal Tax ID Number"; var currVal_11 = "fein"; var currVal_12 = "EIN"; var currVal_13 = "fein"; var currVal_14 = "fein"; _ck(_v, 13, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = !_co.fedTaxVm.fein; _ck(_v, 15, 0, currVal_15); var currVal_16 = _co.fedTaxVm; _ck(_v, 17, 0, currVal_16); var currVal_17 = _co.futaTax; var currVal_18 = "CompanyTax"; var currVal_19 = "fedTax"; _ck(_v, 19, 0, currVal_17, currVal_18, currVal_19); var currVal_20 = "Federal Unemployment Tax Status"; var currVal_21 = "futaExempt"; var currVal_22 = "isExempt"; _ck(_v, 21, 0, currVal_20, currVal_21, currVal_22); var currVal_23 = false; _ck(_v, 24, 0, currVal_23); var currVal_24 = true; _ck(_v, 27, 0, currVal_24); var currVal_25 = _co.futaTax.isExempt; _ck(_v, 30, 0, currVal_25); var currVal_26 = !_co.fedTaxVm.isHousehold; _ck(_v, 32, 0, currVal_26); var currVal_27 = _co.fedTaxVm.isHousehold; _ck(_v, 34, 0, currVal_27); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_CompanyFedTaxInfoComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { tincheck: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyFedTaxInfoComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.fedTaxVm && _co.fedCompanyTaxes); _ck(_v, 2, 0, currVal_0); }, null); }
function View_CompanyFedTaxInfoComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sp-co-fed-tax", [], null, null, null, View_CompanyFedTaxInfoComponent_0, RenderType_CompanyFedTaxInfoComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _company_fed_tax_info_component__WEBPACK_IMPORTED_MODULE_19__["CompanyFedTaxInfoComponent"], [_company_fed_tax_view_service__WEBPACK_IMPORTED_MODULE_20__["CompanyFedTaxViewService"], _household_fed_tax_view_service__WEBPACK_IMPORTED_MODULE_21__["HouseholdFedTaxViewService"], _core_saver__WEBPACK_IMPORTED_MODULE_22__["SaverFactoryService"], _company_state_tax_view_service__WEBPACK_IMPORTED_MODULE_23__["CompanyStateTaxViewService"], _core_services_tax_services_tax_selector_service__WEBPACK_IMPORTED_MODULE_24__["TaxSelectorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CompanyFedTaxInfoComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("sp-co-fed-tax", _company_fed_tax_info_component__WEBPACK_IMPORTED_MODULE_19__["CompanyFedTaxInfoComponent"], View_CompanyFedTaxInfoComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/company-tax-info/company-fed-tax-info/company-fed-tax-info.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/company-tax-info/company-fed-tax-info/company-fed-tax-info.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CompanyFedTaxInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyFedTaxInfoComponent", function() { return CompanyFedTaxInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _app_tin_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/tin-check */ "./src/app/tin-check/index.ts");
/* harmony import */ var _company_fed_tax_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../company-fed-tax-view.service */ "./src/app/company-tax-info/company-fed-tax-view.service.ts");
/* harmony import */ var _company_state_tax_view_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../company-state-tax-view.service */ "./src/app/company-tax-info/company-state-tax-view.service.ts");
/* harmony import */ var _household_fed_tax_view_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../household-fed-tax-view.service */ "./src/app/company-tax-info/household-fed-tax-view.service.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");
/* harmony import */ var _app_core_services_tax_services_tax_selector_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/services/tax-services/tax-selector.service */ "./src/app/core/services/tax-services/tax-selector.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};









var CompanyFedTaxInfoComponent = /** @class */ (function () {
    function CompanyFedTaxInfoComponent(companyFedTaxInfoViewService, householdFedTaxViewService, saverFactory, stateTaxInfoViewService, taxSelectorService) {
        this.companyFedTaxInfoViewService = companyFedTaxInfoViewService;
        this.householdFedTaxViewService = householdFedTaxViewService;
        this.saverFactory = saverFactory;
        this.stateTaxInfoViewService = stateTaxInfoViewService;
        this.taxSelectorService = taxSelectorService;
        this.HouseholdFilersStatus = _model__WEBPACK_IMPORTED_MODULE_7__["HouseholdFilersStatus"];
        this.WellKnownRoutes = _core__WEBPACK_IMPORTED_MODULE_2__["WellKnownRoutes"];
    }
    CompanyFedTaxInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyFedTaxInfoViewService.fedTaxVm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (vm) { return (_this.fedTaxVm = vm); });
        this.householdFedTaxViewService.hhFilers$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(function (snapshot) { return (_this.hhFilers = __assign({}, snapshot)); });
        this.companyFedTaxInfoViewService.federalTaxes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (taxes) {
            _this.fedCompanyTaxes = taxes;
            _this.futaTax = _this.taxSelectorService.select(_app_core_services_tax_services_tax_selector_service__WEBPACK_IMPORTED_MODULE_8__["TaxCatalogKey"].Futa, _this.fedCompanyTaxes.taxes);
        });
        // Clear current state (if any)
        this.stateTaxInfoViewService.setCurrentState();
    };
    CompanyFedTaxInfoComponent.prototype.canLeaveAfterSave = function () {
        return this.save();
    };
    CompanyFedTaxInfoComponent.prototype.save = function () {
        var saver = this.saverFactory
            .create()
            .add(this.companyFedTaxInfoViewService.saveCompany(this.fedTaxVm));
        if (this.fedTaxVm.isHousehold) {
            saver.add(this.householdFedTaxViewService.save(this.hhFilers));
        }
        saver.add(this.companyFedTaxInfoViewService.saveTaxes(this.fedCompanyTaxes));
        return saver.go();
    };
    CompanyFedTaxInfoComponent.prototype.setFeinModified = function () {
        this.tincheck.unverifyFein();
    };
    CompanyFedTaxInfoComponent.prototype.validateFein = function () {
        // Avoid calling validation ------
        // if (this.fedTaxVm.fein &&
        //   this.fedTaxVm.feinStatus !== FeinStatus.Verified
        // ) {
        //   this.tincheck.validate();
        // }
    };
    return CompanyFedTaxInfoComponent;
}());



/***/ }),

/***/ "./src/app/company-tax-info/company-fed-tax-view.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/company-tax-info/company-fed-tax-view.service.ts ***!
  \******************************************************************/
/*! exports provided: CompanyFedTaxViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyFedTaxViewService", function() { return CompanyFedTaxViewService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @entity */ "./src/app/store/entity/index.ts");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _tax_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tax-utils */ "./src/app/company-tax-info/tax-utils.ts");
/* harmony import */ var _app_core_services_tax_services_tax_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/services/tax-services/tax-collector.service */ "./src/app/core/services/tax-services/tax-collector.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/entity/entity-services/company.service */ "./src/app/store/entity/entity-services/company.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};










var CompanyFedTaxViewService = /** @class */ (function () {
    function CompanyFedTaxViewService(companyService, taxCollectorService) {
        var _this = this;
        this.companyService = companyService;
        this.taxCollectorService = taxCollectorService;
        this.fedTaxVm$ = this.companyService.currentCompany$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (company) { return _this.toVm(company); }));
        this.federalTaxes$ = this.taxCollectorService.taxes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (taxes) { return taxes.companyFederalTaxes != null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (taxes) { return taxes.companyFederalTaxes; }));
    }
    CompanyFedTaxViewService.prototype.saveCompany = function (vm) {
        var _this = this;
        if (!vm) {
            return _core__WEBPACK_IMPORTED_MODULE_4__["Saver"].NO_SAVE; // no vm to save
        }
        return this.companyService.currentCompany$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["concatMap"])(function (company) { return _this.saveCompanyVm(vm, company); }));
    };
    CompanyFedTaxViewService.prototype.saveTaxes = function (taxes) {
        if (!taxes) {
            return _core__WEBPACK_IMPORTED_MODULE_4__["Saver"].NO_SAVE; // no vm to save
        }
        return this.taxCollectorService.saveCompanyFederalTaxes(taxes);
    };
    CompanyFedTaxViewService.prototype.saveCompanyVm = function (vm, company) {
        var _this = this;
        var fedVm = vm;
        var _a = Object(_tax_utils__WEBPACK_IMPORTED_MODULE_5__["setFeinStatus"])(company.fein, company.feinStatus, fedVm.fein), fein = _a.fein, feinStatus = _a.feinStatus;
        // fix to save FeinStatus when Verified
        // TODO: (Review wirth Ward and move inside setFeinStatus ??)
        var feinStatus2;
        if (vm.feinStatus === _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"].Verified && feinStatus !== _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"].Verified) {
            feinStatus2 = _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"].Verified;
        }
        else {
            feinStatus2 = feinStatus;
        }
        // end fix
        fedVm = __assign({}, fedVm, { legalName: fedVm.legalName.trim(), legalNameVerified: fedVm.legalNameVerified ? fedVm.legalNameVerified.trim() : null, fein: fein, feinStatus: feinStatus2, feinValidationCount: fedVm.feinValidationCount });
        var newCo = __assign({}, company, fedVm);
        // Check for difference with current company
        if (Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__["areDifferent"])(newCo, company, 'Company Tax')) {
            return this.companyService.update(newCo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (co) { return _this.toVm(co); }));
        }
        return _core__WEBPACK_IMPORTED_MODULE_4__["Saver"].NO_SAVE;
    };
    CompanyFedTaxViewService.prototype.toVm = function (company) {
        var vm = {
            isHousehold: company.isHousehold,
            isAgricultural: company.isAgricultural,
            legalName: company.legalName || '',
            legalNameVerified: company.legalNameVerified || null,
            fein: company.fein || '',
            feinStatus: company.feinStatus,
            feinValidationCount: company.feinValidationCount,
            legalNameVerificationSkipReason: company.legalNameVerificationSkipReason
        };
        return vm;
    };
    CompanyFedTaxViewService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_7__["defineInjectable"]({ factory: function CompanyFedTaxViewService_Factory() { return new CompanyFedTaxViewService(_angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_app_core_services_tax_services_tax_collector_service__WEBPACK_IMPORTED_MODULE_6__["TaxCollectorService"])); }, token: CompanyFedTaxViewService, providedIn: "root" });
    return CompanyFedTaxViewService;
}());



/***/ }),

/***/ "./src/app/company-tax-info/company-state-tax-info/company-state-tax-info.component.ngfactory.js":
/*!*******************************************************************************************************!*\
  !*** ./src/app/company-tax-info/company-state-tax-info/company-state-tax-info.component.ngfactory.js ***!
  \*******************************************************************************************************/
/*! exports provided: RenderType_CompanyStateTaxInfoComponent, View_CompanyStateTaxInfoComponent_0, View_CompanyStateTaxInfoComponent_Host_0, CompanyStateTaxInfoComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CompanyStateTaxInfoComponent", function() { return RenderType_CompanyStateTaxInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyStateTaxInfoComponent_0", function() { return View_CompanyStateTaxInfoComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyStateTaxInfoComponent_Host_0", function() { return View_CompanyStateTaxInfoComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyStateTaxInfoComponentNgFactory", function() { return CompanyStateTaxInfoComponentNgFactory; });
/* harmony import */ var _company_tax_info_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../company-tax-info-tab.scss.shim.ngstyle */ "./src/app/company-tax-info/company-tax-info-tab.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company_tax_company_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company-tax/company-tax.component.ngfactory */ "./src/app/company-tax-info/company-tax/company-tax.component.ngfactory.js");
/* harmony import */ var _company_tax_company_tax_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company-tax/company-tax.component */ "./src/app/company-tax-info/company-tax/company-tax.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_state_tax_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-state-tax-info.component */ "./src/app/company-tax-info/company-state-tax-info/company-state-tax-info.component.ts");
/* harmony import */ var _company_state_tax_view_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../company-state-tax-view.service */ "./src/app/company-tax-info/company-state-tax-view.service.ts");
/* harmony import */ var _core_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/saver */ "./src/app/core/saver.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_CompanyStateTaxInfoComponent = [_company_tax_info_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CompanyStateTaxInfoComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CompanyStateTaxInfoComponent, data: { "animation": [{ type: 7, name: "ngIfAnim", definitions: [{ type: 0, name: "*", styles: { type: 6, styles: { height: "*", opacity: 1, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 0, name: "void", styles: { type: 6, styles: { height: "0", opacity: 0, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 1, expr: ":leave", animation: { type: 4, styles: null, timings: "250ms ease-out" }, options: null }, { type: 1, expr: ":enter", animation: { type: 4, styles: null, timings: "250ms ease-in" }, options: null }], options: {} }] } });

function View_CompanyStateTaxInfoComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sp-company-tax", [], null, null, null, _company_tax_company_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CompanyTaxComponent_0"], _company_tax_company_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CompanyTaxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _company_tax_company_tax_component__WEBPACK_IMPORTED_MODULE_3__["CompanyTaxComponent"], [], { vm: [0, "vm"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CompanyStateTaxInfoComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Show All Taxes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "i", [["class", "icon material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["expand_more"]))], null, null); }
function View_CompanyStateTaxInfoComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hide Additional Taxes "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "i", [["class", "icon material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["expand_less"]))], null, null); }
function View_CompanyStateTaxInfoComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "my-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sp-company-tax", [], null, null, null, _company_tax_company_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CompanyTaxComponent_0"], _company_tax_company_tax_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CompanyTaxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _company_tax_company_tax_component__WEBPACK_IMPORTED_MODULE_3__["CompanyTaxComponent"], [], { vm: [0, "vm"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CompanyStateTaxInfoComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "additional-taxes mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["The following taxes require no additional input."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Additional Taxes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getStateTaxes(false); _ck(_v, 6, 0, currVal_0); }, null); }
function View_CompanyStateTaxInfoComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "a", [["class", "icon-right"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.showOtherTaxes = !_co.showOtherTaxes) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "icon-right"; var currVal_1 = _ck(_v, 3, 0, _co.showOtherTaxes); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = !_co.showOtherTaxes; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.showOtherTaxes; _ck(_v, 7, 0, currVal_3); var currVal_4 = _co.showOtherTaxes; _ck(_v, 9, 0, currVal_4); }, null); }
function View_CompanyStateTaxInfoComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getStateTaxes(true); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.hasOtherTaxes(); _ck(_v, 4, 0, currVal_1); }, null); }
function View_CompanyStateTaxInfoComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Home "]))], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit.homeLink; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CompanyStateTaxInfoComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["and "]))], null, null); }
function View_CompanyStateTaxInfoComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Work"]))], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit.workLink; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CompanyStateTaxInfoComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " ( "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" ) "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_v.context.$implicit.homeState === _co.state); _ck(_v, 3, 0, currVal_1); var currVal_2 = ((_v.context.$implicit.homeState === _co.state) && (_v.context.$implicit.workState === _co.state)); _ck(_v, 5, 0, currVal_2); var currVal_3 = (_v.context.$implicit.workState === _co.state); _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 1, 0, currVal_0); }); }
function View_CompanyStateTaxInfoComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ul", [["style", "list-style-type: none; padding-left: 0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm.employeesLocations; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CompanyStateTaxInfoComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "hr", [["class", "mt-3 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", " Employees:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hasVisibleTaxes(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 4); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = ((_co.vm.employeesLocations == null) ? null : _co.vm.employeesLocations.length); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 5); _ck(_v, 8, 0, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.state; _ck(_v, 6, 0, currVal_2); }); }
function View_CompanyStateTaxInfoComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["home address "]))], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit.homeLink; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CompanyStateTaxInfoComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["and "]))], null, null); }
function View_CompanyStateTaxInfoComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["work address (", ")"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.WellKnownRoutes.CompanyInfo; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.parent.context.$implicit.workAddressName; _ck(_v, 3, 0, currVal_3); }); }
function View_CompanyStateTaxInfoComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", "'s "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_1 = !_v.context.$implicit.isHomeAddressVerified; _ck(_v, 3, 0, currVal_1); var currVal_2 = (!_v.context.$implicit.isHomeAddressVerified && !_v.context.$implicit.isWorkAddressVerified); _ck(_v, 5, 0, currVal_2); var currVal_3 = !_v.context.$implicit.isWorkAddressVerified; _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 1, 0, currVal_0); }); }
function View_CompanyStateTaxInfoComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ul", [["style", "list-style-type: none; padding-left: 0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.notVerified(_co.vm.employeesLocations); _ck(_v, 2, 0, currVal_0); }, null); }
function View_CompanyStateTaxInfoComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Before we can figure out what taxes apply for "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [], [[8, "innerText", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [", we need to verify some addresses."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_co.vm.employeesLocations == null) ? null : _co.vm.employeesLocations.length); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 5); _ck(_v, 5, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.state; _ck(_v, 2, 0, currVal_0); }); }
function View_CompanyStateTaxInfoComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "mt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["There are no taxes that need your attention in ", "."]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.state; _ck(_v, 1, 0, currVal_0); }); }
function View_CompanyStateTaxInfoComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Although you listed a company location in this state, none of the employees in this application have a work or home address in this state. "]))], null, null); }
function View_CompanyStateTaxInfoComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "standard d-flex flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["addressNotVerified", 2]], null, 0, null, View_CompanyStateTaxInfoComponent_15)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noTaxes", 2]], null, 0, null, View_CompanyStateTaxInfoComponent_21)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noEEs", 2]], null, 0, null, View_CompanyStateTaxInfoComponent_22))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm.allEmployeeStateAddressesVerified; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_CompanyStateTaxInfoComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { modelContext: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompanyStateTaxInfoComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CompanyStateTaxInfoComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "sp-co-state-tax", [], null, null, null, View_CompanyStateTaxInfoComponent_0, RenderType_CompanyStateTaxInfoComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _company_state_tax_info_component__WEBPACK_IMPORTED_MODULE_6__["CompanyStateTaxInfoComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _company_state_tax_view_service__WEBPACK_IMPORTED_MODULE_7__["CompanyStateTaxViewService"], _core_saver__WEBPACK_IMPORTED_MODULE_8__["SaverFactoryService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CompanyStateTaxInfoComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("sp-co-state-tax", _company_state_tax_info_component__WEBPACK_IMPORTED_MODULE_6__["CompanyStateTaxInfoComponent"], View_CompanyStateTaxInfoComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/company-tax-info/company-state-tax-info/company-state-tax-info.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/company-tax-info/company-state-tax-info/company-state-tax-info.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CompanyStateTaxInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyStateTaxInfoComponent", function() { return CompanyStateTaxInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _company_state_tax_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company-state-tax-view.service */ "./src/app/company-tax-info/company-state-tax-view.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _core_well_known_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/well-known-routes */ "./src/app/core/well-known-routes.ts");






var CompanyStateTaxInfoComponent = /** @class */ (function () {
    function CompanyStateTaxInfoComponent(route, companyStateTaxViewService, saverFactory) {
        this.route = route;
        this.companyStateTaxViewService = companyStateTaxViewService;
        this.saverFactory = saverFactory;
        this.WellKnownRoutes = _core_well_known_routes__WEBPACK_IMPORTED_MODULE_5__["WellKnownRoutes"];
        this.showOtherTaxes = false;
    }
    CompanyStateTaxInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set the current state to the routed url (e.g, 'CA')
        // Component may be re-used so subscribe for changes
        this.route.url.subscribe(function (url) {
            _this.state = url[url.length - 1].path;
            _this.stateName = _this.companyStateTaxViewService.stateNames[_this.state] || '';
            _this.companyStateTaxViewService.setCurrentState(_this.state);
        });
        // Get the VM powering the component
        this.companyStateTaxViewService.currentStateTaxVm$.subscribe(function (e) {
            _this.vm = e;
        });
    };
    CompanyStateTaxInfoComponent.prototype.canLeaveAfterSave = function () {
        return this.save();
    };
    CompanyStateTaxInfoComponent.prototype.notVerified = function (stateEmployees) {
        return stateEmployees.filter(function (e) { return e.isVerified === false; });
    };
    CompanyStateTaxInfoComponent.prototype.hasVisibleTaxes = function () {
        return this.vm.taxes != null && this.vm.taxes.some(function (e) { return e.behavior.shouldShow; });
    };
    CompanyStateTaxInfoComponent.prototype.getStateTaxes = function (requireInput) {
        return this.vm.taxes.filter(function (t) {
            return t.behavior.shouldShow &&
                t.behavior.requireUserInput === requireInput;
        });
    };
    CompanyStateTaxInfoComponent.prototype.hasOtherTaxes = function () {
        if (this.vm.taxes == null || this.vm.taxes.length === 0) {
            return false;
        }
        return this.vm.taxes.some(function (e) { return e.behavior.requireUserInput === false; });
    };
    CompanyStateTaxInfoComponent.prototype.save = function () {
        var saver = this.saverFactory.create()
            .add(this.companyStateTaxViewService.saveTaxes(this.vm));
        return saver.go();
    };
    return CompanyStateTaxInfoComponent;
}());



/***/ }),

/***/ "./src/app/company-tax-info/company-state-tax-view.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/company-tax-info/company-state-tax-view.service.ts ***!
  \********************************************************************/
/*! exports provided: CompanyStateTaxViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyStateTaxViewService", function() { return CompanyStateTaxViewService; });
/* harmony import */ var _app_core_services_tax_services_tax_collector_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/tax-services/tax-collector.service */ "./src/app/core/services/tax-services/tax-collector.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _entity_entity_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @entity/entity-services */ "./src/app/store/entity/entity-services/index.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @entity */ "./src/app/store/entity/index.ts");
/* harmony import */ var _model_codes_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @model/codes-enums */ "./src/app/model/codes-enums/index.ts");
/* harmony import */ var _core_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/saver */ "./src/app/core/saver.ts");
/* harmony import */ var _store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/entity/entity-services/company.service */ "./src/app/store/entity/entity-services/company.service.ts");
/* harmony import */ var _store_entity_entity_services_tax_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/entity/entity-services/tax-location.service */ "./src/app/store/entity/entity-services/tax-location.service.ts");












var CompanyStateTaxViewService = /** @class */ (function () {
    function CompanyStateTaxViewService(companyService, taxCollectorService, taxLocationService) {
        this.companyService = companyService;
        this.taxCollectorService = taxCollectorService;
        this.taxLocationService = taxLocationService;
        /** The state name of the current state tax in this service */
        this.currentStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentState$ = this.currentStateSubject.asObservable();
        this.initialized = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.stateNames = _model_codes_enums__WEBPACK_IMPORTED_MODULE_6__["USStateCodes"].codes.reduce(function (acc, code) {
            acc[code.value] = code.displayName;
            return acc;
        }, {});
        this.currentState$ = this.currentStateSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        this.taxStates$ = this.taxLocationService.companyTaxStates$;
        this.currentCompany$ = this.companyService.currentCompany$;
        this.currentStateTaxVm$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.currentState$, this.taxCollectorService.taxes$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
            var state = _a[0], taxes = _a[1];
            return state != null && state !== '' && taxes.companyStateTaxes != null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var state = _a[0], taxes = _a[1];
            var stateTaxes = taxes.companyStateTaxes.find(function (t) { return t.state === state; });
            return stateTaxes;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
    }
    // Save the current State Tax VM (if any), then unsubscribe
    CompanyStateTaxViewService.prototype.ngOnDestroy = function () {
        // unsubscribe so we block further updates, if we update the store
        // then we wil re-trigger vm changes
        this.destroy$.next();
        // save changes
        this.currentStateSubject.next('');
    };
    /**
     * Set the current state, saving the prior state tax VM (if any), and
     * triggering a new state tax VM in currentStateTaxVm$ */
    CompanyStateTaxViewService.prototype.setCurrentState = function (state) {
        this.currentStateSubject.next(state || '');
    };
    /**
     * Set up all State Tax observables and subscribe to state VM changes that save
     * Must call before consuming other service methods */
    CompanyStateTaxViewService.prototype.initialize = function () {
        // Don't initialize twice. Paranoia
        if (this.initialized) {
            return;
        }
        this.initialized = true;
    };
    /** Save the State Tax, given the state, state company taxes and stored company taxes record */
    CompanyStateTaxViewService.prototype.saveTaxes = function (companyStateTaxes) {
        if (!companyStateTaxes) {
            return _core_saver__WEBPACK_IMPORTED_MODULE_7__["Saver"].NO_SAVE; // no vm to save
        }
        return this.taxCollectorService.saveCompanyStateTaxes(companyStateTaxes);
    };
    CompanyStateTaxViewService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function CompanyStateTaxViewService_Factory() { return new CompanyStateTaxViewService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_app_core_services_tax_services_tax_collector_service__WEBPACK_IMPORTED_MODULE_0__["TaxCollectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_store_entity_entity_services_tax_location_service__WEBPACK_IMPORTED_MODULE_9__["TaxLocationService"])); }, token: CompanyStateTaxViewService, providedIn: "root" });
    return CompanyStateTaxViewService;
}());



/***/ }),

/***/ "./src/app/company-tax-info/company-tax-info-container/company-tax-info-container.component.ngfactory.js":
/*!***************************************************************************************************************!*\
  !*** ./src/app/company-tax-info/company-tax-info-container/company-tax-info-container.component.ngfactory.js ***!
  \***************************************************************************************************************/
/*! exports provided: RenderType_CompanyTaxInfoContainerComponent, View_CompanyTaxInfoContainerComponent_0, View_CompanyTaxInfoContainerComponent_Host_0, CompanyTaxInfoContainerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CompanyTaxInfoContainerComponent", function() { return RenderType_CompanyTaxInfoContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyTaxInfoContainerComponent_0", function() { return View_CompanyTaxInfoContainerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyTaxInfoContainerComponent_Host_0", function() { return View_CompanyTaxInfoContainerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyTaxInfoContainerComponentNgFactory", function() { return CompanyTaxInfoContainerComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/validation/validate-property.directive */ "./src/app/shared/validation/validate-property.directive.ts");
/* harmony import */ var _shared_nav_bottom_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/nav-bottom.component.ngfactory */ "./src/app/shared/nav-bottom.component.ngfactory.js");
/* harmony import */ var _shared_nav_bottom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/nav-bottom.component */ "./src/app/shared/nav-bottom.component.ts");
/* harmony import */ var _core_services_tax_services_tax_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/services/tax-services/tax.service */ "./src/app/core/services/tax-services/tax.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_busy_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/services/busy.service */ "./src/app/core/services/busy.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/services/logger.service */ "./src/app/core/services/logger.service.ts");
/* harmony import */ var _core_services_tax_services_tax_behavior_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/services/tax-services/tax-behavior.service */ "./src/app/core/services/tax-services/tax-behavior.service.ts");
/* harmony import */ var _company_state_tax_view_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../company-state-tax-view.service */ "./src/app/company-tax-info/company-state-tax-view.service.ts");
/* harmony import */ var _store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/entity/entity-services/company.service */ "./src/app/store/entity/entity-services/company.service.ts");
/* harmony import */ var _core_services_tax_services_tax_collector_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/services/tax-services/tax-collector.service */ "./src/app/core/services/tax-services/tax-collector.service.ts");
/* harmony import */ var _store_entity_entity_services_tax_location_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/entity/entity-services/tax-location.service */ "./src/app/store/entity/entity-services/tax-location.service.ts");
/* harmony import */ var _company_tax_info_container_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./company-tax-info-container.component */ "./src/app/company-tax-info/company-tax-info-container/company-tax-info-container.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var styles_CompanyTaxInfoContainerComponent = [];
var RenderType_CompanyTaxInfoContainerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CompanyTaxInfoContainerComponent, data: { "animation": [{ type: 7, name: "tabRouteAnim", definitions: [{ type: 1, expr: "* <=> *", animation: [{ type: 11, selector: ".nav-button-container", animation: { type: 6, styles: { position: "absolute", opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter, :leave", animation: { type: 6, styles: { position: "absolute", top: "0rem", left: "0.95rem" }, offset: null }, options: { optional: true } }, { type: 3, steps: [{ type: 11, selector: ":enter", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: "300ms ease-in" }], options: { optional: true } }, { type: 11, selector: ":leave", animation: [{ type: 6, styles: { opacity: 1 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "300ms ease-out" }], options: { optional: true } }], options: null }], options: null }], options: {} }] } });

function View_CompanyTaxInfoContainerComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "a", [["routerLinkActive", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1720320, [["ads", 4]], 2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", " Tax"]))], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit.link; _ck(_v, 1, 0, currVal_2); var currVal_3 = ""; _ck(_v, 2, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _v.parent.context.$implicit.title; _ck(_v, 5, 0, currVal_4); }); }
function View_CompanyTaxInfoContainerComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "ngb-tab", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 2113536, [[2, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTab"], [], { id: [0, "id"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { titleTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { contentTpls: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_CompanyTaxInfoContainerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, [[3, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CompanyTaxInfoContainerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "mb-3 mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "ngb-tabset", [], null, null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NgbTabset_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NgbTabset"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 2146304, [[1, 4], ["tabset", 4]], 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabset"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabsetConfig"]], { activeId: [0, "activeId"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyTaxInfoContainerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.initialId; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.tabConfigurations; _ck(_v, 5, 0, currVal_1); }, null); }
function View_CompanyTaxInfoContainerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { tabset: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 19, "div", [["class", "static-nav d-flex flex-column"], ["id", "companyTaxComponent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "header", [["class", "header-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "div", [["class", "standard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Federal and State Taxes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 14, "div", [["class", "standard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyTaxInfoContainerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 11, "div", [["class", "container m-0 p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 10, "div", [["class", "container"]], [[24, "@tabRouteAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 7, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 737280, null, 0, _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_6__["FormDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 212992, [["outlet", 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "sp-nav-bottom", [], null, null, null, _shared_nav_bottom_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_NavBottomComponent_0"], _shared_nav_bottom_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_NavBottomComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 114688, null, 0, _shared_nav_bottom_component__WEBPACK_IMPORTED_MODULE_8__["NavBottomComponent"], [], { back: [0, "back"], next: [1, "next"], nextLabel: [2, "nextLabel"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showTabs; _ck(_v, 8, 0, currVal_0); _ck(_v, 16, 0); _ck(_v, 18, 0); var currVal_9 = _co.backLink; var currVal_10 = _co.nextLink; var currVal_11 = _co.nextLabel; _ck(_v, 20, 0, currVal_9, currVal_10, currVal_11); }, function (_ck, _v) { var currVal_1 = undefined; _ck(_v, 10, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_CompanyTaxInfoContainerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "sp-co-tax-info-container", [], null, null, null, View_CompanyTaxInfoContainerComponent_0, RenderType_CompanyTaxInfoContainerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](4608, null, _core_services_tax_services_tax_service__WEBPACK_IMPORTED_MODULE_9__["TaxService"], _core_services_tax_services_tax_service__WEBPACK_IMPORTED_MODULE_9__["TaxService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _core_services_busy_service__WEBPACK_IMPORTED_MODULE_11__["BusyService"], _core_services_logger_service__WEBPACK_IMPORTED_MODULE_12__["LoggerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](4608, null, _core_services_tax_services_tax_behavior_service__WEBPACK_IMPORTED_MODULE_13__["TaxBehaviorService"], _core_services_tax_services_tax_behavior_service__WEBPACK_IMPORTED_MODULE_13__["TaxBehaviorService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](131584, null, _company_state_tax_view_service__WEBPACK_IMPORTED_MODULE_14__["CompanyStateTaxViewService"], _company_state_tax_view_service__WEBPACK_IMPORTED_MODULE_14__["CompanyStateTaxViewService"], [_store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_15__["CompanyService"], _core_services_tax_services_tax_collector_service__WEBPACK_IMPORTED_MODULE_16__["TaxCollectorService"], _store_entity_entity_services_tax_location_service__WEBPACK_IMPORTED_MODULE_17__["TaxLocationService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 245760, null, 0, _company_tax_info_container_component__WEBPACK_IMPORTED_MODULE_18__["CompanyTaxInfoContainerComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _company_state_tax_view_service__WEBPACK_IMPORTED_MODULE_14__["CompanyStateTaxViewService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["Title"]], null, null)], function (_ck, _v) { _ck(_v, 4, 0); }, null); }
var CompanyTaxInfoContainerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-co-tax-info-container", _company_tax_info_container_component__WEBPACK_IMPORTED_MODULE_18__["CompanyTaxInfoContainerComponent"], View_CompanyTaxInfoContainerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/company-tax-info/company-tax-info-container/company-tax-info-container.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/company-tax-info/company-tax-info-container/company-tax-info-container.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CompanyTaxInfoContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyTaxInfoContainerComponent", function() { return CompanyTaxInfoContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _company_state_tax_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../company-state-tax-view.service */ "./src/app/company-tax-info/company-state-tax-view.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");






var CompanyTaxInfoContainerComponent = /** @class */ (function () {
    function CompanyTaxInfoContainerComponent(route, companyStateTaxViewService, ngTitle) {
        this.route = route;
        this.companyStateTaxViewService = companyStateTaxViewService;
        this.ngTitle = ngTitle;
        this.backLink = _core__WEBPACK_IMPORTED_MODULE_5__["WellKnownRoutes"].Employees;
        this.nextLink = _core__WEBPACK_IMPORTED_MODULE_5__["WellKnownRoutes"].BankAccount;
        this.nextLabel = 'Next Step';
        this.subs = new _core__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
    }
    CompanyTaxInfoContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyStateTaxViewService.initialize();
        this.subs.sink = this.companyStateTaxViewService.taxStates$.subscribe(function (states) {
            _this.showTabs = states.length > 0;
            if (_this.showTabs) {
                _this.nextLabel = 'Continue';
                var firstTab = [{ id: './', title: 'Federal', link: './', next: states[0] }];
                _this.tabConfigurations = firstTab.concat(states.map(function (s, ix) {
                    var key = 'state/' + s;
                    return { id: key, title: s, link: key, next: states[ix + 1] };
                }));
                _this.currentTabTitle = _this.tabConfigurations[0].title;
                _this.watchRouteChange();
            }
        });
    };
    CompanyTaxInfoContainerComponent.prototype.getUrlPath = function () {
        if (this.route.snapshot.firstChild) {
            return this.route.snapshot.firstChild.url.join('/');
        }
        return '';
    };
    CompanyTaxInfoContainerComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    CompanyTaxInfoContainerComponent.prototype.setBrowserTabTitle = function () {
        this.ngTitle.setTitle("SP Tax " + this.currentTabTitle);
    };
    /** Listen for route changes. Many of them re-use this component **/
    CompanyTaxInfoContainerComponent.prototype.watchRouteChange = function () {
        var _this = this;
        this.route.url.subscribe(function (url) {
            _this.tabLink = _this.getUrlPath() || _this.tabConfigurations[0].link;
            _this.initialId = _this.initialId || _this.tabLink; // only useful first time
            window.scrollTo(0, 0);
            // Wait a tick for tabs to draw
            setTimeout(function () { return _this.updateCurrentTabInfo(_this.tabLink); });
        });
    };
    /**
     * When the current tab changes, setup the tab-related info
     * such as the tab title, the browser tab title, the "next" link,
     */
    CompanyTaxInfoContainerComponent.prototype.updateCurrentTabInfo = function (tabLink) {
        if (this.tabset) {
            this.tabset.select(tabLink); // constraint: select expects an ID and not a link -> forcing id == link
        }
        var tabIx = this.tabConfigurations.findIndex(function (tt) { return tt.link === tabLink; });
        tabIx = tabIx < 0 ? 0 : tabIx;
        this.currentTabTitle = this.tabConfigurations[tabIx].title || '';
        var backTab = this.tabConfigurations[tabIx - 1];
        var nextTab = this.tabConfigurations[(tabIx += 1)];
        // On overflow, navigates away to the  BankAccount
        this.backLink = backTab ? backTab.link : _core__WEBPACK_IMPORTED_MODULE_5__["WellKnownRoutes"].Employees;
        this.nextLink = nextTab ? nextTab.link : _core__WEBPACK_IMPORTED_MODULE_5__["WellKnownRoutes"].BankAccount;
        this.nextLabel = nextTab ? 'Continue' : 'Next Step';
        this.setBrowserTabTitle();
    };
    return CompanyTaxInfoContainerComponent;
}());



/***/ }),

/***/ "./src/app/company-tax-info/company-tax-info-tab.scss.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/company-tax-info/company-tax-info-tab.scss.shim.ngstyle.js ***!
  \****************************************************************************/
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

/***/ "./src/app/company-tax-info/company-tax-info-vm.ts":
/*!*********************************************************!*\
  !*** ./src/app/company-tax-info/company-tax-info-vm.ts ***!
  \*********************************************************/
/*! exports provided: FederalTaxViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederalTaxViewModel", function() { return FederalTaxViewModel; });
var FederalTaxViewModel = /** @class */ (function () {
    function FederalTaxViewModel() {
        this.isHousehold = false;
        this.isAgricultural = false;
        this.legalName = null;
        this.legalNameVerified = null;
        this.legalNameVerificationSkipReason = null;
        this.fein = null;
        this.feinStatus = null;
        this.feinValidationCount = 0;
    }
    return FederalTaxViewModel;
}());



/***/ }),

/***/ "./src/app/company-tax-info/company-tax-info.module.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/company-tax-info/company-tax-info.module.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: CompanyTaxInfoModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyTaxInfoModuleNgFactory", function() { return CompanyTaxInfoModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company_tax_info_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-tax-info.module */ "./src/app/company-tax-info/company-tax-info.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _company_tax_info_container_company_tax_info_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-tax-info-container/company-tax-info-container.component.ngfactory */ "./src/app/company-tax-info/company-tax-info-container/company-tax-info-container.component.ngfactory.js");
/* harmony import */ var _company_fed_tax_info_company_fed_tax_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-fed-tax-info/company-fed-tax-info.component.ngfactory */ "./src/app/company-tax-info/company-fed-tax-info/company-fed-tax-info.component.ngfactory.js");
/* harmony import */ var _company_state_tax_info_company_state_tax_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-state-tax-info/company-state-tax-info.component.ngfactory */ "./src/app/company-tax-info/company-state-tax-info/company-state-tax-info.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _tin_check_tin_check_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tin-check/tin-check.module */ "./src/app/tin-check/tin-check.module.ts");
/* harmony import */ var _company_tax_info_container_company_tax_info_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./company-tax-info-container/company-tax-info-container.component */ "./src/app/company-tax-info/company-tax-info-container/company-tax-info-container.component.ts");
/* harmony import */ var _company_fed_tax_info_company_fed_tax_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./company-fed-tax-info/company-fed-tax-info.component */ "./src/app/company-tax-info/company-fed-tax-info/company-fed-tax-info.component.ts");
/* harmony import */ var _core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/routing-guards/page-leave-guard */ "./src/app/core/routing-guards/page-leave-guard.ts");
/* harmony import */ var _company_state_tax_info_company_state_tax_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./company-state-tax-info/company-state-tax-info.component */ "./src/app/company-tax-info/company-state-tax-info/company-state-tax-info.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var CompanyTaxInfoModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_company_tax_info_module__WEBPACK_IMPORTED_MODULE_1__["CompanyTaxInfoModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵzNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵbaNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵsNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵwNgFactory"], _company_tax_info_container_company_tax_info_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CompanyTaxInfoContainerComponentNgFactory"], _company_fed_tax_info_company_fed_tax_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["CompanyFedTaxInfoComponentNgFactory"], _company_state_tax_info_company_state_tax_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["CompanyStateTaxInfoComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ɵbb"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__["TextMaskModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__["TextMaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tin_check_tin_check_module__WEBPACK_IMPORTED_MODULE_13__["TinCheckModule"], _tin_check_tin_check_module__WEBPACK_IMPORTED_MODULE_13__["TinCheckModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _company_tax_info_module__WEBPACK_IMPORTED_MODULE_1__["CompanyTaxInfoModule"], _company_tax_info_module__WEBPACK_IMPORTED_MODULE_1__["CompanyTaxInfoModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTES"], function () { return [[{ path: "", component: _company_tax_info_container_company_tax_info_container_component__WEBPACK_IMPORTED_MODULE_14__["CompanyTaxInfoContainerComponent"], children: [{ path: "", component: _company_fed_tax_info_company_fed_tax_info_component__WEBPACK_IMPORTED_MODULE_15__["CompanyFedTaxInfoComponent"], canDeactivate: [_core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_16__["PageLeaveGuard"]] }, { path: "state/:state", component: _company_state_tax_info_company_state_tax_info_component__WEBPACK_IMPORTED_MODULE_17__["CompanyStateTaxInfoComponent"], canDeactivate: [_core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_16__["PageLeaveGuard"]] }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/company-tax-info/company-tax-info.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/company-tax-info/company-tax-info.module.ts ***!
  \*************************************************************/
/*! exports provided: CompanyTaxInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyTaxInfoModule", function() { return CompanyTaxInfoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core_routing_guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/routing-guards */ "./src/app/core/routing-guards/index.ts");
/* harmony import */ var _company_fed_tax_info_company_fed_tax_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-fed-tax-info/company-fed-tax-info.component */ "./src/app/company-tax-info/company-fed-tax-info/company-fed-tax-info.component.ts");
/* harmony import */ var _company_state_tax_info_company_state_tax_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-state-tax-info/company-state-tax-info.component */ "./src/app/company-tax-info/company-state-tax-info/company-state-tax-info.component.ts");
/* harmony import */ var _company_tax_info_container_company_tax_info_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-tax-info-container/company-tax-info-container.component */ "./src/app/company-tax-info/company-tax-info-container/company-tax-info-container.component.ts");





var routes = [
    {
        path: '',
        component: _company_tax_info_container_company_tax_info_container_component__WEBPACK_IMPORTED_MODULE_4__["CompanyTaxInfoContainerComponent"],
        children: [
            {
                path: '',
                component: _company_fed_tax_info_company_fed_tax_info_component__WEBPACK_IMPORTED_MODULE_2__["CompanyFedTaxInfoComponent"],
                canDeactivate: [_app_core_routing_guards__WEBPACK_IMPORTED_MODULE_1__["PageLeaveGuard"]]
            },
            {
                path: 'state/:state',
                component: _company_state_tax_info_company_state_tax_info_component__WEBPACK_IMPORTED_MODULE_3__["CompanyStateTaxInfoComponent"],
                canDeactivate: [_app_core_routing_guards__WEBPACK_IMPORTED_MODULE_1__["PageLeaveGuard"]]
            }
        ]
    }
];
var CompanyTaxInfoModule = /** @class */ (function () {
    function CompanyTaxInfoModule() {
    }
    return CompanyTaxInfoModule;
}());



/***/ }),

/***/ "./src/app/company-tax-info/company-tax/company-tax.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/company-tax-info/company-tax/company-tax.component.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_CompanyTaxComponent, View_CompanyTaxComponent_0, View_CompanyTaxComponent_Host_0, CompanyTaxComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CompanyTaxComponent", function() { return RenderType_CompanyTaxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyTaxComponent_0", function() { return View_CompanyTaxComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyTaxComponent_Host_0", function() { return View_CompanyTaxComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyTaxComponentNgFactory", function() { return CompanyTaxComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/radio-group/radio-group.component.ngfactory */ "./src/app/shared/radio-group/radio-group.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/radio-group/radio-button.component.ngfactory */ "./src/app/shared/radio-group/radio-button.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/radio-group/radio-button.component */ "./src/app/shared/radio-group/radio-button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_input_control_wrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/input/control-wrap.component.ngfactory */ "./src/app/shared/input/control-wrap.component.ngfactory.js");
/* harmony import */ var _shared_input_control_wrap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/input/control-wrap.component */ "./src/app/shared/input/control-wrap.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/validation/validate-property.directive */ "./src/app/shared/validation/validate-property.directive.ts");
/* harmony import */ var _store_validation_validation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/validation/validation.service */ "./src/app/store/validation/validation.service.ts");
/* harmony import */ var _shared_input_multi_mask_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/input/multi-mask.directive */ "./src/app/shared/input/multi-mask.directive.ts");
/* harmony import */ var _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/input/input-text.component.ngfactory */ "./src/app/shared/input/input-text.component.ngfactory.js");
/* harmony import */ var _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/input/input-text.component */ "./src/app/shared/input/input-text.component.ts");
/* harmony import */ var _shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/input/input-mask-catalog */ "./src/app/shared/input/input-mask-catalog.ts");
/* harmony import */ var _shared_datepicker_datepicker_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/datepicker/datepicker-popup.component.ngfactory */ "./src/app/shared/datepicker/datepicker-popup.component.ngfactory.js");
/* harmony import */ var _shared_datepicker_datepicker_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/datepicker/datepicker-popup.component */ "./src/app/shared/datepicker/datepicker-popup.component.ts");
/* harmony import */ var _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/model.component.ngfactory */ "./src/app/shared/model.component.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_tax_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./company-tax.component */ "./src/app/company-tax-info/company-tax/company-tax.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















var styles_CompanyTaxComponent = [];
var RenderType_CompanyTaxComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CompanyTaxComponent, data: { "animation": [{ type: 7, name: "ngIfAnim", definitions: [{ type: 0, name: "*", styles: { type: 6, styles: { height: "*", opacity: 1, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 0, name: "void", styles: { type: 6, styles: { height: "0", opacity: 0, "overflow-y": "hidden" }, offset: null }, options: undefined }, { type: 1, expr: ":leave", animation: { type: 4, styles: null, timings: "250ms ease-out" }, options: null }, { type: 1, expr: ":enter", animation: { type: 4, styles: null, timings: "250ms ease-in" }, options: null }], options: {} }] } });

function View_CompanyTaxComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "input-help-text"], ["helpText", ""]], [[24, "@ngIfAnim", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" State unemployment tax is mandated by the Federal Unemployment Tax Act (FUTA). However, there are some exceptions. Please verify that you have selected the correct status. "]))], null, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_CompanyTaxComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 10, "sp-radio-group", [["label", "Tax Exemption Status"], ["name", "isExempt"], ["propertyName", "isExempt"]], null, null, null, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 2, 2, "sp-radio-button", [], [[8, "id", 0]], null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, [[1, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Subject"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 2, 2, "sp-radio-button", [], [[8, "id", 0]], null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 49152, [[1, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Exempt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 3, 1, null, View_CompanyTaxComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Tax Exemption Status"; var currVal_1 = "isExempt"; var currVal_2 = "isExempt"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = false; _ck(_v, 5, 0, currVal_4); var currVal_6 = true; _ck(_v, 8, 0, currVal_6); var currVal_7 = _co.vm.isExempt; _ck(_v, 11, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_subject"); _ck(_v, 4, 0, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_exempt"); _ck(_v, 7, 0, currVal_5); }); }
function View_CompanyTaxComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_CompanyTaxComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 13, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Valid formats:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyTaxComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" # - number"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \u00C6 - letter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" @ - number or letter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" * - number, letter, & or ' "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.einFormats; _ck(_v, 5, 0, currVal_0); }, null); }
function View_CompanyTaxComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "input-help-text"], ["helpText", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Note that without a valid tax ID tax payments and returns may not be correct and you may incur penalties due to late filing or missing information."]))], null, null); }
function View_CompanyTaxComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 33, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 32, "sp-control", [["label", "Employer Identification Number"], ["tooltip", "true"]], [[8, "id", 0]], null, null, _shared_input_control_wrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ControlWrapComponent_0"], _shared_input_control_wrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ControlWrapComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1097728, null, 1, _shared_input_control_wrap_component__WEBPACK_IMPORTED_MODULE_8__["ControlWrapComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { label: [0, "label"], tooltip: [1, "tooltip"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 2, { input: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 2, "span", [["class", "label-tooltip"], ["tooltipText", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyTaxComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 1, 24, "div", [["class", "form-group mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 23, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 11, "input", [["class", "form-control"], ["disabledText", "APPLIED FOR"], ["modelType", "TaxBehaviorWrapper<CompanyTax>"], ["name", "ein"], ["propertyName", "ein"], ["spAsyncValidateProperty", ""], ["spMultiMask", ""], ["spValidateProperty", ""], ["type", "text"]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("input" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).onInputChanged($event) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 20).blur() !== false);
        ad = (pd_5 && ad);
    } if (("ngModelChange" === en)) {
        var pd_6 = ((_co.vm.ein = $event) !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 147456, null, 0, _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_10__["ValidatePropertyDirective"], [_store_validation_validation_service__WEBPACK_IMPORTED_MODULE_11__["ValidationService"]], { model: [0, "model"], modelType: [1, "modelType"], propertyName: [2, "propertyName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_10__["ValidatePropertyDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 147456, null, 0, _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_10__["AsyncValidatePropertyDirective"], [_store_validation_validation_service__WEBPACK_IMPORTED_MODULE_11__["ValidationService"]], { model: [0, "model"], modelType: [1, "modelType"], propertyName: [2, "propertyName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_ASYNC_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_10__["AsyncValidatePropertyDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 81920, null, 0, _shared_input_multi_mask_directive__WEBPACK_IMPORTED_MODULE_12__["MultiMaskDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { masks: [0, "masks"], dataValue: [1, "dataValue"], disabledText: [2, "disabledText"], disabled: [3, "disabled"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _shared_input_multi_mask_directive__WEBPACK_IMPORTED_MODULE_12__["MultiMaskDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 671744, [["einInput", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALIDATORS"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_ASYNC_VALIDATORS"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], isDisabled: [1, "isDisabled"], model: [2, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 737280, null, 0, _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_10__["ValidationStatusDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_10__["FormDirective"]]], { spValidationStatus: [0, "spValidationStatus"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 8, "div", [["class", "form-check d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 5, "input", [["name", "appliedForEin"], ["type", "checkbox"]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).onChange($event.target.checked) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.vm.appliedForEin = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 1, "label", [["class", "form-check-label ml-1"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Applied For"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "div", [["class", "validationError"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 671744, null, 0, _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_10__["ValidationFeedbackDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_10__["FormDirective"]]], { spValidationFeedback: [0, "spValidationFeedback"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 2, 1, null, View_CompanyTaxComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "Employer Identification Number"; var currVal_2 = "true"; _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = (((_co.einFormats == null) ? null : _co.einFormats.length) > 0); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 8); _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_13 = _co.vm; var currVal_14 = "TaxBehaviorWrapper<CompanyTax>"; var currVal_15 = "ein"; _ck(_v, 11, 0, currVal_13, currVal_14, currVal_15); var currVal_16 = _co.vm; var currVal_17 = "TaxBehaviorWrapper<CompanyTax>"; var currVal_18 = "ein"; _ck(_v, 13, 0, currVal_16, currVal_17, currVal_18); var currVal_19 = _co.einFormats; var currVal_20 = _co.vm.ein; var currVal_21 = "APPLIED FOR"; var currVal_22 = _co.vm.appliedForEin; _ck(_v, 15, 0, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_23 = "ein"; var currVal_24 = _co.vm.appliedForEin; var currVal_25 = _co.vm.ein; _ck(_v, 17, 0, currVal_23, currVal_24, currVal_25); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17); _ck(_v, 20, 0, currVal_26); var currVal_35 = "appliedForEin"; var currVal_36 = _co.vm.appliedForEin; _ck(_v, 25, 0, currVal_35, currVal_36); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17); _ck(_v, 31, 0, currVal_38); var currVal_39 = _co.vm.appliedForEin; _ck(_v, 33, 0, currVal_39); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_ein_container"); _ck(_v, 1, 0, currVal_0); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_ein"); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).ngClassUntouched; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).ngClassTouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).ngClassPristine; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).ngClassDirty; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).ngClassValid; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).ngClassInvalid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).ngClassPending; _ck(_v, 9, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_appliedForEin"); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassUntouched; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassTouched; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassPristine; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassDirty; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassValid; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassInvalid; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).ngClassPending; _ck(_v, 22, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34); var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_appliedForEin"); _ck(_v, 28, 0, currVal_37); }); }
function View_CompanyTaxComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" Do NOT add training or assessment to your rate. The ", " tax rate is between "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" and "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". See more details "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "a", [["target", "_blank"]], [[1, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm.name; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.vm.behavior.rate.minAllowedRate; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.vm.behavior.rate.maxAllowedRate; _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.vm.behavior.rate.detailsLink; _ck(_v, 8, 0, currVal_3); }); }
function View_CompanyTaxComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "sp-input", [["append", "%"], ["class", "input-medium"], ["label", "Tax Rate"], ["name", "rate"], ["placeholder", "0.00"], ["propertyName", "rate"]], [[8, "id", 0]], null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_14__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_14__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_15__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { append: [0, "append"], classNames: [1, "classNames"], label: [2, "label"], name: [3, "name"], placeholder: [4, "placeholder"], propertyName: [5, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 1, 2, "div", [["class", "input-help-text"], ["helpTextAbove", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyTaxComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "%"; var currVal_2 = "input-append"; var currVal_3 = "Tax Rate"; var currVal_4 = "rate"; var currVal_5 = "0.00"; var currVal_6 = "rate"; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _co.vm.behavior.rate; _ck(_v, 6, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_rate"); _ck(_v, 1, 0, currVal_0); }); }
function View_CompanyTaxComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "sp-input", [["label", "Unified Business Identifier"], ["maskType", "ubi"], ["name", "ubi"], ["propertyName", "ubi"]], [[8, "id", 0]], null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_14__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_14__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_15__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], maskType: [3, "maskType"] }, null)], function (_ck, _v) { var currVal_1 = "Unified Business Identifier"; var currVal_2 = "ubi"; var currVal_3 = "ubi"; var currVal_4 = "ubi"; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_ubi"); _ck(_v, 1, 0, currVal_0); }); }
function View_CompanyTaxComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "sp-datepicker", [["label", "Business Start Date"], ["name", "businessStartDate"], ["propertyName", "businessStartDate"]], [[8, "id", 0]], null, null, _shared_datepicker_datepicker_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_DatePickerPopupComponent_0"], _shared_datepicker_datepicker_popup_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_DatePickerPopupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_datepicker_datepicker_popup_component__WEBPACK_IMPORTED_MODULE_17__["DatePickerPopupComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _shared_datepicker_datepicker_popup_component__WEBPACK_IMPORTED_MODULE_17__["DatePickerPopupComponent"], [[2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"] }, null)], function (_ck, _v) { var currVal_1 = "Business Start Date"; var currVal_2 = "businessStartDate"; var currVal_3 = "businessStartDate"; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_businessStartDate"); _ck(_v, 1, 0, currVal_0); }); }
function View_CompanyTaxComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 15, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 14, "sp-model", [["modelType", "TaxBehaviorWrapper<CompanyTax>"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 573440, null, 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", " Tax"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_CompanyTaxComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_CompanyTaxComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_CompanyTaxComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_CompanyTaxComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_CompanyTaxComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm; var currVal_1 = "TaxBehaviorWrapper<CompanyTax>"; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _co.vm.behavior.hasExemption; _ck(_v, 7, 0, currVal_3); var currVal_4 = _co.vm.behavior.hasEin; _ck(_v, 9, 0, currVal_4); var currVal_5 = _co.vm.behavior.hasRate; _ck(_v, 11, 0, currVal_5); var currVal_6 = _co.vm.behavior.hasUbi; _ck(_v, 13, 0, currVal_6); var currVal_7 = _co.vm.behavior.hasBusinessStartDate; _ck(_v, 15, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.vm.name; _ck(_v, 5, 0, currVal_2); }); }
function View_CompanyTaxComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [["class", "mt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["We don't have any format information. Please double check the input EIN."]))], null, null); }
function View_CompanyTaxComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "form", [["novalidate", ""]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 4210688, [["form", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ControlContainer"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 737280, null, 0, _shared_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_10__["FormDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["ActivatedRoute"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyTaxComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["noEinFormats", 2]], null, 0, null, View_CompanyTaxComponent_12))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_8 = _co.vm.behavior.shouldShow; _ck(_v, 7, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.namePrefix, "_container"); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_CompanyTaxComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-company-tax", [], null, null, null, View_CompanyTaxComponent_0, RenderType_CompanyTaxComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _company_tax_component__WEBPACK_IMPORTED_MODULE_20__["CompanyTaxComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CompanyTaxComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-company-tax", _company_tax_component__WEBPACK_IMPORTED_MODULE_20__["CompanyTaxComponent"], View_CompanyTaxComponent_Host_0, { vm: "vm" }, {}, []);



/***/ }),

/***/ "./src/app/company-tax-info/company-tax/company-tax.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/company-tax-info/company-tax/company-tax.component.ts ***!
  \***********************************************************************/
/*! exports provided: CompanyTaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyTaxComponent", function() { return CompanyTaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var CompanyTaxComponent = /** @class */ (function () {
    function CompanyTaxComponent() {
        this.einFormats = null;
        this.namePrefix = null;
    }
    CompanyTaxComponent.prototype.ngOnInit = function () {
        this.namePrefix = this.vm.mtsTaxCode;
        this.determineRenderState();
        this.determineFormatting();
    };
    CompanyTaxComponent.prototype.determineRenderState = function () {
        this.vm.behavior.shouldShow = this.vm.behavior.shouldShow || true;
        this.vm.behavior.hasExemption = this.vm.behavior.hasExemption || false;
        this.vm.behavior.hasExemptionReason = false;
        this.vm.behavior.hasEin = this.vm.behavior.hasEin || false;
        this.vm.behavior.hasRate = this.vm.behavior.hasRate || false;
        this.vm.behavior.hasFilingStatus = false;
        this.vm.behavior.hasLowIncomeExempt = false;
        this.vm.behavior.hasWithholding = false;
        this.vm.behavior.hasUbi = this.vm.behavior.hasUbi || false;
        this.vm.behavior.hasBusinessStartDate = this.vm.behavior.hasBusinessStartDate || false;
        this.vm.behavior.taxEinFormats = this.vm.behavior.taxEinFormats || [];
        this.vm.behavior.filingStatuses = this.vm.behavior.filingStatuses || [];
    };
    CompanyTaxComponent.prototype.determineFormatting = function () {
        if (this.vm.behavior.taxEinFormats != null && this.vm.behavior.taxEinFormats.length > 0) {
            this.einFormats = this.vm.behavior.taxEinFormats.map(function (e) { return e.format; });
        }
    };
    return CompanyTaxComponent;
}());



/***/ }),

/***/ "./src/app/company-tax-info/household-fed-tax-view.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/company-tax-info/household-fed-tax-view.service.ts ***!
  \********************************************************************/
/*! exports provided: HouseholdFedTaxViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseholdFedTaxViewService", function() { return HouseholdFedTaxViewService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entity */ "./src/app/store/entity/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_entity_entity_services_household_filers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/entity/entity-services/household-filers.service */ "./src/app/store/entity/entity-services/household-filers.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







var HouseholdFedTaxViewService = /** @class */ (function () {
    function HouseholdFedTaxViewService(householdFilersService) {
        this.householdFilersService = householdFilersService;
        this.hhFilers$ = this.householdFilersService.householdFilers$;
    }
    HouseholdFedTaxViewService.prototype.save = function (snapshot) {
        var _this = this;
        if (!snapshot) {
            return _core__WEBPACK_IMPORTED_MODULE_4__["Saver"].NO_SAVE; // no vm to save
        }
        return this.householdFilersService.householdFilers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["concatMap"])(function (hhf) { return _this.saveHouseholdFilers(snapshot, hhf); }));
    };
    HouseholdFedTaxViewService.prototype.saveHouseholdFilers = function (snapshot, oldHhf) {
        var newHhf = __assign({}, oldHhf, snapshot);
        // Check for difference with current HouseholdFiller
        if (Object(_core_utils__WEBPACK_IMPORTED_MODULE_1__["areDifferent"])(newHhf, oldHhf, 'HouseholdFiller')) {
            return this.householdFilersService.upsert(newHhf);
        }
        return _core__WEBPACK_IMPORTED_MODULE_4__["Saver"].NO_SAVE;
    };
    HouseholdFedTaxViewService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"]({ factory: function HouseholdFedTaxViewService_Factory() { return new HouseholdFedTaxViewService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_store_entity_entity_services_household_filers_service__WEBPACK_IMPORTED_MODULE_6__["HouseholdFilersService"])); }, token: HouseholdFedTaxViewService, providedIn: "root" });
    return HouseholdFedTaxViewService;
}());



/***/ }),

/***/ "./src/app/company-tax-info/tax-utils.ts":
/*!***********************************************!*\
  !*** ./src/app/company-tax-info/tax-utils.ts ***!
  \***********************************************/
/*! exports provided: setFeinStatus, setSeinStatus, setSuiStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFeinStatus", function() { return setFeinStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSeinStatus", function() { return setSeinStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSuiStatus", function() { return setSuiStatus; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");

/** Calculate Fed tax id (fein) status from old and new values */
function setFeinStatus(oldFein, oldFeinStatus, newFein) {
    var _a = setTaxIdStatus(oldFein, oldFeinStatus, newFein), taxId = _a.taxId, taxIdStatus = _a.taxIdStatus, appliedFor = _a.appliedFor;
    return {
        fein: taxId,
        feinStatus: taxIdStatus,
    };
}
/** Calculate State tax id (sein) status from old and new values */
function setSeinStatus(oldSein, oldSeinStatus, newSein, newAppliedFor) {
    var _a = setTaxIdStatus(oldSein, oldSeinStatus, newSein, newAppliedFor), taxId = _a.taxId, taxIdStatus = _a.taxIdStatus, appliedFor = _a.appliedFor;
    return {
        sein: taxId,
        seinStatus: taxIdStatus,
        seinAppliedFor: appliedFor
    };
}
/** Calculate State Unemployment (sui) id status from old and new values */
function setSuiStatus(oldSuid, oldSuiStatus, newSuid, newAppliedFor) {
    var _a = setTaxIdStatus(oldSuid, oldSuiStatus, newSuid, newAppliedFor), taxId = _a.taxId, taxIdStatus = _a.taxIdStatus, appliedFor = _a.appliedFor;
    return {
        suid: taxId,
        suiStatus: taxIdStatus,
        suidAppliedFor: appliedFor
    };
}
// Logic in common for all three
function setTaxIdStatus(oldTaxId, oldTaxIdStatus, newTaxId, newAppliedFor) {
    newTaxId = (newTaxId || '').trim();
    var result;
    if (newTaxId === oldTaxId) {
        result = {
            taxId: oldTaxId,
            taxIdStatus: oldTaxIdStatus,
            appliedFor: newTaxId ? false : newAppliedFor === true
        };
    }
    if (newTaxId) {
        result = {
            taxId: newTaxId,
            taxIdStatus: _model__WEBPACK_IMPORTED_MODULE_0__["SeinStatus"].Unverified,
            appliedFor: false
        };
    }
    else {
        result = {
            taxId: null,
            taxIdStatus: (newAppliedFor ? _model__WEBPACK_IMPORTED_MODULE_0__["SeinStatus"].AppliedFor : null),
            appliedFor: newAppliedFor === true
        };
    }
    return result;
}


/***/ }),

/***/ "./src/app/shared/datepicker/datepicker-popup.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/shared/datepicker/datepicker-popup.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_DatePickerPopupComponent, View_DatePickerPopupComponent_0, View_DatePickerPopupComponent_Host_0, DatePickerPopupComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DatePickerPopupComponent", function() { return RenderType_DatePickerPopupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DatePickerPopupComponent_0", function() { return View_DatePickerPopupComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DatePickerPopupComponent_Host_0", function() { return View_DatePickerPopupComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerPopupComponentNgFactory", function() { return DatePickerPopupComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validation/validate-property.directive */ "./src/app/shared/validation/validate-property.directive.ts");
/* harmony import */ var _store_validation_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/validation/validation.service */ "./src/app/store/validation/validation.service.ts");
/* harmony import */ var _datepicker_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datepicker-popup.component */ "./src/app/shared/datepicker/datepicker-popup.component.ts");
/* harmony import */ var _model_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model.component */ "./src/app/shared/model.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_DatePickerPopupComponent = [];
var RenderType_DatePickerPopupComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DatePickerPopupComponent, data: {} });

function View_DatePickerPopupComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { child: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 21, "div", [["class", "form-group"]], null, [[null, "keyup.escape"]], function (_v, en, $event) { var ad = true; if (("keyup.escape" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 18, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 16777216, null, null, 12, "input", [["class", "form-control"], ["ngbDatepicker", ""], ["spAsyncValidateProperty", ""], ["spValidateProperty", ""]], [[8, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "dateSelect"], [null, "blur"], [null, "keyup.enter"], [null, "focus"], [null, "input"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("input" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).manualDateChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("change" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).manualDateChange($event.target.value, true) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).onBlur() !== false);
        ad = (pd_6 && ad);
    } if (("blur" === en)) {
        var pd_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).blur() !== false);
        ad = (pd_7 && ad);
    } if (("ngModelChange" === en)) {
        var pd_8 = (_co.setValue($event) !== false);
        ad = (pd_8 && ad);
    } if (("dateSelect" === en)) {
        var pd_9 = (_co.onValueChanged() !== false);
        ad = (pd_9 && ad);
    } if (("blur" === en)) {
        var pd_10 = (_co.onBlur($event.target.value) !== false);
        ad = (pd_10 && ad);
    } if (("keyup.enter" === en)) {
        var pd_11 = (_co.onValueChanged() !== false);
        ad = (pd_11 && ad);
    } if (("focus" === en)) {
        var pd_12 = (_co.onFocus() !== false);
        ad = (pd_12 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ɵx"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ɵx"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, [["d", 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ɵx"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]], { disabled: [0, "disabled"] }, { dateSelect: "dateSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 147456, null, 0, _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_4__["ValidatePropertyDirective"], [_store_validation_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"]], { model: [0, "model"], modelType: [1, "modelType"], propertyName: [2, "propertyName"], group: [3, "group"], modelContext: [4, "modelContext"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"], _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_4__["ValidatePropertyDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 147456, null, 0, _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_4__["AsyncValidatePropertyDirective"], [_store_validation_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"]], { model: [0, "model"], modelType: [1, "modelType"], propertyName: [2, "propertyName"], group: [3, "group"], modelContext: [4, "modelContext"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_4__["AsyncValidatePropertyDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, [["input", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], isDisabled: [1, "isDisabled"], model: [2, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 737280, null, 0, _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_4__["ValidationStatusDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_4__["FormDirective"]]], { spValidationStatus: [0, "spValidationStatus"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "button", [["class", "dp-btn"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 0, "img", [["src", "/assets/images/icon-calendar.svg"], ["style", "width: 1.2rem; height: 1rem; cursor: pointer;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 671744, null, 0, _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_4__["ValidationFeedbackDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _validation_validate_property_directive__WEBPACK_IMPORTED_MODULE_4__["FormDirective"]]], { spValidationFeedback: [0, "spValidationFeedback"], displayName: [1, "displayName"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_12 = _co.disabled; _ck(_v, 8, 0, currVal_12); var currVal_13 = _co.model; var currVal_14 = _co.modelType; var currVal_15 = _co.propertyName; var currVal_16 = _co.group; var currVal_17 = _co.modelContext; _ck(_v, 9, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_18 = _co.model; var currVal_19 = _co.modelType; var currVal_20 = _co.propertyName; var currVal_21 = _co.group; var currVal_22 = _co.modelContext; _ck(_v, 11, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_23 = (_co.name || "dbp"); var currVal_24 = _co.disabled; var currVal_25 = _co.getValue(); _ck(_v, 14, 0, currVal_23, currVal_24, currVal_25); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14); _ck(_v, 17, 0, currVal_26); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14); var currVal_29 = _co.label; _ck(_v, 22, 0, currVal_28, currVal_29); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.name; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.label; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.name; var currVal_3 = (_co.placeholder || "yyyy-mm-dd"); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).disabled; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassUntouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassTouched; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassPristine; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassDirty; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassValid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassInvalid; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassPending; _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_27 = _co.disabled; _ck(_v, 19, 0, currVal_27); }); }
function View_DatePickerPopupComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "sp-datepicker", [], null, null, null, View_DatePickerPopupComponent_0, RenderType_DatePickerPopupComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_datepicker_popup_component__WEBPACK_IMPORTED_MODULE_6__["DatePickerPopupComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _datepicker_popup_component__WEBPACK_IMPORTED_MODULE_6__["DatePickerPopupComponent"], [[2, _model_component__WEBPACK_IMPORTED_MODULE_7__["ModelComponent"]]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var DatePickerPopupComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-datepicker", _datepicker_popup_component__WEBPACK_IMPORTED_MODULE_6__["DatePickerPopupComponent"], View_DatePickerPopupComponent_Host_0, { disabled: "disabled", group: "group", label: "label", model: "model", modelType: "modelType", name: "name", type: "type", placeholder: "placeholder", propertyName: "propertyName" }, { focus: "focus", blur: "blur", onChange: "onChange", onTouched: "onTouched" }, []);



/***/ }),

/***/ "./src/app/shared/input/control-wrap.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/shared/input/control-wrap.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_ControlWrapComponent, View_ControlWrapComponent_0, View_ControlWrapComponent_Host_0, ControlWrapComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ControlWrapComponent", function() { return RenderType_ControlWrapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ControlWrapComponent_0", function() { return View_ControlWrapComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ControlWrapComponent_Host_0", function() { return View_ControlWrapComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlWrapComponentNgFactory", function() { return ControlWrapComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _control_wrap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-wrap.component */ "./src/app/shared/input/control-wrap.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ControlWrapComponent = [];
var RenderType_ControlWrapComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ControlWrapComponent, data: {} });

function View_ControlWrapComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[1, 0], ["tooltipButton", 1]], null, 1, "i", [["class", "material-icons tooltip-icon clickable"], ["tabIndex", "0"]], null, [[null, "click"], [null, "keypress"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openTooltip() !== false);
        ad = (pd_0 && ad);
    } if (("keypress" === en)) {
        var pd_1 = (_co.openKeypress($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["info"]))], null, null); }
function View_ControlWrapComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["id", "tooltipZone"], ["tabIndex", "1"]], null, [[null, "blur"], [null, "keypress"], [null, "keyup.esc"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_co.closeTooltip($event) !== false);
        ad = (pd_0 && ad);
    } if (("keypress" === en)) {
        var pd_1 = (_co.closeKeypress($event) !== false);
        ad = (pd_1 && ad);
    } if (("keyup.esc" === en)) {
        var pd_2 = (_co.closeTooltip() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null); }
function View_ControlWrapComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { tooltipButton: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { root: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, [[2, 0], ["root", 1]], null, 10, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 7, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["class", "label-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 4, "span", [["class", "tooltip-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ControlWrapComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ControlWrapComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 2)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.tooltip; _ck(_v, 8, 0, currVal_2); var currVal_3 = (_co.tooltip && _co.open); _ck(_v, 10, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.label; _ck(_v, 5, 0, currVal_1); }); }
function View_ControlWrapComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 2, "sp-control", [], null, null, null, View_ControlWrapComponent_0, RenderType_ControlWrapComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1097728, null, 1, _control_wrap_component__WEBPACK_IMPORTED_MODULE_2__["ControlWrapComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 1, { input: 0 })], null, null); }
var ControlWrapComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-control", _control_wrap_component__WEBPACK_IMPORTED_MODULE_2__["ControlWrapComponent"], View_ControlWrapComponent_Host_0, { label: "label", tooltip: "tooltip" }, {}, ["[tooltipText]", "*", "[helpText]"]);



/***/ }),

/***/ "./src/app/tin-check/index.ts":
/*!************************************!*\
  !*** ./src/app/tin-check/index.ts ***!
  \************************************/
/*! exports provided: TinCheckUIState, TinCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tin_check_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tin-check.component */ "./src/app/tin-check/tin-check.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TinCheckUIState", function() { return _tin_check_component__WEBPACK_IMPORTED_MODULE_0__["TinCheckUIState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TinCheckComponent", function() { return _tin_check_component__WEBPACK_IMPORTED_MODULE_0__["TinCheckComponent"]; });




/***/ }),

/***/ "./src/app/tin-check/tin-check-review-advice.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/tin-check/tin-check-review-advice.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_TinCheckReviewAdviceComponent, View_TinCheckReviewAdviceComponent_0, View_TinCheckReviewAdviceComponent_Host_0, TinCheckReviewAdviceComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TinCheckReviewAdviceComponent", function() { return RenderType_TinCheckReviewAdviceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TinCheckReviewAdviceComponent_0", function() { return View_TinCheckReviewAdviceComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TinCheckReviewAdviceComponent_Host_0", function() { return View_TinCheckReviewAdviceComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinCheckReviewAdviceComponentNgFactory", function() { return TinCheckReviewAdviceComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tin_check_review_advice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tin-check-review-advice */ "./src/app/tin-check/tin-check-review-advice.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_TinCheckReviewAdviceComponent = [];
var RenderType_TinCheckReviewAdviceComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TinCheckReviewAdviceComponent, data: {} });

function View_TinCheckReviewAdviceComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" A document from the IRS or one of your tax filings will display your Tax ID and exact legal name. Compare such a document with the Tax ID and the legal name that you entered here and correct them as necessary. "]))], null, null); }
function View_TinCheckReviewAdviceComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-tincheck-review-advice", [], null, null, null, View_TinCheckReviewAdviceComponent_0, RenderType_TinCheckReviewAdviceComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _tin_check_review_advice__WEBPACK_IMPORTED_MODULE_1__["TinCheckReviewAdviceComponent"], [], null, null)], null, null); }
var TinCheckReviewAdviceComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-tincheck-review-advice", _tin_check_review_advice__WEBPACK_IMPORTED_MODULE_1__["TinCheckReviewAdviceComponent"], View_TinCheckReviewAdviceComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/tin-check/tin-check-review-advice.ts":
/*!******************************************************!*\
  !*** ./src/app/tin-check/tin-check-review-advice.ts ***!
  \******************************************************/
/*! exports provided: TinCheckReviewAdviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinCheckReviewAdviceComponent", function() { return TinCheckReviewAdviceComponent; });
var TinCheckReviewAdviceComponent = /** @class */ (function () {
    function TinCheckReviewAdviceComponent() {
    }
    return TinCheckReviewAdviceComponent;
}());



/***/ }),

/***/ "./src/app/tin-check/tin-check-view.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/tin-check/tin-check-view.service.ts ***!
  \*****************************************************/
/*! exports provided: MAX_VALIDATION_COUNT, TinCheckViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_VALIDATION_COUNT", function() { return MAX_VALIDATION_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinCheckViewService", function() { return TinCheckViewService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @entity */ "./src/app/store/entity/index.ts");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @session */ "./src/app/store/session/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _tin_check_vm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tin-check-vm */ "./src/app/tin-check/tin-check-vm.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/entity/entity-services/company.service */ "./src/app/store/entity/entity-services/company.service.ts");
/* harmony import */ var _store_session_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/session/session.service */ "./src/app/store/session/session.service.ts");
/* harmony import */ var _core_services_tin_check_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/services/tin-check.service */ "./src/app/core/services/tin-check.service.ts");











var MAX_VALIDATION_COUNT = 3;
var TinCheckViewService = /** @class */ (function () {
    function TinCheckViewService(companyService, sessionService, tinCheckService) {
        this.companyService = companyService;
        this.sessionService = sessionService;
        this.tinCheckService = tinCheckService;
        this.readOnly$ = sessionService.readOnly$; // pass-thru to component
    }
    /**
     * Run a TinCheck on this FEIN/LegalName combination
     * @returns Terminating observable of the TinCheck service response.
     * Must subscribe but need not unsubscribe.
     */
    TinCheckViewService.prototype.check = function (fein, legalName) {
        return this.tinCheckService.check(fein, legalName);
    };
    TinCheckViewService.prototype.detectLegalNameChangeAfterVerify = function (fedTaxVm) {
        this.companyService.detectLegalNameChangeAfterVerify(fedTaxVm);
    };
    /**
     * Get the TinCheckViewModel from the Federal Tax VM & the company.
     */
    TinCheckViewService.prototype.getTinCheckViewModel = function (fedTaxVm) {
        var fein = fedTaxVm.fein, feinStatus = fedTaxVm.feinStatus, legalName = fedTaxVm.legalName, legalNameVerified = fedTaxVm.legalNameVerified;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(this.companyService.currentCompany$, this.sessionService.isAdmin$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var company = _a[0], isAdmin = _a[1];
            var vm = new _tin_check_vm__WEBPACK_IMPORTED_MODULE_6__["TinCheckViewModel"]();
            Object.assign(vm, {
                isAdmin: isAdmin,
                isHousehold: company.isHousehold,
                fein: fein,
                legalName: legalName || '',
                matchedLegalName: legalNameVerified
            });
            return vm;
        }));
    };
    TinCheckViewService.prototype.unverifyFein = function (fedTaxVm) {
        this.companyService.unverifyFein(fedTaxVm);
    };
    TinCheckViewService.prototype.updateFedTaxVm = function (fedTaxVm, feinStatus, fein, legalName, verifyAttempts, isServiceUnavailable) {
        legalName = legalName ? legalName.trim() : '';
        fedTaxVm.feinStatus = feinStatus;
        fedTaxVm.fein = fein;
        fedTaxVm.legalName = legalName;
        fedTaxVm.legalNameVerified = feinStatus === _model__WEBPACK_IMPORTED_MODULE_2__["FeinStatus"].Verified ? legalName : null;
        if (verifyAttempts) {
            fedTaxVm.feinValidationCount += verifyAttempts;
        }
        if (isServiceUnavailable) {
            // Set the reason for skip the verification control
            fedTaxVm.legalNameVerified = legalName;
            fedTaxVm.legalNameVerificationSkipReason = _model__WEBPACK_IMPORTED_MODULE_2__["REASON_SERVICE_UNAVAILABLE"];
        }
        else {
            fedTaxVm.legalNameVerificationSkipReason = null;
        }
    };
    Object.defineProperty(TinCheckViewService.prototype, "tinCheckCount", {
        get: function () {
            return this.tinCheckService.tinCheckCount;
        },
        enumerable: true,
        configurable: true
    });
    TinCheckViewService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_7__["defineInjectable"]({ factory: function TinCheckViewService_Factory() { return new TinCheckViewService(_angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_store_session_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_core_services_tin_check_service__WEBPACK_IMPORTED_MODULE_10__["TinCheckService"])); }, token: TinCheckViewService, providedIn: "root" });
    return TinCheckViewService;
}());



/***/ }),

/***/ "./src/app/tin-check/tin-check-vm.ts":
/*!*******************************************!*\
  !*** ./src/app/tin-check/tin-check-vm.ts ***!
  \*******************************************/
/*! exports provided: TinCheckViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinCheckViewModel", function() { return TinCheckViewModel; });
var TinCheckViewModel = /** @class */ (function () {
    function TinCheckViewModel() {
        this.isAdmin = false;
        this.isHousehold = false;
        this.isEditingLegalName = false;
        this.serviceResponse = 'No TinCheck service response yet';
    }
    Object.defineProperty(TinCheckViewModel.prototype, "companyLabel", {
        /** "company" or "household" */
        get: function () {
            return this.isHousehold ? 'household' : 'company';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinCheckViewModel.prototype, "CompanyLabel", {
        /** "Company" or "Household" */
        get: function () {
            return this.isHousehold ? 'Household' : 'Company';
        },
        enumerable: true,
        configurable: true
    });
    return TinCheckViewModel;
}());



/***/ }),

/***/ "./src/app/tin-check/tin-check.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/tin-check/tin-check.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_TinCheckComponent, View_TinCheckComponent_0, View_TinCheckComponent_Host_0, TinCheckComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TinCheckComponent", function() { return RenderType_TinCheckComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TinCheckComponent_0", function() { return View_TinCheckComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TinCheckComponent_Host_0", function() { return View_TinCheckComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinCheckComponentNgFactory", function() { return TinCheckComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_contact_cust_support_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/contact-cust-support.component.ngfactory */ "./src/app/shared/contact-cust-support.component.ngfactory.js");
/* harmony import */ var _shared_contact_cust_support_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/contact-cust-support.component */ "./src/app/shared/contact-cust-support.component.ts");
/* harmony import */ var _tin_check_review_advice_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tin-check-review-advice.ngfactory */ "./src/app/tin-check/tin-check-review-advice.ngfactory.js");
/* harmony import */ var _tin_check_review_advice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tin-check-review-advice */ "./src/app/tin-check/tin-check-review-advice.ts");
/* harmony import */ var _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/input/input-text.component.ngfactory */ "./src/app/shared/input/input-text.component.ngfactory.js");
/* harmony import */ var _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/input/input-text.component */ "./src/app/shared/input/input-text.component.ts");
/* harmony import */ var _shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/input/input-mask-catalog */ "./src/app/shared/input/input-mask-catalog.ts");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tin_check_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tin-check.component */ "./src/app/tin-check/tin-check.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _tin_check_view_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tin-check-view.service */ "./src/app/tin-check/tin-check-view.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_TinCheckComponent = [];
var RenderType_TinCheckComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TinCheckComponent, data: { "animation": [{ type: 7, name: "fade", definitions: [{ type: 1, expr: ":enter", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: "250ms ease-in" }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "250ms ease-out" }], options: null }], options: {} }] } });

function View_TinCheckComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "span", [["class", "danger-text link-cursor"]], null, null, null, null, null))], null, null); }
function View_TinCheckComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Unable to verify: Service is currently unavailable."]))], null, null); }
function View_TinCheckComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fedTaxVm.feinStatus; _ck(_v, 1, 0, currVal_0); }); }
function View_TinCheckComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "span", [["class", "text-success"]], null, null, null, null, null))], null, null); }
function View_TinCheckComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [["class", "danger-text link-cursor"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "button", [["class", "btn btn-cta btn-fix"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.validate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Fix"]))], null, null); }
function View_TinCheckComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [["class", "text-warning link-cursor"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "button", [["class", "btn btn-cta btn-fix"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.validate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Verify"]))], null, null); }
function View_TinCheckComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fedTaxVm.feinStatus; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.FeinStatus.Verified; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.FeinStatus.Invalid; _ck(_v, 5, 0, currVal_2); }, null); }
function View_TinCheckComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_TinCheckComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["notReadOnly", 2]], null, 0, null, View_TinCheckComponent_7))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform(_co.readOnly$)); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_TinCheckComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["serviceIsReady", 2]], null, 0, null, View_TinCheckComponent_5))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.uiStatus === _co.TinCheckUIState.ServiceUnavailable); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_TinCheckComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["haveFein", 2]], null, 0, null, View_TinCheckComponent_3))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isBadFeinNumber(_co.fedTaxVm.fein); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_TinCheckComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "h4", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" Verify Your ", " Federal Tax ID "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm.CompanyLabel; _ck(_v, 1, 0, currVal_0); }); }
function View_TinCheckComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "h4", [["class", "modal-title\n        "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["Unable to Verify ", " Federal Tax ID"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm.CompanyLabel; _ck(_v, 1, 0, currVal_0); }); }
function View_TinCheckComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "tin-check-block tin-check-verifying"]], [[24, "@fade", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "div", [["class", "verifying"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Verifying..."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Please wait."]))], null, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_TinCheckComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "tin-check-block tin-check-verified"]], [[24, "@fade", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "div", [["class", "verified"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Verified"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["Your ", "'s Federal Tax ID and legal name have been verified."]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.vm.companyLabel; _ck(_v, 5, 0, currVal_1); }); }
function View_TinCheckComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "div", [["class", "tin-check-block tin-check-legalname-missing"]], [[24, "@fade", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 9, "div", [["class", "legalname-missing"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Missing Legal Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 6, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, [" You must provide your ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Legal Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" before verfication. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Review the information provided in Step 2."]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.vm.companyLabel; _ck(_v, 5, 0, currVal_1); }); }
function View_TinCheckComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "tin-check-block tin-check-blocked"]], [[24, "@fade", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "div", [["class", "blocked"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 4, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Please "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "sp-contact-support", [], null, null, null, _shared_contact_cust_support_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ContactCustomerSupportComponent_0"], _shared_contact_cust_support_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ContactCustomerSupportComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _shared_contact_cust_support_component__WEBPACK_IMPORTED_MODULE_3__["ContactCustomerSupportComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" for assistance. "]))], null, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_TinCheckComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "tin-check-block tin-check-unavailable"]], [[24, "@fade", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "div", [["class", "service-unavailable"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 4, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Please try again later. If the problem persists, "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "sp-contact-support", [], null, null, null, _shared_contact_cust_support_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ContactCustomerSupportComponent_0"], _shared_contact_cust_support_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ContactCustomerSupportComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _shared_contact_cust_support_component__WEBPACK_IMPORTED_MODULE_3__["ContactCustomerSupportComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" for assistance. "]))], null, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_TinCheckComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 28, "div", [["class", "tin-check-block tin-check-mismatch"]], [[24, "@fade", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "p", [["class", "m-0 mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["We found your Federal Tax ID but the ", " legal name does not exactly match the IRS records. It did match a similar name. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "sp-tincheck-review-advice", [], null, null, null, _tin_check_review_advice_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TinCheckReviewAdviceComponent_0"], _tin_check_review_advice_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TinCheckReviewAdviceComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 49152, null, 0, _tin_check_review_advice__WEBPACK_IMPORTED_MODULE_5__["TinCheckReviewAdviceComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 8, "div", [["class", "d-flex flex-row align-items-center mobile-stack mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 5, "div", [["class", "tin-check info-pill"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Legal Name Record Match"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "button", [["class", "btn btn-cta"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.parent.context.close('use-match') !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Use Matched Name "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 12, "div", [["class", "d-flex mobile-stack mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 4, "div", [["class", "mr-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Federal Tax ID Number"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](21, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 4, "div", [["class", "mr-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](24, null, ["", " Legal Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](26, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "a", [["class", "link-edit-data"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.editData() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Edit"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.vm.companyLabel; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.vm.matchedLegalName; _ck(_v, 13, 0, currVal_2); var currVal_3 = _co.vm.fein; _ck(_v, 21, 0, currVal_3); var currVal_4 = _co.vm.CompanyLabel; _ck(_v, 24, 0, currVal_4); var currVal_5 = _co.vm.legalName; _ck(_v, 26, 0, currVal_5); }); }
function View_TinCheckComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 18, "div", [["class", "tin-check-block tin-check-no-match"]], [[24, "@fade", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 17, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" We found your Federal Tax ID but the ", " legal name does not match the IRS records. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "sp-tincheck-review-advice", [], null, null, null, _tin_check_review_advice_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TinCheckReviewAdviceComponent_0"], _tin_check_review_advice_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TinCheckReviewAdviceComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _tin_check_review_advice__WEBPACK_IMPORTED_MODULE_5__["TinCheckReviewAdviceComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 12, "div", [["class", "d-flex mobile-stack mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 4, "div", [["class", "mr-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Federal Tax ID Number"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](11, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 4, "div", [["class", "mr-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](14, null, ["", " Legal Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](16, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "a", [["class", "link-edit-data"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.editData() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Edit"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.vm.companyLabel; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.vm.fein; _ck(_v, 11, 0, currVal_2); var currVal_3 = _co.vm.CompanyLabel; _ck(_v, 14, 0, currVal_3); var currVal_4 = _co.vm.legalName; _ck(_v, 16, 0, currVal_4); }); }
function View_TinCheckComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 22, "div", [["class", "tin-check-block tin-check-invalid"]], [[24, "@fade", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 21, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" While the ", " Federal Tax ID you entered "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["class", "font-italic"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["may"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" be valid, we could not find it in the IRS records. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "sp-tincheck-review-advice", [], null, null, null, _tin_check_review_advice_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TinCheckReviewAdviceComponent_0"], _tin_check_review_advice_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TinCheckReviewAdviceComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 49152, null, 0, _tin_check_review_advice__WEBPACK_IMPORTED_MODULE_5__["TinCheckReviewAdviceComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 13, "div", [["class", "flex mobile-stack d-flex mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 4, "div", [["class", "mr-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Federal Tax ID Number"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](14, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 4, "div", [["class", "mr-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](17, null, ["", " Legal Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "a", [["class", "link-edit-data"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.editData() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Edit"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.vm.companyLabel; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.vm.fein; _ck(_v, 14, 0, currVal_2); var currVal_3 = _co.vm.CompanyLabel; _ck(_v, 17, 0, currVal_3); var currVal_4 = _co.vm.legalName; _ck(_v, 19, 0, currVal_4); }); }
function View_TinCheckComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "div", [["class", "d-flex flex-row align-items-center mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 5, "div", [["class", "tin-check info-pill"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Legal Name Record Match"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm.matchedLegalName; _ck(_v, 7, 0, currVal_0); }); }
function View_TinCheckComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 24, "div", [["class", "tin-check-block tin-check-edit"]], [[24, "@fade", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 21, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["Edit your ", "'s tax ID and/or legal name."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "sp-tincheck-review-advice", [], null, null, null, _tin_check_review_advice_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TinCheckReviewAdviceComponent_0"], _tin_check_review_advice_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TinCheckReviewAdviceComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _tin_check_review_advice__WEBPACK_IMPORTED_MODULE_5__["TinCheckReviewAdviceComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 16, "div", [["class", "d-flex flex-row mobile-stack mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 6, "div", [["class", "mr-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 5, "sp-input", [["class", "input-medium"], ["label", "Federal Tax ID Number"], ["maskType", "fein"], ["name", "editFein"], ["type", "string"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.vm.fein = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_7__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_8__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_9__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], type: [2, "type"], maskType: [3, "maskType"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_7__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 5, "sp-input", [["maskType", "legalname"], ["name", "legalName"], ["type", "string"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.vm.legalName = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_7__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_8__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_9__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], type: [2, "type"], maskType: [3, "maskType"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_7__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "button", [["class", "btn btn-cta btn-update"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.runTinCheck() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Verify "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.vm.matchedLegalName; _ck(_v, 2, 0, currVal_1); var currVal_10 = "Federal Tax ID Number"; var currVal_11 = "editFein"; var currVal_12 = "string"; var currVal_13 = "fein"; _ck(_v, 11, 0, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_14 = "editFein"; var currVal_15 = _co.vm.fein; _ck(_v, 13, 0, currVal_14, currVal_15); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.vm.CompanyLabel, " Legal Name"); var currVal_24 = "legalName"; var currVal_25 = "string"; var currVal_26 = "legalname"; _ck(_v, 18, 0, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_27 = "legalName"; var currVal_28 = _co.vm.legalName; _ck(_v, 20, 0, currVal_27, currVal_28); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_2 = _co.vm.companyLabel; _ck(_v, 5, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 10, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassUntouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassTouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassPristine; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassDirty; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassValid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassInvalid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassPending; _ck(_v, 17, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_29 = _co.disableModalVerify(_co.vm); _ck(_v, 23, 0, currVal_29); }); }
function View_TinCheckComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" or you have a newly issued Federal ID "]))], null, null); }
function View_TinCheckComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "div", [], [[24, "@fade", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 7, "p", [["class", "mt-0 mb-3 font-italic"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" If you have questions about Federal ID verification "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" or you believe that this ID and legal name should be valid, "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "sp-contact-support", [], null, null, null, _shared_contact_cust_support_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ContactCustomerSupportComponent_0"], _shared_contact_cust_support_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ContactCustomerSupportComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _shared_contact_cust_support_component__WEBPACK_IMPORTED_MODULE_3__["ContactCustomerSupportComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = !_co.vm.matchedLegalName; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_TinCheckComponent_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm.serviceResponse; _ck(_v, 1, 0, currVal_0); }); }
function View_TinCheckComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 17, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Administration Settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", " verification attempts."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 6, "div", [["class", "btn-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.adminResetAttempts() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Reset TinCheck Attempts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.adminSetVerified() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Set Verified"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.adminSetUnverified() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Set Unverified"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "a", [["id", "show-tin-response"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.showResponse = !_co.showResponse) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Show service response"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.showResponse; _ck(_v, 17, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fedTaxVm.feinValidationCount; _ck(_v, 6, 0, currVal_0); }); }
function View_TinCheckComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["noService", 2]], null, 0, null, View_TinCheckComponent_13)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.close('dismiss') !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "i", [["aria-hidden", "true"], ["class", "material-icons icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 28, "div", [["class", "tin-check modal-body"]], null, [[null, "keyup.escape"]], function (_v, en, $event) { var ad = true; if (("keyup.escape" === en)) {
        var pd_0 = (_v.context.close('dismiss') !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "p", [["class", "my-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](11, null, ["Your ", " legal name must match the federal record tied to your Federal Tax ID number."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 1, "p", [["class", "mt-0 mb-3 font-italic"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Meanwhile, you can continue working on your application and verify your ID later by pressing cancel. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 2, "div", [["class", "modal-footer d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 1, "button", [["class", "btn btn-light"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.close('dismiss') !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Cancel"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.serviceIsAvailable; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.uiStatus; _ck(_v, 8, 0, currVal_2); var currVal_4 = _co.isVerifying; _ck(_v, 13, 0, currVal_4); var currVal_5 = _co.TinCheckUIState.Verified; _ck(_v, 15, 0, currVal_5); var currVal_6 = _co.TinCheckUIState.MissingLegalName; _ck(_v, 17, 0, currVal_6); var currVal_7 = _co.TinCheckUIState.Blocked; _ck(_v, 19, 0, currVal_7); var currVal_8 = _co.TinCheckUIState.ServiceUnavailable; _ck(_v, 21, 0, currVal_8); var currVal_9 = _co.TinCheckUIState.Mismatch; _ck(_v, 23, 0, currVal_9); var currVal_10 = _co.TinCheckUIState.NoMatch; _ck(_v, 25, 0, currVal_10); var currVal_11 = _co.TinCheckUIState.InvalidFein; _ck(_v, 27, 0, currVal_11); var currVal_12 = _co.TinCheckUIState.EditData; _ck(_v, 29, 0, currVal_12); var currVal_13 = _co.serviceIsAvailable; _ck(_v, 31, 0, currVal_13); var currVal_14 = _co.vm.isAdmin; _ck(_v, 35, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.vm.companyLabel; _ck(_v, 11, 0, currVal_3); }); }
function View_TinCheckComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { tinModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "div", [["class", "fein-check"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TinCheckComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[1, 2], ["tinModal", 2]], null, 0, null, View_TinCheckComponent_11))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.haveData; _ck(_v, 3, 0, currVal_0); }, null); }
function View_TinCheckComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-tin-check", [], null, null, null, View_TinCheckComponent_0, RenderType_TinCheckComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _tin_check_component__WEBPACK_IMPORTED_MODULE_11__["TinCheckComponent"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"], _tin_check_view_service__WEBPACK_IMPORTED_MODULE_13__["TinCheckViewService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TinCheckComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-tin-check", _tin_check_component__WEBPACK_IMPORTED_MODULE_11__["TinCheckComponent"], View_TinCheckComponent_Host_0, { fedTaxVm: "fedTaxVm" }, { feinChange: "feinChange" }, []);



/***/ }),

/***/ "./src/app/tin-check/tin-check.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tin-check/tin-check.component.ts ***!
  \**************************************************/
/*! exports provided: TinCheckUIState, TinCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinCheckUIState", function() { return TinCheckUIState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinCheckComponent", function() { return TinCheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_company_tax_info_company_tax_info_vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/company-tax-info/company-tax-info-vm */ "./src/app/company-tax-info/company-tax-info-vm.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");
/* harmony import */ var _core_services_tin_check_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/tin-check.service */ "./src/app/core/services/tin-check.service.ts");
/* harmony import */ var _tin_check_vm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tin-check-vm */ "./src/app/tin-check/tin-check-vm.ts");
/* harmony import */ var _tin_check_view_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tin-check-view.service */ "./src/app/tin-check/tin-check-view.service.ts");







var TinCheckUIState;
(function (TinCheckUIState) {
    TinCheckUIState["Verifying"] = "Verifying";
    TinCheckUIState["Verified"] = "Verified";
    TinCheckUIState["Mismatch"] = "Mismatch";
    TinCheckUIState["NoMatch"] = "NoMatch";
    TinCheckUIState["InvalidFein"] = "InvalidFein";
    TinCheckUIState["EditData"] = "EditData";
    TinCheckUIState["Close"] = "Close";
    TinCheckUIState["Blocked"] = "Blocked";
    TinCheckUIState["MissingLegalName"] = "MissingLegalName";
    TinCheckUIState["ServiceUnavailable"] = "ServiceUnavailable";
})(TinCheckUIState || (TinCheckUIState = {}));
var TinCheckComponent = /** @class */ (function () {
    function TinCheckComponent(modalService, tinCheckViewService) {
        this.modalService = modalService;
        this.tinCheckViewService = tinCheckViewService;
        this.feinChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.FeinStatus = _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"];
        this.TinCheckUIState = TinCheckUIState;
        this.isBadFeinNumber = _core_services_tin_check_service__WEBPACK_IMPORTED_MODULE_4__["isBadFeinNumber"];
        this.isVerifying = false;
        this.readOnly$ = tinCheckViewService.readOnly$;
    }
    TinCheckComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startingTinCheckCount = this.tinCheckViewService.tinCheckCount;
        this.tinCheckViewService.getTinCheckViewModel(this.fedTaxVm).subscribe(function (vm) { return _this.vm = vm; }, function (error) {
            _this.vm = new _tin_check_vm__WEBPACK_IMPORTED_MODULE_5__["TinCheckViewModel"]();
            _this.uiStatus = TinCheckUIState.ServiceUnavailable;
        });
    };
    // #region Admin-only
    /** Reset Attempts. Admin only functionality */
    TinCheckComponent.prototype.adminResetAttempts = function () {
        this.fedTaxVm.feinValidationCount = 0;
        this.closeModal();
    };
    /** Force as verified: Admin only functionality */
    TinCheckComponent.prototype.adminSetVerified = function () {
        this.uiStatus = TinCheckUIState.Verified;
        this.tinCheckViewService.updateFedTaxVm(this.fedTaxVm, _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"].Verified, this.vm.fein, this.vm.legalName, 0, true);
        this.closeModal();
    };
    /** Force as unverified: Admin only functionality */
    TinCheckComponent.prototype.adminSetUnverified = function () {
        this.tinCheckViewService.updateFedTaxVm(this.fedTaxVm, _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"].Unverified, this.vm.fein, this.vm.legalName, 0, true);
        this.closeModal();
    };
    // #endregion Admin-only
    TinCheckComponent.prototype.close = function (reason) {
        if (reason === 'use-match') {
            this.vm.legalName = this.vm.matchedLegalName;
            this.tinCheckViewService.updateFedTaxVm(this.fedTaxVm, _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"].Verified, this.vm.fein, this.vm.legalName, 0, !this.serviceIsAvailable);
        }
    };
    TinCheckComponent.prototype.closeModal = function () {
        if (this.modalRef && this.modalRef.close) {
            this.modalRef.close('ok');
            this.modalRef = null;
        }
    };
    /** disable re-verify unless user changed something that warrants re-checking  */
    TinCheckComponent.prototype.disableModalVerify = function (vm) {
        var legalName = vm.legalName ? vm.legalName.trim().toUpperCase() : '';
        /* Don't verify if
         * - Currently verifying
         * - No legal name
         * - Bad FEIN
         * - No change to FEIN or legal name
         */
        return this.isVerifying ||
            !legalName ||
            Object(_core_services_tin_check_service__WEBPACK_IMPORTED_MODULE_4__["isBadFeinNumber"])(vm.fein) ||
            (vm.fein === vm.preEditFein && vm.legalName === vm.preEditLegalName);
    };
    TinCheckComponent.prototype.editData = function () {
        this.uiStatus = TinCheckUIState.EditData;
    };
    Object.defineProperty(TinCheckComponent.prototype, "haveData", {
        get: function () {
            return this.fedTaxVm && this.vm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinCheckComponent.prototype, "serviceIsAvailable", {
        get: function () {
            return this.uiStatus !== TinCheckUIState.Blocked && this.uiStatus !== TinCheckUIState.ServiceUnavailable;
        },
        enumerable: true,
        configurable: true
    });
    TinCheckComponent.prototype.unverifyFein = function () {
        this.tinCheckViewService.unverifyFein(this.fedTaxVm);
    };
    TinCheckComponent.prototype.validate = function () {
        this.vm.fein = this.fedTaxVm.fein;
        if (Object(_core_services_tin_check_service__WEBPACK_IMPORTED_MODULE_4__["isBadFeinNumber"])(this.fedTaxVm.fein)) {
            return; // do not open or check
        }
        if (this.fedTaxVm.feinStatus === _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"].Verified) {
            return; // already in a verified state
        }
        // Open modal if blocked, unverified, or invalid
        if (this.checkIfBlocked() ||
            this.fedTaxVm.feinStatus === _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"].Unverified ||
            this.fedTaxVm.feinStatus === _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"].Invalid) {
            this.openModalDialog();
        }
        this.runTinCheck();
    };
    TinCheckComponent.prototype.openModalDialog = function () {
        var _this = this;
        this.vm.preEditFein = this.vm.fein,
            this.vm.preEditLegalName = this.vm.legalName,
            this.modalRef = this.modalService.open(this.tinModal);
        this.modalRef.result.then(function (res) {
            _this.close(res);
            _this.modalRef = null;
        });
    };
    // #region runTinCheck
    /* verify FEIN/LegalName with TinCheck service **/
    TinCheckComponent.prototype.runTinCheck = function () {
        var _this = this;
        if (this.checkIfBlocked()) {
            this.isVerifying = false;
            return;
        }
        this.isVerifying = true;
        this.tinCheckViewService.check(this.vm.fein, this.vm.legalName)
            .subscribe(function (r) { return _this.onTinChecked(r); }, function (error) { return _this.onTinCheckError(error); });
    };
    /**
     * Return true if TinCheck blocked because too many attempts.
     * If true, also sets UI status to "Blocked"
     */
    TinCheckComponent.prototype.checkIfBlocked = function () {
        if (this.fedTaxVm.feinValidationCount <= _tin_check_view_service__WEBPACK_IMPORTED_MODULE_6__["MAX_VALIDATION_COUNT"]) {
            return false;
        }
        else {
            this.uiStatus = TinCheckUIState.Blocked;
            return true;
        }
    };
    TinCheckComponent.prototype.onTinChecked = function (r) {
        this.isVerifying = false;
        var attempts = Math.max(0, this.tinCheckViewService.tinCheckCount - this.startingTinCheckCount);
        this.startingTinCheckCount = this.tinCheckViewService.tinCheckCount; // Reset baseline for next time.
        this.vm.serviceResponse = this.toServiceResponse(r.serviceResponse);
        if (r.verified) {
            this.uiStatus = TinCheckUIState.Verified;
            this.tinCheckViewService.updateFedTaxVm(this.fedTaxVm, _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"].Verified, r.fein, r.matchedName, attempts, false);
            this.closeModal();
        }
        else if (r.invalid) {
            this.uiStatus = TinCheckUIState.InvalidFein;
            this.tinCheckViewService.updateFedTaxVm(this.fedTaxVm, _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"].Invalid, this.vm.fein, this.vm.legalName, attempts, false);
            this.checkIfBlocked();
        }
        else if (r.error) {
            this.uiStatus = TinCheckUIState.ServiceUnavailable;
        }
        else if (r.serviceUnavailable) {
            this.uiStatus = TinCheckUIState.ServiceUnavailable;
            this.tinCheckViewService.updateFedTaxVm(this.fedTaxVm, _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"].Unverified, this.vm.fein, this.vm.legalName, 0, true);
            this.closeModal();
        }
        else {
            this.vm.matchedLegalName = r.matchedName;
            this.uiStatus = r.matchedName ? TinCheckUIState.Mismatch : TinCheckUIState.NoMatch;
            this.tinCheckViewService.updateFedTaxVm(this.fedTaxVm, _model__WEBPACK_IMPORTED_MODULE_3__["FeinStatus"].Invalid, this.vm.fein, this.vm.legalName, attempts, false);
            this.checkIfBlocked();
        }
    };
    TinCheckComponent.prototype.onTinCheckError = function (error) {
        this.isVerifying = false;
        this.uiStatus = this.fedTaxVm.legalName
            ? TinCheckUIState.ServiceUnavailable : TinCheckUIState.MissingLegalName;
    };
    TinCheckComponent.prototype.toServiceResponse = function (r) {
        try {
            return 'TinCheck service response: ' + JSON.stringify(r, null, 2);
        }
        catch (e) {
            return 'TinCheck service response error';
        }
    };
    return TinCheckComponent;
}());



/***/ }),

/***/ "./src/app/tin-check/tin-check.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tin-check/tin-check.module.ts ***!
  \***********************************************/
/*! exports provided: TinCheckModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinCheckModule", function() { return TinCheckModule; });
var TinCheckModule = /** @class */ (function () {
    function TinCheckModule() {
    }
    return TinCheckModule;
}());



/***/ })

}]);
//# sourceMappingURL=11.2cf2ea08bf5d982c9b16.js.map