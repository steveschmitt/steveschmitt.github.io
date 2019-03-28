(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8U/9":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o,i=n("a+Vh"),r=n("vJhN"),d=n("Hf8m"),c=n("CcnG"),u=n("DOgY"),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s="CompanyDeduction",l=function(e){function t(t){var n=e.call(this,s,t)||this;return n.helper=t,n.companyDeductions$=n.entities$,n}return a(t,e),t.prototype.createFromDeduction=function(e){if(!e)throw new Error("deduction is null");return this.create(new r.f(e))},t.prototype.save=function(e){var t=this,n=e.filter(function(e){return!0===e.isRemoved&&e.id}),o=e.filter(function(e){return!0!==e.isRemoved&&e.id}),r=e.filter(function(e){return!0!==e.isRemoved&&!e.id}).map(function(e){return e.id=t.helper.generateId(),e}),d=[i.d.add(s,r),i.d.update(s,o),i.d.delete(s,n)];return this.saveEntities({changes:d},"/save/company-deduction")},t.ngInjectableDef=c.defineInjectable({factory:function(){return new t(c.inject(u.a))},token:t,providedIn:"root"}),t}(d.a)},MDZ9:function(e,t,n){"use strict";var o=n("vJhN"),i=function(){function e(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=[]),this.isCompleted=!1,this.isDeleted=!1,this.deduction=e,this.isDirty=t,this.companyDeductions=n,7===e.codeGroupId?(this.name="Health Savings Account (HSA)",this.abbreviation="HSA"):n.length>0?(this.name=(n[0].description||"").trim(),this.abbreviation=(n[0].abbreviation||"").trim()):(this.name=(e.defaultDescription||"").trim(),this.abbreviation=(e.defaultAbbreviation||"").trim())}return Object.defineProperty(e.prototype,"isPreTax",{get:function(){if(!this.companyDeductions)return null;var e=this.companyDeductions.filter(r);return 1!==e.length?null:e[0].deductionPlanTaxOptionCode===o.n.PRETAX},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isPostTax",{get:function(){if(!this.companyDeductions)return null;var e=this.companyDeductions.filter(r);return 1!==e.length?null:e[0].deductionPlanTaxOptionCode===o.n.POSTTAX},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isCatchUp",{get:function(){return 6===this.deduction.codeGroupId},enumerable:!0,configurable:!0}),e.prototype.viewModelToEntity=function(){var e=this;this.companyDeductions.map(function(t){t.description=e.name.trim(),t.abbreviation=e.abbreviation.trim()})},e.prototype.isRetirement=function(){return 1===this.deduction.codeGroupId||6===this.deduction.codeGroupId},e.prototype.isP401KRepayment=function(){return"401k Loan Repayment"===this.deduction.codeType},e.prototype.setCode=function(e){var t=this.companyDeductions[0].parameters.find(function(e){return"code"===e.key});t?(t.type="string",t.value=e):this.companyDeductions[0].parameters.push(new o.l("code","string",e))},e.prototype.getCode=function(){if(0===this.companyDeductions.length)return null;var e=this.companyDeductions[0].parameters.find(function(e){return"code"===e.key});return e?e.value:null},e}();function r(e){return!e.isRemoved&&(20===e.deductionCodeTypeId||21===e.deductionCodeTypeId||22===e.deductionCodeTypeId||30===e.deductionCodeTypeId||31===e.deductionCodeTypeId||32===e.deductionCodeTypeId)}function d(e){return!e||!e.companyDeductions||0===e.companyDeductions.length||null===e.companyDeductions[0].id}var c=function(e,t,n){void 0===n&&(n=!1),this.expanded=!1,this.categoryId=e,this.category=t,this.deductionTitles={},this.expanded=n},u=function(){function e(e){this.codeSequencer=1,this.allowPreAndPost=!1,this.enabled=!0,this.isHidden=!1,this.hasPreTax=!1,this.hasPostTax=!1,this.key=(e=e||{}).key,this.code=e.code||"1",this.baseLabel=e.baseLabel,this.deductions=e.deductions||[],this.order=e.order||1,this.maxAllowedToCreate=e.maxAllowedToCreate||1,this.freeSlots=e.maxAllowedToCreate||1,this.companyDeductionItem=e.companyDeductionItem}return Object.defineProperty(e.prototype,"label",{get:function(){return this.allowPreAndPost?this.hasPreTax&&!this.hasPostTax?this.baseLabel+" Post-Tax":!this.hasPreTax&&this.hasPostTax?this.baseLabel+" Pre-Tax":this.baseLabel:this.maxAllowedToCreate>1?this.baseLabel+" ("+this.freeSlots+")":this.baseLabel},enumerable:!0,configurable:!0}),e}(),a=function(){function e(){this.type="create-company-deduction",this.askPreOrPostTax=!1,this.forcePreTax=!1,this.forcePostTax=!1}return Object.defineProperty(e.prototype,"isNew",{get:function(){return!0},enumerable:!0,configurable:!0}),e}(),s=function(){function e(e){this.cdi=e,this.type="edit-company-deduction"}return Object.defineProperty(e.prototype,"isNew",{get:function(){return!1},enumerable:!0,configurable:!0}),e}();function l(e){return[function(e,t,n){var o=new c(1,"Retirement"),i=e.filter(function(e){return(1===e.codeGroupId||6===e.codeGroupId)&&"401k Loan Repayment"!==e.codeType}),r=e.filter(function(e){return"401k Loan Repayment"===e.codeType}),d=new u({key:"Retirements",baseLabel:"Retirements",deductions:i,order:10}),a=new u({key:"401k Loan Repayment",baseLabel:"401k Loan Repayment",deductions:r,order:20});return o.deductionTitles={Retirements:d,"401K Repayment":a},o}(e),function(e,t,n){var o=P(e,2,"Insurance Premiums");o.deductionTitles.Medical.allowPreAndPost=!0,o.deductionTitles.Vision.allowPreAndPost=!0,o.deductionTitles.Dental.allowPreAndPost=!0;var i=e.find(function(e){return"Miscellaneous Pre-Tax"===e.codeType&&2===e.codeGroupId}),r=e.find(function(e){return"Miscellaneous Post-Tax"===e.codeType&&3===e.codeTypeId});delete o.deductionTitles["Miscellaneous Pre-Tax"],delete o.deductionTitles["Miscellaneous Post-Tax"];var d="Miscellaneous Pre-Tax";return b(o,d,null,d,[i],500,5),b(o,"Miscellaneous Post-Tax",null,"Miscellaneous Post-Tax",[r],501,5),o}(e),function(e,t,n){var o=P(e,3,"HSA / FSA");return o.deductionTitles["Dependent Care"].baseLabel="FSA Dependent Care",o.deductionTitles.Transportation.baseLabel="FSA Transportation",o.deductionTitles.Parking.baseLabel="FSA Parking",o}(e),function(e,t,n){var o=P(e,4,"Other (Post-Tax)"),i=e.find(function(e){return"Garnishment with Goal"===e.codeType}),r=e.find(function(e){return"Garnishment No Goal"===e.codeType}),d=e.find(function(e){return"Child Support"===e.codeType}),c=e.find(function(e){return"Miscellaneous with Goal"===e.codeType}),u=e.find(function(e){return"Miscellaneous No Goal"===e.codeType});return b(o,"Garnishment with Goal",null,"Garnishment with Goal",[i],2,8),b(o,"Garnishment No Goal",null,"Garnishment No Goal",[r],3,8),b(o,"Child Support",null,"Child Support",[d],4,5),b(o,"Miscellaneous with Goal",null,"Custom with Goal",[c],500,5),b(o,"Miscellaneous No Goal",null,"Custom No Goal",[u],501,5),o}(e)]}function f(){return[new c(1,"Company Deductions",!0)]}function p(e,t,n){var o=new c(1,"Company Deductions",e[0].expanded);return(t||[]).sort(function(e,t){return(e.name||"").localeCompare(t.name)}).map(function(e,t){var n=new u({key:e.name,baseLabel:e.name,code:e.getCode(),maxAllowedToCreate:1,order:10*t,companyDeductionItem:e});o.deductionTitles[n.key]=n}),[o]}function h(e,t,n){e.map(function(e){Object.keys(e.deductionTitles).map(function(n){var o=e.deductionTitles[n];if(1===o.maxAllowedToCreate)o.allowPreAndPost?(o.hasPreTax=function(e,t){return y(e,t,!0)}(o,t),o.hasPostTax=function(e,t){return y(e,t,!1)}(o,t),o.enabled=!(o.hasPreTax&&o.hasPostTax)):o.enabled=!function(e,t){return!!t.filter(function(e){return!e.isDeleted}).find(function(t){return t.getCode()===e.code&&t.deduction.codeType===e.key})||("Retirements"===e.key?void 0!==t.filter(function(e){return!e.isDeleted}).find(function(e){return 1===e.deduction.codeGroupId}):"HSA"===e.key&&void 0!==t.filter(function(e){return!e.isDeleted}).find(function(e){return 7===e.deduction.codeGroupId}))}(o,t);else if(o.maxAllowedToCreate>1){var i=function(e,t){var n=t.filter(function(t){return!t.isDeleted&&t.deduction.codeType===e.key});return n.length>0?e.maxAllowedToCreate-n.length:"Retirements"===e.key?e.maxAllowedToCreate-t.filter(function(e){return!e.isDeleted&&1===e.deduction.codeGroupId}).length:"HSA"===e.key?e.maxAllowedToCreate-t.filter(function(e){return!e.isDeleted&&7===e.deduction.codeGroupId}).length:e.maxAllowedToCreate}(o,t);o.freeSlots=i,o.enabled=i>0}})})}function y(e,t,n){var o=e.deductions.find(function(e){return e.deductionPlanTaxOptionCode===(n?"PRETAX":"POSTTAX")});return 1===t.filter(function(e){return!e.isDeleted&&e.deduction===o}).length}function m(e){var t=new a;return t.askPreOrPostTax=e.allowPreAndPost&&!e.hasPreTax&&!e.hasPostTax,t.forcePreTax=e.allowPreAndPost&&!e.hasPreTax&&e.hasPostTax,t.forcePostTax=e.allowPreAndPost&&e.hasPreTax&&!e.hasPostTax,t.forcePreTax?(t.deductions=e.deductions.filter(function(e){return e.deductionPlanTaxOptionCode===o.n.PRETAX}),t.code="2"):t.forcePostTax?(t.deductions=e.deductions.filter(function(e){return e.deductionPlanTaxOptionCode===o.n.POSTTAX}),t.code="2"):e.maxAllowedToCreate>1?(t.deductions=e.deductions,t.code=(e.codeSequencer++).toString()):(t.deductions=e.deductions,t.code="1"),t}function T(e){return new s(e)}function b(e,t,n,o,i,r,d){var c=new u({key:t,code:n,baseLabel:o,deductions:i,order:r,maxAllowedToCreate:d});e.deductionTitles[n?t+"_"+n:t]=c}function P(e,t,n){var o,i=new c(t,n);return 2===t?o=e.filter(function(e){return 2===e.codeGroupId||3===e.codeGroupId}):3===t?o=e.filter(function(e){return 7===e.codeGroupId||4===e.codeGroupId}):4===t&&(o=e.filter(function(e){return 1!==e.codeGroupId&&2!==e.codeGroupId&&3!==e.codeGroupId&&4!==e.codeGroupId&&5!==e.codeGroupId&&6!==e.codeGroupId&&7!==e.codeGroupId||5===e.codeGroupId&&!("Miscellaneous with Goal"===e.codeType||"Miscellaneous No Goal"===e.codeType)&&"401k Loan Repayment"!==e.codeType})),i.deductionTitles=function(e){var t={},n=0;for(var o in e.map(function(e){t[e.codeType]?t[e.codeType].deductions.push(e):t[e.codeType]=new u({key:e.codeType,baseLabel:e.codeType,deductions:[e],order:10*n++})}),t)if(t.hasOwnProperty(o)){var i=t[o];i.deductions.length>1&&(i.selectionCriteria=v(i.deductions))}return t}(o),function(e){if(2===e.categoryId){var t=Object.values(e.deductionTitles).find(function(e){return"CAFE 2 deduction"===e.key});delete e.deductionTitles[t.key],b(e,t.key,"1","Cafeteria Plan",t.deductions,200,2)}if(3===e.categoryId){var n=Object.values(e.deductionTitles).filter(function(e){return e.key.includes(" HSA")}),o=new u({key:"HSA",baseLabel:"Health Savings Account (HSA)",deductions:n.map(function(e){return e.deductions}).reduce(function(e,t){return e.concat(t)},[]),order:-1});n.map(function(t){delete e.deductionTitles[t.key]}),e.deductionTitles[o.key]=o}}(i),function(e){function t(t,n){var o=e.deductionTitles[t];o&&(o.order=n)}2===e.categoryId&&(t("Life Insurance",100),t("Cafeteria Plan",200),t("Miscellaneous",300)),3===e.categoryId&&t("HSA",-1),4===e.categoryId&&(t("Meals",-10),t("Garnishment with Goal",-9),t("Garnishment No Goal",-8),t("Child Support",-7))}(i),i}function v(e){return e.filter(function(e){return 2===e.codeGroupId||3===e.codeGroupId}).length===e.length?"PRE_OR_POST_TAX":"UNKNOWN"}n.d(t,"a",function(){return i}),n.d(t,"f",function(){return d}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return f}),n.d(t,"g",function(){return p}),n.d(t,"h",function(){return h}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return T})},lC6n:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var o=n("F/XL"),i=n("/PH2"),r=n("15JJ"),d=n("67Y/"),c=n("9Z1F"),u=n("klSw"),a=n("AytR"),s=n("CcnG"),l=n("QHho"),f=n("t/Na"),p=n("OsF4"),h=a.a.apiRoot+"/deductions",y=function(){function e(e,t,n){var a=this;this.http=t,this.logger=n;var s=e.collectionServiceElementsFactory.create("Deduction");this.dispatcher=s.dispatcher,this.loaded$=s.selectors$.loaded$,this.deductions$=s.selectors$.entities$.pipe(Object(i.a)(this.loaded$),Object(r.a)(function(e){var t=e[0];return e[1]?Object(o.a)(t):a.http.get(h).pipe(Object(d.a)(function(e){return a.dispatcher.addAllToCache(e),e}),Object(c.a)(function(e){return a.logger.error("Deductions service failed to return deductions",e),a.dispatcher.setLoaded(!0),Object(o.a)(t)}))}),Object(u.a)(1))}return e.prototype.clearCache=function(){this.dispatcher.clearCache()},e.ngInjectableDef=s.defineInjectable({factory:function(){return new e(s.inject(l.a),s.inject(f.c),s.inject(p.a))},token:e,providedIn:"root"}),e}()},o43W:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o,i=n("67Y/"),r=n("a+Vh"),d=n("Hf8m"),c=n("CcnG"),u=n("DOgY"),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(t){var n=e.call(this,"EmployeeDeduction",t)||this;return n.helper=t,n.employeeDeductions$=n.entities$,n}return a(t,e),t.prototype.getEmployeeDeductions=function(e){return this.employeeDeductions$.pipe(Object(i.a)(function(t){return t.filter(function(t){return t.employeeId===e})}))},t.prototype.getDeductionsLinkedTo=function(e){return this.employeeDeductions$.pipe(Object(i.a)(function(t){return t.filter(function(t){return t.companyDeductionId===e})}))},t.prototype.save=function(e){var t=this,n=(e||[]).filter(function(e){return!0===e.isRemoved&&e.id}),o=(e||[]).filter(function(e){return!0!==e.isRemoved&&e.id}),i=(e||[]).filter(function(e){return!0!==e.isRemoved&&!e.id}).map(function(e){return e.id=t.helper.generateId(),e}),d=[r.d.add("EmployeeDeduction",i),r.d.update("EmployeeDeduction",o),r.d.delete("EmployeeDeduction",n)];return this.saveEntities({changes:d},"/save/employee-deduction")},t.ngInjectableDef=c.defineInjectable({factory:function(){return new t(c.inject(u.a))},token:t,providedIn:"root"}),t}(d.a)}}]);
//# sourceMappingURL=5.951af3aababf984902c0.js.map