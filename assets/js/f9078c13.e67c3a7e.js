"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2415],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(k,a(a({ref:t},u),{},{components:r})):n.createElement(k,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4839:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={id:"parallel-test-execution",slug:"guide/parallel-test-execution",title:"Parallel Test Execution",sidebar_label:"Parallel Test Execution"},s=void 0,c={unversionedId:"parallel-test-execution",id:"version-19.x/parallel-test-execution",isDocsHomePage:!1,title:"Parallel Test Execution",description:"Parallel Test Execution",source:"@site/versioned_docs/version-19.x/Guide.ParallelTestExecution.md",sourceDirName:".",slug:"/guide/parallel-test-execution",permalink:"/Detox/docs/guide/parallel-test-execution",editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Guide.ParallelTestExecution.md",tags:[],version:"19.x",frontMatter:{id:"parallel-test-execution",slug:"guide/parallel-test-execution",title:"Parallel Test Execution",sidebar_label:"Parallel Test Execution"},sidebar:"version-19.x/tutorialSidebar",previous:{title:"Mocha Setup Guide",permalink:"/Detox/docs/guide/mocha"},next:{title:"Third-Party Drivers",permalink:"/Detox/docs/guide/third-party-drivers"}},u=[{value:"Parallel Test Execution",id:"parallel-test-execution",children:[{value:"Device Creation",id:"device-creation",children:[],level:3},{value:"Lock File",id:"lock-file",children:[{value:"Persisting the Lock File",id:"persisting-the-lock-file",children:[],level:4}],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"parallel-test-execution"},"Parallel Test Execution"),(0,o.kt)("p",null,"Detox can leverage multi worker support of JS test runners (",(0,o.kt)("a",{parentName:"p",href:"http://jestjs.io/docs/en/cli#maxworkers-num"},"Jest"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/avajs/ava#process-isolation"},"AVA"),", etc.)."),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"detox test")," will run the test runner with one worker (it will pass ",(0,o.kt)("inlineCode",{parentName:"p"},"--maxWorkers=1")," to Jest CLI, Mocha is unaffected). Worker count can be controlled by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"--workers n")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"detox test"),", read more in ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/api/detox-cli#test"},(0,o.kt)("inlineCode",{parentName:"a"},"detox-cli")," section"),"."),(0,o.kt)("h3",{id:"device-creation"},"Device Creation"),(0,o.kt)("p",null,"While running with multiple workers, Detox might not have an available simulator for every worker.\nIf no simulator is available for that worker, the worker will create one with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"{name}-Detox"),"."),(0,o.kt)("h3",{id:"lock-file"},"Lock File"),(0,o.kt)("p",null,"Simulators/emulators run on a different process, outside of node, and require some sort of lock mechanism to make sure only one process controls a simulator in a given time. Therefore, Detox 7.4.0 introduced ",(0,o.kt)("inlineCode",{parentName:"p"},"device.registry.state.lock"),", a lock file controlled by Detox, that registers all in-use simulators."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Each worker is responsible for removing the device ID from the list in ",(0,o.kt)("inlineCode",{parentName:"p"},"device.registry.state.lock"),". Exiting a test runner abruptly (using ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2318+C"),") will not give the worker a chance to unregister the device from the lock file, resulting in an inconsistent state, which can result in creation of unnecessary new simulators."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"detox-cli")," makes sure ",(0,o.kt)("inlineCode",{parentName:"p"},"device.registry.state.lock")," is cleaned whenever it executes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you use Detox without ",(0,o.kt)("inlineCode",{parentName:"p"},"detox-cli")," make sure you delete or reset the lock file before running tests."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'echo "[]" > ~/Library/Detox/device.registry.state.lock\n'))))),(0,o.kt)("p",null,"The lock file location is determined by the OS, and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/detox/blob/master/detox/src/utils/appdatapath.js"},"defined here"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MacOS"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"~/Library/Detox/device.registry.state.lock")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Linux"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.local/share/Detox/device.registry.state.lock")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Windows"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%/data/Detox/device.registry.state.lock")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%/Application Data/Detox/device.registry.state.lock"))),(0,o.kt)("h4",{id:"persisting-the-lock-file"},"Persisting the Lock File"),(0,o.kt)("p",null,"By default, once all workers finish their test runs, Detox will delete the lock file. Under certain conditions, you may want to persist the lock file. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--keepLockFile")," flag to disable automatic deletion."))}d.isMDXComponent=!0}}]);