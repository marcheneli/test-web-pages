(window.webpackJsonpwww=window.webpackJsonpwww||[]).push([[8],{1615:function(e,t,n){"use strict";var r=n(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(2)),o=(0,r(n(44)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"FilterList");t.default=o},1616:function(e,t,n){"use strict";var r=n(2),i=n(94),o=n.n(i);t.a=function(e){return r.createElement(o.a,Object.assign({},e),r.createElement("path",{d:"M3,2H21V2H21V4H20.92L14,10.92V22.91L10,18.91V10.91L3.09,4H3V2Z"}))}},1804:function(e,t,n){"use strict";var r=n(2),i=n(94),o=n.n(i);t.a=function(e){return r.createElement(o.a,Object.assign({},e),r.createElement("path",{d:"M3,2H21V2H21V4H20.92L15,9.92V22.91L9,16.91V9.91L3.09,4H3V2M11,16.08L13,18.08V9H13.09L18.09,4H5.92L10.92,9H11V16.08Z"}))}},1821:function(e,t,n){"use strict";var r=n(6),i=n.n(r),o=n(10),a=n.n(o),s=n(7),l=n.n(s),u=n(8),c=n.n(u),p=n(11),d=n.n(p),f=n(2),h=n(59),m=n(14),v=n(13),y=n(115),b=n.n(y),g=n(25),O=n.n(g),F=n(1615),E=n.n(F),R=n(24),j=n.n(R),k=n(19),w=n.n(k),I=n(64),P=n(0),C=n(83),S=n(1827),V=n(105),D=n(174),T=n(104),$=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":d()(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},A=function(e){function t(){return i()(this,t),l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c()(t,e),a()(t,[{key:"onFilterTemplateEditRequest",value:function(){var e=this,t=this.props.openDialog(this.props.i18n.t("Пользовательские фильтры"),f.createElement(S.a,{formId:this.props.formId,showUserFilters:!0,actionsDisabled:!0}),[f.createElement(w.a,{key:"close",variant:"raised",onClick:function(){return e.props.handleDialogClose(t)},style:{marginRight:"10px"}},this.props.i18n.t("Закрыть"))]);this.props.closePopover()}},{key:"onFilterTemplateChanged",value:function(e){this.props.dispatch(Object(I.k)({filterId:this.props.filterId,filter:e})),this.props.closePopover()}},{key:"handleFiltersLibraryClick",value:function(e){var t=this,n=Object(T.e)(this.props.forms,this.props.formId).map(function(e){return e.entity.filters}).getOrElse(function(){return[]}).map(function(e){return f.createElement(j.a,{key:h.v4(),value:e.name,onClick:function(){return t.onFilterTemplateChanged(e.filter)}},e.name)}),r=this.props.userFilters.filters.filter(function(e){return Object(P.headOption)(e.filter.conditions).flatMap(function(e){return Object(T.e)(t.props.forms,t.props.formId).flatMap(function(n){return t.props.dispatch(Object(D.c)(n.id,e.field))})}).nonEmpty()}).map(function(e){return f.createElement(j.a,{key:h.v4(),value:e.name,onClick:function(){return t.onFilterTemplateChanged(e.filter)}},e.name)});this.props.openPopover(Object(P.toOption)(e.currentTarget),f.createElement(f.Fragment,null,f.createElement(j.a,null,f.createElement("div",{style:{fontWeight:700}},this.props.i18n.t("Системные"),":")),n,f.createElement(j.a,null,f.createElement("div",{style:{fontWeight:700}},this.props.i18n.t("Пользовательские"),":")),r,f.createElement(j.a,{onClick:this.onFilterTemplateEditRequest},f.createElement("div",{style:{fontWeight:700}},this.props.i18n.t("Отредактировать")))))}},{key:"render",value:function(){return f.createElement(b.a,{title:this.props.i18n.t("Библиотека фильтров")},f.createElement(O.a,{onClick:this.handleFiltersLibraryClick},f.createElement(E.a,null)))}}]),t}(f.Component);A=$([v.autobind],A),t.a=Object(m.connect)(function(e,t){return{i18n:e.i18n,userFilters:e.userFilters,forms:e.forms}},function(e,t){return{dispatch:e}},function(e,t,n){return Object.assign({},e,n,t)},{areStatesEqual:function(e,t){return e.i18n===t.i18n&&e.userFilters===t.userFilters&&e.currentForm===t.currentForm}})(Object(V.a)(Object(C.a)(A)))},1827:function(e,t,n){"use strict";var r=n(43),i=n.n(r),o=n(6),a=n.n(o),s=n(10),l=n.n(s),u=n(7),c=n.n(u),p=n(8),d=n.n(p),f=n(11),h=n.n(f),m=n(2),v=n(14),y=n(13),b=n(59),g=n(25),O=n.n(g),F=n(19),E=n.n(F),R=n(86),j=n.n(R),k=n(414),w=n.n(k),I=n(415),P=n(216),C=n(1),S=n(104),V=n(137),D=n(46),T=n(95),$=n(0),A=n(161),q=n(26),M=n.n(q),x=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":h()(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},L=function(e){function t(){return a()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d()(t,e),l()(t,[{key:"render",value:function(){var e=this.props.fields.name;return m.createElement("form",null,m.createElement(M.a,{fullWidth:!0,autoFocus:!0,style:{marginBottom:"15px"},value:e.value,onChange:e.onChange,label:this.props.i18n.t("Название"),error:e.touched&&e.error,helperText:e.touched&&Object($.toOption)(e.error).map(function(e){return e}).getOrNull()}),m.createElement(A.a,{formId:this.props.formId,filterId:this.props.fields.filterId.value,initialValue:this.props.fields.filter.value?Object($.toOption)(this.props.fields.filter.value):new $.None}))}}]),t}(m.Component);L=x([y.autobind],L);var _=Object(v.connect)(function(e){return{i18n:e.i18n}},function(e){return{}},function(e,t,n){return Object.assign({},e,n)},{withRef:!0})(Object(T.reduxForm)({form:"newFilterForm",fields:["name","filterId","filter"],validate:function(e,t){var n={};return e.name&&0!==e.name.trim().length||(n.name=t.i18n.t("Обязательное значение!")),n}})(L)),H=n(176),N=n(23),U=n(71),z=n(83),B=n(633),W=n(277),K=n(174),G=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":h()(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},J=function(e){function t(){a()(this,t);var e=c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.handleKeyDown=function(t){"Insert"===t.key&&e.onCreateRequest()},e}return d()(t,e),l()(t,[{key:"handleSubmit",value:function(e,t,n){var r=this;return new Promise(function(i,o){return e.then(function(e){i(e),r.props.dispatch(Object(U.h)(r.props.i18n.t(("create"===t?"Создание":"Сохранение")+" успешно завершено"))),r.props.dispatch(Object(H.e)()),r.handleClose(n)}).catch(function(e){o(e),r.props.dispatch(Object(U.h)(r.props.i18n.t(("create"===t?"Создание":"Сохранение")+" завершилось ошибкой")))})})}},{key:"openEditForm",value:function(e,t,n){var r=this,i=void 0,o=this.props.openDialog(e,m.createElement(_,{ref:function(e){return i=Object(N.toOption)(e).flatMap(function(e){return Object(N.toOption)(e.wrappedInstance)})},formId:this.props.formId,initialValues:n,onSubmit:t}),[m.createElement(E.a,{onClick:function(){return r.handleClose(o)},style:{marginRight:"10px"}},this.props.i18n.t("Закрыть")),m.createElement(B.a,{variant:"raised",color:"primary",onClick:function(){return i.map(function(e){return e.submit()})},formName:"newFilterForm"},this.props.i18n.t("Сохранить"))]);return o}},{key:"handleClose",value:function(e){this.props.handleDialogClose(e)}},{key:"onCreateRequest",value:function(){var e=this,t=this.openEditForm(this.props.i18n.t("Новый фильтр"),function(n){return e.handleSubmit(Object(V.b)(e.props.filtersForm,n.filterId).flatMap(function(t){return Object(S.e)(e.props.forms,e.props.formId).map(function(e){return Object(H.l)(e.id,[].concat(i()(e.entity.filters),[new C.FilterContainer(n.name,t)]))})}).getOrElse(function(){return new Promise(function(e,t){return t()})}),"create",t)},{filterId:new C.Id(b.v4())})}},{key:"onEditRequest",value:function(e,t){var n=this,r=this.openEditForm(this.props.i18n.t("Редактировать фильтр"),function(e){return n.handleSubmit(Object(V.b)(n.props.filtersForm,e.filterId).flatMap(function(r){return Object(S.e)(n.props.forms,n.props.formId).map(function(n){return Object(H.l)(n.id,[].concat(i()(n.entity.filters.slice(0,t)),[new C.FilterContainer(e.name,r)],i()(n.entity.filters.slice(t+1))))})}).getOrElse(function(){return new Promise(function(e,t){return t()})}),"update",r)},{name:e.name,filterId:new C.Id(b.v4()),filter:e.filter})}},{key:"onUserFilterCreateRequest",value:function(){var e=this,t=this.openEditForm(this.props.i18n.t("Новый фильтр"),function(n){return e.handleSubmit(Object(V.b)(e.props.filtersForm,n.filterId).map(function(t){return e.props.dispatch(Object(W.d)({filter:new C.FilterContainer(n.name,t)})),new Promise(function(e,t){return e()})}).getOrElse(function(){return new Promise(function(e,t){return t()})}),"create",t)},{filterId:new C.Id(b.v4())})}},{key:"onUserFilterEditRequest",value:function(e,t){var n=this,r=this.openEditForm(this.props.i18n.t("Редактировать фильтр"),function(e){return n.handleSubmit(Object(V.b)(n.props.filtersForm,e.filterId).map(function(r){return n.props.dispatch(Object(W.f)({idx:t,filter:new C.FilterContainer(e.name,r)})),new Promise(function(e,t){return e()})}).getOrElse(function(){return new Promise(function(e,t){return t()})}),"update",r)},{name:e.name,filterId:new C.Id(b.v4()),filter:e.filter})}},{key:"onDelete",value:function(e){var t=this;Object(S.e)(this.props.forms,this.props.formId).map(function(n){return Object(H.l)(n.id,[].concat(i()(n.entity.filters.slice(0,e)),i()(n.entity.filters.slice(e+1)))).then(function(e){return t.props.dispatch(Object(H.e)())})})}},{key:"onUserFilterDelete",value:function(e){this.props.dispatch(Object(W.e)(e))}},{key:"renderContents",value:function(){var e=this;if(this.props.showSystemFilters){var t=Object(S.e)(this.props.forms,this.props.formId).map(function(e){return e.entity.filters}).getOrElse(function(){return[]});return m.createElement(m.Fragment,null,m.createElement(P.b,null,m.createElement(E.a,{variant:"raised",onClick:this.onCreateRequest,color:"primary",disabled:this.props.actionsDisabled},this.props.i18n.t("Создать"))),m.createElement(I.a,{showId:!0,withActions:!0,error:this.props.forms.error,onRecordSelected:this.props.actionsDisabled?function(){}:this.onEditRequest,fetching:this.props.forms.fetching,empty:0===t.length,headers:[{id:"filterName",title:this.props.i18n.t("Название")}],rows:t.map(function(t,n){return{id:n.toString(),payload:t,fields:[t.name],buttons:[m.createElement(O.a,{disabled:e.props.actionsDisabled,style:D.f,key:"edit",onClick:function(r){r.stopPropagation(),e.onEditRequest(t,n)}},m.createElement(j.a,{style:D.g})),m.createElement(O.a,{disabled:e.props.actionsDisabled,style:D.f,key:"delete",onClick:function(t){t.stopPropagation(),e.onDelete(n)}},m.createElement(w.a,{style:D.g}))]}})}))}if(this.props.showUserFilters){var n=this.props.userFilters.filters.filter(function(t){return Object(N.headOption)(t.filter.conditions).flatMap(function(t){return Object(S.e)(e.props.forms,e.props.formId).flatMap(function(n){return e.props.dispatch(Object(K.c)(n.id,t.field))})}).nonEmpty()});return m.createElement(m.Fragment,null,m.createElement(P.b,null,m.createElement(E.a,{variant:"raised",onClick:this.onUserFilterCreateRequest,color:"primary"},this.props.i18n.t("Создать"))),m.createElement(I.a,{showId:!0,withActions:!0,error:new N.None,onRecordSelected:this.onUserFilterEditRequest,fetching:!1,empty:0===n.length,headers:[{id:"filterName",title:this.props.i18n.t("Название")}],rows:n.map(function(t,n){return{id:n.toString(),payload:t,fields:[t.name],buttons:[m.createElement(O.a,{style:D.f,key:"edit",onClick:function(r){r.stopPropagation(),e.onUserFilterEditRequest(t,n)}},m.createElement(j.a,{style:D.g})),m.createElement(O.a,{style:D.f,key:"delete",onClick:function(t){t.stopPropagation(),e.onUserFilterDelete(n)}},m.createElement(w.a,{style:D.g}))]}})}))}}},{key:"render",value:function(){return m.createElement("div",{onKeyDown:this.handleKeyDown,style:{display:"flex",flexDirection:"column",minHeight:"0",overflowY:"auto"}},this.renderContents())}}]),t}(m.Component);J=G([y.autobind],J);t.a=Object(v.connect)(function(e){return{i18n:e.i18n,forms:e.forms,filtersForm:e.filtersForm,userFilters:e.userFilters}})(Object(z.a)(J))},2753:function(e,t,n){"use strict";n.r(t);var r=n(6),i=n.n(r),o=n(10),a=n.n(o),s=n(7),l=n.n(s),u=n(8),c=n.n(u),p=n(11),d=n.n(p),f=n(2),h=n(14),m=n(13),v=n(19),y=n.n(v),b=n(25),g=n.n(b),O=n(160),F=n.n(O),E=n(265),R=n.n(E),j=n(1),k=n(29),w=n(137),I=n(215),P=n(1616),C=n(1804),S=n(668),V=n(100),D=n(4),T=n.n(D),$=n(43),A=n.n($),q=n(308),M=n(3),x=n(782),L=n.n(x),_=n(621),H=n(372),N=n(0),U=n(415),z=n(46),B=function(e){function t(){return i()(this,t),l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c()(t,e),a()(t,[{key:"isValueDisable",value:function(e){return this.props.value.filter(function(e){return e.value.tpe.value===j.ValueObjectRefs.$Type.value}).map(function(t){return t.value.id.findIndex(function(t){return t.value===e.id.value})>-1}).getOrElse(function(){return!1})||this.isValueDeleted(e)}},{key:"isValueDeleted",value:function(e){return e.formRecord.entity.attributes.status.tpe.value===j.FormDataStatusDeleted.$Type.value||e.formRecord.entity.attributes.status.tpe.value===j.FormDataStatusNominalDeleted.$Type.value}},{key:"isProcessed",value:function(e){return this.props.processedFormRecords.filter(function(t){return t.value===e.id.value}).length>0}},{key:"checkLimit",value:function(e){var t=this;return this.props.limits.flatMap(function(n){return Object(N.headOption)(t.props.forms.list.filter(function(e){return e.id.value===t.props.parentFormId.value})).map(function(e){return e.entity.limits.filter(function(e){return e.memberFieldId.value===t.props.output.formField.value})}).flatMap(function(t){return Object(N.headOption)(t.map(function(t){var r=Object(N.headOption)(n.filter(function(e){return e.cfgId===t.limitType.id}));return(!r.isEmpty()||!t.limitType.required||t.limitType.tpe.value!==j.LimitTypeTotalLimitType.$Type.value)&&(r.isEmpty()&&t.limitType.required&&t.limitType.tpe.value===j.LimitTypeLinkedFieldType.$Type.value?e.formRecord.entity.getFormFieldValue(t.limitType.memberTypeId).filter(function(e){return e.value.id.length>0}).nonEmpty():r.map(function(n){switch(n.data.tpe.value){case j.LimitDataTotal.$Type.value:if(n.data.values.avail<0)return!1;break;case j.LimitDataLinkedValues.$Type.value:var r=n.data;return!Object(N.headOption)([].concat(A()(r.values)).filter(function(n){return e.formRecord.entity.getFormFieldValue(t.limitType.memberTypeId).flatMap(function(e){return Object(N.headOption)(e.value.id)}).filter(function(e){return e.value===n[0]}).nonEmpty()&&n[1].avail<1})).nonEmpty()&&(!e.formRecord.entity.getFormFieldValue(t.limitType.memberTypeId).filter(function(e){return e.value.id.filter(function(e){return 0===[].concat(A()(r.values.keys())).filter(function(t){return t===e.value}).length}).length>0}).nonEmpty()||!t.limitType.required);default:throw"Unknown MembersLimit type"}return!0}).getOrElse(function(){return!0}))}).filter(function(e){return!e}))})}).isEmpty()}},{key:"getValues",value:function(){return this.props.inputValue.map(function(e){return M(e,{displayValues:{$set:e.displayValuesAdding.map(function(t,n){return t instanceof V.t?t:new V.t(t.id,[t.value.toString()],e.formRecords[n])})},displayValuesMap:{$set:Object.keys(e.displayValuesMap).reduce(function(t,n,r){var i=e.displayValuesMap[n];return Object(N.headOption)(e.formRecords.filter(function(e){return e.id.value===n})).map(function(e){return Object.assign({},t,T()({},n,i instanceof V.t?i:new V.t(i.id,[i.value.toString()],e)))}).getOrElse(function(){return{}})},{})}})}).map(function(e){return e.displayValuesAdding}).getOrElse(function(){return[]}).filter(function(e){return e instanceof V.t})}},{key:"onOnlyOneChoiceRecordSelect",value:function(e,t){var n=this;Object(N.headOption)(this.getValues().filter(function(t){return t.id.value===e})).foreach(function(e){return n.props.onObjRefAdd(e)})}},{key:"getEnhancedTableProps",value:function(){return this.props.onlyOneChoice?{onRecordSelected:this.onOnlyOneChoiceRecordSelect.bind(this)}:{onRecordMarked:this.props.onRecordMarked,onSelectAll:this.props.onSelectAll}}},{key:"getRows",value:function(){var e=this;return this.getValues().map(function(t){var n=e.isValueDisable(t),r=e.isProcessed(t),i=e.isValueDisable(t)||r||!e.checkLimit(t);return{payload:t.id.value,id:t.id.value,fields:t.values,deleted:n||!e.checkLimit(t),selectDisabled:i,buttons:e.props.onlyOneChoice?[]:(new Array).concat(r?[f.createElement(F.a,{size:30})]:(new Array).concat(n||e.props.onlyOneChoice?[]:[f.createElement(g.a,{key:"add",style:Object.assign({},z.f,{padding:"4px"}),onClick:function(n){return e.props.onObjRefAdd(t)},disabled:n||!e.checkLimit(t)},f.createElement(R.a,{style:z.g}))]).concat(e.props.onObjRefDelete&&n?[f.createElement(g.a,{key:"delete",style:Object.assign({},z.f,{padding:"4px"}),onClick:function(n){return e.props.onObjRefDelete&&e.props.onObjRefDelete(t)},disabled:!n},f.createElement(L.a,{style:z.g}))]:[]))}})}},{key:"render",value:function(){var e=this.props.fields.getOrElse(function(){return[]}),t=(Object(N.headOption)(e.filter(function(e){return e.entity.valueType.tag.map(function(e){return e.tpe.value===j.ValueTagSimpleDictionaryPosition.$Type.value}).getOrElse(function(){return!1})})),this.props.displayFieldsForAdding.map(function(e){switch(e.tpe.value){case j.DisplayFieldByField.$Type.value:return{id:e.fieldId.value,title:e.caption};case j.DisplayFieldByTemplate.$Type.value:return{id:e.template,title:e.caption};default:return{id:e.fieldId.value,title:e.caption}}})),n=Object(N.headOption)(Object(q.a)(this.props.displayFieldsForAdding.map(function(e,t){return e.sort.enabled?t:void 0}).filter(function(e){return void 0!==e}))).getOrElse(function(){return-1}),r=this.props.displayFieldsForAdding.reduce(function(e,t,n){return Object.assign({},e,T()({},n,!t.sort.enabled||t.sort.value.map(function(e){return e.tpe.value===j.SortOrderAsc.$Type.value}).getOrElse(function(){return!0})))},{});return f.createElement(U.a,Object.assign({showId:!1,error:new N.None},this.getEnhancedTableProps(),{markedRecords:this.props.markedFormRecords.map(function(e){return e.value}),fetching:this.props.dataInputFetching.getOrElse(function(){return!1}),empty:!1,columnStyles:this.props.displayFieldsForAdding.map(function(e){return{flex:e.columnWidth}}),columnIndexSort:n,columnOrderAsc:r,withActions:!0,headers:t,maxBodyHeight:Object(N.toOption)("50"),rows:this.getRows()}))}}]),t}(f.Component),W=Object(h.connect)(function(e,t){return{i18n:e.i18n,dataInputFetching:Object(N.liftKey)(e.dataInputs.fetching,t.display.id.value),fields:Object(k.e)(e.fields,t.childFormId),inputValue:Object(_.b)(e.dataInputs,t.display.id),value:Object(I.d)(e.dataOutput,t.blockRendererId,t.output),limits:Object(H.i)(e.blockRendererContext,t.blockRendererId),forms:e.forms,formRecord:Object(H.d)(e.blockRendererContext,t.blockRendererId)}},function(e,t){return{dispatch:e}},function(e,t,n){return Object.assign({},e,t,n)},{areStatesEqual:function(e,t){return e.i18n===t.i18n&&e.dataInputs.input===t.dataInputs.input&&e.dataOutput===t.dataOutput&&e.blockRendererContext===t.blockRendererContext&&e.fields.list===t.fields.list&&e.forms===t.forms},areStatePropsEqual:function(e,t){return Object(N.isEqual)(e.fields,t.fields)&&Object(N.isEqual)(e.value,t.value)&&Object(N.isEqual)(e.inputValue,t.inputValue)&&Object(N.isEqual)(e.limits,t.limits)&&Object(N.isEqual)(e.formRecord,t.formRecord)&&e.i18n===t.i18n&&e.forms===t.forms}})(B),K=n(264),G=n(1533),J=n(216),Z=n(161),Y=n(59),Q=n(1458),X=n(620),ee=n(83),te=n(1821);n.d(t,"filterId",function(){return ie});var ne=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":d()(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},re=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":d()(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},ie=new j.Id(Y.v4()),oe=function(e){function t(e){i()(this,t);var n=l()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={currentPage:0,rowPerPage:20,searchField:new N.None,searchValue:new N.None,filter:new N.None,filterEnabled:!1,markedFormRecords:[],processedFormRecords:[]},n}return c()(t,e),a()(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.props.outputValue.filter(function(e){return e.value.tpe.value===j.ValueObjectRefs.$Type.value}).map(function(e){return e.value.id.length}),n=e.outputValue.filter(function(e){return e.value.tpe.value===j.ValueObjectRefs.$Type.value}).map(function(e){return e.value.id.length});Object(N.isEqual)(n,t)||this.setState(M(this.state,{processedFormRecords:{$set:[]}}))}},{key:"combineFilter",value:function(e){return this.state.filterEnabled&&this.state.filter.nonEmpty?this.state.filter.map(function(t){return e.map(function(e){return new j.FilterGroupCondition([e,t],new j.FilterPredicateAnd)}).getOrElse(function(){return t})}):e}},{key:"fetchFormRecords",value:function(e){var t=this;Object(K.d)(new j.DataPageRequest(this.state.currentPage,this.state.rowPerPage,this.props.childFormId,this.combineFilter(e||new N.None))).then(function(e){t.setState(M(t.state,{totalRecords:{$set:e.page.total}})),t.props.dispatch(Object(G.a)(t.props.display,t.props.input,t.props.parentFormId,t.props.objRefsField,e.page.records,e.page.total,t.props.i18n.t))}).catch(function(e){return console.error("Failed to resolve input data",e)})}},{key:"onFirstPage",value:function(){var e=this;this.setState(M(this.state,{currentPage:{$set:0}}),function(){return e.fetchFormRecords()})}},{key:"onLastPage",value:function(){var e=this;this.setState(M(this.state,{currentPage:{$set:Math.ceil(this.props.inputValue.map(function(e){return e.total}).getOrElse(function(){return 0})/this.state.rowPerPage)-1}}),function(){return e.fetchFormRecords()})}},{key:"onNextPage",value:function(){var e=this;this.setState(M(this.state,{currentPage:{$set:this.state.currentPage+1}}),function(){return e.fetchFormRecords()})}},{key:"onPrevPage",value:function(){var e=this;this.setState(M(this.state,{currentPage:{$set:this.state.currentPage-1}}),function(){return e.fetchFormRecords()})}},{key:"onPageSizeChanged",value:function(e){var t=this;this.setState(M(this.state,{rowPerPage:{$set:e}}),function(){return t.fetchFormRecords()})}},{key:"onSearchFieldChange",value:function(e){var t=this;this.setState(M(this.state,{searchField:{$set:new N.Some(new j.Id(e))}}),function(){return t.fetchFormRecords()})}},{key:"onSearchValueChange",value:function(e){var t=this;this.setState(M(this.state,{searchValue:{$set:new N.Some(e.target.value)}}),function(){return t.fetchFormRecords()})}},{key:"onSearchRecords",value:function(){var e=this;this.state.searchField.foreach(function(t){e.state.searchValue.foreach(function(n){var r=new j.FilterGroupCondition([new j.FilterCondition(t,new j.FilterExpressionContains,new j.ValueStr(n))],new j.FilterPredicateAnd);e.fetchFormRecords(new N.Some(r))})})}},{key:"onFilterSave",value:function(e){var t=this;this.setState(M(this.state,{filter:{$set:this.props.filterForm}}),function(){return t.props.handleDialogClose(e)})}},{key:"onOpenFilterConfiguration",value:function(){var e=this,t=this.props.openDialog(this.props.i18n.t("Редактирование фильтрации"),f.createElement("div",null,f.createElement("div",{style:{position:"absolute",right:0,top:0,zIndex:10}},f.createElement(te.a,{filterId:ie,formId:this.props.childFormId})),f.createElement(Z.a,{initialValue:this.state.filter,filterId:ie,formId:this.props.childFormId})),[f.createElement(y.a,{variant:"raised",onClick:function(){return e.props.handleDialogClose(t)},style:{marginRight:"5px"}},this.props.i18n.t("Закрыть")),f.createElement(y.a,{variant:"raised",color:"primary",onClick:function(){return e.onFilterSave(t)}},this.props.i18n.t("Сохранить"))])}},{key:"onFilterToggle",value:function(){var e=this;this.setState(M(this.state,{filterEnabled:{$set:!this.state.filterEnabled}}),function(){return e.fetchFormRecords()})}},{key:"isValueDeleted",value:function(e){return e.formRecord.entity.attributes.status.tpe.value===j.FormDataStatusDeleted.$Type.value||e.formRecord.entity.attributes.status.tpe.value===j.FormDataStatusNominalDeleted.$Type.value}},{key:"onSelectAll",value:function(e,t){var n=this,r=this.props.inputValue.map(function(e){return e.displayValues}).getOrElse(function(){return[]}).filter(function(e){return e instanceof V.t}).filter(function(e){return!n.isValueDeleted(e)});t?this.setState(M(this.state,{markedFormRecords:{$set:this.state.markedFormRecords.concat(r.filter(function(e){return 0===n.state.markedFormRecords.filter(function(t){return t.value===e.id.value}).length}).map(function(e){return e.id}))}})):this.setState(M(this.state,{markedFormRecords:{$set:this.state.markedFormRecords.filter(function(e){return 0===r.filter(function(t){return t.id.value===e.value}).length})}}))}},{key:"onRecordMarked",value:function(e){var t=this.state.markedFormRecords.findIndex(function(t){return t.value===e});t>=0?this.setState(M(this.state,{markedFormRecords:{$splice:[[t,1]]}})):this.setState(M(this.state,{markedFormRecords:{$push:[new j.Id(e)]}}))}},{key:"processFormRecords",value:function(e,t){var n=this;this.setState(M(this.state,{processedFormRecords:{$set:e.map(function(e){return e.id})}}),function(){t.finally(function(){n.setState(M(n.state,{processedFormRecords:{$set:[]}}))})})}},{key:"onMarkedFormRecordsAdd",value:function(){var e=this,t=this.props.inputValue.map(function(e){return e.displayValues}).getOrElse(function(){return[]}).filter(function(e){return e instanceof V.t}).filter(function(t){return e.state.markedFormRecords.filter(function(e){return e.value===t.id.value}).length>0}).filter(function(t){return 0===e.props.value.map(function(e){return e.id}).getOrElse(function(){return[]}).filter(function(e){return e.value===t.id.value}).length}).map(function(e){return e});this.processFormRecords(t,this.props.onObjRefsAdd(t))}},{key:"onObjRefAdd",value:function(e){this.processFormRecords([e],this.props.onObjRefAdd(e))}},{key:"onObjRefDelete",value:function(e){var t=this;Object(N.toOption)(this.props.onObjRefDelete).foreach(function(n){t.processFormRecords([e],n(e))})}},{key:"render",value:function(){var e=this,t=this.state.filterEnabled?f.createElement(P.a,{color:"#E91E63"}):f.createElement(C.a,null);return f.createElement("div",{style:{flexDirection:"column",width:"100%",display:"flex",minHeight:0}},f.createElement(J.b,{leftButtonGroup:[f.createElement(g.a,{key:"massAdding",onClick:this.onMarkedFormRecordsAdd},this.state.processedFormRecords.length>1?f.createElement(F.a,null):f.createElement(R.a,null)),f.createElement(g.a,{key:"filter",onClick:this.onFilterToggle},t),f.createElement(g.a,{key:"filter-set",onClick:this.onOpenFilterConfiguration},f.createElement(S.a,null))]}),f.createElement(W,{childFormId:this.props.childFormId,parentFormId:this.props.parentFormId,display:this.props.display,displayFields:this.props.displayFields,displayFieldsForAdding:this.props.displayFieldsForAdding,blockRendererId:this.props.blockRendererId,output:this.props.output,input:this.props.input,onObjRefAdd:this.onObjRefAdd,onObjRefDelete:this.onObjRefDelete,onSelectAll:this.onSelectAll,onRecordMarked:this.onRecordMarked,markedFormRecords:this.state.markedFormRecords,processedFormRecords:this.state.processedFormRecords,onlyOneChoice:this.props.onlyOneChoice}),f.createElement(J.a,{nextPage:this.onNextPage,prevPage:this.onPrevPage,firstPage:this.onFirstPage,lastPage:this.onLastPage,changePageSize:this.onPageSizeChanged,currentPage:this.state.currentPage,rowPerPage:this.state.rowPerPage,totalRecords:this.props.inputValue.map(function(e){return e.total}).getOrElse(function(){return 0}),shouldShowMassActions:!1,massActionsComponents:[],searchField:this.state.searchField.map(function(e){return e.value}).getOrNull(),searchFields:this.props.childFields.getOrElse(function(){return[]}).filter(function(t){return e.props.displayFields.filter(function(e){return e.tpe.value===j.DisplayFieldByField.$Type.value}).filter(function(e){return t.id.value===e.fieldId.value}).length>0}),onSearchRecords:this.onSearchRecords,onSearchFieldChange:this.onSearchFieldChange,searchValue:this.state.searchValue.getOrElse(function(){return""}),onSearchValueChange:this.onSearchValueChange}))}}]),t}(f.Component);oe=ne([m.autobind,re("design:paramtypes",[Object])],oe);t.default=Object(h.connect)(function(e,t){return{i18n:e.i18n,childFields:Object(k.e)(e.fields,t.childFormId),filterForm:Object(w.b)(e.filtersForm,ie),inputValue:Object(_.b)(e.dataInputs,t.display.id),outputValue:Object(I.d)(e.dataOutput,t.blockRendererId,t.output),systemFilters:e.currentForm.data.map(function(e){return e.entity.filters}),userFilters:e.userFilters.filters,value:Object(I.d)(e.dataOutput,t.blockRendererId,t.output).map(function(e){return e.value}).filter(function(e){return e.tpe.value===j.ValueObjectRefs.$Type.value})}},function(e,t){return{dispatch:e}},function(e,t,n){return Object.assign({},e,t,n)},{areStatesEqual:function(e,t){return e.i18n===t.i18n&&e.dataInputs.input===t.dataInputs.input&&e.dataOutput===t.dataOutput&&e.fields.list===t.fields.list&&e.filtersForm===t.filtersForm},areStatePropsEqual:function(e,t){return Object(N.isEqual)(e.filterForm,t.filterForm)&&Object(N.isEqual)(e.value,t.value)&&Object(N.isEqual)(e.outputValue,t.outputValue)&&Object(N.isEqual)(e.inputValue,t.inputValue)&&Object(N.isEqual)(e.childFields,t.childFields)&&e.i18n===t.i18n}})(Object(X.a)([function(e){e.dispatch(Object(Q.g)(e.display,e.parentFormId))}],[],[],[])(Object(ee.a)(oe)))}}]);