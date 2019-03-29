(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./src/app/deductions/company/company-deduction-editor.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/deductions/company/company-deduction-editor.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_CompanyDeductionEditorComponent, View_CompanyDeductionEditorComponent_0, View_CompanyDeductionEditorComponent_Host_0, CompanyDeductionEditorComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CompanyDeductionEditorComponent", function() { return RenderType_CompanyDeductionEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyDeductionEditorComponent_0", function() { return View_CompanyDeductionEditorComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyDeductionEditorComponent_Host_0", function() { return View_CompanyDeductionEditorComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionEditorComponentNgFactory", function() { return CompanyDeductionEditorComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/radio-group/radio-group.component.ngfactory */ "./src/app/shared/radio-group/radio-group.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/radio-group/radio-button.component.ngfactory */ "./src/app/shared/radio-group/radio-button.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/radio-group/radio-button.component */ "./src/app/shared/radio-group/radio-button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_read_more_read_more_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/read-more/read-more.component.ngfactory */ "./src/app/shared/read-more/read-more.component.ngfactory.js");
/* harmony import */ var _shared_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/read-more/read-more.component */ "./src/app/shared/read-more/read-more.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/input/input-text.component.ngfactory */ "./src/app/shared/input/input-text.component.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/input/input-text.component */ "./src/app/shared/input/input-text.component.ts");
/* harmony import */ var _shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/input/input-mask-catalog */ "./src/app/shared/input/input-mask-catalog.ts");
/* harmony import */ var _shared_amount_or_percent_value_amount_or_percent_value_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/amount-or-percent-value/amount-or-percent-value.component.ngfactory */ "./src/app/shared/amount-or-percent-value/amount-or-percent-value.component.ngfactory.js");
/* harmony import */ var _shared_amount_or_percent_value_amount_or_percent_value_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/amount-or-percent-value/amount-or-percent-value.component */ "./src/app/shared/amount-or-percent-value/amount-or-percent-value.component.ts");
/* harmony import */ var _company_deductions_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./company-deductions-table.component.ngfactory */ "./src/app/deductions/company/company-deductions-table.component.ngfactory.js");
/* harmony import */ var _company_deductions_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./company-deductions-table.component */ "./src/app/deductions/company/company-deductions-table.component.ts");
/* harmony import */ var _store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../store/entity/entity-services/company.service */ "./src/app/store/entity/entity-services/company.service.ts");
/* harmony import */ var _company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./company-deduction-editor.service */ "./src/app/deductions/company/company-deduction-editor.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../core/services/logger.service */ "./src/app/core/services/logger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_deduction_editor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./company-deduction-editor.component */ "./src/app/deductions/company/company-deduction-editor.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 























var styles_CompanyDeductionEditorComponent = [];
var RenderType_CompanyDeductionEditorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CompanyDeductionEditorComponent, data: {} });

function View_CompanyDeductionEditorComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 11, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 10, "sp-radio-group", [["label", "Deduction mode"], ["modelType", "DeductionViewModel"], ["name", "planTaxOptionCode"], ["propertyName", "planTaxOptionCode"], ["tooltip", "true"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.updateDescription(_co.vm.planTaxOptionCode) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], tooltip: [3, "tooltip"], model: [4, "model"], modelType: [5, "modelType"] }, { change: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "span", [["class", "label-tooltip"], ["tooltipText", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Select Pre-Tax or Post-Tax depending on when the deduction must be applied. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 2, 2, "sp-radio-button", [["id", "planPreTax"], ["value", "PRETAX"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, [[1, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Pre-Tax"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, 2, 2, "sp-radio-button", [["id", "planPostTax"], ["value", "POSTTAX"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 49152, [[1, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Post-Tax"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Deduction mode"; var currVal_1 = "planTaxOptionCode"; var currVal_2 = "planTaxOptionCode"; var currVal_3 = "true"; var currVal_4 = _co.vm; var currVal_5 = "DeductionViewModel"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = "PRETAX"; _ck(_v, 7, 0, currVal_6); var currVal_7 = "POSTTAX"; _ck(_v, 10, 0, currVal_7); }, null); }
function View_CompanyDeductionEditorComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Pre-Tax"]))], null, null); }
function View_CompanyDeductionEditorComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Post-Tax"]))], null, null); }
function View_CompanyDeductionEditorComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionEditorComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionEditorComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.vm.planTaxOptionCode === "PRETAX"); _ck(_v, 1, 0, currVal_0); var currVal_1 = (_co.vm.planTaxOptionCode === "POSTTAX"); _ck(_v, 3, 0, currVal_1); }, null); }
function View_CompanyDeductionEditorComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "sp-read-more", [["hideSeeLess", "true"]], null, null, null, _shared_read_more_read_more_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ReadMoreComponent_0"], _shared_read_more_read_more_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ReadMoreComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _shared_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_8__["ReadMoreComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]], { hideSeeLess: [0, "hideSeeLess"], description: [1, "description"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "true"; var currVal_1 = _co.vm.htmlDescription; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_CompanyDeductionEditorComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Match"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "sp-input", [["class", "percent-inline"], ["maskType", "percent"], ["name", "hsaMatchPercent"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_12__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_12__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_13__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { name: [0, "name"], propertyName: [1, "propertyName"], maskType: [2, "maskType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["of employee's contribution up to"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "sp-amount-or-percent-value", [["class", "aop-inline"], ["isAmountPropertyName", "isHsaMatchMaxAmount"], ["modelType", "DeductionViewModel"], ["propertyNameValue", "hsaMatchMaxValue"]], null, null, null, _shared_amount_or_percent_value_amount_or_percent_value_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_AmountOrPercentValueComponent_0"], _shared_amount_or_percent_value_amount_or_percent_value_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_AmountOrPercentValueComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 114688, null, 0, _shared_amount_or_percent_value_amount_or_percent_value_component__WEBPACK_IMPORTED_MODULE_15__["AmountOrPercentValueComponent"], [], { model: [0, "model"], isAmountPropertyName: [1, "isAmountPropertyName"], propertyNameValue: [2, "propertyNameValue"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["of employee gross earnings."]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "hsaMatchPercent"; var currVal_1 = _co.hsaMatchPercent; var currVal_2 = "percent"; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _co.vm; var currVal_4 = "isHsaMatchMaxAmount"; var currVal_5 = "hsaMatchMaxValue"; _ck(_v, 9, 0, currVal_3, currVal_4, currVal_5); }, null); }
function View_CompanyDeductionEditorComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Contribute 100% up to "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "sp-amount-or-percent-value", [["class", "aop-inline"], ["isAmountPropertyName", "isHsaMatchAllMaxAmount"], ["modelType", "DeductionViewModel"], ["propertyNameValue", "hsaMatchAllValue"]], null, null, null, _shared_amount_or_percent_value_amount_or_percent_value_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_AmountOrPercentValueComponent_0"], _shared_amount_or_percent_value_amount_or_percent_value_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_AmountOrPercentValueComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 114688, null, 0, _shared_amount_or_percent_value_amount_or_percent_value_component__WEBPACK_IMPORTED_MODULE_15__["AmountOrPercentValueComponent"], [], { model: [0, "model"], isAmountPropertyName: [1, "isAmountPropertyName"], propertyNameValue: [2, "propertyNameValue"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["of employee gross earnings."]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm; var currVal_1 = "isHsaMatchAllMaxAmount"; var currVal_2 = "hsaMatchAllValue"; _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_CompanyDeductionEditorComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 16, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 11, "sp-radio-group", [["label", "Company Match"], ["modelType", "DeductionViewModel"], ["name", "hsaContribution"], ["propertyName", "hsaContribution"]], null, null, null, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], model: [3, "model"], modelType: [4, "modelType"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 2, 2, "sp-radio-button", [["id", "hsaContributionNoMatch"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["No Match"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 2, 2, "sp-radio-button", [["id", "hsaContributionMatch"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Match Percent"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, 2, 2, "sp-radio-button", [["id", "hsaContributionMatchAll"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Match All"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionEditorComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionEditorComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Company Match"; var currVal_1 = "hsaContribution"; var currVal_2 = "hsaContribution"; var currVal_3 = _co.vm; var currVal_4 = "DeductionViewModel"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_5 = _co.HsaMatchType.NoMatch; _ck(_v, 5, 0, currVal_5); var currVal_6 = _co.HsaMatchType.Match; _ck(_v, 8, 0, currVal_6); var currVal_7 = _co.HsaMatchType.MatchAll; _ck(_v, 11, 0, currVal_7); var currVal_8 = (_co.vm.hsaContribution === _co.HsaMatchType.Match); _ck(_v, 14, 0, currVal_8); var currVal_9 = (_co.vm.hsaContribution === _co.HsaMatchType.MatchAll); _ck(_v, 16, 0, currVal_9); }, null); }
function View_CompanyDeductionEditorComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 15, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionEditorComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 10, "div", [["class", "deduction-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "label", [["class", "inline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Deduction Name "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "sp-input", [["modelType", "CompanyDeduction"], ["propertyName", "name"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_12__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_12__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_13__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { disabled: [0, "disabled"], model: [1, "model"], modelType: [2, "modelType"], propertyName: [3, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "label", [["class", "inline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Deduction Abbreviation "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "sp-input", [["class", "input-abbreviation"], ["modelType", "CompanyDeduction"], ["propertyName", "abbreviation"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_12__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_12__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_13__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { disabled: [0, "disabled"], model: [1, "model"], modelType: [2, "modelType"], propertyName: [3, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionEditorComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm.htmlDescription; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_co.vm.canChangeName; var currVal_2 = _co.vm; var currVal_3 = "CompanyDeduction"; var currVal_4 = "name"; _ck(_v, 8, 0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_5 = !_co.vm.canChangeAbbreviation; var currVal_6 = _co.vm; var currVal_7 = "CompanyDeduction"; var currVal_8 = "abbreviation"; _ck(_v, 13, 0, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _co.vm.hasHSAContributionQuestion; _ck(_v, 15, 0, currVal_9); }, null); }
function View_CompanyDeductionEditorComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.done() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isNew ? "Add" : "Update"); _ck(_v, 1, 0, currVal_0); }); }
function View_CompanyDeductionEditorComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "deduction-header d-flex justify-content-between align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", " ", " ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "i", [["class", "material-icons icon btn-circle"], ["title", "Cancel and close"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionEditorComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["fixedTaxMode", 2]], null, 0, null, View_CompanyDeductionEditorComponent_2)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionEditorComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 4, "div", [["class", "d-flex mt-4 mb-4 justify-content-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "button", [["class", "btn btn-light mr-3"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionEditorComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "sp-company-deductions-table", [], null, null, null, _company_deductions_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_CompanyDeductionsTableComponent_0"], _company_deductions_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_CompanyDeductionsTableComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 114688, null, 0, _company_deductions_table_component__WEBPACK_IMPORTED_MODULE_17__["CompanyDeductionsTableComponent"], [_store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_18__["CompanyService"], _company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_19__["CompanyDeductionEditorService"], _core_services_logger_service__WEBPACK_IMPORTED_MODULE_20__["LoggerService"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.vm.hasPreOrPostTaxQuestion; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8); _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_5 = (!_co.vm.hasPreOrPostTaxQuestion || _co.vm.planTaxOptionCode); _ck(_v, 10, 0, currVal_5); var currVal_6 = _co.canConfirm; _ck(_v, 15, 0, currVal_6); _ck(_v, 18, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm.id; var currVal_1 = (_co.vm.isPreTax ? "Pre-Tax" : ""); var currVal_2 = (_co.vm.isPostTax ? "Post-Tax" : ""); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }); }
function View_CompanyDeductionEditorComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-company-deduction-editor", [], null, null, null, View_CompanyDeductionEditorComponent_0, RenderType_CompanyDeductionEditorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _company_deduction_editor_component__WEBPACK_IMPORTED_MODULE_22__["CompanyDeductionEditorComponent"], [_company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_19__["CompanyDeductionEditorService"], _core_services_logger_service__WEBPACK_IMPORTED_MODULE_20__["LoggerService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CompanyDeductionEditorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-company-deduction-editor", _company_deduction_editor_component__WEBPACK_IMPORTED_MODULE_22__["CompanyDeductionEditorComponent"], View_CompanyDeductionEditorComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/deductions/company/company-deduction-editor.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/deductions/company/company-deduction-editor.component.ts ***!
  \**************************************************************************/
/*! exports provided: CompanyDeductionEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionEditorComponent", function() { return CompanyDeductionEditorComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-deduction-editor.service */ "./src/app/deductions/company/company-deduction-editor.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");






/** Private VM class with default values */
var DeductionViewModel = /** @class */ (function () {
    function DeductionViewModel(command, 
    /** key is the Deduction.codeType */
    id, code) {
        this.command = command;
        this.id = id;
        this.code = code;
        this.abbreviation = 'ABBR';
        this.canChangeAbbreviation = false;
        this.canChangeName = false;
        this.hasHSAContributionQuestion = true;
        this.hasPreOrPostTaxQuestion = true;
        this.isHsaMatchAllMaxAmount = true;
        this.isHsaMatchMaxAmount = true;
        this.name = 'Base name';
        this.planTaxOptionCode = '';
        this.isPreTax = false;
        this.isPostTax = false;
        if (!command) {
            return;
        }
        if (command.isNew) {
            this.configureForCreate(command);
        }
        else {
            this.configureForEdit(command);
        }
    }
    DeductionViewModel.prototype.configureForCreate = function (cmd) {
        this.hasPreOrPostTaxQuestion = cmd.askPreOrPostTax &&
            !cmd.forcePostTax && !cmd.forcePreTax;
        this.isPreTax = cmd.forcePreTax;
        this.isPostTax = cmd.forcePostTax;
    };
    DeductionViewModel.prototype.configureForEdit = function (cmd) {
        this.hasPreOrPostTaxQuestion = false;
        this.isPreTax = false;
        this.isPostTax = false;
    };
    return DeductionViewModel;
}());
var HsaMatchType;
(function (HsaMatchType) {
    HsaMatchType["NoMatch"] = "NOMATCH";
    HsaMatchType["Match"] = "MATCH";
    HsaMatchType["MatchAll"] = "MATCHALL";
})(HsaMatchType || (HsaMatchType = {}));
// TODO: Use enums instead of magic values
var CompanyDeductionEditorComponent = /** @class */ (function () {
    function CompanyDeductionEditorComponent(editorService, logger, hostEl, route, router) {
        this.editorService = editorService;
        this.logger = logger;
        this.hostEl = hostEl;
        this.route = route;
        this.router = router;
        this.HsaMatchType = HsaMatchType; // expose enum to template
        this.vm = new DeductionViewModel();
        this.isNew = false;
        this.cancelSave = false;
        this.vm = new DeductionViewModel();
    }
    CompanyDeductionEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var codeType = this.route.snapshot.params['id'];
        var code = this.route.snapshot.params['code'];
        this.createVm(codeType, code);
        setTimeout(function () { return _this.hostEl.nativeElement.scrollIntoView(); }); // must delay one tick
    };
    CompanyDeductionEditorComponent.prototype.canLeaveAfterSave = function () {
        var _this = this;
        if (this.cancelSave) {
            this.cancelSave = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
        return this.save().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (d) {
            _this.editorService.endEdit();
            return true;
        }));
    };
    Object.defineProperty(CompanyDeductionEditorComponent.prototype, "canConfirm", {
        get: function () {
            return !(this.vm.hasPreOrPostTaxQuestion &&
                this.vm.planTaxOptionCode === '');
        },
        enumerable: true,
        configurable: true
    });
    CompanyDeductionEditorComponent.prototype.createVm = function (codeType, code) {
        var cmd = this.editorService.command;
        if (!cmd) {
            this.router.navigate([_core__WEBPACK_IMPORTED_MODULE_5__["WellKnownRoutes"].CompanyDeductions]);
            return;
        }
        this.vm = new DeductionViewModel(cmd, codeType, code);
        var deductions = this.editorService.deductions;
        var isHsa = codeType === 'HSA';
        var deduction = isHsa
            ? deductions.find(function (d) { return d.codeTypeId === 43; }) // first deduction on HSA (1 of 4)
            : deductions.find(function (d) { return d.codeType === codeType; }); // first matching code type will do
        if (!deduction) {
            // No deduction found!?
            // 1. A user added a bad id in the query string == deep linking mischief
            // 2. Bad grouping category with no deductions == programmer error
            this.logger.error("No deduction for codeType: \"" + codeType + "\"", deduction);
            this.router.navigate([_core__WEBPACK_IMPORTED_MODULE_5__["WellKnownRoutes"].CompanyDeductions]);
            return;
        }
        this.isNew = cmd.isNew;
        if (cmd.isNew) {
            this.currentDeductionItem = this.editorService.create(deduction, code);
        }
        else {
            this.currentDeductionItem = this.editorService.edit(deduction, code);
        }
        this.currentDeductionItem.isDirty = true;
        // fill the VM from deduction and item data
        this.vm.abbreviation = this.currentDeductionItem.abbreviation;
        this.vm.canChangeName = deduction.canChangeDescription;
        this.vm.canChangeAbbreviation = deduction.canChangeAbbreviation;
        this.vm.hasHSAContributionQuestion = isHsa ? false : this.hasHSAContributionQuestion(deduction);
        if (isHsa) {
            this.vm.hasPreOrPostTaxQuestion = false;
        }
        this.vm.name = this.currentDeductionItem.name;
        // Security: `definition` is always authored by the SP team and is considered to be safe.
        this.vm.htmlDescription = deduction.definition;
        if (this.vm.isPreTax) {
            this.updateDescription('PRETAX');
        }
        if (this.vm.isPostTax) {
            this.updateDescription('POSTTAX');
        }
    };
    CompanyDeductionEditorComponent.prototype.updateDescription = function (taxMode) {
        var isPreTax = taxMode === 'PRETAX' ? true
            : taxMode === 'POSTTAX' ? false
                : null;
        var deduction = this.editorService.getDeductionWithTaxMode(isPreTax);
        if (isPreTax) {
            this.vm.isPreTax = true;
            this.vm.isPostTax = false;
            this.vm.name = this.currentDeductionItem.deduction.codeType + ' Pre-Tax';
        }
        else if (isPreTax === false) {
            this.vm.isPreTax = false;
            this.vm.isPostTax = true;
            this.vm.name = this.currentDeductionItem.deduction.codeType + ' Post-Tax';
        }
        else {
            this.vm.isPreTax = false;
            this.vm.isPostTax = false;
        }
        if (deduction) {
            this.vm.htmlDescription = deduction.definition;
        }
        else {
            this.vm.htmlDescription = '';
        }
    };
    CompanyDeductionEditorComponent.prototype.done = function () {
        this.editorService.endEdit();
        this.router.navigate([_core__WEBPACK_IMPORTED_MODULE_5__["WellKnownRoutes"].CompanyDeductions]);
    };
    CompanyDeductionEditorComponent.prototype.cancel = function () {
        if (this.isNew) {
            this.delete();
            return;
        }
        this.editorService.endEdit();
        this.cancelSave = true;
        this.router.navigate([_core__WEBPACK_IMPORTED_MODULE_5__["WellKnownRoutes"].CompanyDeductions]);
    };
    CompanyDeductionEditorComponent.prototype.delete = function () {
        var _this = this;
        this.editorService.endEdit();
        this.editorService.delete(this.currentDeductionItem).subscribe(function (_) { }, function (error) { return _this.logger.error(error); });
        this.router.navigate([_core__WEBPACK_IMPORTED_MODULE_5__["WellKnownRoutes"].CompanyDeductions]);
    };
    CompanyDeductionEditorComponent.prototype.save = function () {
        var vm = this.vm;
        if (!vm) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
        var cdi = this.currentDeductionItem;
        if (cdi) {
            cdi.name = vm.name.trim();
            cdi.abbreviation = vm.abbreviation.trim();
            var hasChangedPrePost = canBePreOrPostTax(cdi.deduction.codeTypeId) &&
                (cdi.isPreTax !== vm.isPreTax ||
                    cdi.isPostTax !== vm.isPostTax);
            if (hasChangedPrePost) {
                cdi.companyDeductions[0].isRemoved = true;
                if (vm.isPreTax) {
                    var preCTid = this.editorService.getDeductionCodeTypeIdByTaxMode(cdi.deduction.codeType, true);
                    var preDed = this.editorService.createByCodeTypeId(preCTid);
                    cdi.companyDeductions.push(preDed);
                }
                else if (vm.isPostTax) {
                    var postCTid = this.editorService.getDeductionCodeTypeIdByTaxMode(cdi.deduction.codeType, false);
                    var postDed = this.editorService.createByCodeTypeId(postCTid);
                    cdi.companyDeductions.push(postDed);
                }
            }
            var cd = cdi.companyDeductions[0];
            cd.abbreviation = vm.abbreviation.trim();
            cd.description = vm.name.trim();
        }
        return this.editorService.save();
    };
    CompanyDeductionEditorComponent.prototype.hasHSAContributionQuestion = function (deduction) {
        return deduction.codeGroupId === 7; // HSA
    };
    return CompanyDeductionEditorComponent;
}());

function canBePreOrPostTax(codeTypeId) {
    switch (codeTypeId) {
        case 20: // Medical pre
        case 21: // Vision pre
        case 22: // Dental pre
        case 30: // Medial post
        case 31: // Vision post
        case 32:// Dental post
            return true;
        default:
            return false;
    }
}


/***/ }),

/***/ "./src/app/deductions/company/company-deduction-editor.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/deductions/company/company-deduction-editor.service.ts ***!
  \************************************************************************/
/*! exports provided: CompanyDeductionEditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionEditorService", function() { return CompanyDeductionEditorService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");
/* harmony import */ var _shared_deductions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/deductions */ "./src/app/shared/deductions/index.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @entity */ "./src/app/store/entity/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_entity_entity_services_deduction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/entity/entity-services/deduction.service */ "./src/app/store/entity/entity-services/deduction.service.ts");
/* harmony import */ var _store_entity_entity_services_company_deduction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/entity/entity-services/company-deduction.service */ "./src/app/store/entity/entity-services/company-deduction.service.ts");
/* harmony import */ var _store_entity_entity_services_employee_deduction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/entity/entity-services/employee-deduction.service */ "./src/app/store/entity/entity-services/employee-deduction.service.ts");
/* harmony import */ var _store_entity_entity_services_employee_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/entity/entity-services/employee.service */ "./src/app/store/entity/entity-services/employee.service.ts");










var CompanyDeductionEditorService = /** @class */ (function () {
    function CompanyDeductionEditorService(deductionService, companyDeductionService, employeeDeductionService, employeeService) {
        this.deductionService = deductionService;
        this.companyDeductionService = companyDeductionService;
        this.employeeDeductionService = employeeDeductionService;
        this.employeeService = employeeService;
        this.employeeDeductionsToDelete = null;
    }
    Object.defineProperty(CompanyDeductionEditorService.prototype, "command", {
        get: function () {
            return this._command;
        },
        set: function (cmd) {
            this._command = cmd;
        },
        enumerable: true,
        configurable: true
    });
    CompanyDeductionEditorService.prototype.getDeductionWithTaxMode = function (isPreTax) {
        var deductions = this.command ? this.command.deductions : [];
        var found = deductions.find(function (d) {
            if (isPreTax) {
                return d.deductionPlanTaxOptionCode === _model__WEBPACK_IMPORTED_MODULE_2__["DeductionPlanType"].PRETAX;
            }
            else if (isPreTax === false) {
                return d.deductionPlanTaxOptionCode === _model__WEBPACK_IMPORTED_MODULE_2__["DeductionPlanType"].POSTTAX;
            }
            else {
                return d.deductionPlanTaxOptionCode === _model__WEBPACK_IMPORTED_MODULE_2__["DeductionPlanType"].NOEEDEDUCT;
            }
        });
        return found;
    };
    /**
     * Create CompanyDeductionItem from a Deduction and add to cached CompanyDeductionItems
     * @param deduction Deduction master metadata for this item.
     */
    CompanyDeductionEditorService.prototype.create = function (deduction, code) {
        var cd = this.companyDeductionService.createFromDeduction(deduction);
        var item = new _shared_deductions__WEBPACK_IMPORTED_MODULE_3__["CompanyDeductionItem"](deduction, true, [cd]);
        if (code) {
            item.setCode(code);
            var namePrefix = void 0;
            var abbreviationPrefix = void 0;
            if (deduction.codeTypeId === 23) {
                namePrefix = item.name + ' Pre #';
                abbreviationPrefix = 'MIPRE';
            }
            else if (deduction.codeTypeId === 24) {
                namePrefix = item.name + ' #';
                abbreviationPrefix = 'CAFE';
            }
            else if (deduction.codeTypeId === 34) {
                namePrefix = item.name + ' Post #';
                abbreviationPrefix = 'MIPRO';
            }
            else if (deduction.codeTypeId === 56) {
                namePrefix = 'Custom with Goal #';
                abbreviationPrefix = 'CUSTWG';
            }
            else if (deduction.codeTypeId === 57) {
                namePrefix = 'Custom No Goal #';
                abbreviationPrefix = 'CUSTNG';
            }
            else if (deduction.codeTypeId === 50) {
                namePrefix = 'Child Support #';
                abbreviationPrefix = 'CHILD';
            }
            else if (deduction.codeTypeId === 51) {
                namePrefix = 'Garnishment with Goal #';
                abbreviationPrefix = 'GARWG';
            }
            else if (deduction.codeTypeId === 59) {
                namePrefix = 'Garnishment No Goal #';
                abbreviationPrefix = 'GARNG';
            }
            if (namePrefix && abbreviationPrefix) {
                var proposal = this.proposeNameAndAbbreviation(deduction.codeTypeId, namePrefix, abbreviationPrefix);
                item.name = proposal.name;
                item.abbreviation = proposal.abbreviation;
            }
        }
        this.companyDeductionItems.push(item);
        this.currentInEdit = item;
        this.updateCatalog();
        return item;
    };
    /**  a unique name and abbreviation for a count-down deduction instance.
     * Looks for the next available instance number
     */
    CompanyDeductionEditorService.prototype.proposeNameAndAbbreviation = function (codeTypeId, namePrefix, abbreviationPrefix) {
        var items = this.companyDeductionItems.filter(function (d) { return d.deduction.codeTypeId === codeTypeId; });
        var index = 1;
        var notUnique = true;
        var name = '';
        var abbreviation = '';
        while (notUnique) {
            name = namePrefix + index.toString();
            abbreviation = abbreviationPrefix + index.toString();
            var foundName = items.find(function (d) { return d.name === name; });
            var foundAbbreviation = items.find(function (d) { return d.abbreviation === abbreviation; });
            index++;
            notUnique = !!foundName || !!foundAbbreviation;
        }
        return {
            name: name,
            abbreviation: abbreviation
        };
    };
    CompanyDeductionEditorService.prototype.createByCodeTypeId = function (tid) {
        var found = this.deductions.find(function (t) { return t.codeTypeId === tid; });
        if (!found) {
            throw new Error("Deduction Type " + tid + " not found.");
        }
        var cd = this.companyDeductionService.createFromDeduction(found);
        return cd;
    };
    CompanyDeductionEditorService.prototype.getDeductionCodeTypeIdByTaxMode = function (codeType, isPreTax) {
        var found = this.deductions.filter(function (t) { return t.codeType === codeType; })
            .find(function (d) {
            if (isPreTax === true) {
                return d.deductionPlanTaxOptionCode === _model__WEBPACK_IMPORTED_MODULE_2__["DeductionPlanType"].PRETAX;
            }
            else if (isPreTax === false) {
                return d.deductionPlanTaxOptionCode === _model__WEBPACK_IMPORTED_MODULE_2__["DeductionPlanType"].POSTTAX;
            }
            else {
                return true; // first one
            }
        });
        if (!found) {
            throw new Error("Deduction Type " + codeType + " not found.");
        }
        return found.codeTypeId;
    };
    /**
     * Generates a code number to recognize when more than one instance of a type is needed.
     * Examples: Miscellaneous deductions for:
     * Miscellaneous with Goal (up to 5) or
     * Miscellaneous NO Goal (up to 5)
     * @param codeTypeId Type of deduction
     */
    CompanyDeductionEditorService.prototype.generateCode = function (codeTypeId) {
        if (codeTypeId === _model__WEBPACK_IMPORTED_MODULE_2__["WellKnownDeductionsCodeTypeId"].MiscellaneousNoGoal ||
            codeTypeId === _model__WEBPACK_IMPORTED_MODULE_2__["WellKnownDeductionsCodeTypeId"].MiscellaneousWithGoal) {
            var slots_1 = { '1': true, '2': true, '3': true, '4': true, '5': true };
            this.companyDeductionItems.forEach(function (cdi) {
                var code = cdi.getCode();
                if (code && cdi.deduction.codeTypeId === codeTypeId) {
                    slots_1[code] = false;
                }
            });
            var found = Object.keys(slots_1).find(function (it) { return slots_1[it] === true; });
            return found ? found : '6';
        }
        return '1'; // no multiple instances (singleton)
    };
    CompanyDeductionEditorService.prototype.delete = function (companyDeductionItem) {
        var _this = this;
        var deleteSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        // delete employee deductions affected
        this.employeeDeductionService.getDeductionsLinkedTo(companyDeductionItem.companyDeductions[0].id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (employeeDeductionsToDelete) {
            _this.employeeDeductionsToDelete = employeeDeductionsToDelete;
            companyDeductionItem.isDeleted = true;
            _this.updateCatalog();
            deleteSource.next(_this.save());
        });
        return deleteSource.asObservable();
    };
    /**
     * Find or create the CompanyDeductionItem for the give Deduction
     * @param deduction Deduction master metadata for this item
     * @param code Number of instance of the deductions (f.e. used in Miscellaneous Wit/out Goals)
     * Not needed for single-instance deductions
     */
    CompanyDeductionEditorService.prototype.edit = function (deduction, code) {
        var cdi;
        if (Object(_model__WEBPACK_IMPORTED_MODULE_2__["deductionIsCustomType"])(deduction) && !code) {
            cdi = this.create(deduction, '1');
        }
        else {
            var foundInstance = this.foundDeductionInstance(deduction, code);
            cdi = foundInstance || this.create(deduction, code);
        }
        return this.editCompanyDeductionItem(cdi);
    };
    CompanyDeductionEditorService.prototype.editCompanyDeductionItem = function (cdi) {
        this.currentInEdit = cdi;
        this.updateCatalog();
        return cdi;
    };
    CompanyDeductionEditorService.prototype.endEdit = function () {
        this.currentInEdit = null;
        this.updateCatalog();
    };
    /**
     * Returns a deduction of type catchup if defined
     */
    CompanyDeductionEditorService.prototype.getCatchupDeduction = function () {
        return this.companyDeductionItems.find(function (d) { return d.isCatchUp; });
    };
    /** Creates a corresponding catchup plan for a deduction plan
     * @param cdi: base deduction plan
    */
    CompanyDeductionEditorService.prototype.createCatchUpFor = function (cdi) {
        var catchUpTid = this.getCorrespondingCatchUpPlanFor(cdi.deduction.codeTypeId);
        if (!catchUpTid) {
            return null;
        }
        var catchUpDeduction = this.deductions.find(function (d) { return d.codeTypeId === catchUpTid; });
        var cd = this.companyDeductionService.createFromDeduction(catchUpDeduction);
        var item = new _shared_deductions__WEBPACK_IMPORTED_MODULE_3__["CompanyDeductionItem"](catchUpDeduction, true, [cd]);
        this.companyDeductionItems.push(item);
        this.updateCatalog();
        return item;
    };
    CompanyDeductionEditorService.prototype.getEmployeesEnrolledInDeduction = function (d) {
        var employees$ = this.employeeService.entities$;
        var eds$ = this.employeeDeductionService.entities$;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(employees$, eds$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var employees = _a[0], eds = _a[1];
            return employees.filter(function (e) {
                var found = eds.find(function (ed1) {
                    return ed1.employeeId === e.id &&
                        ed1.companyDeductionId === d.companyDeductions[0].id;
                });
                return found;
            });
        }));
    };
    CompanyDeductionEditorService.prototype.foundDeductionInstance = function (deduction, code) {
        return this.companyDeductionItems.find(function (it) {
            if (code) {
                var instanceCode = it.getCode();
                return it.deduction.codeTypeId === deduction.codeTypeId && instanceCode === code;
            }
            else {
                return it.deduction.codeTypeId === deduction.codeTypeId;
            }
        });
    };
    /**
     * Return boolean observable when the
     * deductions master/metadata have been loaded
     * and service is listening for current company deductions
     * (which are cached in this service).
     * Always emits true when ready.
     */
    CompanyDeductionEditorService.prototype.ready = function () {
        var _this = this;
        if (this.deductions) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
        }
        return this.deductionService.deductions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (deductions) {
            _this.deductions = deductions;
            // No need to unsubscribe because this service never dies
            _this.companyDeductionService.entities$.subscribe(function (cds) {
                var items = _this.mapToItems(cds);
                _this.companyDeductionItems = items;
                if (!_this.deductionCategories) {
                    // cache to preserve visual state expand/collapse after first load
                    _this.deductionCategories = Object(_shared_deductions__WEBPACK_IMPORTED_MODULE_3__["getDeductionCategories"])(deductions);
                }
                _this.updateCatalog();
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () { return true; }));
    };
    /**
     * Return the terminating, multi-entity-save Observable of the new/changed/deleted CompanyDeductions.
     * Must subscribe to execute save; no need to unsubscribe.
     * Cleans cached CompanyDeductionItems immediately, whether or not subscribed.
     */
    CompanyDeductionEditorService.prototype.save = function () {
        if (this.employeeDeductionsToDelete) {
            this.employeeDeductionsToDelete.forEach(function (ed) {
                ed.isRemoved = true;
            });
        }
        this.employeeDeductionService.save(this.employeeDeductionsToDelete)
            .subscribe();
        this.employeeDeductionsToDelete = null;
        // save the dirty items
        var toSave = this.companyDeductionItems.filter(function (d) { return d.isDirty || d.isDeleted; });
        // mark CompanyDeduction rows for deletion
        toSave
            .filter(function (cdi) { return cdi.isDeleted; })
            .forEach(function (cdi) {
            cdi.companyDeductions.forEach(function (cd) {
                cd.isRemoved = true;
            });
        });
        // propagate changes
        toSave.filter(function (cdi) { return cdi.isDirty && !cdi.isDeleted; })
            .forEach(function (cdi) { return cdi.viewModelToEntity(); });
        // flatten each item's CompanyDeductions into a single array-to-save
        var changes = toSave.map(function (d) { return d.companyDeductions; })
            .reduce(function (a, b) { return a.concat(b); }, []);
        var ret = this.companyDeductionService.save(changes);
        // Todo: Why is the following down here? Move above the save (below toSave)? Would be easier to read.
        // PJ: save is checking for isRemoved to do real deletion.
        // PJ: Need to clean in-mem state after saving.
        // items are no longer dirty after save
        this.companyDeductionItems.forEach(function (d) { return (d.isDirty = false); });
        this.purgeDeleted();
        return ret;
    };
    // #region private helpers
    /**
     * Map CompanyDeductions into CompanyDeductionItems
     */
    CompanyDeductionEditorService.prototype.mapToItems = function (companyDeductions) {
        var _this = this;
        // Current Assumption: 1 Company Deduction -> 1 Item Deduction
        return companyDeductions.map(function (d) {
            var deductionType = _this.deductions.find(function (md) { return md.codeTypeId === d.deductionCodeTypeId; });
            var item = new _shared_deductions__WEBPACK_IMPORTED_MODULE_3__["CompanyDeductionItem"](deductionType, false, [d]);
            return item;
        });
    };
    /**
     * Remove the deleted CompanyDeductionItems and
     * remove the "isRemoved" CompanyDeductions from the remaining, active items
     */
    CompanyDeductionEditorService.prototype.purgeDeleted = function () {
        this.companyDeductionItems = this.companyDeductionItems
            .filter(function (item) { return item.isDeleted !== true; })
            .map(function (item) {
            // exclude item's removed company deductions
            item.companyDeductions = item.companyDeductions.filter(function (d) { return d.isRemoved !== true; });
            return item;
        });
    };
    CompanyDeductionEditorService.prototype.updateCatalog = function () {
        Object(_shared_deductions__WEBPACK_IMPORTED_MODULE_3__["updateTreeState"])(this.deductionCategories, this.companyDeductionItems.filter(function (cdi) { return !Object(_shared_deductions__WEBPACK_IMPORTED_MODULE_3__["isNewCompanyDeductionItem"])(cdi); }), this.currentInEdit);
    };
    /** Returns correspondence between a retirement plan and a catchup plan */
    CompanyDeductionEditorService.prototype.getCorrespondingCatchUpPlanFor = function (tid) {
        var found = this.deductions.find(function (d) { return d.retireAddon === tid; });
        return found ? found.codeTypeId : null;
    };
    CompanyDeductionEditorService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"]({ factory: function CompanyDeductionEditorService_Factory() { return new CompanyDeductionEditorService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_store_entity_entity_services_deduction_service__WEBPACK_IMPORTED_MODULE_6__["DeductionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_store_entity_entity_services_company_deduction_service__WEBPACK_IMPORTED_MODULE_7__["CompanyDeductionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_store_entity_entity_services_employee_deduction_service__WEBPACK_IMPORTED_MODULE_8__["EmployeeDeductionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_store_entity_entity_services_employee_service__WEBPACK_IMPORTED_MODULE_9__["EmployeeService"])); }, token: CompanyDeductionEditorService, providedIn: "root" });
    return CompanyDeductionEditorService;
}());



/***/ }),

/***/ "./src/app/deductions/company/company-deduction-remove.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/deductions/company/company-deduction-remove.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_CompanyDeductionRemoveComponent, View_CompanyDeductionRemoveComponent_0, View_CompanyDeductionRemoveComponent_Host_0, CompanyDeductionRemoveComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CompanyDeductionRemoveComponent", function() { return RenderType_CompanyDeductionRemoveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyDeductionRemoveComponent_0", function() { return View_CompanyDeductionRemoveComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyDeductionRemoveComponent_Host_0", function() { return View_CompanyDeductionRemoveComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionRemoveComponentNgFactory", function() { return CompanyDeductionRemoveComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/input/input-text.component.ngfactory */ "./src/app/shared/input/input-text.component.ngfactory.js");
/* harmony import */ var _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/input/input-text.component */ "./src/app/shared/input/input-text.component.ts");
/* harmony import */ var _shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/input/input-mask-catalog */ "./src/app/shared/input/input-mask-catalog.ts");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _company_deduction_remove_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-deduction-remove.component */ "./src/app/deductions/company/company-deduction-remove.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_CompanyDeductionRemoveComponent = [];
var RenderType_CompanyDeductionRemoveComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CompanyDeductionRemoveComponent, data: {} });

function View_CompanyDeductionRemoveComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.fullName(); _ck(_v, 1, 0, currVal_0); }); }
function View_CompanyDeductionRemoveComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "h4", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "i", [["class", "material-icons icon text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["warning"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Delete Company Deduction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.close('cancel') !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 27, "div", [["class", "p-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Are you sure you want to "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["delete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" this Company Deduction? "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](15, null, ["The following ", " employees are enrolled for the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" deduction:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionRemoveComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This action "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["cannot"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" be undone and will "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["permanently"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" delete this deductions and its corresponding information in already enrolled employees."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 5, "sp-input", [["autofocus", "true"], ["label", "Enter the word 'DELETE' to confirm"], ["name", "deleteConfirmation"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.deleteConfirmation = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_4__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"]]], { autofocus: [0, "autofocus"], label: [1, "label"], name: [2, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 4, "div", [["class", "modal-footer d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 1, "button", [["class", "btn btn-light"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.close('cancel') !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.close('delete') !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Delete"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.employeeList; _ck(_v, 21, 0, currVal_2); var currVal_10 = "true"; var currVal_11 = "Enter the word 'DELETE' to confirm"; var currVal_12 = "deleteConfirmation"; _ck(_v, 31, 0, currVal_10, currVal_11, currVal_12); var currVal_13 = "deleteConfirmation"; var currVal_14 = _co.deleteConfirmation; _ck(_v, 33, 0, currVal_13, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.employeeList.length; _ck(_v, 15, 0, currVal_0); var currVal_1 = _co.deductionName; _ck(_v, 17, 0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassPending; _ck(_v, 30, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_15 = !_co.isDeleteConfirmed; _ck(_v, 39, 0, currVal_15); }); }
function View_CompanyDeductionRemoveComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { modalContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[1, 2], ["content", 2]], null, 0, null, View_CompanyDeductionRemoveComponent_1))], null, null); }
function View_CompanyDeductionRemoveComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-company-deduction-remove", [], null, null, null, View_CompanyDeductionRemoveComponent_0, RenderType_CompanyDeductionRemoveComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _company_deduction_remove_component__WEBPACK_IMPORTED_MODULE_7__["CompanyDeductionRemoveComponent"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]], null, null)], null, null); }
var CompanyDeductionRemoveComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-company-deduction-remove", _company_deduction_remove_component__WEBPACK_IMPORTED_MODULE_7__["CompanyDeductionRemoveComponent"], View_CompanyDeductionRemoveComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/deductions/company/company-deduction-remove.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/deductions/company/company-deduction-remove.component.ts ***!
  \**************************************************************************/
/*! exports provided: CompanyDeductionRemoveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionRemoveComponent", function() { return CompanyDeductionRemoveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CompanyDeductionRemoveComponent = /** @class */ (function () {
    function CompanyDeductionRemoveComponent(modalService) {
        this.modalService = modalService;
        this.obs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this.employeeList = [];
    }
    Object.defineProperty(CompanyDeductionRemoveComponent.prototype, "isDeleteConfirmed", {
        get: function () {
            return /delete/i.test(this.deleteConfirmation);
        },
        enumerable: true,
        configurable: true
    });
    CompanyDeductionRemoveComponent.prototype.show = function (deductionName, employeeList) {
        var _this = this;
        this.deductionName = deductionName;
        this.employeeList = employeeList;
        this.source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.source);
        this.modalRef = this.modalService.open(this.modalContent);
        this.modalRef.result.then(function (res) {
            _this.close(res);
            _this.modalRef = null;
        });
        return this.obs;
    };
    CompanyDeductionRemoveComponent.prototype.close = function (reason) {
        if (reason === 'delete') {
            this.modalRef.close();
            this.source.next(true);
        }
        else {
            this.modalRef.dismiss();
            this.source.next(false);
        }
    };
    return CompanyDeductionRemoveComponent;
}());



/***/ }),

/***/ "./src/app/deductions/company/company-deductions-container.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/deductions/company/company-deductions-container.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_CompanyDeductionsContainerComponent, View_CompanyDeductionsContainerComponent_0, View_CompanyDeductionsContainerComponent_Host_0, CompanyDeductionsContainerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CompanyDeductionsContainerComponent", function() { return RenderType_CompanyDeductionsContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyDeductionsContainerComponent_0", function() { return View_CompanyDeductionsContainerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyDeductionsContainerComponent_Host_0", function() { return View_CompanyDeductionsContainerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionsContainerComponentNgFactory", function() { return CompanyDeductionsContainerComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _deductions_catalog_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deductions-catalog.component.ngfactory */ "./src/app/deductions/company/deductions-catalog.component.ngfactory.js");
/* harmony import */ var _deductions_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deductions-catalog.component */ "./src/app/deductions/company/deductions-catalog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_deductions_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-deductions-container.component */ "./src/app/deductions/company/company-deductions-container.component.ts");
/* harmony import */ var _company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-deduction-editor.service */ "./src/app/deductions/company/company-deduction-editor.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_CompanyDeductionsContainerComponent = [];
var RenderType_CompanyDeductionsContainerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CompanyDeductionsContainerComponent, data: {} });

function View_CompanyDeductionsContainerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "div", [["class", "static-nav d-flex flex-column"], ["id", "companyDeductions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 7, "div", [["class", "layout-split-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "div", [["class", "layout-split-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "sp-deductions-catalog", [], null, [[null, "deductionTypeSelected"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("deductionTypeSelected" === en)) {
        var pd_0 = (_co.onCatalogSelection($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _deductions_catalog_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DeductionsCatalogComponent_0"], _deductions_catalog_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DeductionsCatalogComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 49152, null, 0, _deductions_catalog_component__WEBPACK_IMPORTED_MODULE_2__["DeductionsCatalogComponent"], [], { catalog: [0, "catalog"] }, { deductionTypeSelected: "deductionTypeSelected" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "hr", [["class", "desktop-hide"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "div", [["class", "layout-split-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 212992, [["outlet", 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm.catalog; _ck(_v, 4, 0, currVal_0); _ck(_v, 8, 0); }, null); }
function View_CompanyDeductionsContainerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-company-deductions", [], null, null, null, View_CompanyDeductionsContainerComponent_0, RenderType_CompanyDeductionsContainerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _company_deductions_container_component__WEBPACK_IMPORTED_MODULE_4__["CompanyDeductionsContainerComponent"], [_company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_5__["CompanyDeductionEditorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CompanyDeductionsContainerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-company-deductions", _company_deductions_container_component__WEBPACK_IMPORTED_MODULE_4__["CompanyDeductionsContainerComponent"], View_CompanyDeductionsContainerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/deductions/company/company-deductions-container.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/deductions/company/company-deductions-container.component.ts ***!
  \******************************************************************************/
/*! exports provided: CompanyDeductionsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionsContainerComponent", function() { return CompanyDeductionsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-deduction-editor.service */ "./src/app/deductions/company/company-deduction-editor.service.ts");
/* harmony import */ var _shared_deductions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/deductions */ "./src/app/shared/deductions/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");





var CompanyDeductionViewModel = /** @class */ (function () {
    function CompanyDeductionViewModel() {
        this.catalog = [];
    }
    return CompanyDeductionViewModel;
}());
var companyDeductionsUrl = _core__WEBPACK_IMPORTED_MODULE_4__["WellKnownRoutes"].Employees + '/company-deductions';
var CompanyDeductionsContainerComponent = /** @class */ (function () {
    function CompanyDeductionsContainerComponent(editorService, router) {
        this.editorService = editorService;
        this.router = router;
        this.vm = new CompanyDeductionViewModel();
        this.showTable = false;
    }
    CompanyDeductionsContainerComponent.prototype.ngOnInit = function () {
        this.vm = {
            catalog: this.editorService.deductionCategories
        };
    };
    CompanyDeductionsContainerComponent.prototype.onCatalogSelection = function (dt) {
        this.selectedKey = dt.key;
        this.editorService.command = Object(_shared_deductions__WEBPACK_IMPORTED_MODULE_3__["buildCommandForCreation"])(dt);
        var code = this.editorService.command.code;
        if (dt.key === 'Retirements') {
            this.router.navigate([companyDeductionsUrl + '/retirement']);
        }
        else {
            this.router.navigate([companyDeductionsUrl + "/deduction/" + dt.key + "/" + code]);
        }
    };
    return CompanyDeductionsContainerComponent;
}());



/***/ }),

/***/ "./src/app/deductions/company/company-deductions-table.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/deductions/company/company-deductions-table.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_CompanyDeductionsTableComponent, View_CompanyDeductionsTableComponent_0, View_CompanyDeductionsTableComponent_Host_0, CompanyDeductionsTableComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CompanyDeductionsTableComponent", function() { return RenderType_CompanyDeductionsTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyDeductionsTableComponent_0", function() { return View_CompanyDeductionsTableComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyDeductionsTableComponent_Host_0", function() { return View_CompanyDeductionsTableComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionsTableComponentNgFactory", function() { return CompanyDeductionsTableComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_pipes_company_kind_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pipes/company-kind.pipe */ "./src/app/shared/pipes/company-kind.pipe.ts");
/* harmony import */ var _company_deduction_remove_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-deduction-remove.component.ngfactory */ "./src/app/deductions/company/company-deduction-remove.component.ngfactory.js");
/* harmony import */ var _company_deduction_remove_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-deduction-remove.component */ "./src/app/deductions/company/company-deduction-remove.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _company_deductions_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-deductions-table.component */ "./src/app/deductions/company/company-deductions-table.component.ts");
/* harmony import */ var _store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/entity/entity-services/company.service */ "./src/app/store/entity/entity-services/company.service.ts");
/* harmony import */ var _company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company-deduction-editor.service */ "./src/app/deductions/company/company-deduction-editor.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/services/logger.service */ "./src/app/core/services/logger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_CompanyDeductionsTableComponent = [];
var RenderType_CompanyDeductionsTableComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CompanyDeductionsTableComponent, data: {} });

function View_CompanyDeductionsTableComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "div", [["class", "sp-card sp-card-helper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["height", "86px"], ["src", "/assets/images/icon-placeholder-add.png"], ["width", "104px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["You have no deductions yet."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Select a category from the \"Add Deduction\" menu and pick a deduction."]))], null, null); }
function View_CompanyDeductionsTableComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "badge badge-sp badge-complete"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["COMPLETED"]))], null, null); }
function View_CompanyDeductionsTableComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "badge badge-sp badge-inprogress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["IN PROGRESS"]))], null, null); }
function View_CompanyDeductionsTableComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 24, "div", [["class", "sp-card link-cursor"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 23, "div", [["class", "sp-card-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 9, "div", [["class", "d-flex justify-content-between align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "sp-card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 6, "div", [["class", "sp-card-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.edit(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "i", [["class", "material-icons icon d-inline btn-circle"], ["title", "Edit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["edit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.delete(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "i", [["class", "material-icons icon d-inline btn-circle"], ["title", "Remove"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["delete_forever"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 12, "div", [["class", "d-flex justify-content-between align-items-center mt-1 mobile-stack"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 7, "div", [["class", "sp-card-subheader mobile-stack"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](15, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "span", [["class", "mobile-hide"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](20, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionsTableComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionsTableComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_3 = _v.context.$implicit.isCompleted; _ck(_v, 22, 0, currVal_3); var currVal_4 = !_v.context.$implicit.isCompleted; _ck(_v, 24, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getMenuLabel(_v.context.$implicit); _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 15, 0, currVal_1); var currVal_2 = _v.context.$implicit.abbreviation; _ck(_v, 20, 0, currVal_2); }); }
function View_CompanyDeductionsTableComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionsTableComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.createdDeductions; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CompanyDeductionsTableComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _shared_pipes_company_kind_pipe__WEBPACK_IMPORTED_MODULE_2__["CompanyKindPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { removeConfirmationModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", " Deductions"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionsTableComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyDeductionsTableComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "sp-company-deduction-remove", [], null, null, null, _company_deduction_remove_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_CompanyDeductionRemoveComponent_0"], _company_deduction_remove_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_CompanyDeductionRemoveComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 49152, [[1, 4], ["removeConfirmation", 4]], 0, _company_deduction_remove_component__WEBPACK_IMPORTED_MODULE_4__["CompanyDeductionRemoveComponent"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.createdDeductions.length === 0); _ck(_v, 7, 0, currVal_1); var currVal_2 = (_co.createdDeductions.length > 0); _ck(_v, 9, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).transform(_co.company$)))); _ck(_v, 3, 0, currVal_0); }); }
function View_CompanyDeductionsTableComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-company-deductions-table", [], null, null, null, View_CompanyDeductionsTableComponent_0, RenderType_CompanyDeductionsTableComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _company_deductions_table_component__WEBPACK_IMPORTED_MODULE_6__["CompanyDeductionsTableComponent"], [_store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"], _company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_8__["CompanyDeductionEditorService"], _core_services_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CompanyDeductionsTableComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-company-deductions-table", _company_deductions_table_component__WEBPACK_IMPORTED_MODULE_6__["CompanyDeductionsTableComponent"], View_CompanyDeductionsTableComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/deductions/company/company-deductions-table.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/deductions/company/company-deductions-table.component.ts ***!
  \**************************************************************************/
/*! exports provided: CompanyDeductionsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionsTableComponent", function() { return CompanyDeductionsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-deduction-editor.service */ "./src/app/deductions/company/company-deduction-editor.service.ts");
/* harmony import */ var _company_deduction_remove_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-deduction-remove.component */ "./src/app/deductions/company/company-deduction-remove.component.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @entity */ "./src/app/store/entity/index.ts");
/* harmony import */ var _shared_deductions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/deductions */ "./src/app/shared/deductions/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");








var CompanyDeductionsTableComponent = /** @class */ (function () {
    function CompanyDeductionsTableComponent(companyService, editorService, log, router) {
        this.companyService = companyService;
        this.editorService = editorService;
        this.log = log;
        this.router = router;
    }
    CompanyDeductionsTableComponent.prototype.ngOnInit = function () {
        this.company$ = this.companyService.currentCompany$;
    };
    Object.defineProperty(CompanyDeductionsTableComponent.prototype, "createdDeductions", {
        /** Hide the elements been created (new state)
         *  Show only created ones.
         */
        get: function () {
            return this.editorService.companyDeductionItems
                .filter(function (d) { return !Object(_shared_deductions__WEBPACK_IMPORTED_MODULE_6__["isNewCompanyDeductionItem"])(d); })
                .sort(function (a, b) { return a.deduction.codeType.localeCompare(b.deduction.codeType); });
        },
        enumerable: true,
        configurable: true
    });
    CompanyDeductionsTableComponent.prototype.getMenuLabel = function (di) {
        var suffix = di.isPreTax ? ' (Pre-Tax)' : di.isPostTax ? ' (Post-Tax)' : '';
        return di.deduction.codeType + suffix;
    };
    /**
     * Navigate to edit deductions
     * Retirements and most deductions are single instances: you can only instanciate it once.
     * But some types of deductions like Miscellaneous with/out Goals can be instanciated
     * till 5 times. Code is the discriminator of the instances to allow navigate to edit the specific one.
     */
    CompanyDeductionsTableComponent.prototype.edit = function (d) {
        this.editorService.command = Object(_shared_deductions__WEBPACK_IMPORTED_MODULE_6__["buildCommandForEdit"])(d);
        if (d.isRetirement()) {
            this.router.navigate(['/employees/company-deductions/retirement']);
        }
        else {
            var code = d.getCode();
            if (code) {
                this.router.navigate(['/employees/company-deductions/deduction/' + d.deduction.codeType + '/' + code]);
            }
            else {
                this.router.navigate(['/employees/company-deductions/deduction/' + d.deduction.codeType]);
            }
        }
    };
    CompanyDeductionsTableComponent.prototype.delete = function (d) {
        var _this = this;
        this.editorService.getEmployeesEnrolledInDeduction(d)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (affectedEmployees) {
            _this.doDelete(d, affectedEmployees);
        });
    };
    CompanyDeductionsTableComponent.prototype.doDelete = function (d, affectedEmployees) {
        var _this = this;
        var needsConfirmation = affectedEmployees.length > 0;
        if (needsConfirmation) {
            this.removeConfirmationModal.show(d.name, affectedEmployees)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                .subscribe(function (result) {
                if (result) {
                    _this.confirmDelete(d);
                }
            });
        }
        else {
            this.confirmDelete(d);
        }
    };
    CompanyDeductionsTableComponent.prototype.confirmDelete = function (d) {
        var _this = this;
        this.editorService.delete(d).subscribe(function (_) {
            _this.router.navigate(['/employees/company-deductions']);
        }, 
        // TODO: Remove error handling that looks like this
        // because this does nothing that wasn't done at lower level
        // THE ONLY REASON to handle error in component is to display something (or swallow error)
        // JESUS: Please hunt for other examples and fix them.
        // JESUS: Ask Pedro did he have a specific reason for swallowing error here.
        function (error) { return _this.log.error(error); });
    };
    return CompanyDeductionsTableComponent;
}());



/***/ }),

/***/ "./src/app/deductions/company/company-deductions.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/deductions/company/company-deductions.guard.ts ***!
  \****************************************************************/
/*! exports provided: CompanyDeductionsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionsGuard", function() { return CompanyDeductionsGuard; });
/* harmony import */ var _company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-deduction-editor.service */ "./src/app/deductions/company/company-deduction-editor.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CompanyDeductionsGuard = /** @class */ (function () {
    function CompanyDeductionsGuard(service) {
        this.service = service;
    }
    CompanyDeductionsGuard.prototype.canActivateChild = function () {
        return this.service.ready();
    };
    CompanyDeductionsGuard.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function CompanyDeductionsGuard_Factory() { return new CompanyDeductionsGuard(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_0__["CompanyDeductionEditorService"])); }, token: CompanyDeductionsGuard, providedIn: "root" });
    return CompanyDeductionsGuard;
}());



/***/ }),

/***/ "./src/app/deductions/company/company-deductions.module.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/deductions/company/company-deductions.module.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: CompanyDeductionsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionsModuleNgFactory", function() { return CompanyDeductionsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company_deductions_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-deductions.module */ "./src/app/deductions/company/company-deductions.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _company_deductions_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-deductions-container.component.ngfactory */ "./src/app/deductions/company/company-deductions-container.component.ngfactory.js");
/* harmony import */ var _company_deductions_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-deductions-table.component.ngfactory */ "./src/app/deductions/company/company-deductions-table.component.ngfactory.js");
/* harmony import */ var _company_retirement_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-retirement.component.ngfactory */ "./src/app/deductions/company/company-retirement.component.ngfactory.js");
/* harmony import */ var _company_deduction_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-deduction-editor.component.ngfactory */ "./src/app/deductions/company/company-deduction-editor.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _company_deductions_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./company-deductions-container.component */ "./src/app/deductions/company/company-deductions-container.component.ts");
/* harmony import */ var _company_deductions_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./company-deductions.guard */ "./src/app/deductions/company/company-deductions.guard.ts");
/* harmony import */ var _core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/routing-guards/page-leave-guard */ "./src/app/core/routing-guards/page-leave-guard.ts");
/* harmony import */ var _company_deductions_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./company-deductions-table.component */ "./src/app/deductions/company/company-deductions-table.component.ts");
/* harmony import */ var _company_retirement_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./company-retirement.component */ "./src/app/deductions/company/company-retirement.component.ts");
/* harmony import */ var _company_deduction_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./company-deduction-editor.component */ "./src/app/deductions/company/company-deduction-editor.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var CompanyDeductionsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_company_deductions_module__WEBPACK_IMPORTED_MODULE_1__["CompanyDeductionsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵzNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵbaNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵsNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵwNgFactory"], _company_deductions_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CompanyDeductionsContainerComponentNgFactory"], _company_deductions_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["CompanyDeductionsTableComponentNgFactory"], _company_retirement_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["CompanyRetirementComponentNgFactory"], _company_deduction_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["CompanyDeductionEditorComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ɵbb"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__["TextMaskModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__["TextMaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _company_deductions_module__WEBPACK_IMPORTED_MODULE_1__["CompanyDeductionsModule"], _company_deductions_module__WEBPACK_IMPORTED_MODULE_1__["CompanyDeductionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () { return [[{ path: "", component: _company_deductions_container_component__WEBPACK_IMPORTED_MODULE_14__["CompanyDeductionsContainerComponent"], canActivateChild: [_company_deductions_guard__WEBPACK_IMPORTED_MODULE_15__["CompanyDeductionsGuard"]], canDeactivate: [_core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_16__["PageLeaveGuard"]], data: { title: "Company Deductions" }, children: [{ path: "", component: _company_deductions_table_component__WEBPACK_IMPORTED_MODULE_17__["CompanyDeductionsTableComponent"], canDeactivate: [_core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_16__["PageLeaveGuard"]], data: { title: "Company Deductions", root: true } }, { path: "retirement", component: _company_retirement_component__WEBPACK_IMPORTED_MODULE_18__["CompanyRetirementComponent"], canDeactivate: [_core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_16__["PageLeaveGuard"]], data: { title: "Company Retirement Plan" } }, { path: "deduction/:id/:code", component: _company_deduction_editor_component__WEBPACK_IMPORTED_MODULE_19__["CompanyDeductionEditorComponent"], canDeactivate: [_core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_16__["PageLeaveGuard"]], data: {} }, { path: "deduction/:id", component: _company_deduction_editor_component__WEBPACK_IMPORTED_MODULE_19__["CompanyDeductionEditorComponent"], canDeactivate: [_core_routing_guards_page_leave_guard__WEBPACK_IMPORTED_MODULE_16__["PageLeaveGuard"]], data: {} }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/deductions/company/company-deductions.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/deductions/company/company-deductions.module.ts ***!
  \*****************************************************************/
/*! exports provided: routes, CompanyDeductionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDeductionsModule", function() { return CompanyDeductionsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_deduction_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-deduction-editor.component */ "./src/app/deductions/company/company-deduction-editor.component.ts");
/* harmony import */ var _company_deductions_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-deductions-container.component */ "./src/app/deductions/company/company-deductions-container.component.ts");
/* harmony import */ var _company_deductions_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-deductions.guard */ "./src/app/deductions/company/company-deductions.guard.ts");
/* harmony import */ var _company_deductions_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-deductions-table.component */ "./src/app/deductions/company/company-deductions-table.component.ts");
/* harmony import */ var _company_retirement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-retirement.component */ "./src/app/deductions/company/company-retirement.component.ts");
/* harmony import */ var _core_routing_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/routing-guards */ "./src/app/core/routing-guards/index.ts");







var routes = [
    {
        // Expected full path: ~/employees/company-deductions
        path: '',
        component: _company_deductions_container_component__WEBPACK_IMPORTED_MODULE_2__["CompanyDeductionsContainerComponent"],
        canActivateChild: [_company_deductions_guard__WEBPACK_IMPORTED_MODULE_3__["CompanyDeductionsGuard"]],
        canDeactivate: [_core_routing_guards__WEBPACK_IMPORTED_MODULE_6__["PageLeaveGuard"]],
        data: { title: 'Company Deductions' },
        children: [
            {
                path: '',
                component: _company_deductions_table_component__WEBPACK_IMPORTED_MODULE_4__["CompanyDeductionsTableComponent"],
                canDeactivate: [_core_routing_guards__WEBPACK_IMPORTED_MODULE_6__["PageLeaveGuard"]],
                data: {
                    title: 'Company Deductions',
                    root: true // root marks the root page to provide info to hide/show deductions-table
                }
            },
            {
                path: 'retirement',
                component: _company_retirement_component__WEBPACK_IMPORTED_MODULE_5__["CompanyRetirementComponent"],
                canDeactivate: [_core_routing_guards__WEBPACK_IMPORTED_MODULE_6__["PageLeaveGuard"]],
                data: { title: 'Company Retirement Plan' }
            },
            {
                path: 'deduction/:id/:code',
                component: _company_deduction_editor_component__WEBPACK_IMPORTED_MODULE_1__["CompanyDeductionEditorComponent"],
                canDeactivate: [_core_routing_guards__WEBPACK_IMPORTED_MODULE_6__["PageLeaveGuard"]],
                data: {}
            },
            {
                path: 'deduction/:id',
                component: _company_deduction_editor_component__WEBPACK_IMPORTED_MODULE_1__["CompanyDeductionEditorComponent"],
                canDeactivate: [_core_routing_guards__WEBPACK_IMPORTED_MODULE_6__["PageLeaveGuard"]],
                data: {}
            }
        ]
    }
];
var CompanyDeductionsModule = /** @class */ (function () {
    function CompanyDeductionsModule() {
    }
    return CompanyDeductionsModule;
}());



/***/ }),

/***/ "./src/app/deductions/company/company-retirement.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/deductions/company/company-retirement.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_CompanyRetirementComponent, View_CompanyRetirementComponent_0, View_CompanyRetirementComponent_Host_0, CompanyRetirementComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CompanyRetirementComponent", function() { return RenderType_CompanyRetirementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyRetirementComponent_0", function() { return View_CompanyRetirementComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CompanyRetirementComponent_Host_0", function() { return View_CompanyRetirementComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRetirementComponentNgFactory", function() { return CompanyRetirementComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/radio-group/radio-group.component.ngfactory */ "./src/app/shared/radio-group/radio-group.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");
/* harmony import */ var _shared_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/radio-group/radio-button.component.ngfactory */ "./src/app/shared/radio-group/radio-button.component.ngfactory.js");
/* harmony import */ var _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/radio-group/radio-button.component */ "./src/app/shared/radio-group/radio-button.component.ts");
/* harmony import */ var _shared_read_more_read_more_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/read-more/read-more.component.ngfactory */ "./src/app/shared/read-more/read-more.component.ngfactory.js");
/* harmony import */ var _shared_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/read-more/read-more.component */ "./src/app/shared/read-more/read-more.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/input/input-text.component.ngfactory */ "./src/app/shared/input/input-text.component.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/input/input-text.component */ "./src/app/shared/input/input-text.component.ts");
/* harmony import */ var _shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/input/input-mask-catalog */ "./src/app/shared/input/input-mask-catalog.ts");
/* harmony import */ var _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/model.component.ngfactory */ "./src/app/shared/model.component.ngfactory.js");
/* harmony import */ var _company_deductions_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./company-deductions-table.component.ngfactory */ "./src/app/deductions/company/company-deductions-table.component.ngfactory.js");
/* harmony import */ var _company_deductions_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./company-deductions-table.component */ "./src/app/deductions/company/company-deductions-table.component.ts");
/* harmony import */ var _store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/entity/entity-services/company.service */ "./src/app/store/entity/entity-services/company.service.ts");
/* harmony import */ var _company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./company-deduction-editor.service */ "./src/app/deductions/company/company-deduction-editor.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/services/logger.service */ "./src/app/core/services/logger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_retirement_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./company-retirement.component */ "./src/app/deductions/company/company-retirement.component.ts");
/* harmony import */ var ngrx_data__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngrx-data */ "./node_modules/ngrx-data/fesm5/ngrx-data.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 























var styles_CompanyRetirementComponent = [];
var RenderType_CompanyRetirementComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CompanyRetirementComponent, data: {} });

function View_CompanyRetirementComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 10, "sp-radio-group", [["label", "Plan Type"], ["name", "planTypeIRA"], ["propertyName", "planType"], ["tooltip", "true"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.configureEditor() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], tooltip: [3, "tooltip"] }, { change: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 1, "span", [["class", "label-tooltip"], ["tooltipText", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Select the Plan Type for IRA. SEP IRA apply for self-employed only. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, 2, 2, "sp-radio-button", [["id", "ptSimpleIRA"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Simple IRA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 2, 2, "sp-radio-button", [["id", "ptSepIRA"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 49152, [[2, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["SEP IRA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Plan Type"; var currVal_1 = "planTypeIRA"; var currVal_2 = "planType"; var currVal_3 = "true"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.RetirementPlanTypes.SimpleIRA; _ck(_v, 6, 0, currVal_4); var currVal_5 = _co.RetirementPlanTypes.SepIRA; _ck(_v, 9, 0, currVal_5); }, null); }
function View_CompanyRetirementComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 13, "sp-radio-group", [["label", "Plan Type"], ["name", "planType"], ["propertyName", "planType"], ["tooltip", "true"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.configureEditor() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], tooltip: [3, "tooltip"] }, { change: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 1, "span", [["class", "label-tooltip"], ["tooltipText", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Select the Plan Type. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, 2, 2, "sp-radio-button", [["id", "ptTraditional"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 49152, [[3, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Traditional"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 2, 2, "sp-radio-button", [["id", "ptSafeHarbor"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 49152, [[3, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Safe Harbor"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, 2, 2, "sp-radio-button", [["id", "ptSimple"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 49152, [[3, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Simple"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Plan Type"; var currVal_1 = "planType"; var currVal_2 = "planType"; var currVal_3 = "true"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.RetirementPlanTypes.P401KTraditional; _ck(_v, 6, 0, currVal_4); var currVal_5 = _co.RetirementPlanTypes.P401KSafeHarbor; _ck(_v, 9, 0, currVal_5); var currVal_6 = _co.RetirementPlanTypes.P401KSimple; _ck(_v, 12, 0, currVal_6); }, null); }
function View_CompanyRetirementComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "div", [["class", "tax-item-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "sp-read-more", [["hideSeeLess", "true"]], null, null, null, _shared_read_more_read_more_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ReadMoreComponent_0"], _shared_read_more_read_more_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ReadMoreComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _shared_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_7__["ReadMoreComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]], { hideSeeLess: [0, "hideSeeLess"], description: [1, "description"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "true"; var currVal_1 = _co.vm.htmlDescription; _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_CompanyRetirementComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 18, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyRetirementComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyRetirementComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CompanyRetirementComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "sp-input", [["label", "Deduction Name"], ["modelType", "Retirement"], ["propertyName", "name"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_12__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_12__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_13__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { disabled: [0, "disabled"], label: [1, "label"], model: [2, "model"], modelType: [3, "modelType"], propertyName: [4, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "sp-input", [["class", "input-abbreviation"], ["label", "Deduction Abbreviation"], ["modelType", "Retirement"], ["propertyName", "abbreviation"]], null, null, null, _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_InputTextComponent_0"], _shared_input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_12__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4440064, null, 0, _shared_input_input_text_component__WEBPACK_IMPORTED_MODULE_12__["InputTextComponent"], [_shared_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_13__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { disabled: [0, "disabled"], label: [1, "label"], model: [2, "model"], modelType: [3, "modelType"], propertyName: [4, "propertyName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 4, "div", [["class", "d-flex mt-4 mb-4 justify-content-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "button", [["class", "btn btn-light mr-3"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.done() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](18, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.vm.plan === _co.RetirementPlans.IRA); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.vm.plan === _co.RetirementPlans.Plan401K); _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.vm.htmlDescription; _ck(_v, 6, 0, currVal_2); var currVal_3 = !_co.vm.canChangeName; var currVal_4 = "Deduction Name"; var currVal_5 = _co.vm; var currVal_6 = "Retirement"; var currVal_7 = "name"; _ck(_v, 10, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = !_co.vm.canChangeAbbreviation; var currVal_9 = "Deduction Abbreviation"; var currVal_10 = _co.vm; var currVal_11 = "Retirement"; var currVal_12 = "abbreviation"; _ck(_v, 13, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_13 = (_co.isNew ? "Add" : "Update"); _ck(_v, 18, 0, currVal_13); }); }
function View_CompanyRetirementComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 24, "div", [["class", "tax-item-form deduction-retirement"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "div", [["class", "tax-item-header d-flex justify-content-between align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Retirement Plan"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.done() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "i", [["class", "material-icons icon btn-circle"], ["title", "Close"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 17, "sp-model", [["modelType", "Retirement"]], null, null, null, _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_ModelComponent_0"], _shared_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 573440, null, 0, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"], [], { model: [0, "model"], modelType: [1, "modelType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 16777216, null, 0, 13, "sp-radio-group", [["label", "Retirement Plan Selecction"], ["name", "plan"], ["propertyName", "plan"], ["tooltip", "true"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.configureEditorForPlan() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_RadioGroupComponent_0"], _shared_radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 114688, null, 1, _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _shared_model_component__WEBPACK_IMPORTED_MODULE_3__["ModelComponent"]]], { label: [0, "label"], name: [1, "name"], propertyName: [2, "propertyName"], tooltip: [3, "tooltip"] }, { change: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, 0, 1, "span", [["class", "label-tooltip"], ["tooltipText", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Select the Retirement Plan your company offers to your employees. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, 2, 2, "sp-radio-button", [["id", "planIRA"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 49152, [[1, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["IRA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, 2, 2, "sp-radio-button", [["id", "plan401K"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 49152, [[1, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["401(k)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, 2, 2, "sp-radio-button", [["id", "plan403b"]], null, null, null, _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_RadioButtonComponent_0"], _shared_radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 49152, [[1, 4]], 0, _shared_radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["403(b)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_CompanyRetirementComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "sp-company-deductions-table", [], null, null, null, _company_deductions_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_CompanyDeductionsTableComponent_0"], _company_deductions_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_CompanyDeductionsTableComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 114688, null, 0, _company_deductions_table_component__WEBPACK_IMPORTED_MODULE_16__["CompanyDeductionsTableComponent"], [_store_entity_entity_services_company_service__WEBPACK_IMPORTED_MODULE_17__["CompanyService"], _company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_18__["CompanyDeductionEditorService"], _core_services_logger_service__WEBPACK_IMPORTED_MODULE_19__["LoggerService"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.vm; var currVal_1 = "Retirement"; _ck(_v, 8, 0, currVal_0, currVal_1); var currVal_2 = "Retirement Plan Selecction"; var currVal_3 = "plan"; var currVal_4 = "plan"; var currVal_5 = "true"; _ck(_v, 10, 0, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.RetirementPlans.IRA; _ck(_v, 15, 0, currVal_6); var currVal_7 = _co.RetirementPlans.Plan401K; _ck(_v, 18, 0, currVal_7); var currVal_8 = _co.RetirementPlans.Plan403B; _ck(_v, 21, 0, currVal_8); var currVal_9 = _co.vm.plan; _ck(_v, 24, 0, currVal_9); _ck(_v, 26, 0); }, null); }
function View_CompanyRetirementComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-company-retirement", [], null, null, null, View_CompanyRetirementComponent_0, RenderType_CompanyRetirementComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _company_retirement_component__WEBPACK_IMPORTED_MODULE_21__["CompanyRetirementComponent"], [_company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_18__["CompanyDeductionEditorService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ngrx_data__WEBPACK_IMPORTED_MODULE_22__["Logger"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CompanyRetirementComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-company-retirement", _company_retirement_component__WEBPACK_IMPORTED_MODULE_21__["CompanyRetirementComponent"], View_CompanyRetirementComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/deductions/company/company-retirement.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/deductions/company/company-retirement.component.ts ***!
  \********************************************************************/
/*! exports provided: CompanyRetirementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRetirementComponent", function() { return CompanyRetirementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _company_deduction_editor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-deduction-editor.service */ "./src/app/deductions/company/company-deduction-editor.service.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");
/* harmony import */ var ngrx_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngrx-data */ "./node_modules/ngrx-data/fesm5/ngrx-data.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");








var Retirement = /** @class */ (function () {
    function Retirement() {
    }
    return Retirement;
}());
var CompanyRetirementComponent = /** @class */ (function () {
    function CompanyRetirementComponent(editorService, hostEl, logger, router) {
        this.editorService = editorService;
        this.hostEl = hostEl;
        this.logger = logger;
        this.router = router;
        this.RetirementPlans = _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"];
        this.RetirementPlanTypes = _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"];
        this.RetirementPlanApply = _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanApply"];
        this.MatchTypes = _model__WEBPACK_IMPORTED_MODULE_5__["MatchTypes"];
        this.EmployeeContributionModel = _model__WEBPACK_IMPORTED_MODULE_5__["EmployeeContributionModel"];
        this.isNew = false;
        this.cancelSave = false;
    }
    CompanyRetirementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deductions = this.editorService.deductions;
        this.vm = new Retirement();
        this.loadVm();
        setTimeout(function () { return _this.hostEl.nativeElement.scrollIntoView(); }); // must delay one tick
    };
    CompanyRetirementComponent.prototype.done = function () {
        this.editorService.endEdit();
        this.router.navigate([_core__WEBPACK_IMPORTED_MODULE_7__["WellKnownRoutes"].CompanyDeductions]);
    };
    CompanyRetirementComponent.prototype.cancel = function () {
        this.editorService.endEdit();
        this.cancelSave = true;
        this.router.navigate([_core__WEBPACK_IMPORTED_MODULE_7__["WellKnownRoutes"].CompanyDeductions]);
    };
    CompanyRetirementComponent.prototype.delete = function () {
        var _this = this;
        this.editorService.endEdit();
        this.editorService.delete(this.currentDeductionItem).subscribe(function (_) { }, function (error) { return _this.logger.error(error); });
        this.router.navigate([_core__WEBPACK_IMPORTED_MODULE_7__["WellKnownRoutes"].CompanyDeductions]);
    };
    CompanyRetirementComponent.prototype.canLeaveAfterSave = function () {
        var _this = this;
        if (this.cancelSave) {
            this.cancelSave = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        return this.save().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (d) {
            _this.editorService.endEdit();
            return true;
        }));
    };
    Object.defineProperty(CompanyRetirementComponent.prototype, "showAdditionalPlans", {
        get: function () {
            var vm = this.vm;
            return vm.plan &&
                (vm.planType || vm.plan === _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].Plan403B) && // Has plan and plan type except 403b
                !(vm.plan === _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].IRA &&
                    vm.planType === _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"].SepIRA); // but not for SEP IRA
        },
        enumerable: true,
        configurable: true
    });
    CompanyRetirementComponent.prototype.save = function () {
        this.vmToEntity();
        return this.editorService.save();
    };
    CompanyRetirementComponent.prototype.vmToEntity = function () {
        if (!this.currentDeductionItem) {
            return;
        }
        this.currentDeductionItem.name = this.vm.name.trim();
        this.currentDeductionItem.abbreviation = this.vm.abbreviation.trim();
        var prev = this.currentDeductionItem.companyDeductions[0];
        var target;
        var changedType = false;
        var tid = buildRetirementTypeId(this.vm);
        if (tid !== prev.deductionCodeTypeId) {
            // change type: remove previous and create new one
            prev.isRemoved = true;
            target = this.editorService.createByCodeTypeId(tid);
            this.currentDeductionItem.companyDeductions.push(target);
            changedType = true;
        }
        else {
            target = prev;
        }
        this.saveRetirementsProperties(target);
    };
    CompanyRetirementComponent.prototype.saveRetirementsProperties = function (cd) {
        cd.description = this.vm.name;
        cd.abbreviation = this.vm.abbreviation;
    };
    CompanyRetirementComponent.prototype.loadVm = function () {
        var retirementDeduction = this.editorService.companyDeductionItems.find(function (d) { return d.deduction.codeGroupId === 1; });
        var cd;
        this.isNew = !retirementDeduction;
        if (retirementDeduction) {
            // edit an existing one
            cd = this.editorService.editCompanyDeductionItem(retirementDeduction);
        }
        else {
            // create new retirement deduction
            var newRetirementType = this.deductions.find(function (d) { return d.codeType === '401K'; });
            cd = this.editorService.create(newRetirementType, '1');
        }
        var baseDed = cd.companyDeductions[0];
        this.currentDeductionItem = cd;
        this.currentDeductionItem.isDirty = true;
        this.vm = {
            retirementTypeName: this.vm.retirementTypeName,
            plan: getPlanFrom(baseDed.deductionCodeTypeId),
            planType: getPlanTypeFrom(baseDed.deductionCodeTypeId),
            htmlDescription: cd.deduction.definition,
            name: cd.name || cd.deduction.defaultDescription || '',
            abbreviation: cd.abbreviation || cd.deduction.defaultAbbreviation || '',
            canChangeName: cd.deduction.canChangeDescription,
            canChangeAbbreviation: cd.deduction.canChangeAbbreviation,
        };
    };
    CompanyRetirementComponent.prototype.configureEditorForPlan = function () {
        this.vm.planType = getDefaultPlanTypeForPlan(this.vm.plan);
        this.configureEditor();
    };
    CompanyRetirementComponent.prototype.configureEditor = function () {
        var deduction = this.getDeduction();
        this.setDescriptionPlan(deduction);
    };
    CompanyRetirementComponent.prototype.setDescriptionPlan = function (deduction) {
        if (deduction) {
            this.vm.htmlDescription = deduction.definition;
            this.vm.canChangeName = deduction.canChangeDescription;
            this.vm.canChangeAbbreviation = deduction.canChangeAbbreviation;
            this.vm.name = (deduction.defaultDescription || 'Deduction 1').trim();
            this.vm.abbreviation = (deduction.defaultAbbreviation || 'RET').trim();
        }
        else {
            this.vm.htmlDescription = null;
            this.vm.canChangeName = false;
            this.vm.canChangeAbbreviation = false;
            this.vm.name = null;
            this.vm.abbreviation = null;
        }
    };
    CompanyRetirementComponent.prototype.getDeduction = function () {
        if (!this.deductions || this.vm.plan === null) {
            return null;
        }
        if (this.vm.plan === _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].Plan403B) {
            var code403_1 = build403BTypeId(this.vm);
            return this.deductions.find(function (d) { return d.codeTypeId === code403_1; });
        }
        if (this.vm.plan === _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].IRA) {
            var codeIRA_1 = buildIRATypeId(this.vm);
            return this.deductions.find(function (d) { return d.codeTypeId === codeIRA_1; });
        }
        if (this.vm.plan === _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].Plan401K) {
            var code401_1 = build401KTypeId(this.vm);
            return this.deductions.find(function (d) { return d.codeTypeId === code401_1; });
        }
        return null;
    };
    return CompanyRetirementComponent;
}());

function getPlanFrom(codeTypeId) {
    switch (codeTypeId) {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 14:
        case 15:
        case 16:
        case 60:
        case 65:
        case 71: return _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].Plan401K;
        case 63:
        case 13: // 'SMPIRA'
        case 17: return _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].IRA;
        case 12: return _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].Plan403B;
        default:
            throw new Error('codeTypeId not supported:' + codeTypeId);
    }
}
function getPlanTypeFrom(codeTypeId) {
    switch (codeTypeId) {
        case 60:
        case 10: return _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"].P401KTraditional;
        case 65:
        case 15: return _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"].P401KSafeHarbor;
        case 71:
        case 19: return _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"].P401KSimple;
        case 63:
        case 13: return _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"].SimpleIRA;
        case 17: return _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"].SepIRA;
        case 12: // 403B
        case 62:
        default: return null;
    }
}
function buildRetirementTypeId(vm) {
    switch (vm.plan) {
        case _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].IRA: return buildIRATypeId(vm);
        case _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].Plan403B: return build403BTypeId(vm);
        case _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].Plan401K: return build401KTypeId(vm);
        default: return null;
    }
}
function buildIRATypeId(vm) {
    /*
      13    Simple IRA
      17    SEP IRA
      63    Simple IRA Catch Up
     */
    switch (vm.planType) {
        case _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"].SimpleIRA: return 13; // Simple IRA  (overlap with 401K ??? )
        case _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"].SepIRA: return 17; // SEP IRA
        default: return null;
    }
}
function build403BTypeId(vm) {
    /*
      62  403B Catch Up
      12  403B  (shares name with 401K) ???
      61  401K Tiered Catch Up  (shared with 403B ???? )
     */
    return 12; //  12  403B  (shares name with 401K) ???
}
function build401KTypeId(vm) {
    /*
       7  Safe Harbor Roth 401k Match
       8  Safe Harbor Roth 401k NE
       9  Roth 401K Tiered
      10  401K
      11  401K Tiered
    x 12  401K (shared with 403B ???? )
      14  Roth 401K
      15  Safe Harbor 401K
      16  Simple 401K
      18  Safe Harbor 401K (duplicate??)
      19  Simple 401K
  
      60  401K Catch Up
      x 61  401K Tiered Catch Up  (shared with 403B ???? )
      64  Roth 401K Catch Up
      65  Safe H 401K Catch Up
      66  Simple 401K Catch Up
      67  Roth 401K Tiered Catch Up
      68  Safe H Roth 401K NE Catchup
      69  Safe H 401K Match Catch Up
      70  Safe H Roth 401K Match Catchup
      71  Simple 401K Catch Up
    */
    switch (vm.planType) {
        case _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"].P401KSimple: return 19;
        case _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"].P401KSafeHarbor: return 15;
        case _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"].P401KTraditional: return 10;
        default: return null;
    }
}
function getDefaultPlanTypeForPlan(plan) {
    switch (plan) {
        case _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].IRA: return _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"].SimpleIRA;
        case _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].Plan403B: return null; // no planType
        case _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlans"].Plan401K: return _model__WEBPACK_IMPORTED_MODULE_5__["RetirementPlanTypes"].P401KTraditional;
        default:
            return null;
    }
}


/***/ }),

/***/ "./src/app/deductions/company/deductions-catalog.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/deductions/company/deductions-catalog.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_DeductionsCatalogComponent, View_DeductionsCatalogComponent_0, View_DeductionsCatalogComponent_Host_0, DeductionsCatalogComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DeductionsCatalogComponent", function() { return RenderType_DeductionsCatalogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DeductionsCatalogComponent_0", function() { return View_DeductionsCatalogComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DeductionsCatalogComponent_Host_0", function() { return View_DeductionsCatalogComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeductionsCatalogComponentNgFactory", function() { return DeductionsCatalogComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_accordion_accordion_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/accordion/accordion.component.ngfactory */ "./src/app/shared/accordion/accordion.component.ngfactory.js");
/* harmony import */ var _shared_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/accordion/accordion.component */ "./src/app/shared/accordion/accordion.component.ts");
/* harmony import */ var _deductions_catalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deductions-catalog.component */ "./src/app/deductions/company/deductions-catalog.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_DeductionsCatalogComponent = [];
var RenderType_DeductionsCatalogComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DeductionsCatalogComponent, data: {} });

function View_DeductionsCatalogComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "span", [["class", "item-available"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectType(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "i", [["class", "material-icons icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["add"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.label; _ck(_v, 3, 0, currVal_0); }); }
function View_DeductionsCatalogComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "item-unavailable"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.label; _ck(_v, 1, 0, currVal_0); }); }
function View_DeductionsCatalogComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "li", [["class", "accordion-menu-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeductionsCatalogComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["notAvailable", 2]], null, 0, null, View_DeductionsCatalogComponent_5))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.enabled; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_DeductionsCatalogComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "sp-accordion", [], null, [[null, "expandedChange"]], function (_v, en, $event) { var ad = true; if (("expandedChange" === en)) {
        var pd_0 = ((_v.context.$implicit.expanded = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_accordion_accordion_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AccordionComponent_0"], _shared_accordion_accordion_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AccordionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _shared_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_3__["AccordionComponent"], [], { title: [0, "title"], expanded: [1, "expanded"] }, { expandedChange: "expandedChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 2, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeductionsCatalogComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.category; var currVal_1 = _v.context.$implicit.expanded; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.getListOfDeductionTitles(_v.context.$implicit.deductionTitles); _ck(_v, 4, 0, currVal_2); }, null); }
function View_DeductionsCatalogComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeductionsCatalogComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.catalog; _ck(_v, 2, 0, currVal_0); }, null); }
function View_DeductionsCatalogComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Add Deduction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeductionsCatalogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.catalog; _ck(_v, 4, 0, currVal_0); }, null); }
function View_DeductionsCatalogComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-deductions-catalog", [], null, null, null, View_DeductionsCatalogComponent_0, RenderType_DeductionsCatalogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _deductions_catalog_component__WEBPACK_IMPORTED_MODULE_4__["DeductionsCatalogComponent"], [], null, null)], null, null); }
var DeductionsCatalogComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-deductions-catalog", _deductions_catalog_component__WEBPACK_IMPORTED_MODULE_4__["DeductionsCatalogComponent"], View_DeductionsCatalogComponent_Host_0, { catalog: "catalog" }, { deductionTypeSelected: "deductionTypeSelected" }, []);



/***/ }),

/***/ "./src/app/deductions/company/deductions-catalog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/deductions/company/deductions-catalog.component.ts ***!
  \********************************************************************/
/*! exports provided: DeductionsCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeductionsCatalogComponent", function() { return DeductionsCatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");


var DeductionsCatalogComponent = /** @class */ (function () {
    function DeductionsCatalogComponent() {
        this.deductionTypeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DeductionsCatalogComponent.prototype.getListOfDeductionTitles = function (titles) {
        return Object(_core__WEBPACK_IMPORTED_MODULE_1__["dictionaryToArray"])(titles)
            .filter(function (t) { return !t.isHidden; })
            .sort(function (a, b) { return a.order - b.order; });
    };
    DeductionsCatalogComponent.prototype.selectType = function (dt) {
        this.deductionTypeSelected.emit(dt);
    };
    return DeductionsCatalogComponent;
}());



/***/ }),

/***/ "./src/app/shared/amount-or-percent-value/amount-or-percent-value.component.ngfactory.js":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/amount-or-percent-value/amount-or-percent-value.component.ngfactory.js ***!
  \***********************************************************************************************/
/*! exports provided: RenderType_AmountOrPercentValueComponent, View_AmountOrPercentValueComponent_0, View_AmountOrPercentValueComponent_Host_0, AmountOrPercentValueComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AmountOrPercentValueComponent", function() { return RenderType_AmountOrPercentValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AmountOrPercentValueComponent_0", function() { return View_AmountOrPercentValueComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AmountOrPercentValueComponent_Host_0", function() { return View_AmountOrPercentValueComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountOrPercentValueComponentNgFactory", function() { return AmountOrPercentValueComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input/input-text.component.ngfactory */ "./src/app/shared/input/input-text.component.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_input_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/input-text.component */ "./src/app/shared/input/input-text.component.ts");
/* harmony import */ var _input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input/input-mask-catalog */ "./src/app/shared/input/input-mask-catalog.ts");
/* harmony import */ var _model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model.component */ "./src/app/shared/model.component.ts");
/* harmony import */ var _model_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model.component.ngfactory */ "./src/app/shared/model.component.ngfactory.js");
/* harmony import */ var _radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../radio-group/radio-group.component.ngfactory */ "./src/app/shared/radio-group/radio-group.component.ngfactory.js");
/* harmony import */ var _radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");
/* harmony import */ var _radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../radio-group/radio-button.component.ngfactory */ "./src/app/shared/radio-group/radio-button.component.ngfactory.js");
/* harmony import */ var _radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../radio-group/radio-button.component */ "./src/app/shared/radio-group/radio-button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _amount_or_percent_value_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./amount-or-percent-value.component */ "./src/app/shared/amount-or-percent-value/amount-or-percent-value.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_AmountOrPercentValueComponent = [];
var RenderType_AmountOrPercentValueComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AmountOrPercentValueComponent, data: {} });

function View_AmountOrPercentValueComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "sp-input", [["class", "aop-value"], ["name", "iValue"]], null, [[null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_co.setValue(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).getValue()) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_InputTextComponent_0"], _input_input_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_InputTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 4440064, [["inp", 4]], 0, _input_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"], [_input_input_mask_catalog__WEBPACK_IMPORTED_MODULE_4__["InputMaskCatalog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"]]], { name: [0, "name"], propertyName: [1, "propertyName"], maskType: [2, "maskType"] }, { blur: "blur" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = "iValue"; var currVal_1 = _co.propertyNameValue; var currVal_2 = (_co.model[_co.isAmountPropertyName] ? "currency" : "percent"); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_AmountOrPercentValueComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "sp-model", [], null, null, null, _model_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ModelComponent_0"], _model_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ModelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, _model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"], [], { model: [0, "model"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 12, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 9, "div", [["class", "amount-or-percent-type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 16777216, null, null, 8, "sp-radio-group", [["class", "select-indicator-off"], ["name", "matchPayType"]], null, null, null, _radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_RadioGroupComponent_0"], _radio_group_radio_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_RadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 114688, null, 1, _radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_8__["RadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"]]], { name: [0, "name"], propertyName: [1, "propertyName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { radioButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 2, 2, "sp-radio-button", [["id", "rIsAmount"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setIsAmount(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_RadioButtonComponent_0"], _radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 49152, [[1, 4]], 0, _radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_10__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["$"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, 2, 2, "sp-radio-button", [["id", "rIsPercent"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setIsAmount(false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_RadioButtonComponent_0"], _radio_group_radio_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_RadioButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 49152, [[1, 4]], 0, _radio_group_radio_button_component__WEBPACK_IMPORTED_MODULE_10__["RadioButtonComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AmountOrPercentValueComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.model; _ck(_v, 1, 0, currVal_0); var currVal_1 = "matchPayType"; var currVal_2 = _co.isAmountPropertyName; _ck(_v, 5, 0, currVal_1, currVal_2); var currVal_3 = true; _ck(_v, 8, 0, currVal_3); var currVal_4 = false; _ck(_v, 11, 0, currVal_4); var currVal_5 = (((_co.model && _co.isAmountPropertyName) && (_co.model[_co.isAmountPropertyName] !== undefined)) && (_co.model[_co.isAmountPropertyName] !== null)); _ck(_v, 14, 0, currVal_5); }, null); }
function View_AmountOrPercentValueComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-amount-or-percent-value", [], null, null, null, View_AmountOrPercentValueComponent_0, RenderType_AmountOrPercentValueComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _amount_or_percent_value_component__WEBPACK_IMPORTED_MODULE_12__["AmountOrPercentValueComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AmountOrPercentValueComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-amount-or-percent-value", _amount_or_percent_value_component__WEBPACK_IMPORTED_MODULE_12__["AmountOrPercentValueComponent"], View_AmountOrPercentValueComponent_Host_0, { model: "model", isAmountPropertyName: "isAmountPropertyName", propertyNameValue: "propertyNameValue" }, { isAmountChange: "isAmountChange", valueChange: "valueChange" }, []);



/***/ })

}]);
//# sourceMappingURL=20.7b60e16c7e714889b71a.js.map