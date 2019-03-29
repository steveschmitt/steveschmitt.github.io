(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/app/ancillary/ancillary-helper.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/ancillary/ancillary-helper.service.ts ***!
  \*******************************************************/
/*! exports provided: AncillaryHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AncillaryHelperService", function() { return AncillaryHelperService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @model */ "./src/app/model/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @entity */ "./src/app/store/entity/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_id_generator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/services/id-generator.service */ "./src/app/core/services/id-generator.service.ts");
/* harmony import */ var _store_entity_entity_services_company_ancillary_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/entity/entity-services/company-ancillary.service */ "./src/app/store/entity/entity-services/company-ancillary.service.ts");
/* harmony import */ var _store_entity_entity_services_ancillary_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/entity/entity-services/ancillary.service */ "./src/app/store/entity/entity-services/ancillary.service.ts");












var AncillaryHelperService = /** @class */ (function () {
    function AncillaryHelperService(idGeneratorService, companyAncillaryService, ancillaryService, http) {
        this.idGeneratorService = idGeneratorService;
        this.companyAncillaryService = companyAncillaryService;
        this.ancillaryService = ancillaryService;
        this.http = http;
        this.loadedAncillaryData = false;
        this.companyAncillaryVm$ = this.companyAncillaryService.entities$;
    }
    // #region TODO: Refactor to pattern
    AncillaryHelperService.prototype.getAncillaryData = function () {
        var _this = this;
        return this.ancillaryService.loaded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (vm1) {
            _this.loadedAncillaryData = vm1;
            if (_this.loadedAncillaryData === true) {
                return _this.ancillaryService.entities$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (col) { return _this.updateAncillaryWithHtml(col); }));
            }
            else {
                return _this.ancillaryService.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (col) { return _this.updateAncillaryWithHtml(col); }));
            }
        }));
    };
    AncillaryHelperService.prototype.updateAncillaryWithHtml = function (col) {
        var _loop_1 = function (anc) {
            this_1.http.get('/assets/ancillary/' + anc.content, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'Accept': 'text/html'
                }), responseType: 'text' }).subscribe(function (data) { anc.htmlVal = data; });
        };
        var this_1 = this;
        // Security: anc.Content is always authored by the documentation team
        // and is considered to be safe.
        for (var _i = 0, col_1 = col; _i < col_1.length; _i++) {
            var anc = col_1[_i];
            _loop_1(anc);
        }
        return col;
    };
    // #endregion TODO: Refactor to pattern
    AncillaryHelperService.prototype.saveCompanyAncillary = function (ancillaryIds, companyId) {
        var sUrl = _environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiRoot + '/save/companyancillary';
        if (ancillaryIds.length > 0) {
            var changes = [];
            for (var _i = 0, ancillaryIds_1 = ancillaryIds; _i < ancillaryIds_1.length; _i++) {
                var ancId = ancillaryIds_1[_i];
                var ancillary = new _model__WEBPACK_IMPORTED_MODULE_1__["CompanyAncillary"]();
                ancillary.id = this.idGeneratorService.generateId();
                ancillary.companyId = companyId;
                ancillary.ancillaryId = ancId;
                changes.push(_utils__WEBPACK_IMPORTED_MODULE_2__["changeItemFactory"].add('CompanyAncillary', ancillary));
            }
            this.companyAncillaryService.saveEntities({ changes: changes }, sUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_) { }));
        }
    };
    AncillaryHelperService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_7__["defineInjectable"]({ factory: function AncillaryHelperService_Factory() { return new AncillaryHelperService(_angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_core_services_id_generator_service__WEBPACK_IMPORTED_MODULE_8__["IdGeneratorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_store_entity_entity_services_company_ancillary_service__WEBPACK_IMPORTED_MODULE_9__["CompanyAncillaryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_store_entity_entity_services_ancillary_service__WEBPACK_IMPORTED_MODULE_10__["AncillaryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: AncillaryHelperService, providedIn: "root" });
    return AncillaryHelperService;
}());



/***/ }),

/***/ "./src/app/ancillary/ancillary-modal.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/ancillary/ancillary-modal.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_AncillaryModalComponent, View_AncillaryModalComponent_0, View_AncillaryModalComponent_Host_0, AncillaryModalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AncillaryModalComponent", function() { return RenderType_AncillaryModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AncillaryModalComponent_0", function() { return View_AncillaryModalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AncillaryModalComponent_Host_0", function() { return View_AncillaryModalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AncillaryModalComponentNgFactory", function() { return AncillaryModalComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ancillary_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ancillary-modal.component */ "./src/app/ancillary/ancillary-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _store_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/session/session.service */ "./src/app/store/session/session.service.ts");
/* harmony import */ var _ancillary_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ancillary-helper.service */ "./src/app/ancillary/ancillary-helper.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_AncillaryModalComponent = [];
var RenderType_AncillaryModalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AncillaryModalComponent, data: {} });

function View_AncillaryModalComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "checkbox-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "input", [["type", "checkbox"]], [[8, "id", 0], [8, "value", 0], [8, "name", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.updateSelectedIds(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "label", [], [[8, "htmlFor", 0], [8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.id, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.id, ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.id, ""); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.id, ""); var currVal_4 = _co.cacheHtml(_v.context.$implicit); _ck(_v, 2, 0, currVal_3, currVal_4); }); }
function View_AncillaryModalComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Interested in other valuable services we offer?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.close('cancel') !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "i", [["aria-hidden", "true"], ["class", "material-icons icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 7, "div", [["class", "modal-body"]], null, [[null, "keyup.escape"]], function (_v, en, $event) { var ad = true; if (("keyup.escape" === en)) {
        var pd_0 = (_v.context.dismiss() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Select one or multiple options below you wish to learn more about."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "div", [["class", "checkbox-card-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AncillaryModalComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["One of our customer success agents will contact you with more information on your selections."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 4, "div", [["class", "modal-footer d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "button", [["class", "btn btn-light"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.close('not-interested') !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["I'm not interested"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.close('send-me') !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["We'll contact you"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ancillaryVm; _ck(_v, 11, 0, currVal_0); }, null); }
function View_AncillaryModalComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { ancillaryModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[1, 2], ["ancillaryModal", 2]], null, 0, null, View_AncillaryModalComponent_1))], null, null); }
function View_AncillaryModalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-ancillary-modal", [], null, null, null, View_AncillaryModalComponent_0, RenderType_AncillaryModalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _ancillary_modal_component__WEBPACK_IMPORTED_MODULE_2__["AncillaryModalComponent"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _store_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"], _ancillary_helper_service__WEBPACK_IMPORTED_MODULE_5__["AncillaryHelperService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AncillaryModalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-ancillary-modal", _ancillary_modal_component__WEBPACK_IMPORTED_MODULE_2__["AncillaryModalComponent"], View_AncillaryModalComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/ancillary/ancillary-modal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ancillary/ancillary-modal.component.ts ***!
  \********************************************************/
/*! exports provided: AncillaryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AncillaryModalComponent", function() { return AncillaryModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ancillary_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ancillary-helper.service */ "./src/app/ancillary/ancillary-helper.service.ts");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @session */ "./src/app/store/session/index.ts");






var AncillaryModalComponent = /** @class */ (function () {
    function AncillaryModalComponent(modalService, sessionService, ancillaryHelperService, sanitizer) {
        this.modalService = modalService;
        this.sessionService = sessionService;
        this.ancillaryHelperService = ancillaryHelperService;
        this.sanitizer = sanitizer;
        this.ancillaryIdListSelected = [];
        this.states = {};
        this.htmlCache = {};
    }
    AncillaryModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ancillaryViewModel$ = this.ancillaryHelperService.companyAncillaryVm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (vm) {
            _this.companyAncillaryVm = vm;
            if (_this.companyAncillaryVm === undefined || _this.companyAncillaryVm.length === 0) {
                return _this.ancillaryHelperService.getAncillaryData();
            }
        }));
        this.ancillaryViewModel$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (vm1) {
            _this.ancillaryVm = vm1;
        });
        this.sessionService.currentCompanyId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (c) {
            _this.companyId = c;
        });
    };
    AncillaryModalComponent.prototype.openModalDialog = function () {
        var _this = this;
        this.modalRef = this.modalService.open(this.ancillaryModal, { backdrop: 'static' });
        this.modalRef.result.then(function (res) {
            _this.close(res);
        });
    };
    AncillaryModalComponent.prototype.close = function (reason) {
        if (reason === 'send-me') {
            this.save();
        }
    };
    AncillaryModalComponent.prototype.cacheHtml = function (anc) {
        // Need to cache the HTML. Due too much changes driven by the observables
        // breaks in IE11. On the HTML is calculated, is not going to change for a given ID
        if (!this.htmlCache[anc.id]) {
            var html = this.getSafeHtml(anc);
            if (html.changingThisBreaksApplicationSecurity) {
                this.htmlCache[anc.id] = html;
            }
        }
        return this.htmlCache[anc.id];
    };
    AncillaryModalComponent.prototype.getSafeHtml = function (anc) {
        // Security: `ancillary.htmlVal` is always authored by the documentation team
        // and is considered to be safe.
        return this.sanitizer.bypassSecurityTrustHtml(anc.htmlVal);
    };
    AncillaryModalComponent.prototype.save = function () {
        this.ancillaryHelperService.saveCompanyAncillary(this.ancillaryIdListSelected, this.companyId);
    };
    AncillaryModalComponent.prototype.checkAncillaryResponse = function () {
        if (this.companyAncillaryVm === undefined || this.companyAncillaryVm.length === 0) {
            this.openModalDialog();
        }
    };
    AncillaryModalComponent.prototype.updateSelectedIds = function (itemId) {
        var state = this.states[itemId];
        if (state === 'checked') {
            this.states[itemId] = 'unchecked';
            var index = this.ancillaryIdListSelected.indexOf(itemId);
            if (index !== -1) {
                this.ancillaryIdListSelected.splice(index, 1);
            }
        }
        else {
            this.states[itemId] = 'checked';
            this.ancillaryIdListSelected.push(itemId);
        }
    };
    AncillaryModalComponent.prototype.closeModal = function () {
        this.modalRef.close('ok');
    };
    return AncillaryModalComponent;
}());



/***/ }),

/***/ "./src/app/ancillary/ancillary.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ancillary/ancillary.module.ts ***!
  \***********************************************/
/*! exports provided: AncillaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AncillaryModule", function() { return AncillaryModule; });
var AncillaryModule = /** @class */ (function () {
    function AncillaryModule() {
    }
    return AncillaryModule;
}());



/***/ }),

/***/ "./src/app/shared/docs/view-docs.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/shared/docs/view-docs.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_ViewDocsComponent, View_ViewDocsComponent_0, View_ViewDocsComponent_Host_0, ViewDocsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ViewDocsComponent", function() { return RenderType_ViewDocsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ViewDocsComponent_0", function() { return View_ViewDocsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ViewDocsComponent_Host_0", function() { return View_ViewDocsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDocsComponentNgFactory", function() { return ViewDocsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_docs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-docs.component */ "./src/app/shared/docs/view-docs.component.ts");
/* harmony import */ var _core_services_esign_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/esign.service */ "./src/app/core/services/esign.service.ts");
/* harmony import */ var _core_services_iframe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/iframe.service */ "./src/app/core/services/iframe.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/logger.service */ "./src/app/core/services/logger.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_ViewDocsComponent = [];
var RenderType_ViewDocsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ViewDocsComponent, data: {} });

function View_ViewDocsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "button", [["class", "btn btn-secondary btn-icon-combo mt-3"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.viewDocs(_co.envelopeId) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["View Signed Documents "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "i", [["class", "material-icons icon d-inline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["chevron_right"]))], null, null); }
function View_ViewDocsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ViewDocsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !!_co.envelopeId; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ViewDocsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "sp-view-docs", [], null, null, null, View_ViewDocsComponent_0, RenderType_ViewDocsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _view_docs_component__WEBPACK_IMPORTED_MODULE_2__["ViewDocsComponent"], [_core_services_esign_service__WEBPACK_IMPORTED_MODULE_3__["EsignService"], _core_services_iframe_service__WEBPACK_IMPORTED_MODULE_4__["IframeService"], _core_services_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]], null, null)], null, null); }
var ViewDocsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("sp-view-docs", _view_docs_component__WEBPACK_IMPORTED_MODULE_2__["ViewDocsComponent"], View_ViewDocsComponent_Host_0, { envelopeId: "envelopeId" }, {}, []);



/***/ })

}]);
//# sourceMappingURL=5.a833751b5b0cebceb642.js.map