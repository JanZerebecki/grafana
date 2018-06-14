/*! grafana - v4.5.2 - 2018-06-14
 * Copyright (c) 2018 Torkel Ödegaard; Licensed Apache-2.0 */

define(["lodash","app/core/config","app/core/utils/datemath"],function(a,b,c){"use strict";function d(){var c=this;this.datasource={},this.$element={},this.$sanitize={},this.annotationsSrv={},this.timeSrv=new g,this.templateSrv=new i,this.datasourceSrv={getMetricSources:function(){},get:function(){return{then:function(a){a(c.datasource)}}}},this.providePhase=function(b){return module(function(d){d.value("datasourceSrv",c.datasourceSrv),d.value("annotationsSrv",c.annotationsSrv),d.value("timeSrv",c.timeSrv),d.value("templateSrv",c.templateSrv),d.value("$element",c.$element),d.value("$sanitize",c.$sanitize),a.each(b,function(a,b){d.value(b,a)})})},this.createPanelController=function(a){return inject(function(d,e,f,g,h){c.scope=e.$new(),c.$location=g,c.$browser=h,c.$q=f,c.panel={type:"test"},c.dashboard={meta:{}},e.appEvent=sinon.spy(),e.onAppEvent=sinon.spy(),e.colors=[];for(var i=0;i<50;i++)e.colors.push("#"+i);b.panels.test={info:{}},c.ctrl=d(a,{$scope:c.scope},{panel:c.panel,dashboard:c.dashboard,row:{}})})},this.createControllerPhase=function(a){return inject(function(b,d,e,g,h){c.scope=d.$new(),c.$location=g,c.$browser=h,c.scope.contextSrv={},c.scope.panel={},c.scope.row={panels:[]},c.scope.dashboard={meta:{}},c.scope.dashboardMeta={},c.scope.dashboardViewState=new f,c.scope.appEvent=sinon.spy(),c.scope.onAppEvent=sinon.spy(),d.colors=[];for(var i=0;i<50;i++)d.colors.push("#"+i);c.$q=e,c.scope.skipDataOnInit=!0,c.scope.skipAutoInit=!0,c.controller=b(a,{$scope:c.scope})})}}function e(){var b=this;b.templateSrv=new i,b.timeSrv=new g,b.datasourceSrv={},b.backendSrv={},b.$routeParams={},this.providePhase=function(c){return module(function(d){a.each(c,function(a){d.value(a,b[a])})})},this.createService=function(a){return inject(function(c,d,e,f,g){b.$q=c,b.$rootScope=d,b.$httpBackend=e,b.$location=g,b.$rootScope.onAppEvent=function(){},b.$rootScope.appEvent=function(){},b.service=f.get(a)})}}function f(){this.registerPanel=function(){}}function g(){this.init=sinon.spy(),this.time={from:"now-1h",to:"now"},this.timeRange=function(a){return a===!1?this.time:{from:c.parse(this.time.from,!1),to:c.parse(this.time.to,!0)}},this.replace=function(a){return a},this.setTime=function(a){this.time=a}}function h(){this.hasRole=function(){return!0}}function i(){this.variables=[],this.templateSettings={interpolate:/\[\[([\s\S]+?)\]\]/g},this.data={},this.replace=function(b){return a.template(b,this.templateSettings)(this.data)},this.init=function(){},this.getAdhocFilters=function(){return[]},this.fillVariableValuesForUrl=function(){},this.updateTemplateData=function(){},this.variableExists=function(){return!1},this.variableInitialized=function(){},this.highlightVariablesAsHtml=function(a){return a},this.setGrafanaVariable=function(a,b){this.data[a]=b}}return{ControllerTestContext:d,TimeSrvStub:g,ContextSrvStub:h,ServiceTestContext:e}});