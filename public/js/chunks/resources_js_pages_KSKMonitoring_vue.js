"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_KSKMonitoring_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewDialog */ "./resources/js/components/MonitoringTable/ViewDialog.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ViewDialog: _ViewDialog__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['paginatedData', 'isLoadingApproved'],
  data: function data() {
    return {
      arrViewData: [],
      DialogView: false
    };
  },
  methods: {
    DownloadAttachment: function DownloadAttachment(item) {
      this.$emit('DownloadAttachment', item);
    },
    ViewDetails: function ViewDetails(val) {
      this.arrViewData = val;
      this.DialogView = true;
    },
    CloseDialog: function CloseDialog(val) {
      this.DialogView = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['paginatedData'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {
    DownloadAttachment: function DownloadAttachment(item) {
      this.$emit('DownloadAttachment', item);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Services_KSK_Monitoring_postgetLatestReferenceNo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/KSK_Monitoring/postgetLatestReferenceNo */ "./resources/js/Services/KSK_Monitoring/postgetLatestReferenceNo.js");
/* harmony import */ var _Services_KSK_Monitoring_postDisapproveRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/KSK_Monitoring/postDisapproveRequest */ "./resources/js/Services/KSK_Monitoring/postDisapproveRequest.js");
/* harmony import */ var _Services_KSK_Monitoring_postApprovedSendingEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/KSK_Monitoring/postApprovedSendingEmail */ "./resources/js/Services/KSK_Monitoring/postApprovedSendingEmail.js");
/* harmony import */ var _Services_KSK_Monitoring_postApproveRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/KSK_Monitoring/postApproveRequest */ "./resources/js/Services/KSK_Monitoring/postApproveRequest.js");
/* harmony import */ var _Services_KSK_Monitoring_postAttachmentRequestFile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/KSK_Monitoring/postAttachmentRequestFile */ "./resources/js/Services/KSK_Monitoring/postAttachmentRequestFile.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['paginatedData'],
  data: function data() {
    return {
      isLoading: false,
      attemp: 0
    };
  },
  computed: {},
  methods: {
    moment: (moment__WEBPACK_IMPORTED_MODULE_1___default()),
    DownloadAttachment: function DownloadAttachment(attach, item) {
      var file;
      this.$emit('DownloadAttachment', file = {
        'path': 'ForApprovals/' + item.TemporaryNo,
        'filename': attach
      });
    },
    getLatestReferenceNo: function getLatestReferenceNo(val) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Services_KSK_Monitoring_postgetLatestReferenceNo__WEBPACK_IMPORTED_MODULE_2__["default"].getLatestReferenceNo(val);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    DisapproveRequest: function DisapproveRequest(val) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _Services_KSK_Monitoring_postDisapproveRequest__WEBPACK_IMPORTED_MODULE_3__["default"].DisapproveRequest(val);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    ApproveRequest: function ApproveRequest(val) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var newData, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this.isLoading = true;
                newData = Object.assign({}, val);
                _context3.next = 4;
                return _this.getLatestReferenceNo(val);

              case 4:
                newData.ReferenceNo = _context3.sent;
                newData.Attach = val.Attachments.join(', ');
                newData.JapApprover = _this.$store.state.JapaneseData.EmployeeCode;
                _context3.next = 9;
                return _Services_KSK_Monitoring_postApprovedSendingEmail__WEBPACK_IMPORTED_MODULE_4__["default"].ApprovedSendingEmail(newData);

              case 9:
                result = _context3.sent;

                if (result === 'error') {
                  _this.ResendData(newData);

                  _this.attemp = _this.attemp + 1;
                } else {
                  _this.isLoading = false;

                  _this.SaveApproveRequest(newData);
                }

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    ResendData: function ResendData(val) {
      if (this.attemp <= 3) {
        this.ApproveRequest(val);
      } else {
        this.isLoading = false;
        this.attemp = 0;
        this.$message.error('Email Sending Faied');
      }
    },
    SaveApproveRequest: function SaveApproveRequest(val) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _Services_KSK_Monitoring_postApproveRequest__WEBPACK_IMPORTED_MODULE_5__["default"].ApproveRequest(val);

              case 2:
                _this2.SaveAttachmentRequest(val);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    SaveAttachmentRequest: function SaveAttachmentRequest(val) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _Services_KSK_Monitoring_postAttachmentRequestFile__WEBPACK_IMPORTED_MODULE_6__["default"].AttachmentRequestFile(val);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['arrViewData', 'DialogView'],
  data: function data() {
    return {};
  },
  methods: {
    CloseDialog: function CloseDialog() {
      this.$emit('CloseDialog', false);
    },
    DownloadAttachment: function DownloadAttachment(item) {
      console.log(item, 'testestset');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/KSKMonitoring.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/KSKMonitoring.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MonitoringTable_ForApprovalTable_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MonitoringTable/ForApprovalTable.vue */ "./resources/js/components/MonitoringTable/ForApprovalTable.vue");
/* harmony import */ var _components_MonitoringTable_ApprovedTable_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MonitoringTable/ApprovedTable.vue */ "./resources/js/components/MonitoringTable/ApprovedTable.vue");
/* harmony import */ var _components_MonitoringTable_DisapprovedTable_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MonitoringTable/DisapprovedTable.vue */ "./resources/js/components/MonitoringTable/DisapprovedTable.vue");
/* harmony import */ var _Services_KSK_Monitoring_postDownloadAttachFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/KSK_Monitoring/postDownloadAttachFile */ "./resources/js/Services/KSK_Monitoring/postDownloadAttachFile.js");
/* harmony import */ var _Services_KSK_Monitoring_postForApprovalRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/KSK_Monitoring/postForApprovalRequest */ "./resources/js/Services/KSK_Monitoring/postForApprovalRequest.js");
/* harmony import */ var _Services_KSK_Monitoring_postgetUploadedIAttachment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/KSK_Monitoring/postgetUploadedIAttachment */ "./resources/js/Services/KSK_Monitoring/postgetUploadedIAttachment.js");
/* harmony import */ var _Services_KSK_Monitoring_postfetchKSKRequestData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/KSK_Monitoring/postfetchKSKRequestData */ "./resources/js/Services/KSK_Monitoring/postfetchKSKRequestData.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ForApprovalTable: _components_MonitoringTable_ForApprovalTable_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ApprovedTable: _components_MonitoringTable_ApprovedTable_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    DisapprovedTable: _components_MonitoringTable_DisapprovedTable_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      page: 1,
      length: 0,
      rowPage: 8,
      forApporovalCount: 0,
      search: '',
      isLoading: false,
      isLoadingApproved: false,
      tableIndex: 1,
      arrForApproval: [],
      arrApproved: []
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.isLoading = true;
              _context.next = 3;
              return _this.ForApprovalRequest();

            case 3:
              _context.next = 5;
              return _this.fetchKSKRequestData();

            case 5:
              setInterval(function () {
                _this.ForApprovalRequest();
              }, 180000);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    paginatedData: function paginatedData() {
      var start = (this.page - 1) * this.rowPage,
          end = start + this.rowPage;
      this.length = Math.ceil(this.filteredData.length / this.rowPage);
      return this.filteredData.slice(start, end);
    },
    filteredData: function filteredData() {
      var _this2 = this;

      return this.modifiedData.filter(function (rec) {
        if (_this2.search.length != 0) {
          var search = new RegExp(_this2.search.toUpperCase(), "g");
          _this2.page = 1;

          if (_this2.tableIndex === 1) {
            return JSON.stringify(Object.values(rec)).toUpperCase().match(search) && rec.EmailStatusCode === '1';
          } else if (_this2.tableIndex === 2) {
            return JSON.stringify(Object.values(rec)).toUpperCase().match(search) && rec;
          } else {
            return JSON.stringify(Object.values(rec)).toUpperCase().match(search) && rec.EmailStatusCode === '3';
          }
        } else {
          if (_this2.tableIndex === 1) {
            return rec.EmailStatusCode === '1';
          } else if (_this2.tableIndex === 2) {
            return rec;
          } else {
            return rec.EmailStatusCode === '3';
          }
        }
      });
    },
    modifiedData: function modifiedData() {
      var _this3 = this;

      if (this.tableIndex === 1 || this.tableIndex === 3) {
        return this.arrForApproval.map(function (data) {
          var newData = Object.assign({}, data),
              comp = _this3.companies.findIndex(function (comp) {
            return comp.CompanyCode === data.CompanyCode;
          }),
              dept = _this3.departments.findIndex(function (dept) {
            return dept.CompanyCode == data.CompanyCode && dept.DepartmentCode === data.Department;
          }),
              kind = _this3.Kinds.findIndex(function (kind) {
            return kind.KindCode === data.KindCode;
          }),
              Email = _this3.Emails.findIndex(function (em) {
            return em.EmailStatusCode === data.EmailStatusCode;
          }),
              reqcode = _this3.RequestKinds.findIndex(function (req) {
            return req.RequestCode === data.RequestCode;
          }),
              stat = _this3.Status.findIndex(function (stat) {
            return stat.StatusCode === data.StatusCode;
          }),
              apprv = _this3.Approver.findIndex(function (app) {
            return app.ID === data.ApproverId;
          });

          comp > -1 ? newData.CompanyName = _this3.companies[comp].AbbreviationName : newData.CompanyName = '-';
          dept > -1 ? newData.DepartmentName = _this3.departments[dept].DepartmentName : newData.DepartmentName = '-';
          kind > -1 ? newData.KindName = _this3.Kinds[kind].KindName : newData.KindName = '-';
          Email > -1 ? newData.EmailStatusName = _this3.Emails[Email].EmailStatusName : newData.EmailStatusName = '-';
          reqcode > -1 ? newData.RequestName = _this3.RequestKinds[reqcode].RequestName : newData.RequestName = '-';
          stat > -1 ? newData.StatusName = _this3.Status[stat].StatusName : newData.StatusName = '-';
          apprv > -1 ? newData.ApproverName = _this3.Approver[apprv].ApproverName : newData.ApproverName = '-';
          newData.SentDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('LLLL');
          newData.RequestDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(data.RequestDate).format('YYYY/MM/DD');
          newData.DueDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(data.DueDate).format('YYYY/MM/DD');
          return newData;
        });
      } else {
        return this.arrApproved.map(function (data) {
          var newData = Object.assign({}, data),
              comp = _this3.companies.findIndex(function (comp) {
            return comp.CompanyCode === data.CompanyCode;
          }),
              dept = _this3.departments.findIndex(function (dept) {
            return dept.CompanyCode == data.CompanyCode && dept.DepartmentCode === data.Department;
          }),
              kind = _this3.Kinds.findIndex(function (kind) {
            return kind.KindCode === data.KindCode;
          }),
              reqcode = _this3.RequestKinds.findIndex(function (req) {
            return req.RequestCode === data.RequestCode;
          }),
              stat = _this3.Status.findIndex(function (stat) {
            return stat.StatusCode === data.StatusCode;
          });

          comp > -1 ? newData.CompanyName = _this3.companies[comp].AbbreviationName : newData.CompanyName = '-';
          dept > -1 ? newData.DepartmentName = _this3.departments[dept].DepartmentName : newData.DepartmentName = '-';
          kind > -1 ? newData.KindName = _this3.Kinds[kind].KindName : newData.KindName = '-';
          reqcode > -1 ? newData.RequestName = _this3.RequestKinds[reqcode].RequestName : newData.RequestName = '-';
          stat > -1 ? newData.StatusName = _this3.Status[stat].StatusName : newData.StatusName = '-';
          newData.AttachmentsFile = [];
          data.Attachments.forEach(function (att) {
            var words = att.split('/');
            newData.AttachmentsFile.push(words[1]);
          });
          newData.RequestDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(data.RequestDate).format('YYYY/MM/DD');
          newData.DueDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(data.DueDate).format('YYYY/MM/DD');
          return newData;
        });
      }
    }
  },
  methods: {
    moment: (moment__WEBPACK_IMPORTED_MODULE_1___default()),
    DownloadAttachment: function DownloadAttachment(item) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _Services_KSK_Monitoring_postDownloadAttachFile__WEBPACK_IMPORTED_MODULE_5__["default"].DownloadAttachFile(item);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    ForApprovalRequest: function ForApprovalRequest() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _Services_KSK_Monitoring_postForApprovalRequest__WEBPACK_IMPORTED_MODULE_6__["default"].ForApprovalRequest(_this4.$store.state.JapaneseData);

              case 2:
                result = _context3.sent;
                _this4.arrForApproval = result.data;
                _this4.forApporovalCount = result.count;
                _this4.isLoading = false;

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getAttacments: function getAttacments(val) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _Services_KSK_Monitoring_postgetUploadedIAttachment__WEBPACK_IMPORTED_MODULE_7__["default"].getUploadedIAttachment(val);

              case 2:
                result = _context4.sent;
                return _context4.abrupt("return", result.data.map(function (file) {
                  console.log(file, 'file');
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    fetchKSKRequestData: function fetchKSKRequestData() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.isLoadingApproved = true;
                _context5.next = 3;
                return _Services_KSK_Monitoring_postfetchKSKRequestData__WEBPACK_IMPORTED_MODULE_8__["default"].fetchKSKRequestData(_this5.$store.state.JapaneseData);

              case 3:
                _this5.arrApproved = _context5.sent;
                _this5.isLoadingApproved = false;
                _this5.isLoading = false;

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    SwitchTable: function SwitchTable(val) {
      this.page = 1;
      this.tableIndex = val;
    }
  }
});

/***/ }),

/***/ "./resources/js/Services/KSK_Monitoring/postApproveRequest.js":
/*!********************************************************************!*\
  !*** ./resources/js/Services/KSK_Monitoring/postApproveRequest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var postApproveRequest = /*#__PURE__*/function () {
  function postApproveRequest() {
    _classCallCheck(this, postApproveRequest);
  }

  _createClass(postApproveRequest, null, [{
    key: "ApproveRequest",
    value: function () {
      var _ApproveRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(obj) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('api/ApproveRequest', obj);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result.data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function ApproveRequest(_x) {
        return _ApproveRequest.apply(this, arguments);
      }

      return ApproveRequest;
    }()
  }]);

  return postApproveRequest;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postApproveRequest);

/***/ }),

/***/ "./resources/js/Services/KSK_Monitoring/postApprovedSendingEmail.js":
/*!**************************************************************************!*\
  !*** ./resources/js/Services/KSK_Monitoring/postApprovedSendingEmail.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var postApprovedSendingEmail = /*#__PURE__*/function () {
  function postApprovedSendingEmail() {
    _classCallCheck(this, postApprovedSendingEmail);
  }

  _createClass(postApprovedSendingEmail, null, [{
    key: "ApprovedSendingEmail",
    value: function () {
      var _ApprovedSendingEmail = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(obj) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('api/ApprovedSendingEmail', obj);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result.data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                return _context.abrupt("return", 'error');

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function ApprovedSendingEmail(_x) {
        return _ApprovedSendingEmail.apply(this, arguments);
      }

      return ApprovedSendingEmail;
    }()
  }]);

  return postApprovedSendingEmail;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postApprovedSendingEmail);

/***/ }),

/***/ "./resources/js/Services/KSK_Monitoring/postAttachmentRequestFile.js":
/*!***************************************************************************!*\
  !*** ./resources/js/Services/KSK_Monitoring/postAttachmentRequestFile.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var postAttachmentRequestFile = /*#__PURE__*/function () {
  function postAttachmentRequestFile() {
    _classCallCheck(this, postAttachmentRequestFile);
  }

  _createClass(postAttachmentRequestFile, null, [{
    key: "AttachmentRequestFile",
    value: function () {
      var _AttachmentRequestFile = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(obj) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('api/AttachmentRequestFile', obj);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result.data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function AttachmentRequestFile(_x) {
        return _AttachmentRequestFile.apply(this, arguments);
      }

      return AttachmentRequestFile;
    }()
  }]);

  return postAttachmentRequestFile;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postAttachmentRequestFile);

/***/ }),

/***/ "./resources/js/Services/KSK_Monitoring/postDisapproveRequest.js":
/*!***********************************************************************!*\
  !*** ./resources/js/Services/KSK_Monitoring/postDisapproveRequest.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var postDisapproveRequest = /*#__PURE__*/function () {
  function postDisapproveRequest() {
    _classCallCheck(this, postDisapproveRequest);
  }

  _createClass(postDisapproveRequest, null, [{
    key: "DisapproveRequest",
    value: function () {
      var _DisapproveRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(obj) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('api/DisapproveRequest', obj);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result.data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function DisapproveRequest(_x) {
        return _DisapproveRequest.apply(this, arguments);
      }

      return DisapproveRequest;
    }()
  }]);

  return postDisapproveRequest;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postDisapproveRequest);

/***/ }),

/***/ "./resources/js/Services/KSK_Monitoring/postDownloadAttachFile.js":
/*!************************************************************************!*\
  !*** ./resources/js/Services/KSK_Monitoring/postDownloadAttachFile.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var postDownloadAttachFile = /*#__PURE__*/function () {
  function postDownloadAttachFile() {
    _classCallCheck(this, postDownloadAttachFile);
  }

  _createClass(postDownloadAttachFile, null, [{
    key: "DownloadAttachFile",
    value: function () {
      var _DownloadAttachFile = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(obj) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('api/DownloadAttachFile', obj);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result.data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function DownloadAttachFile(_x) {
        return _DownloadAttachFile.apply(this, arguments);
      }

      return DownloadAttachFile;
    }()
  }]);

  return postDownloadAttachFile;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postDownloadAttachFile);

/***/ }),

/***/ "./resources/js/Services/KSK_Monitoring/postForApprovalRequest.js":
/*!************************************************************************!*\
  !*** ./resources/js/Services/KSK_Monitoring/postForApprovalRequest.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var postForApprovalRequest = /*#__PURE__*/function () {
  function postForApprovalRequest() {
    _classCallCheck(this, postForApprovalRequest);
  }

  _createClass(postForApprovalRequest, null, [{
    key: "ForApprovalRequest",
    value: function () {
      var _ForApprovalRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(obj) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('api/ForApprovalRequest', obj);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result.data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function ForApprovalRequest(_x) {
        return _ForApprovalRequest.apply(this, arguments);
      }

      return ForApprovalRequest;
    }()
  }]);

  return postForApprovalRequest;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postForApprovalRequest);

/***/ }),

/***/ "./resources/js/Services/KSK_Monitoring/postfetchKSKRequestData.js":
/*!*************************************************************************!*\
  !*** ./resources/js/Services/KSK_Monitoring/postfetchKSKRequestData.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var postfetchKSKRequestData = /*#__PURE__*/function () {
  function postfetchKSKRequestData() {
    _classCallCheck(this, postfetchKSKRequestData);
  }

  _createClass(postfetchKSKRequestData, null, [{
    key: "fetchKSKRequestData",
    value: function () {
      var _fetchKSKRequestData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(obj) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('api/fetchKSKRequestData', obj);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result.data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function fetchKSKRequestData(_x) {
        return _fetchKSKRequestData.apply(this, arguments);
      }

      return fetchKSKRequestData;
    }()
  }]);

  return postfetchKSKRequestData;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postfetchKSKRequestData);

/***/ }),

/***/ "./resources/js/Services/KSK_Monitoring/postgetLatestReferenceNo.js":
/*!**************************************************************************!*\
  !*** ./resources/js/Services/KSK_Monitoring/postgetLatestReferenceNo.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var postgetLatestReferenceNo = /*#__PURE__*/function () {
  function postgetLatestReferenceNo() {
    _classCallCheck(this, postgetLatestReferenceNo);
  }

  _createClass(postgetLatestReferenceNo, null, [{
    key: "getLatestReferenceNo",
    value: function () {
      var _getLatestReferenceNo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(obj) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('api/getLatestReferenceNo', obj);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result.data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getLatestReferenceNo(_x) {
        return _getLatestReferenceNo.apply(this, arguments);
      }

      return getLatestReferenceNo;
    }()
  }]);

  return postgetLatestReferenceNo;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postgetLatestReferenceNo);

/***/ }),

/***/ "./resources/js/Services/KSK_Monitoring/postgetUploadedIAttachment.js":
/*!****************************************************************************!*\
  !*** ./resources/js/Services/KSK_Monitoring/postgetUploadedIAttachment.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var postgetUploadedIAttachment = /*#__PURE__*/function () {
  function postgetUploadedIAttachment() {
    _classCallCheck(this, postgetUploadedIAttachment);
  }

  _createClass(postgetUploadedIAttachment, null, [{
    key: "getUploadedIAttachment",
    value: function () {
      var _getUploadedIAttachment = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(obj) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('api/getUploadedIAttachment', obj);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result.data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getUploadedIAttachment(_x) {
        return _getUploadedIAttachment.apply(this, arguments);
      }

      return getUploadedIAttachment;
    }()
  }]);

  return postgetUploadedIAttachment;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postgetUploadedIAttachment);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=style&index=0&id=ad1fb01a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=style&index=0&id=ad1fb01a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.theme--light.v-data-table.v-data-table--fixed-header thead th[data-v-ad1fb01a]{\n    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 12%) !important;\n    background-color: #1565C0 !important;\n    color:white !important;\n    text-align: center !important;\n    height: 40px !important;\n}\n.TableFormat td[data-v-ad1fb01a]{\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;\n}\n.TableFormat[data-v-ad1fb01a]{\n    width: 100%;\n    table-layout: fixed;\n}\n.TableFormat td[data-v-ad1fb01a]:nth-child(1),\n.TableFormat th[data-v-ad1fb01a]:nth-child(1) {\n    z-index:5 !important;\n    position: -webkit-sticky;\n    position: sticky;\n    max-width: 110px;\n    min-width: 110px;\n    background-color: white !important;\n    left: 0px;\n}\n.TableFormat td[data-v-ad1fb01a]:nth-child(2),\n.TableFormat th[data-v-ad1fb01a]:nth-child(2) {\n    z-index:5 !important;;\n    position: -webkit-sticky;;\n    position: sticky;\n    max-width: 100px;\n    min-width: 100px;\n    background-color: white;\n    left: 110px;\n}\n.TableFormat td[data-v-ad1fb01a]:nth-child(3),\n.TableFormat th[data-v-ad1fb01a]:nth-child(3){\n    z-index:5 !important;;\n    position: -webkit-sticky !important;;\n    position: sticky !important;\n    max-width: 175px !important;\n    min-width: 175px !important;\n    background-color: white !important;\n    left: 210px !important;\n}\n.TableFormat td[data-v-ad1fb01a]:nth-child(15),\n.TableFormat th[data-v-ad1fb01a]:nth-child(15){\n    z-index:5 !important;;\n    position: -webkit-sticky !important;;\n    position: sticky !important;\n    max-width: 80px !important;\n    min-width: 80px !important;\n    background-color: white !important;\n    right: 0px !important;\n}\n.TableFormat th[data-v-ad1fb01a]:nth-child(1),\n.TableFormat th[data-v-ad1fb01a]:nth-child(2),\n.TableFormat th[data-v-ad1fb01a]:nth-child(3),\n.TableFormat th[data-v-ad1fb01a]:nth-child(15)\n{\n    z-index:7 !important;;\n    position: -webkit-sticky !important;;\n    position: sticky !important;\n    top: 0 !important;\n}\n.TableFormat td[data-v-ad1fb01a]:nth-child(4),\n.TableFormat th[data-v-ad1fb01a]:nth-child(4),\n.TableFormat td[data-v-ad1fb01a]:nth-child(5),\n.TableFormat th[data-v-ad1fb01a]:nth-child(5),\n.TableFormat td[data-v-ad1fb01a]:nth-child(6),\n.TableFormat th[data-v-ad1fb01a]:nth-child(6),\n.TableFormat td[data-v-ad1fb01a]:nth-child(7),\n.TableFormat th[data-v-ad1fb01a]:nth-child(7),\n.TableFormat td[data-v-ad1fb01a]:nth-child(8),\n.TableFormat th[data-v-ad1fb01a]:nth-child(8),\n.TableFormat td[data-v-ad1fb01a]:nth-child(12),\n.TableFormat th[data-v-ad1fb01a]:nth-child(12),\n.TableFormat td[data-v-ad1fb01a]:nth-child(13),\n.TableFormat th[data-v-ad1fb01a]:nth-child(13),\n.TableFormat td[data-v-ad1fb01a]:nth-child(14),\n.TableFormat th[data-v-ad1fb01a]:nth-child(14) {\n    max-width: 150px !important;\n    min-width: 150px !important;\n}\n.TableFormat td[data-v-ad1fb01a]:nth-child(9),\n.TableFormat th[data-v-ad1fb01a]:nth-child(9),\n.TableFormat td[data-v-ad1fb01a]:nth-child(10),\n.TableFormat th[data-v-ad1fb01a]:nth-child(10),\n.TableFormat td[data-v-ad1fb01a]:nth-child(11),\n.TableFormat th[data-v-ad1fb01a]:nth-child(11){\n    max-width: 300px !important;\n    min-width: 300px !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=style&index=0&id=b98200c6&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=style&index=0&id=b98200c6&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.theme--light.v-data-table.v-data-table--fixed-header thead th[data-v-b98200c6]{\n    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 12%) !important;\n    background-color: #1565C0 !important;\n    color:white !important;\n    /* text-align: center !important; */\n    height: 40px !important;\n}\n.TableFormat[data-v-b98200c6]{\n    width: 100%;\n    table-layout: fixed;\n}\n.TableFormat td[data-v-b98200c6]{\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;\n}\n.TableFormat td[data-v-b98200c6]:nth-child(1),\n.TableFormat th[data-v-b98200c6]:nth-child(1) {\n    z-index:5 !important;\n    position: -webkit-sticky;\n    position: sticky;\n    max-width: 110px;\n    min-width: 110px;\n    background-color: white !important;\n    left: 0px;\n}\n.TableFormat td[data-v-b98200c6]:nth-child(2),\n.TableFormat th[data-v-b98200c6]:nth-child(2) {\n    z-index:5 !important;;\n    position: -webkit-sticky;;\n    position: sticky;\n    max-width: 100px;\n    min-width: 100px;\n    background-color: white;\n    left: 110px;\n}\n.TableFormat td[data-v-b98200c6]:nth-child(3),\n.TableFormat th[data-v-b98200c6]:nth-child(3){\n    z-index:5 !important;;\n    position: -webkit-sticky !important;;\n    position: sticky !important;\n    max-width: 175px !important;\n    min-width: 175px !important;\n    background-color: white !important;\n    left: 210px !important;\n}\n.TableFormat th[data-v-b98200c6]:nth-child(1),\n.TableFormat th[data-v-b98200c6]:nth-child(2),\n.TableFormat th[data-v-b98200c6]:nth-child(3)\n{\n    z-index:7 !important;;\n    position: -webkit-sticky !important;;\n    position: sticky !important;\n    top: 0 !important;\n}\n.TableFormat td[data-v-b98200c6]:nth-child(4),\n.TableFormat th[data-v-b98200c6]:nth-child(4),\n.TableFormat td[data-v-b98200c6]:nth-child(5),\n.TableFormat th[data-v-b98200c6]:nth-child(5),\n.TableFormat td[data-v-b98200c6]:nth-child(6),\n.TableFormat th[data-v-b98200c6]:nth-child(6),\n.TableFormat td[data-v-b98200c6]:nth-child(7),\n.TableFormat th[data-v-b98200c6]:nth-child(7),\n.TableFormat td[data-v-b98200c6]:nth-child(11),\n.TableFormat th[data-v-b98200c6]:nth-child(11),\n.TableFormat td[data-v-b98200c6]:nth-child(12),\n.TableFormat th[data-v-b98200c6]:nth-child(12){\n    max-width: 150px !important;\n    min-width: 150px !important;\n}\n.TableFormat td[data-v-b98200c6]:nth-child(8),\n.TableFormat th[data-v-b98200c6]:nth-child(8),\n.TableFormat td[data-v-b98200c6]:nth-child(9),\n.TableFormat th[data-v-b98200c6]:nth-child(9),\n.TableFormat td[data-v-b98200c6]:nth-child(10),\n.TableFormat th[data-v-b98200c6]:nth-child(10){\n    max-width: 300px !important;\n    min-width: 300px !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=style&index=0&id=8d27dad4&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=style&index=0&id=8d27dad4&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.theme--light.v-data-table.v-data-table--fixed-header thead th[data-v-8d27dad4]{\n    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 12%) !important;\n    background-color: #1565C0 !important;\n    color:white !important;\n    text-align: center !important;\n    height: 40px !important;\n}\n.noRecord[data-v-8d27dad4]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n    height: 500px;\n    max-height: 500px;\n    width: auto;\n}\n.TableFormat[data-v-8d27dad4]{\n    width: 100%;\n    table-layout: fixed;\n}\n.TableFormat td[data-v-8d27dad4]{\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;\n}\n.TableFormat td[data-v-8d27dad4]:nth-child(1),\n.TableFormat th[data-v-8d27dad4]:nth-child(1) {\n    z-index:5 !important;\n    position: -webkit-sticky;\n    position: sticky;\n    max-width: 110px;\n    min-width: 110px;\n    background-color: white !important;\n    left: 0px;\n}\n.TableFormat td[data-v-8d27dad4]:nth-child(2),\n.TableFormat th[data-v-8d27dad4]:nth-child(2) {\n    z-index:5 !important;;\n    position: -webkit-sticky;;\n    position: sticky;\n    max-width: 100px;\n    min-width: 100px;\n    background-color: white;\n    left: 110px;\n}\n.TableFormat td[data-v-8d27dad4]:nth-child(3),\n.TableFormat th[data-v-8d27dad4]:nth-child(3){\n    z-index:5 !important;;\n    position: -webkit-sticky !important;;\n    position: sticky !important;\n    max-width: 175px !important;\n    min-width: 175px !important;\n    background-color: white !important;\n    left: 210px !important;\n}\n.TableFormat td[data-v-8d27dad4]:nth-child(13),\n.TableFormat th[data-v-8d27dad4]:nth-child(13){\n    z-index:5 !important;;\n    position: -webkit-sticky !important;;\n    position: sticky !important;\n    max-width: 150px !important;\n    min-width: 150px !important;\n    background-color: white !important;\n    right: 0px !important;\n}\n\n/* .TableFormat td:nth-child(14),\n.TableFormat th:nth-child(14){\n    z-index:5 !important;;\n    position: sticky !important;\n    max-width: 50px !important;\n    min-width: 50px !important;\n    background-color: white !important;\n    right: 0px !important;\n}\n\n.TableFormat td:nth-child(13),\n.TableFormat th:nth-child(15){\n    z-index:5 !important;;\n    position: sticky !important;\n    max-width: 100px !important;\n    min-width: 100px !important;\n    background-color: rgb(255, 3, 3) !important;\n    right: 0px !important;\n} */\n.TableFormat th[data-v-8d27dad4]:nth-child(1),\n.TableFormat th[data-v-8d27dad4]:nth-child(2),\n.TableFormat th[data-v-8d27dad4]:nth-child(3),\n.TableFormat th[data-v-8d27dad4]:nth-child(13)\n/* .TableFormat th:nth-child(14),\n.TableFormat th:nth-child(15) */\n\n{\n    z-index:7 !important;;\n    position: -webkit-sticky !important;;\n    position: sticky !important;\n    top: 0 !important;\n}\n.TableFormat td[data-v-8d27dad4]:nth-child(4),\n.TableFormat th[data-v-8d27dad4]:nth-child(4),\n.TableFormat td[data-v-8d27dad4]:nth-child(5),\n.TableFormat th[data-v-8d27dad4]:nth-child(5),\n.TableFormat td[data-v-8d27dad4]:nth-child(6),\n.TableFormat th[data-v-8d27dad4]:nth-child(6),\n.TableFormat td[data-v-8d27dad4]:nth-child(7),\n.TableFormat th[data-v-8d27dad4]:nth-child(7),\n.TableFormat td[data-v-8d27dad4]:nth-child(11),\n.TableFormat th[data-v-8d27dad4]:nth-child(11),\n.TableFormat td[data-v-8d27dad4]:nth-child(12),\n.TableFormat th[data-v-8d27dad4]:nth-child(12){\n    max-width: 150px !important;\n    min-width: 150px !important;\n}\n.TableFormat td[data-v-8d27dad4]:nth-child(8),\n.TableFormat th[data-v-8d27dad4]:nth-child(8),\n.TableFormat td[data-v-8d27dad4]:nth-child(9),\n.TableFormat th[data-v-8d27dad4]:nth-child(9),\n.TableFormat td[data-v-8d27dad4]:nth-child(10),\n.TableFormat th[data-v-8d27dad4]:nth-child(10){\n    max-width: 300px !important;\n    min-width: 300px !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=style&index=0&id=6fa22d61&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=style&index=0&id=6fa22d61&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nh1[data-v-6fa22d61]{\r\n    font-weight: bold;\n}\nspan[data-v-6fa22d61]{\r\n    font-weight: bold;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.divformat[data-v-6fa22d61]{\r\n    margin: 4px; \r\n    padding: 4px;\r\n    border-style: groove; \r\n    min-height: 50px;\n}\n.wrapper[data-v-6fa22d61] {\r\n  display: grid !important; \r\n  grid-template-columns: repeat(4, 1fr) !important; \r\n  grid-auto-rows: 3% !important; \r\n  -moz-column-gap: 0px !important; \r\n       column-gap: 0px !important; \r\n  row-gap: 0px !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/KSKMonitoring.vue?vue&type=style&index=0&id=479adf1c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/KSKMonitoring.vue?vue&type=style&index=0&id=479adf1c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.wrapper[data-v-479adf1c] {\n     display: grid !important; \n     grid-template-columns: 70px 150px 200px !important; \n     grid-auto-rows: 3% !important; \n     -moz-column-gap: 10px !important; \n          column-gap: 10px !important; \n     row-gap: 10px !important; \n     margin-top: 10px;\n}\n.formdiv[data-v-479adf1c] {\n     display: grid !important; \n     grid-template-columns: 80% 20% !important; \n     grid-auto-rows: 3% !important; \n     -moz-column-gap: 10px !important; \n          column-gap: 10px !important; \n     row-gap: 10px !important;\n}\n.ButtonFormat[data-v-479adf1c]{\n     margin: 2px;\n     color:white;\n     background-color:  #1ca9fa;\n}\n.ButtonFormat[data-v-479adf1c]:hover{\n     background-color:  #06669e;\n}\n.ButtonFormat[data-v-479adf1c]:focus{\n     background-color: #023c5e;\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=style&index=0&id=ad1fb01a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=style&index=0&id=ad1fb01a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedTable_vue_vue_type_style_index_0_id_ad1fb01a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApprovedTable.vue?vue&type=style&index=0&id=ad1fb01a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=style&index=0&id=ad1fb01a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedTable_vue_vue_type_style_index_0_id_ad1fb01a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedTable_vue_vue_type_style_index_0_id_ad1fb01a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=style&index=0&id=b98200c6&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=style&index=0&id=b98200c6&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DisapprovedTable_vue_vue_type_style_index_0_id_b98200c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisapprovedTable.vue?vue&type=style&index=0&id=b98200c6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=style&index=0&id=b98200c6&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DisapprovedTable_vue_vue_type_style_index_0_id_b98200c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DisapprovedTable_vue_vue_type_style_index_0_id_b98200c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=style&index=0&id=8d27dad4&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=style&index=0&id=8d27dad4&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForApprovalTable_vue_vue_type_style_index_0_id_8d27dad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForApprovalTable.vue?vue&type=style&index=0&id=8d27dad4&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=style&index=0&id=8d27dad4&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForApprovalTable_vue_vue_type_style_index_0_id_8d27dad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForApprovalTable_vue_vue_type_style_index_0_id_8d27dad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=style&index=0&id=6fa22d61&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=style&index=0&id=6fa22d61&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDialog_vue_vue_type_style_index_0_id_6fa22d61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewDialog.vue?vue&type=style&index=0&id=6fa22d61&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=style&index=0&id=6fa22d61&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDialog_vue_vue_type_style_index_0_id_6fa22d61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDialog_vue_vue_type_style_index_0_id_6fa22d61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/KSKMonitoring.vue?vue&type=style&index=0&id=479adf1c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/KSKMonitoring.vue?vue&type=style&index=0&id=479adf1c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KSKMonitoring_vue_vue_type_style_index_0_id_479adf1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KSKMonitoring.vue?vue&type=style&index=0&id=479adf1c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/KSKMonitoring.vue?vue&type=style&index=0&id=479adf1c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KSKMonitoring_vue_vue_type_style_index_0_id_479adf1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KSKMonitoring_vue_vue_type_style_index_0_id_479adf1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/MonitoringTable/ApprovedTable.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/ApprovedTable.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApprovedTable_vue_vue_type_template_id_ad1fb01a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApprovedTable.vue?vue&type=template&id=ad1fb01a&scoped=true& */ "./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=template&id=ad1fb01a&scoped=true&");
/* harmony import */ var _ApprovedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApprovedTable.vue?vue&type=script&lang=js& */ "./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _ApprovedTable_vue_vue_type_style_index_0_id_ad1fb01a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApprovedTable.vue?vue&type=style&index=0&id=ad1fb01a&scoped=true&lang=css& */ "./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=style&index=0&id=ad1fb01a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ApprovedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApprovedTable_vue_vue_type_template_id_ad1fb01a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ApprovedTable_vue_vue_type_template_id_ad1fb01a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ad1fb01a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MonitoringTable/ApprovedTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MonitoringTable/DisapprovedTable.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/DisapprovedTable.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisapprovedTable_vue_vue_type_template_id_b98200c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisapprovedTable.vue?vue&type=template&id=b98200c6&scoped=true& */ "./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=template&id=b98200c6&scoped=true&");
/* harmony import */ var _DisapprovedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisapprovedTable.vue?vue&type=script&lang=js& */ "./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _DisapprovedTable_vue_vue_type_style_index_0_id_b98200c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisapprovedTable.vue?vue&type=style&index=0&id=b98200c6&scoped=true&lang=css& */ "./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=style&index=0&id=b98200c6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DisapprovedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DisapprovedTable_vue_vue_type_template_id_b98200c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DisapprovedTable_vue_vue_type_template_id_b98200c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b98200c6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MonitoringTable/DisapprovedTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MonitoringTable/ForApprovalTable.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/ForApprovalTable.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForApprovalTable_vue_vue_type_template_id_8d27dad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForApprovalTable.vue?vue&type=template&id=8d27dad4&scoped=true& */ "./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=template&id=8d27dad4&scoped=true&");
/* harmony import */ var _ForApprovalTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForApprovalTable.vue?vue&type=script&lang=js& */ "./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _ForApprovalTable_vue_vue_type_style_index_0_id_8d27dad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForApprovalTable.vue?vue&type=style&index=0&id=8d27dad4&scoped=true&lang=css& */ "./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=style&index=0&id=8d27dad4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ForApprovalTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForApprovalTable_vue_vue_type_template_id_8d27dad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ForApprovalTable_vue_vue_type_template_id_8d27dad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8d27dad4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MonitoringTable/ForApprovalTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MonitoringTable/ViewDialog.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/ViewDialog.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewDialog_vue_vue_type_template_id_6fa22d61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewDialog.vue?vue&type=template&id=6fa22d61&scoped=true& */ "./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=template&id=6fa22d61&scoped=true&");
/* harmony import */ var _ViewDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _ViewDialog_vue_vue_type_style_index_0_id_6fa22d61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewDialog.vue?vue&type=style&index=0&id=6fa22d61&scoped=true&lang=css& */ "./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=style&index=0&id=6fa22d61&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ViewDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewDialog_vue_vue_type_template_id_6fa22d61_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ViewDialog_vue_vue_type_template_id_6fa22d61_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6fa22d61",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MonitoringTable/ViewDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/KSKMonitoring.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/KSKMonitoring.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KSKMonitoring_vue_vue_type_template_id_479adf1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KSKMonitoring.vue?vue&type=template&id=479adf1c&scoped=true& */ "./resources/js/pages/KSKMonitoring.vue?vue&type=template&id=479adf1c&scoped=true&");
/* harmony import */ var _KSKMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KSKMonitoring.vue?vue&type=script&lang=js& */ "./resources/js/pages/KSKMonitoring.vue?vue&type=script&lang=js&");
/* harmony import */ var _KSKMonitoring_vue_vue_type_style_index_0_id_479adf1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KSKMonitoring.vue?vue&type=style&index=0&id=479adf1c&scoped=true&lang=css& */ "./resources/js/pages/KSKMonitoring.vue?vue&type=style&index=0&id=479adf1c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _KSKMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KSKMonitoring_vue_vue_type_template_id_479adf1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _KSKMonitoring_vue_vue_type_template_id_479adf1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "479adf1c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/KSKMonitoring.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApprovedTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisapprovedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisapprovedTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisapprovedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForApprovalTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForApprovalTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForApprovalTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/KSKMonitoring.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/KSKMonitoring.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KSKMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KSKMonitoring.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/KSKMonitoring.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KSKMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=style&index=0&id=ad1fb01a&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=style&index=0&id=ad1fb01a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedTable_vue_vue_type_style_index_0_id_ad1fb01a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApprovedTable.vue?vue&type=style&index=0&id=ad1fb01a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=style&index=0&id=ad1fb01a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=style&index=0&id=b98200c6&scoped=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=style&index=0&id=b98200c6&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DisapprovedTable_vue_vue_type_style_index_0_id_b98200c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisapprovedTable.vue?vue&type=style&index=0&id=b98200c6&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=style&index=0&id=b98200c6&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=style&index=0&id=8d27dad4&scoped=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=style&index=0&id=8d27dad4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForApprovalTable_vue_vue_type_style_index_0_id_8d27dad4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForApprovalTable.vue?vue&type=style&index=0&id=8d27dad4&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=style&index=0&id=8d27dad4&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=style&index=0&id=6fa22d61&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=style&index=0&id=6fa22d61&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDialog_vue_vue_type_style_index_0_id_6fa22d61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewDialog.vue?vue&type=style&index=0&id=6fa22d61&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=style&index=0&id=6fa22d61&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/pages/KSKMonitoring.vue?vue&type=style&index=0&id=479adf1c&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/KSKMonitoring.vue?vue&type=style&index=0&id=479adf1c&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KSKMonitoring_vue_vue_type_style_index_0_id_479adf1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KSKMonitoring.vue?vue&type=style&index=0&id=479adf1c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/KSKMonitoring.vue?vue&type=style&index=0&id=479adf1c&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=template&id=ad1fb01a&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=template&id=ad1fb01a&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedTable_vue_vue_type_template_id_ad1fb01a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedTable_vue_vue_type_template_id_ad1fb01a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedTable_vue_vue_type_template_id_ad1fb01a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApprovedTable.vue?vue&type=template&id=ad1fb01a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=template&id=ad1fb01a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=template&id=b98200c6&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=template&id=b98200c6&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisapprovedTable_vue_vue_type_template_id_b98200c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisapprovedTable_vue_vue_type_template_id_b98200c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisapprovedTable_vue_vue_type_template_id_b98200c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisapprovedTable.vue?vue&type=template&id=b98200c6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=template&id=b98200c6&scoped=true&");


/***/ }),

/***/ "./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=template&id=8d27dad4&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=template&id=8d27dad4&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForApprovalTable_vue_vue_type_template_id_8d27dad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForApprovalTable_vue_vue_type_template_id_8d27dad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForApprovalTable_vue_vue_type_template_id_8d27dad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForApprovalTable.vue?vue&type=template&id=8d27dad4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=template&id=8d27dad4&scoped=true&");


/***/ }),

/***/ "./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=template&id=6fa22d61&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=template&id=6fa22d61&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDialog_vue_vue_type_template_id_6fa22d61_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDialog_vue_vue_type_template_id_6fa22d61_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDialog_vue_vue_type_template_id_6fa22d61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewDialog.vue?vue&type=template&id=6fa22d61&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=template&id=6fa22d61&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/KSKMonitoring.vue?vue&type=template&id=479adf1c&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/KSKMonitoring.vue?vue&type=template&id=479adf1c&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KSKMonitoring_vue_vue_type_template_id_479adf1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KSKMonitoring_vue_vue_type_template_id_479adf1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KSKMonitoring_vue_vue_type_template_id_479adf1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KSKMonitoring.vue?vue&type=template&id=479adf1c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/KSKMonitoring.vue?vue&type=template&id=479adf1c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=template&id=ad1fb01a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ApprovedTable.vue?vue&type=template&id=ad1fb01a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "a-spin",
        { attrs: { tip: "Loading...", spinning: _vm.isLoadingApproved } },
        [
          _c(
            "v-simple-table",
            {
              staticClass: "TableFormat",
              attrs: {
                "fixed-header": "",
                height: _vm.paginatedData.length > 0 ? "600px" : "60px",
              },
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v(" Date Request ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Kind ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Request No. ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" System Name ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Company ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Department ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Requester ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Request Type ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Background ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Detail of Reques ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Attachment ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Due Date ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Estimated Hour ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Completion Hour ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Action ")]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.paginatedData, function (item, i) {
                  return _c(
                    "tr",
                    {
                      key: i,
                      style:
                        item.StatusCode === "4"
                          ? "background-color:red"
                          : item.StatusCode === "3"
                          ? "background-color:green"
                          : null,
                    },
                    [
                      _c("td", [_vm._v(_vm._s(item.RequestDate))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.KindName))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.RequestNo))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.SystemName))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.CompanyName))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.DepartmentName))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.Requester))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.RequestName))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.Background))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.DetailOfRequest))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        _vm._l(item.Attachments, function (attach) {
                          return _c("li", { key: attach }, [
                            _c(
                              "a",
                              {
                                on: {
                                  click: function ($event) {
                                    return _vm.DownloadAttachment(attach, item)
                                  },
                                },
                              },
                              [_vm._v(_vm._s(attach))]
                            ),
                          ])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.DueDate))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.EstimatedHours))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.CompletionHours))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.ViewDetails(item)
                              },
                            },
                          },
                          [_vm._v("View")]
                        ),
                      ]),
                    ]
                  )
                }),
                0
              ),
            ]
          ),
          _vm._v(" "),
          _vm.paginatedData.length <= 0
            ? _c("div", { staticClass: "noRecord" }, [
                _c("img", {
                  attrs: { src: "storage/nodata-found.png", width: "100%" },
                }),
              ])
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c("ViewDialog", {
        attrs: { arrViewData: _vm.arrViewData, DialogView: _vm.DialogView },
        on: { CloseDialog: _vm.CloseDialog },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=template&id=b98200c6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/DisapprovedTable.vue?vue&type=template&id=b98200c6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-simple-table",
        {
          staticClass: "TableFormat",
          attrs: {
            "fixed-header": "",
            height: _vm.paginatedData.length > 0 ? "600px" : "60px",
          },
        },
        [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v(" Date Request ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Kind ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" System Name ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Company ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Department ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Requester ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Request Type ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Background ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Detail of Reques ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Attachment ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Due Date ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Estimated Hour ")]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.paginatedData, function (item, i) {
              return _c("tr", { key: i }, [
                _c("td", [_vm._v(_vm._s(item.RequestDate))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.KindName))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.SystemName))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.CompanyName))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.DepartmentName))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.Requester))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.RequestName))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.Background))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.DetailOfRequest))]),
                _vm._v(" "),
                _c(
                  "td",
                  _vm._l(item.Attachments, function (attach) {
                    return _c("li", { key: attach }, [
                      _c(
                        "a",
                        {
                          on: {
                            click: function ($event) {
                              return _vm.DownloadAttachment(attach, item)
                            },
                          },
                        },
                        [_vm._v(_vm._s(attach))]
                      ),
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.DueDate))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.EstimatedHours))]),
              ])
            }),
            0
          ),
        ]
      ),
      _vm._v(" "),
      _vm.paginatedData.length <= 0
        ? _c("div", { staticClass: "noRecord" }, [
            _c("img", { attrs: { src: "storage/nodata-found.png" } }),
          ])
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=template&id=8d27dad4&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ForApprovalTable.vue?vue&type=template&id=8d27dad4&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "a-spin",
        { attrs: { spinning: _vm.isLoading, tip: "Sending..." } },
        [
          _c(
            "v-simple-table",
            {
              staticClass: "TableFormat",
              attrs: {
                "fixed-header": "",
                height: _vm.paginatedData.length > 0 ? "600px" : "60px",
              },
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v(" Date Request ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Kind ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" System Name ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Company ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Department ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Requester ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Request Type ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Background ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Detail of Reques ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Attachment ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Due Date ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Estimated Hour ")]),
                  _vm._v(" "),
                  _vm.$store.state.JapaneseData.length != 0
                    ? _c("th", [_vm._v("Action")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$store.state.JapaneseData.length == 0
                    ? _c("th", [_vm._v("Approver")])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.paginatedData, function (item, i) {
                  return _c("tr", { key: i }, [
                    _c("td", [_vm._v(_vm._s(item.RequestDate))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.KindName))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.SystemName))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.CompanyName))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.DepartmentName))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.Requester))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.RequestName))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.Background))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.DetailOfRequest))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      _vm._l(item.AttachmentsFile, function (attach) {
                        return _c("li", { key: attach }, [
                          _c(
                            "a",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.DownloadAttachment(attach, item)
                                },
                              },
                            },
                            [_vm._v(_vm._s(attach))]
                          ),
                        ])
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.DueDate))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.EstimatedHours))]),
                    _vm._v(" "),
                    _vm.$store.state.JapaneseData.length != 0
                      ? _c(
                          "td",
                          [
                            _c(
                              "a-tooltip",
                              {
                                attrs: { placement: "top" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "title",
                                      fn: function () {
                                        return [_c("span", [_vm._v("Approve")])]
                                      },
                                      proxy: true,
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              },
                              [
                                _vm._v(" "),
                                _c(
                                  "v-icon",
                                  {
                                    attrs: { color: "green" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.ApproveRequest(item)
                                      },
                                    },
                                  },
                                  [_vm._v("mdi-thumb-up")]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "a-tooltip",
                              {
                                attrs: { placement: "top" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "title",
                                      fn: function () {
                                        return [
                                          _c("span", [_vm._v("Dispprove")]),
                                        ]
                                      },
                                      proxy: true,
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              },
                              [
                                _vm._v(" "),
                                _c(
                                  "v-icon",
                                  {
                                    attrs: { color: "red" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.DisapproveRequest(item)
                                      },
                                    },
                                  },
                                  [_vm._v("mdi-thumb-down")]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$store.state.JapaneseData.length == 0
                      ? _c("td", [
                          _vm._v(
                            " \n                       " +
                              _vm._s(item.ApproverName) +
                              "\n                    "
                          ),
                        ])
                      : _vm._e(),
                  ])
                }),
                0
              ),
            ]
          ),
          _vm._v(" "),
          _vm.paginatedData.length <= 0
            ? _c("div", { staticClass: "noRecord" }, [
                _c("img", { attrs: { src: "storage/nodata-found.png" } }),
              ])
            : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=template&id=6fa22d61&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MonitoringTable/ViewDialog.vue?vue&type=template&id=6fa22d61&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "" },
          model: {
            value: _vm.DialogView,
            callback: function ($$v) {
              _vm.DialogView = $$v
            },
            expression: "DialogView",
          },
        },
        [
          _c("v-card", { staticClass: "pa-4" }, [
            _c(
              "div",
              [
                _c(
                  "v-icon",
                  {
                    staticClass: "float-right",
                    on: {
                      click: function ($event) {
                        return _vm.CloseDialog()
                      },
                    },
                  },
                  [_vm._v("mdi-close-thick")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("h1", [_vm._v(_vm._s(_vm.arrViewData.RequestNo))]),
            _vm._v(" "),
            _c("div", { staticClass: "divformat" }, [
              _c("span", [_vm._v("SystemName:")]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.arrViewData.SystemName))]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "wrapper" }, [
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Kind:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.KindName))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Request No:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.RequestNo))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Request Type:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.RequestName))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Status:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.StatusName))]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "wrapper" }, [
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Company Name:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.CompanyName))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Department Name:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.DepartmentName))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Requester:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.Requester))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Email:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.Email))]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ma-0 pa-0" }, [
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Details:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.DetailOfRequest))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Background:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.Background))]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "divformat" },
                [
                  _c("span", [_vm._v("Attachment:")]),
                  _vm._v(" "),
                  _vm._l(_vm.arrViewData.Attachments, function (attach) {
                    return _c("li", { key: attach }, [
                      _c(
                        "a",
                        {
                          on: {
                            click: function ($event) {
                              return _vm.DownloadAttachment(attach, _vm.item)
                            },
                          },
                        },
                        [_vm._v(_vm._s(attach))]
                      ),
                    ])
                  }),
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "wrapper" }, [
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("InCharge:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.InCharge))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Reference:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.PMSReference))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Request Date:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.RequestDate))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Due Date:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.DueDate))]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "wrapper" }, [
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Estimated Hours:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.EstimatedHours))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Finished Date:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.FinishedDate))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Completion Hours:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.CompletionHours))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divformat" }, [
                _c("span", [_vm._v("Registered By:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.arrViewData.RegisteredBy))]),
              ]),
            ]),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/KSKMonitoring.vue?vue&type=template&id=479adf1c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/KSKMonitoring.vue?vue&type=template&id=479adf1c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ma-4 pa-0" },
    [
      _vm.$store.state.JapaneseData.length === 0
        ? _c("h2", [_vm._v("Guest")])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "a-badge",
            { attrs: { count: _vm.forApporovalCount } },
            [
              _c(
                "a-button",
                {
                  staticClass: "ButtonFormat",
                  attrs: { type: "primary" },
                  on: {
                    click: function ($event) {
                      return _vm.SwitchTable(1)
                    },
                  },
                },
                [
                  _vm._v("For Approval"),
                  _c("a-icon", { attrs: { type: "bell" } }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-button",
            {
              staticClass: "ButtonFormat",
              attrs: { type: "primary" },
              on: {
                click: function ($event) {
                  return _vm.SwitchTable(2)
                },
              },
            },
            [_vm._v("Approved"), _c("a-icon", { attrs: { type: "like" } })],
            1
          ),
          _vm._v(" "),
          _c(
            "a-button",
            {
              staticClass: "ButtonFormat",
              attrs: { type: "primary" },
              on: {
                click: function ($event) {
                  return _vm.SwitchTable(3)
                },
              },
            },
            [
              _vm._v("Disapproved"),
              _c("a-icon", { attrs: { type: "dislike" } }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "formdiv ma-3" }, [
        _c("div", [
          _vm.tableIndex === 2
            ? _c(
                "div",
                { staticClass: "wrapper" },
                [
                  _c("h2", [_vm._v("Legend:")]),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    [
                      _c("a-avatar", {
                        staticClass: "mr-3",
                        style: {
                          backgroundColor: "red",
                          verticalAlign: "middle",
                        },
                        attrs: { shape: "square", size: "small" },
                      }),
                      _vm._v(
                        "\n                - Cancelled Task \n                "
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    [
                      _c("a-avatar", {
                        staticClass: "mr-3",
                        style: {
                          backgroundColor: "green",
                          verticalAlign: "middle",
                        },
                        attrs: { shape: "square", size: "small" },
                      }),
                      _vm._v(
                        "\n                    - Finished Task\n                "
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("a-input-search", {
              attrs: { placeholder: "Search..." },
              model: {
                value: _vm.search,
                callback: function ($$v) {
                  _vm.search = $$v
                },
                expression: "search",
              },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "a-skeleton",
        { attrs: { loading: _vm.isLoading } },
        [
          _vm.tableIndex === 1
            ? _c("for-approval-table", {
                attrs: { paginatedData: _vm.paginatedData },
                on: { DownloadAttachment: _vm.DownloadAttachment },
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.tableIndex === 2
            ? _c("approved-table", {
                attrs: {
                  paginatedData: _vm.paginatedData,
                  isLoadingApproved: _vm.isLoadingApproved,
                },
                on: { DownloadAttachment: _vm.DownloadAttachment },
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.tableIndex === 3
            ? _c("disapproved-table", {
                attrs: { paginatedData: _vm.paginatedData },
                on: { DownloadAttachment: _vm.DownloadAttachment },
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center" },
            [
              _c("v-pagination", {
                attrs: { small: "", length: _vm.length, "total-visible": 8 },
                model: {
                  value: _vm.page,
                  callback: function ($$v) {
                    _vm.page = $$v
                  },
                  expression: "page",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);