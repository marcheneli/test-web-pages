(window.webpackJsonpwww=window.webpackJsonpwww||[]).push([[71],{2733:function(e,t,n){"use strict";n.r(t);var i=n(6),a=n.n(i),r=n(10),l=n.n(r),o=n(7),s=n.n(o),d=n(8),c=n.n(d),u=n(11),f=n.n(u),p=n(2),m=n(13),h=n(14),g=n(3),I=n(93),y=n.n(I),v=n(19),b=n.n(v),C=n(1),O=n(0),E=n(627),F=n(1478),k=n(1467),w=n(79),j=n(95),T=n(856),L=n.n(T),R=n(45),S=n.n(R),D=n(857),x=n.n(D),W=n(33),V=n.n(W),M=n(26),N=n.n(M),$=n(34),P=n.n($),_=n(24),B=n.n(_),K=n(32),U=n.n(K),z=n(30),H=n.n(z),Q=n(54),q=n.n(Q),G=n(103),A=n(659),J=n(1479),Y=n(2116),X=n(188),Z=n(136),ee=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":f()(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},te=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":f()(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},ne=0,ie=function(e){function t(e){a()(this,t);var n=s()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectedIndex:ne},n}return c()(t,e),l()(t,[{key:"onFastSearchFieldIdsFieldsChanged",value:function(e){this.props.fields.fastSearchFieldIds.onChange(new O.Some(e.sort(function(e,t){return e.position-t.position}).map(function(e){return new C.ColumnConfigField(e.fieldId,e.displayField)})))}},{key:"onColumnFieldIdsFieldsChanged",value:function(e){this.props.fields.columnFieldIds.onChange(new O.Some(e.sort(function(e,t){return e.position-t.position}).map(function(e){return new C.ColumnConfigField(e.fieldId,e.displayField,e.fieldView)})))}},{key:"onFilterableFieldIdsFieldsChanged",value:function(e){this.props.fields.filterableFieldIds.onChange(new O.Some(e.sort(function(e,t){return e.position-t.position}).map(function(e){return new C.ColumnConfigField(e.fieldId,e.displayField)})))}},{key:"onSelected",value:function(e){this.setState(g(this.state,{selectedIndex:{$set:e}}))}},{key:"onDecorationsChange",value:function(e){this.props.fields.decorations.onChange(e)}},{key:"renderTabContents",value:function(){var e=this.props.fields,t=e.name,n=e.FindFace,i=e.MultiQuickSearch,a=e.merging,r=e.mergingBlockId,l=e.columnFieldIds,o=e.fastSearchFieldIds,s=e.filterableFieldIds;switch(this.state.selectedIndex){case ne:return p.createElement("div",null,p.createElement("h4",null,this.props.i18n.t("Основное")),p.createElement(N.a,Object.assign({},t,{fullWidth:!0,label:this.props.i18n.t("Название"),autoFocus:!0})),p.createElement("h4",null,this.props.i18n.t("Функции")),p.createElement(V.a,{label:this.props.i18n.t("Распознавание лица"),control:p.createElement(S.a,{checked:n.checked,onChange:function(e,t){return n.onChange(t)}})}),p.createElement(V.a,{label:this.props.i18n.t("Быстрый поиск по нескольким полям"),control:p.createElement(S.a,{checked:i.checked,onChange:function(e,t){return i.onChange(t)}})}),p.createElement("div",null,p.createElement(V.a,{label:this.props.i18n.t("Объединение анкет"),control:p.createElement(S.a,{checked:a.checked,onChange:function(e,t){return a.onChange(t)}})}),a.value&&p.createElement(U.a,{fullWidth:!0},p.createElement(P.a,null,this.props.i18n.t("Блок отображения")),p.createElement(H.a,{fullWidth:!0,value:r.value,onChange:r.onChange},Object(G.c)(this.props.blocks,this.props.formId).getOrElse(function(){return[]}).map(function(e){return p.createElement(B.a,{key:e.id.toString(),value:e.id.toString()},p.createElement(q.a,{primary:e.name}))})))),p.createElement("h4",null,this.props.i18n.t("Оформление")),p.createElement(Y.a,{decorations:this.props.fields.decorations.value,formId:this.props.formId,onDecorationsChange:this.onDecorationsChange}));case 1:return p.createElement("div",{style:{padding:"16px"}},p.createElement(A.a,{errorText:"",label:this.props.i18n.t("Быстрый поиск"),exportPipelineFields:o.value.map(function(e,t){return new C.ExportConfigField(e.fieldId,t,e.displayField)}),formId:this.props.formId.value,onChange:this.onFastSearchFieldIdsFieldsChanged,filter:function(e){return e.entity.valueType instanceof C.ValueTypeStr},hideExportField:!0}),p.createElement(A.a,{errorText:"",label:this.props.i18n.t("Таблица"),exportPipelineFields:l.value.map(function(e,t){return new C.ExportConfigField(e.fieldId,t,e.displayField,e.fieldView)}),formId:this.props.formId.value,onChange:this.onColumnFieldIdsFieldsChanged,fieldOptionsEnabled:!0,hideExportField:!0}),p.createElement(A.a,{errorText:"",label:this.props.i18n.t("Поля для фильтрации"),exportPipelineFields:s.value.map(function(e,t){return new C.ExportConfigField(e.fieldId,t,e.displayField)}),formId:this.props.formId.value,onChange:this.onFilterableFieldIdsFieldsChanged,hideExportField:!0}));default:return p.createElement("div",null,"unknown content")}}},{key:"render",value:function(){var e=this;return p.createElement("form",null,p.createElement(x.a,{value:this.state.selectedIndex,onChange:function(t,n){return e.onSelected(n)},indicatorColor:"primary",textColor:"primary",fullWidth:!0},p.createElement(L.a,{value:ne,label:this.props.i18n.t("Основное")}),p.createElement(L.a,{value:1,label:this.props.i18n.t("Поля")})),p.createElement(J.a,null,this.renderTabContents()))}}]),t}(p.Component);ie=ee([m.autobind,te("design:paramtypes",[Object])],ie);var ae=Object(h.connect)(function(e){return{i18n:e.i18n,blocks:e.blocks}},function(e){return{}},function(e,t,n){return Object.assign({},e,n)},{withRef:!0})(Object(j.reduxForm)({form:"DataListConfigListForm",fields:["name","FindFace","MultiQuickSearch","merging","mergingBlockId","fastSearchFieldIds","filterableFieldIds","columnFieldIds","dataListConfigId","dataListConfigType","decorations"]})(Object(Z.a)(function(e){e.isTokenChecked&&e.dispatch(Object(X.b)(e.formId))},function(){},function(e,t){e.formId.value!==t.formId.value&&e.dispatch(Object(X.b)(e.formId)),e.formId.value===t.formId.value&&e.isTokenChecked&&!t.isTokenChecked&&e.dispatch(Object(X.b)(e.formId))})(ie))),re=n(25),le=n.n(re),oe=n(265),se=n.n(oe),de=n(29),ce=n(83),ue=n(1531),fe=n(2086),pe=n(104),me=n(345),he=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":f()(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},ge=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":f()(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Ie=function(e){function t(e){return a()(this,t),s()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return c()(t,e),l()(t,[{key:"onColumnFieldIdChange",value:function(e){this.props.fields.columnFieldId.onChange(e.target.value)}},{key:"onOrderFieldIdChange",value:function(e){this.props.fields.orderFieldId.onChange(e.target.value)}},{key:"onBlockIdChange",value:function(e){this.props.fields.blockId.onChange(e.target.value)}},{key:"onNewColumnOrderFieldCreateRequest",value:function(){Object(ue.c)({openDialog:this.props.openDialog,handleDialogClose:this.props.handleDialogClose,formId:this.props.formId,i18n:this.props.i18n,dispatch:this.props.dispatch},{valueType:C.ValueTypeNumber.$Type.value},!0,this.props.i18n.t("Новое поле"),!0)}},{key:"onColumnsVisibilityMarkedChange",value:function(e){this.props.fields.hiddenColumns.onChange(e)}},{key:"onColumnsVisibilitySettings",value:function(){var e=this;C.Id.createId(this.props.fields.columnFieldId.value).foreach(function(t){var n=e.props.openDialog(e.props.i18n.t("Настройка видимости колонок"),p.createElement(fe.a,{columnFormFieldId:t,hiddenColumns:e.props.fields.hiddenColumns.value,onColumnsVisibilityMarkedChange:e.onColumnsVisibilityMarkedChange}),[p.createElement(b.a,{key:"close",variant:"raised",onClick:function(){return e.props.handleDialogClose(n)}},e.props.i18n.t("Закрыть"))])})}},{key:"renderTabContents",value:function(){var e=this,t=this.props.fields,n=t.name,i=t.columnFieldId,a=t.blockId,r=t.orderFieldId,l=t.columnOrderFieldId,o=t.swimlaneFieldId,s=t.showUncategorized,d=t.swimlaneOrderFieldId,c=C.Id.createId(i.value).flatMap(function(t){return Object(de.c)(e.props.formFields,t)}).getOrNull(),u=C.Id.createId(o.value).flatMap(function(t){return Object(de.c)(e.props.formFields,t)}).getOrNull();return p.createElement("div",null,p.createElement("h4",null,this.props.i18n.t("Основное")),p.createElement(N.a,Object.assign({},n,{fullWidth:!0,label:this.props.i18n.t("Название"),autoFocus:!0})),p.createElement("div",null,p.createElement(U.a,{fullWidth:!0},p.createElement(P.a,null,this.props.i18n.t("Поле колонки")),p.createElement(H.a,{fullWidth:!0,value:i.value,onChange:this.onColumnFieldIdChange},Object(de.e)(this.props.formFields,this.props.formId).getOrElse(function(){return[]}).filter(function(e){return e.entity.valueType instanceof C.ValueTypeObjectRefs}).filter(function(t){return Object(pe.e)(e.props.forms,t.entity.valueType.family).map(function(e){return C.FormType.isAnyDictionary(e.entity.formType)}).getOrElse(function(){return!1})}).map(function(e,t){return p.createElement(B.a,{key:t,value:e.id.value},p.createElement(q.a,{primary:e.entity.caption}))}))),""!==i.value&&p.createElement(b.a,{onClick:this.onColumnsVisibilitySettings},this.props.i18n.t("Настройка видимости колонок")),c&&p.createElement(U.a,{fullWidth:!0},p.createElement(P.a,null,this.props.i18n.t("Поле для порядка колонок")),p.createElement(H.a,{fullWidth:!0,value:r.value,onChange:this.onOrderFieldIdChange},Object(de.e)(this.props.formFields,c.entity.valueType.family).getOrElse(function(){return[]}).map(function(e,t){return p.createElement(B.a,{key:t,value:e.id.value},p.createElement(q.a,{primary:e.entity.caption}))}))),p.createElement(U.a,{fullWidth:!0},p.createElement(P.a,null,this.props.i18n.t("Блок отображения карточки")),p.createElement(H.a,{fullWidth:!0,value:a.value,onChange:this.onBlockIdChange},Object(G.c)(this.props.blocks,this.props.formId).getOrElse(function(){return[]}).map(function(e){return p.createElement(B.a,{key:e.id.toString(),value:e.id.toString()},p.createElement(q.a,{primary:e.name}))}))),p.createElement("div",{style:{display:"flex",alignItems:"baseline"}},p.createElement(U.a,{fullWidth:!0},p.createElement(P.a,null,this.props.i18n.t("Поле порядкового номера в колонке")),p.createElement(H.a,{value:l.value,onChange:l.onChange},Object(de.e)(this.props.formFields,this.props.formId).getOrElse(function(){return[]}).filter(function(e){return e.entity.valueType instanceof C.ValueTypeNumber}).map(function(e,t){return p.createElement(B.a,{key:t,value:e.id.value},p.createElement(q.a,{primary:e.entity.caption}))}))),p.createElement("div",null,p.createElement(le.a,{onClick:this.onNewColumnOrderFieldCreateRequest},p.createElement(se.a,null)))),p.createElement(U.a,{fullWidth:!0},p.createElement(P.a,null,this.props.i18n.t("Поле swimlane")),p.createElement(H.a,{fullWidth:!0,value:o.value,onChange:o.onChange},p.createElement(B.a,{value:me.a},p.createElement(q.a,{primary:this.props.i18n.t("Не выбрано")})),Object(de.e)(this.props.formFields,this.props.formId).getOrElse(function(){return[]}).filter(function(e){return e.entity.valueType instanceof C.ValueTypeObjectRefs}).filter(function(t){return Object(pe.e)(e.props.forms,t.entity.valueType.family).map(function(e){return C.FormType.isAnyDictionary(e.entity.formType)}).getOrElse(function(){return!1})}).map(function(e,t){return p.createElement(B.a,{key:t,value:e.id.value},p.createElement(q.a,{primary:e.entity.caption}))}))),u&&p.createElement(U.a,{fullWidth:!0},p.createElement(P.a,null,this.props.i18n.t("Поле порядкого номера в swimlane")),p.createElement(H.a,{fullWidth:!0,value:d.value,onChange:d.onChange},p.createElement(B.a,{value:me.a},p.createElement(q.a,{primary:this.props.i18n.t("Не выбрано")})),Object(de.e)(this.props.formFields,u.entity.valueType.family).getOrElse(function(){return[]}).map(function(e,t){return p.createElement(B.a,{key:t,value:e.id.value},p.createElement(q.a,{primary:e.entity.caption}))}))),o.value&&p.createElement(V.a,{label:this.props.i18n.t("Отображать задачи без категории группой внизу"),control:p.createElement(S.a,{checked:s.value,onChange:s.onChange})})))}},{key:"render",value:function(){return p.createElement("form",null,p.createElement(x.a,{value:0,indicatorColor:"primary",textColor:"primary",fullWidth:!0},p.createElement(L.a,{label:this.props.i18n.t("Основное")})),p.createElement(J.a,null,this.renderTabContents()))}}]),t}(p.Component);Ie=he([m.autobind,ge("design:paramtypes",[Object])],Ie);var ye=Object(h.connect)(function(e){return{i18n:e.i18n,formFields:e.fields,blocks:e.blocks,forms:e.forms}},function(e){return{}},function(e,t,n){return Object.assign({},e,n)},{withRef:!0})(Object(j.reduxForm)({form:"DataListConfigKanbanForm",fields:["name","dataListConfigId","dataListConfigType","columnFieldId","blockId","orderFieldId","columnOrderFieldId","swimlaneFieldId","showUncategorized","swimlaneOrderFieldId","hiddenColumns"]})(Object(ce.a)(Ie))),ve=n(1461),be=n(176),Ce=n(71),Oe=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":f()(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},Ee=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":f()(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Fe=function(e){function t(e){return a()(this,t),s()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return c()(t,e),l()(t,[{key:"onOrderFieldIdChange",value:function(e){this.props.fields.orderFieldId.onChange(e.target.value)}},{key:"onBlockIdChange",value:function(e){this.props.fields.blockId.onChange(e.target.value)}},{key:"renderTabContents",value:function(){var e=this,t=this.props.fields,n=t.name,i=t.blockId,a=t.orderFieldId,r=t.swimlaneFieldId,l=t.swimlaneOrderFieldId,o=t.taskName,s=t.completedFieldId,d=C.Id.createId(r.value).flatMap(function(t){return Object(de.c)(e.props.formFields,t)}).getOrNull();return p.createElement(p.Fragment,null,p.createElement("h4",null,this.props.i18n.t("Основное")),p.createElement(N.a,Object.assign({},n,{fullWidth:!0,label:this.props.i18n.t("Название"),autoFocus:!0})),p.createElement(U.a,{fullWidth:!0},p.createElement(P.a,null,this.props.i18n.t("Блок отображения карточки")),p.createElement(H.a,{fullWidth:!0,value:i.value,onChange:this.onBlockIdChange},Object(G.c)(this.props.blocks,this.props.formId).getOrElse(function(){return[]}).map(function(e){return p.createElement(B.a,{key:e.id.toString(),value:e.id.toString()},p.createElement(q.a,{primary:e.name}))}))),p.createElement(U.a,{fullWidth:!0},p.createElement(P.a,null,this.props.i18n.t("Поле имени задачи")),p.createElement(H.a,{fullWidth:!0,value:o.value,onChange:o.onChange},Object(de.e)(this.props.formFields,this.props.formId).getOrElse(function(){return[]}).filter(function(e){return e.entity.valueType instanceof C.ValueTypeStr}).map(function(e,t){return p.createElement(B.a,{key:t,value:e.id.value},p.createElement(q.a,{primary:e.entity.caption}))}))),p.createElement(U.a,{fullWidth:!0},p.createElement(P.a,null,this.props.i18n.t("Поле порядка задачи")),p.createElement(H.a,{fullWidth:!0,value:a.value,onChange:this.onOrderFieldIdChange},Object(de.e)(this.props.formFields,this.props.formId).getOrElse(function(){return[]}).filter(function(e){return e.entity.valueType instanceof C.ValueTypeNumber}).map(function(e,t){return p.createElement(B.a,{key:t,value:e.id.value},p.createElement(q.a,{primary:e.entity.caption}))}))),p.createElement(U.a,{fullWidth:!0},p.createElement(P.a,null,this.props.i18n.t("Поле статуса задачи")),p.createElement(H.a,{fullWidth:!0,value:s.value,onChange:s.onChange},Object(de.e)(this.props.formFields,this.props.formId).getOrElse(function(){return[]}).filter(function(e){return e.entity.valueType instanceof C.ValueTypeBool}).map(function(e,t){return p.createElement(B.a,{key:t,value:e.id.value},p.createElement(q.a,{primary:e.entity.caption}))}))),p.createElement(U.a,{fullWidth:!0},p.createElement(P.a,null,this.props.i18n.t("Поле swimlane")),p.createElement(H.a,{fullWidth:!0,value:r.value,onChange:r.onChange},p.createElement(B.a,{value:me.a},p.createElement(q.a,{primary:this.props.i18n.t("Не выбрано")})),Object(de.e)(this.props.formFields,this.props.formId).getOrElse(function(){return[]}).filter(function(e){return e.entity.valueType instanceof C.ValueTypeObjectRefs}).filter(function(t){return Object(pe.e)(e.props.forms,t.entity.valueType.family).map(function(e){return C.FormType.isAnyDictionary(e.entity.formType)}).getOrElse(function(){return!1})}).map(function(e,t){return p.createElement(B.a,{key:t,value:e.id.value},p.createElement(q.a,{primary:e.entity.caption}))}))),d&&p.createElement(U.a,{fullWidth:!0},p.createElement(P.a,null,this.props.i18n.t("Поле порядкого номера в swimlane")),p.createElement(H.a,{fullWidth:!0,value:l.value,onChange:l.onChange},p.createElement(B.a,{value:me.a},p.createElement(q.a,{primary:this.props.i18n.t("Не выбрано")})),Object(de.e)(this.props.formFields,d.entity.valueType.family).getOrElse(function(){return[]}).map(function(e,t){return p.createElement(B.a,{key:t,value:e.id.value},p.createElement(q.a,{primary:e.entity.caption}))}))))}},{key:"render",value:function(){return p.createElement("form",null,p.createElement(x.a,{value:0,indicatorColor:"primary",textColor:"primary",fullWidth:!0},p.createElement(L.a,{label:this.props.i18n.t("Основное")})),p.createElement(J.a,null,this.renderTabContents()))}}]),t}(p.Component);Fe=Oe([m.autobind,Ee("design:paramtypes",[Object])],Fe);var ke=Object(h.connect)(function(e){return{i18n:e.i18n,formFields:e.fields,blocks:e.blocks,forms:e.forms}},function(e){return{}},function(e,t,n){return Object.assign({},e,n)},{withRef:!0})(Object(j.reduxForm)({form:"DataListConfigTasksForm",fields:["name","dataListConfigId","dataListConfigType","columnFieldId","blockId","orderFieldId","columnOrderFieldId","swimlaneFieldId","showUncategorized","swimlaneOrderFieldId","hiddenColumns","taskName","completedFieldId"]})(Object(ce.a)(Fe))),we=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":f()(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},je=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":f()(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Te=function(e){function t(e){return a()(this,t),s()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,Object.assign(k.a.screenInitialState(),{formListInstance:new O.None,formKanbanInstance:new O.None})))}return c()(t,e),l()(t,[{key:"renderNavigation",value:function(){return p.createElement(E.a,null)}},{key:"dataListConfigListFormRefHandler",value:function(e){this.setState(g(this.state,{formListInstance:{$set:Object(O.toOption)(e).flatMap(function(e){return Object(O.toOption)(e.wrappedInstance)})}}))}},{key:"dataListConfigKanbanFormRefHandler",value:function(e){this.setState(g(this.state,{formKanbanInstance:{$set:Object(O.toOption)(e).flatMap(function(e){return Object(O.toOption)(e.wrappedInstance)})}}))}},{key:"getDataListConfig",value:function(e){switch(e.dataListConfigType){case C.DataListConfigKanban.$Type.value:return new C.DataListConfigKanban(e.name,new C.Id(e.columnFieldId),new C.Id(e.blockId),new C.DataListConfigId(e.dataListConfigId),new C.Id(e.orderFieldId),new C.Id(e.columnOrderFieldId),Object(O.toOption)(e.swimlaneFieldId).filter(function(e){return e!==me.a}).flatMap(function(e){return C.Id.createId(e)}),!!e.swimlaneFieldId&&e.showUncategorized,Object(O.toOption)(e.swimlaneOrderFieldId).filter(function(e){return e!==me.a}).flatMap(function(e){return C.Id.createId(e)}),""===e.hiddenColumns?[]:e.hiddenColumns);case C.DataListConfigTable.$Type.value:var t=[];return e.FindFace&&t.push(new C.TableOperationFindFace),e.MultiQuickSearch&&t.push(new C.TableOperationMultiQuickSearch),e.merging&&t.push(new C.TableOperationMerging(C.Id.createId(e.mergingBlockId).getOrElse(function(){throw"wrong block id"}))),new C.DataListConfigTable(e.name,new C.DataListConfigId(e.dataListConfigId),e.fastSearchFieldIds,e.columnFieldIds,e.filterableFieldIds,t,e.decorations);case C.DataListConfigTasks.$Type.value:return new C.DataListConfigTasks(new C.DataListConfigId(e.dataListConfigId),e.name,new C.Id(e.blockId),new C.Id(e.taskName),new C.Id(e.orderFieldId),new C.Id(e.completedFieldId),Object(O.toOption)(e.swimlaneFieldId).filter(function(e){return e!==me.a}).flatMap(function(e){return C.Id.createId(e)}),Object(O.toOption)(e.swimlaneOrderFieldId).filter(function(e){return e!==me.a}).flatMap(function(e){return C.Id.createId(e)}));default:throw"Unknown form list config type"}}},{key:"onSaveListClick",value:function(){this.state.formListInstance.map(function(e){return e.submit()})}},{key:"onSaveKanbanClick",value:function(){this.state.formKanbanInstance.map(function(e){return e.submit()})}},{key:"onSave",value:function(e){var t=this;return new Promise(function(n,i){t.props.form.data.map(function(i){Object(be.k)(i.id,g(i.entity.dataListView.configs,{$apply:function(n){return n.map(function(n){return n.id.id===t.props.params.listConfigId?t.getDataListConfig(e):n})}})).then(function(e){t.props.dispatch(Object(be.i)(i.id)),t.props.dispatch(Object(be.e)()),n(e),t.handleDialogClose(!1),t.props.dispatch(Object(Ce.h)(t.props.i18n.t("Сохранение успешно завершено")))}).catch(function(){t.props.dispatch(Object(Ce.h)(t.props.i18n.t("Сохранение завершилось ошибкой")))})}).getOrElse(function(){return i()})})}},{key:"onGoBackRequested",value:function(){this.props.dispatch(Object(w.W)(new C.Id(this.props.params.eventLineId),new C.Id(this.props.params.formTypeId),new C.Id(this.props.params.formId)))}},{key:"getListInitialValues",value:function(e){switch(e.tpe.value){case C.DataListConfigTable.$Type.value:var t=e,n=t.operations.map(function(e){return e.tpe.value});return Object.assign({},t,{dataListConfigType:e.tpe.value,dataListConfigId:e.id.id,FindFace:-1!==n.indexOf(C.TableOperationFindFace.$Type.value),MultiQuickSearch:-1!==n.indexOf(C.TableOperationMultiQuickSearch.$Type.value),merging:-1!==n.indexOf(C.TableOperationMerging.$Type.value),mergingBlockId:Object(O.headOption)(t.operations.filter(function(e){return e.tpe.value===C.TableOperationMerging.$Type.value})).map(function(e){return e.block.value}).getOrUndefined()});case C.DataListConfigKanban.$Type.value:var i=e;return Object.assign({},i,{columnFieldId:i.columnFieldId?i.columnFieldId.value:"",orderFieldId:i.orderFieldId?i.orderFieldId.value:"",blockId:i.blockId?i.blockId.value:"",dataListConfigType:e.tpe.value,dataListConfigId:e.id.id,columnOrderFieldId:i.columnOrderFieldId?i.columnOrderFieldId.value:"",swimlaneFieldId:i.swimlaneFieldId.map(function(e){return e.value}).getOrElse(function(){return me.a}),showUncategorized:i.showUncategorized,swimlaneOrderFieldId:i.swimlaneOrderFieldId.map(function(e){return e.value}).getOrElse(function(){return me.a}),hiddenColumns:i.hiddenColumns});case C.DataListConfigTasks.$Type.value:var a=e;return Object.assign({},a,{orderFieldId:a.orderFieldId?a.orderFieldId.value:"",blockId:a.blockId?a.blockId.value:"",taskName:a.taskName?a.taskName.value:"",dataListConfigType:e.tpe.value,dataListConfigId:e.id.id,completedFieldId:a.completedFieldId?a.completedFieldId.value:"",swimlaneFieldId:a.swimlaneFieldId.map(function(e){return e.value}).getOrElse(function(){return me.a}),swimlaneOrderFieldId:a.swimlaneOrderFieldId.map(function(e){return e.value}).getOrElse(function(){return me.a})})}}},{key:"getForm",value:function(e){switch(e.tpe.value){case C.DataListConfigTable.$Type.value:return p.createElement(ae,{ref:this.dataListConfigListFormRefHandler,initialValues:this.getListInitialValues(e),formId:C.Id.createId(this.props.params.formId).getOrElse(function(){throw"wrong form id"}),onSubmit:this.onSave});case C.DataListConfigKanban.$Type.value:return p.createElement(ye,{ref:this.dataListConfigListFormRefHandler,initialValues:this.getListInitialValues(e),formId:C.Id.createId(this.props.params.formId).getOrElse(function(){throw"wrong form id"}),onSubmit:this.onSave});case C.DataListConfigTasks.$Type.value:return p.createElement(ke,{ref:this.dataListConfigListFormRefHandler,initialValues:this.getListInitialValues(e),formId:C.Id.createId(this.props.params.formId).getOrElse(function(){throw"wrong form id"}),onSubmit:this.onSave})}}},{key:"render",value:function(){var e=this;return this.renderScreenBody({className:""},p.createElement("div",{style:{display:"flex",flexDirection:"column",minHeight:0}},p.createElement(F.a,{title:this.props.i18n.t("Настройки списка"),onGoBackRequested:this.onGoBackRequested,rightButtonGroup:[p.createElement(b.a,{variant:"raised",style:{margin:"0px 15px"},onClick:this.onSaveListClick,color:"primary"},this.props.i18n.t("Сохранить"))]}),p.createElement(y.a,{style:{padding:"0 15px 15px 15px",overflowY:"auto"}},Object(O.toOption)(this.props.form.data.map(function(e){return e.entity.dataListView.configs}).getOrElse(function(){return[]}).find(function(t){return t.id.id===e.props.params.listConfigId})).map(function(t){return e.getForm(t)}).getOrElse(function(){return p.createElement("div",null)}))))}}]),t}(k.a);Te=we([m.autobind,je("design:paramtypes",[Object])],Te);t.default=Object(h.connect)(function(e){return{form:e.currentForm,forms:e.forms,i18n:e.i18n}})(Object(ve.a)(Object(Z.a)(function(e){e.isTokenChecked&&(e.forms.fetching||e.dispatch(Object(be.h)(new C.Id(e.params.formId))))},function(){},function(e,t){!e.forms.fetching&&t.forms.fetching&&e.dispatch(Object(be.h)(new C.Id(e.params.formId))),e.params.formId!==t.params.formId&&Object(be.h)(new C.Id(e.params.formId)),e.params.formId===t.params.formId&&e.isTokenChecked&&!t.isTokenChecked&&e.dispatch(Object(be.h)(new C.Id(e.params.formId)))})(Te)))}}]);