(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1147:function(module,exports,__webpack_require__){__webpack_require__(93);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _templateObject,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__(124)),_native=(_interopRequireDefault(__webpack_require__(0)),_interopRequireDefault(__webpack_require__(128))),_jsxRuntime=__webpack_require__(127),WingBlank=function WingBlank(_ref){var children=_ref.children;return(0,_jsxRuntime.jsx)(StyledWingBlank,{children:children})},StyledWingBlank=_native.default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n  padding: 0 15px;\n"]))),_default=WingBlank;exports.default=_default;try{WingBlank.displayName="WingBlank",WingBlank.__docgenInfo={description:"",displayName:"WingBlank",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Common/WingBlank/index.tsx#WingBlank"]={docgenInfo:WingBlank.__docgenInfo,name:"WingBlank",path:"components/Common/WingBlank/index.tsx#WingBlank"})}catch(__react_docgen_typescript_loader_error){}},1148:function(module,exports,__webpack_require__){__webpack_require__(93),__webpack_require__(15);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Stop=exports.Play=void 0;var _templateObject,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__(124)),_Record=(_interopRequireDefault(__webpack_require__(0)),__webpack_require__(1149)),_native=_interopRequireDefault(__webpack_require__(128)),_jsxRuntime=__webpack_require__(127),_default={parameters:{notes:"녹음 버튼"},title:"Common/Record",component:_Record.OurRecordButton,decorators:[function(story){return(0,_jsxRuntime.jsx)(CenterContainer,{children:story()})}]};exports.default=_default;var Play=function Play(args){return(0,_jsxRuntime.jsx)(_Record.OurRecordButton,Object.assign({},args))};exports.Play=Play,Play.args={state:"play"};var Stop=function Stop(args){return(0,_jsxRuntime.jsx)(_Record.OurRecordButton,Object.assign({},args))};exports.Stop=Stop,Stop.args={state:"stop"};var CenterContainer=_native.default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"])));Play.parameters=Object.assign({storySource:{source:"args => (\n  <OurRecordButton {...args} />\n)"}},Play.parameters),Stop.parameters=Object.assign({storySource:{source:"args => (\n  <OurRecordButton {...args} />\n)"}},Stop.parameters)},1149:function(module,exports,__webpack_require__){__webpack_require__(93),__webpack_require__(15);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:!0}),exports.OurRecordButton=void 0;var _templateObject,_templateObject2,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__(124)),_View=_interopRequireDefault(__webpack_require__(36)),_native=(_interopRequireDefault(__webpack_require__(0)),_interopRequireDefault(__webpack_require__(128))),_jsxRuntime=__webpack_require__(127),OurRecordButton=function OurRecordButton(props){return(0,_jsxRuntime.jsx)(_View.default,{children:(0,_jsxRuntime.jsx)(StyledButton,Object.assign({},props,{children:(0,_jsxRuntime.jsx)(StyledIcon,{state:props.state})}))})};exports.OurRecordButton=OurRecordButton;var StyledButton=_native.default.Pressable(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 100px;\n  background-color: #222;\n  border-radius: 50px;\n"]))),StyledIcon=_native.default.View(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n  width: 30px;\n  height: 30px;\n  background-color: ",";\n  border-radius: ","px;\n"])),(function(props){return"play"===props.state?"#ff0000":"#fff"}),(function(props){return"play"===props.state?"50":"0"}));try{OurRecordButton.displayName="OurRecordButton",OurRecordButton.__docgenInfo={description:"",displayName:"OurRecordButton",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"enum",value:[{value:'"stop"'},{value:'"play"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Common/Record/Record.tsx#OurRecordButton"]={docgenInfo:OurRecordButton.__docgenInfo,name:"OurRecordButton",path:"components/Common/Record/Record.tsx#OurRecordButton"})}catch(__react_docgen_typescript_loader_error){}},1150:function(module,exports,__webpack_require__){__webpack_require__(93),__webpack_require__(201),__webpack_require__(8),__webpack_require__(12),__webpack_require__(11),__webpack_require__(13),__webpack_require__(352),__webpack_require__(15);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Text=void 0;var _templateObject,_templateObject2,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__(124)),_Text=(_interopRequireDefault(__webpack_require__(0)),__webpack_require__(1151)),_native=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__(128)),_View=_interopRequireDefault(__webpack_require__(36)),_jsxRuntime=__webpack_require__(127);function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var _default={parameters:{notes:"본문"},title:"Typography/Text",component:_Text.OurText,decorators:[function(story){return(0,_jsxRuntime.jsx)(CenterContainer,{children:story()})}]};exports.default=_default;var Text=function Text(args){return(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:(0,_jsxRuntime.jsxs)(_View.default,{style:(0,_native.css)(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n        align-items: center;\n      "]))),children:[(0,_jsxRuntime.jsx)(_Text.OurText,Object.assign({},args,{children:"Our Record Design"})),(0,_jsxRuntime.jsx)(_Text.OurText,Object.assign({},args,{type:"secondary",children:"Our Record Design"})),(0,_jsxRuntime.jsx)(_Text.OurText,Object.assign({},args,{type:"success",children:"Our Record Design"})),(0,_jsxRuntime.jsx)(_Text.OurText,Object.assign({},args,{type:"danger",children:"Our Record Design"}))]})})};exports.Text=Text,Text.args={};var CenterContainer=_native.default.View(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"])));Text.parameters=Object.assign({storySource:{source:'args => (\n  <>\n    <View\n      style={css`\n        align-items: center;\n      `}>\n      <OurText {...args}>Our Record Design</OurText>\n      <OurText {...args} type="secondary">\n        Our Record Design\n      </OurText>\n      <OurText {...args} type="success">\n        Our Record Design\n      </OurText>\n      <OurText {...args} type="danger">\n        Our Record Design\n      </OurText>\n    </View>\n  </>\n)'}},Text.parameters)},1151:function(module,exports,__webpack_require__){__webpack_require__(93);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:!0}),exports.OurText=void 0;var _templateObject,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__(124)),_native=(_interopRequireDefault(__webpack_require__(0)),_interopRequireDefault(__webpack_require__(128))),_jsxRuntime=__webpack_require__(127),OurText=function OurText(_ref){var children=_ref.children,_ref$type=_ref.type,type=void 0===_ref$type?"default":_ref$type;return(0,_jsxRuntime.jsx)(StyledText,{type:type,children:children})};exports.OurText=OurText;var colorType={default:"rgba(0, 0, 0, 0.88)",secondary:"rgba(0,0,0,.45)",success:"#52c41a",danger:"#ff4d4f"},StyledText=_native.default.Text(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n  font-size: 14px;\n  color: ",";\n  word-break: break-word;\n  line-height: 22px;\n"])),(function(props){return colorType[props.type]}));try{OurText.displayName="OurText",OurText.__docgenInfo={description:"",displayName:"OurText",props:{type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"danger"'},{value:'"secondary"'},{value:'"success"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Common/Typography/Text.tsx#OurText"]={docgenInfo:OurText.__docgenInfo,name:"OurText",path:"components/Common/Typography/Text.tsx#OurText"})}catch(__react_docgen_typescript_loader_error){}},1152:function(module,exports,__webpack_require__){__webpack_require__(93),__webpack_require__(201),__webpack_require__(8),__webpack_require__(12),__webpack_require__(11),__webpack_require__(13),__webpack_require__(352),__webpack_require__(15);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Title=void 0;var _templateObject,_templateObject2,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__(124)),_Title=(_interopRequireDefault(__webpack_require__(0)),__webpack_require__(1153)),_native=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__(128)),_View=_interopRequireDefault(__webpack_require__(36)),_jsxRuntime=__webpack_require__(127);function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var _default={parameters:{notes:"제목"},title:"Typography/Title",component:_Title.OurTitle,decorators:[function(story){return(0,_jsxRuntime.jsx)(CenterContainer,{children:story()})}]};exports.default=_default;var Title=function Title(args){return(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:(0,_jsxRuntime.jsxs)(_View.default,{style:(0,_native.css)(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n        align-items: center;\n      "]))),children:[(0,_jsxRuntime.jsx)(_Title.OurTitle,Object.assign({},args,{children:"H1 title"})),(0,_jsxRuntime.jsx)(_Title.OurTitle,Object.assign({},args,{level:2,children:"H2 title"})),(0,_jsxRuntime.jsx)(_Title.OurTitle,Object.assign({},args,{level:3,children:"H3 title"})),(0,_jsxRuntime.jsx)(_Title.OurTitle,Object.assign({},args,{level:4,children:"H4 title"})),(0,_jsxRuntime.jsx)(_Title.OurTitle,Object.assign({},args,{level:5,children:"H5 title"}))]})})};exports.Title=Title,Title.args={};var CenterContainer=_native.default.View(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"])));Title.parameters=Object.assign({storySource:{source:"args => (\n  <>\n    <View\n      style={css`\n        align-items: center;\n      `}>\n      <OurTitle {...args}>H1 title</OurTitle>\n      <OurTitle {...args} level={2}>\n        H2 title\n      </OurTitle>\n      <OurTitle {...args} level={3}>\n        H3 title\n      </OurTitle>\n      <OurTitle {...args} level={4}>\n        H4 title\n      </OurTitle>\n      <OurTitle {...args} level={5}>\n        H5 title\n      </OurTitle>\n    </View>\n  </>\n)"}},Title.parameters)},1153:function(module,exports,__webpack_require__){__webpack_require__(93);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:!0}),exports.OurTitle=void 0;var _templateObject,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__(124)),_native=(_interopRequireDefault(__webpack_require__(0)),_interopRequireDefault(__webpack_require__(128))),_jsxRuntime=__webpack_require__(127),OurTitle=function OurTitle(_ref){var children=_ref.children,_ref$level=_ref.level,level=void 0===_ref$level?1:_ref$level;return(0,_jsxRuntime.jsx)(StyledText,{level:level,children:children})};exports.OurTitle=OurTitle;var levelSize={1:"38",2:"30",3:"24",4:"20",5:"16"},StyledText=_native.default.Text(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n  font-size: ","px;\n"])),(function(props){return levelSize[props.level||1]}));try{OurTitle.displayName="OurTitle",OurTitle.__docgenInfo={description:"",displayName:"OurTitle",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Common/Typography/Title.tsx#OurTitle"]={docgenInfo:OurTitle.__docgenInfo,name:"OurTitle",path:"components/Common/Typography/Title.tsx#OurTitle"})}catch(__react_docgen_typescript_loader_error){}},601:function(module,exports,__webpack_require__){__webpack_require__(602),__webpack_require__(762),__webpack_require__(763),__webpack_require__(1154),__webpack_require__(1155),__webpack_require__(1160),__webpack_require__(1161),__webpack_require__(1159),__webpack_require__(1156),__webpack_require__(1162),__webpack_require__(1157),__webpack_require__(1158),__webpack_require__(973),module.exports=__webpack_require__(978)},650:function(module,exports){},763:function(module,exports,__webpack_require__){__webpack_require__(432)},973:function(module,exports,__webpack_require__){__webpack_require__(201),__webpack_require__(8),__webpack_require__(12),__webpack_require__(11),__webpack_require__(13),__webpack_require__(93),__webpack_require__(352),__webpack_require__(26),__webpack_require__(6),__webpack_require__(65),__webpack_require__(974),__webpack_require__(61),__webpack_require__(975),__webpack_require__(976);var _clientApi=__webpack_require__(73),_clientLogger=__webpack_require__(5),config=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__(977));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(config).forEach((function(key){var value=config[key];switch(key){case"args":case"argTypes":return _clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)}));case"parameters":return(0,_clientApi.addParameters)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,_clientApi.addArgsEnhancer)(enhancer)}));case"render":return(0,_clientApi.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,_clientApi.addParameters)(v,!1);default:return console.log(key+" was not supported :( !")}}))},977:function(module,exports,__webpack_require__){__webpack_require__(93),Object.defineProperty(exports,"__esModule",{value:!0}),exports.parameters=void 0;exports.parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},978:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(432).configure)([__webpack_require__(979)],module,!1)}).call(this,__webpack_require__(246)(module))},979:function(module,exports,__webpack_require__){var map={"./Common/Button/Index.stories.tsx":980,"./Common/Record/Record.stories.tsx":1148,"./Common/Typography/Text.stories.tsx":1150,"./Common/Typography/Title.stories.tsx":1152};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=979},980:function(module,exports,__webpack_require__){__webpack_require__(93),__webpack_require__(15);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Loading=exports.Default=void 0;var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__(124)),_addonActions=(_interopRequireDefault(__webpack_require__(0)),__webpack_require__(170)),_=__webpack_require__(981),_WingBlank=_interopRequireDefault(__webpack_require__(1147)),_View=_interopRequireDefault(__webpack_require__(36)),_native=__webpack_require__(128),_jsxRuntime=__webpack_require__(127),_default={parameters:{notes:"버튼 컴포넌트 모음"},title:"Common/Button",component:_.OurButton,decorators:[function(story){return(0,_jsxRuntime.jsx)(_WingBlank.default,{children:story()})}]};exports.default=_default;var Default=function Default(args){return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_View.default,{style:(0,_native.css)(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n        margin: 0 0 10px;\n      "]))),children:(0,_jsxRuntime.jsx)(_.OurButton,Object.assign({},args,{onPress:(0,_addonActions.action)("clicked")}))}),(0,_jsxRuntime.jsxs)(_View.default,{style:(0,_native.css)(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n        margin: 0 0 10px;\n        flex-direction: row;\n        justify-content: space-between;\n      "]))),children:[(0,_jsxRuntime.jsx)(_.OurButton,Object.assign({},args,{onPress:(0,_addonActions.action)("clicked"),style:(0,_native.css)(_templateObject3||(_templateObject3=(0,_taggedTemplateLiteralLoose2.default)(["\n          flex: 1;\n          margin: 0 10px 0 0;\n        "])))})),(0,_jsxRuntime.jsx)(_.OurButton,Object.assign({},args,{onPress:(0,_addonActions.action)("clicked"),style:(0,_native.css)(_templateObject4||(_templateObject4=(0,_taggedTemplateLiteralLoose2.default)(["\n          flex: 1;\n          margin: 0 10px 0 0;\n        "])))})),(0,_jsxRuntime.jsx)(_.OurButton,Object.assign({},args,{onPress:(0,_addonActions.action)("clicked"),style:(0,_native.css)(_templateObject5||(_templateObject5=(0,_taggedTemplateLiteralLoose2.default)(["\n          flex: 1;\n        "])))}))]}),(0,_jsxRuntime.jsxs)(_View.default,{style:(0,_native.css)(_templateObject6||(_templateObject6=(0,_taggedTemplateLiteralLoose2.default)(["\n        margin: 0 0 10px;\n        flex-direction: row;\n        align-items: flex-start;\n      "]))),children:[(0,_jsxRuntime.jsx)(_.OurButton,{onPress:(0,_addonActions.action)("clicked"),text:"default",style:(0,_native.css)(_templateObject7||(_templateObject7=(0,_taggedTemplateLiteralLoose2.default)(["\n          margin: 0 10px 0 0;\n        "])))}),(0,_jsxRuntime.jsx)(_.OurButton,{onPress:(0,_addonActions.action)("clicked"),text:"primary",color:"primary",style:(0,_native.css)(_templateObject8||(_templateObject8=(0,_taggedTemplateLiteralLoose2.default)(["\n          margin: 0 10px 0 0;\n        "])))}),(0,_jsxRuntime.jsx)(_.OurButton,{onPress:(0,_addonActions.action)("clicked"),text:"danger",color:"danger"})]}),(0,_jsxRuntime.jsxs)(_View.default,{style:(0,_native.css)(_templateObject9||(_templateObject9=(0,_taggedTemplateLiteralLoose2.default)(["\n        margin: 0 0 10px;\n        flex-direction: row;\n        align-items: flex-start;\n      "]))),children:[(0,_jsxRuntime.jsx)(_.OurButton,{onPress:(0,_addonActions.action)("clicked"),text:"disabled",style:(0,_native.css)(_templateObject10||(_templateObject10=(0,_taggedTemplateLiteralLoose2.default)(["\n          margin: 0 10px 0 0;\n        "]))),disabled:!0}),(0,_jsxRuntime.jsx)(_.OurButton,{onPress:(0,_addonActions.action)("clicked"),text:"disabled",color:"primary",disabled:!0})]}),(0,_jsxRuntime.jsxs)(_View.default,{style:(0,_native.css)(_templateObject11||(_templateObject11=(0,_taggedTemplateLiteralLoose2.default)(["\n        margin: 0 0 10px;\n        flex-direction: row;\n        align-items: center;\n      "]))),children:[(0,_jsxRuntime.jsx)(_.OurButton,{onPress:(0,_addonActions.action)("clicked"),text:"mini",size:"mini",color:"primary",style:(0,_native.css)(_templateObject12||(_templateObject12=(0,_taggedTemplateLiteralLoose2.default)(["\n          margin: 0 10px 0 0;\n        "])))}),(0,_jsxRuntime.jsx)(_.OurButton,{onPress:(0,_addonActions.action)("clicked"),text:"small",size:"small",color:"primary",style:(0,_native.css)(_templateObject13||(_templateObject13=(0,_taggedTemplateLiteralLoose2.default)(["\n          margin: 0 10px 0 0;\n        "])))}),(0,_jsxRuntime.jsx)(_.OurButton,{onPress:(0,_addonActions.action)("clicked"),text:"middle",size:"middle",color:"primary",style:(0,_native.css)(_templateObject14||(_templateObject14=(0,_taggedTemplateLiteralLoose2.default)(["\n          margin: 0 10px 0 0;\n        "])))}),(0,_jsxRuntime.jsx)(_.OurButton,{onPress:(0,_addonActions.action)("clicked"),text:"large",size:"large",color:"primary",style:(0,_native.css)(_templateObject15||(_templateObject15=(0,_taggedTemplateLiteralLoose2.default)(["\n          margin: 0 10px 0 0;\n        "])))})]})]})};exports.Default=Default,Default.args={text:"기본 버튼"};var Loading=function Loading(args){return(0,_jsxRuntime.jsx)(_.OurButton,Object.assign({},args,{onPress:(0,_addonActions.action)("clicked")}))};exports.Loading=Loading,Loading.args={text:"로딩 버튼",loading:!0},Default.parameters=Object.assign({storySource:{source:'args => (\n  <>\n    <View\n      style={css`\n        margin: 0 0 10px;\n      `}>\n      <OurButton {...args} onPress={action(\'clicked\')} />\n    </View>\n    <View\n      style={css`\n        margin: 0 0 10px;\n        flex-direction: row;\n        justify-content: space-between;\n      `}>\n      <OurButton\n        {...args}\n        onPress={action(\'clicked\')}\n        style={css`\n          flex: 1;\n          margin: 0 10px 0 0;\n        `}\n      />\n      <OurButton\n        {...args}\n        onPress={action(\'clicked\')}\n        style={css`\n          flex: 1;\n          margin: 0 10px 0 0;\n        `}\n      />\n      <OurButton\n        {...args}\n        onPress={action(\'clicked\')}\n        style={css`\n          flex: 1;\n        `}\n      />\n    </View>\n    <View\n      style={css`\n        margin: 0 0 10px;\n        flex-direction: row;\n        align-items: flex-start;\n      `}>\n      <OurButton\n        onPress={action(\'clicked\')}\n        text="default"\n        style={css`\n          margin: 0 10px 0 0;\n        `}\n      />\n      <OurButton\n        onPress={action(\'clicked\')}\n        text="primary"\n        color="primary"\n        style={css`\n          margin: 0 10px 0 0;\n        `}\n      />\n      <OurButton onPress={action(\'clicked\')} text="danger" color="danger" />\n    </View>\n    <View\n      style={css`\n        margin: 0 0 10px;\n        flex-direction: row;\n        align-items: flex-start;\n      `}>\n      <OurButton\n        onPress={action(\'clicked\')}\n        text="disabled"\n        style={css`\n          margin: 0 10px 0 0;\n        `}\n        disabled\n      />\n      <OurButton\n        onPress={action(\'clicked\')}\n        text="disabled"\n        color="primary"\n        disabled\n      />\n    </View>\n    <View\n      style={css`\n        margin: 0 0 10px;\n        flex-direction: row;\n        align-items: center;\n      `}>\n      <OurButton\n        onPress={action(\'clicked\')}\n        text="mini"\n        size="mini"\n        color="primary"\n        style={css`\n          margin: 0 10px 0 0;\n        `}\n      />\n      <OurButton\n        onPress={action(\'clicked\')}\n        text="small"\n        size="small"\n        color="primary"\n        style={css`\n          margin: 0 10px 0 0;\n        `}\n      />\n      <OurButton\n        onPress={action(\'clicked\')}\n        text="middle"\n        size="middle"\n        color="primary"\n        style={css`\n          margin: 0 10px 0 0;\n        `}\n      />\n      <OurButton\n        onPress={action(\'clicked\')}\n        text="large"\n        size="large"\n        color="primary"\n        style={css`\n          margin: 0 10px 0 0;\n        `}\n      />\n    </View>\n  </>\n)'}},Default.parameters),Loading.parameters=Object.assign({storySource:{source:"args => (\n  <OurButton {...args} onPress={action('clicked')} />\n)"}},Loading.parameters)},981:function(module,exports,__webpack_require__){__webpack_require__(93);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:!0}),exports.OurButton=void 0;var _templateObject,_templateObject2,_templateObject3,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__(124)),_native=(_interopRequireDefault(__webpack_require__(0)),_interopRequireDefault(__webpack_require__(128))),_jsxRuntime=__webpack_require__(127),buttonBgColorType={default:"#fff",primary:"#000f9d",danger:"#ff3141"},buttonSizeType={mini:{gap:"3px",size:"13px"},small:{gap:"3px",size:"15px"},middle:{gap:"7px",size:"17px"},large:{gap:"11px",size:"18px"}},OurButton=function OurButton(_ref){var text=_ref.text,onPress=_ref.onPress,_ref$loading=_ref.loading,loading=void 0!==_ref$loading&&_ref$loading,style=_ref.style,_ref$color=_ref.color,color=void 0===_ref$color?"default":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?"middle":_ref$size,disabled=_ref.disabled;return(0,_jsxRuntime.jsxs)(StyledButton,{onPress:onPress,disabled:disabled,style:style,color:color,size:size,children:[loading&&(0,_jsxRuntime.jsx)(StyledLoading,{}),(0,_jsxRuntime.jsx)(StyledText,{color:color,size:size,children:text})]})};exports.OurButton=OurButton;var StyledButton=_native.default.TouchableOpacity(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n  flex-direction: row;\n  padding: "," 12px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  border-color: ",";\n  opacity: ",";\n"])),(function(props){return buttonSizeType[props.size].gap}),(function(props){return buttonBgColorType[props.color]}),(function(props){return"default"===props.color?"#d9d9d9":buttonBgColorType[props.color]}),(function(props){return props.disabled?".3":1})),StyledLoading=_native.default.ActivityIndicator(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n  margin: 0 5px 0 0;\n"]))),StyledText=_native.default.Text(_templateObject3||(_templateObject3=(0,_taggedTemplateLiteralLoose2.default)(["\n  color: ",";\n  font-size: ",";\n"])),(function(props){return"default"===props.color?"rgba(0, 0, 0, 0.88)":"#fff"}),(function(props){return buttonSizeType[props.size].size}));try{OurButton.displayName="OurButton",OurButton.__docgenInfo={description:"",displayName:"OurButton",props:{onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"danger"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Common/Button/index.tsx#OurButton"]={docgenInfo:OurButton.__docgenInfo,name:"OurButton",path:"components/Common/Button/index.tsx#OurButton"})}catch(__react_docgen_typescript_loader_error){}}},[[601,2,3]]]);