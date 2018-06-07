SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "baseURL": "/",
    "depCache": {
      "index.js": [
        "react",
        "react-dom"
      ],
      "npm:fbjs@0.8.16/lib/ExecutionEnvironment.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/camelize.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/camelizeStyleName.js": [
        "./camelize",
        "process"
      ],
      "npm:fbjs@0.8.16/lib/containsNode.js": [
        "./isTextNode",
        "process"
      ],
      "npm:fbjs@0.8.16/lib/emptyFunction.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/emptyObject.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/getActiveElement.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/hyphenate.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/hyphenateStyleName.js": [
        "./hyphenate",
        "process"
      ],
      "npm:fbjs@0.8.16/lib/invariant.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/isNode.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/isTextNode.js": [
        "./isNode",
        "process"
      ],
      "npm:fbjs@0.8.16/lib/shallowEqual.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/warning.js": [
        "./emptyFunction",
        "process"
      ],
      "npm:jspm-nodelibs-process@0.2.1/process.js": [
        "@system-env"
      ],
      "npm:prop-types@15.6.1/checkPropTypes.js": [
        "fbjs/lib/invariant",
        "fbjs/lib/warning",
        "./lib/ReactPropTypesSecret",
        "process"
      ],
      "npm:prop-types@15.6.1/lib/ReactPropTypesSecret.js": [
        "process"
      ],
      "npm:react-dom@16.4.0/cjs/react-dom.development.js": [
        "fbjs/lib/invariant",
        "react",
        "fbjs/lib/warning",
        "fbjs/lib/ExecutionEnvironment",
        "object-assign",
        "fbjs/lib/emptyFunction",
        "prop-types/checkPropTypes",
        "fbjs/lib/getActiveElement",
        "fbjs/lib/shallowEqual",
        "fbjs/lib/containsNode",
        "fbjs/lib/emptyObject",
        "fbjs/lib/hyphenateStyleName",
        "fbjs/lib/camelizeStyleName",
        "process"
      ],
      "npm:react-dom@16.4.0/cjs/react-dom.production.min.js": [
        "fbjs/lib/invariant",
        "react",
        "fbjs/lib/ExecutionEnvironment",
        "object-assign",
        "fbjs/lib/emptyFunction",
        "fbjs/lib/getActiveElement",
        "fbjs/lib/shallowEqual",
        "fbjs/lib/containsNode",
        "fbjs/lib/emptyObject",
        "process"
      ],
      "npm:react-dom@16.4.0/index.js": [
        "./cjs/react-dom.production.min.js",
        "./cjs/react-dom.development.js",
        "process"
      ],
      "npm:react@16.4.0/cjs/react.development.js": [
        "object-assign",
        "fbjs/lib/invariant",
        "fbjs/lib/emptyObject",
        "fbjs/lib/warning",
        "fbjs/lib/emptyFunction",
        "prop-types/checkPropTypes",
        "process"
      ],
      "npm:react@16.4.0/cjs/react.production.min.js": [
        "object-assign",
        "fbjs/lib/invariant",
        "fbjs/lib/emptyObject",
        "fbjs/lib/emptyFunction",
        "process"
      ],
      "npm:react@16.4.0/index.js": [
        "./cjs/react.production.min.js",
        "./cjs/react.development.js",
        "process"
      ]
    },
    "bundles": {
      "bundle.js": [
        "npm:react-router-dom@4.3.1/index.js",
        "npm:react-router-dom@4.3.1.json",
        "npm:react-router-dom@4.3.1/withRouter.js",
        "npm:react-router@4.3.1/withRouter.js",
        "npm:react-router@4.3.1.json",
        "npm:react-router@4.3.1/Route.js",
        "npm:react-router@4.3.1/matchPath.js",
        "npm:path-to-regexp@1.7.0/index.js",
        "npm:path-to-regexp@1.7.0.json",
        "npm:isarray@0.0.1/index.js",
        "npm:isarray@0.0.1.json",
        "npm:prop-types@15.6.1/index.js",
        "npm:prop-types@15.6.1.json",
        "npm:jspm-nodelibs-process@0.2.1/process.js",
        "npm:jspm-nodelibs-process@0.2.1.json",
        "npm:prop-types@15.6.1/factoryWithThrowingShims.js",
        "npm:prop-types@15.6.1/lib/ReactPropTypesSecret.js",
        "npm:fbjs@0.8.16/lib/invariant.js",
        "npm:fbjs@0.8.16.json",
        "npm:fbjs@0.8.16/lib/emptyFunction.js",
        "npm:prop-types@15.6.1/factoryWithTypeCheckers.js",
        "npm:prop-types@15.6.1/checkPropTypes.js",
        "npm:fbjs@0.8.16/lib/warning.js",
        "npm:object-assign@4.1.1/index.js",
        "npm:object-assign@4.1.1.json",
        "npm:react@16.4.0/index.js",
        "npm:react@16.4.0.json",
        "npm:react@16.4.0/cjs/react.development.js",
        "npm:fbjs@0.8.16/lib/emptyObject.js",
        "npm:react@16.4.0/cjs/react.production.min.js",
        "npm:invariant@2.2.4/browser.js",
        "npm:invariant@2.2.4.json",
        "npm:warning@4.0.1/warning.js",
        "npm:warning@4.0.1.json",
        "npm:hoist-non-react-statics@2.5.0/index.js",
        "npm:hoist-non-react-statics@2.5.0.json",
        "npm:react-router-dom@4.3.1/matchPath.js",
        "npm:react-router-dom@4.3.1/generatePath.js",
        "npm:react-router@4.3.1/generatePath.js",
        "npm:react-router-dom@4.3.1/Switch.js",
        "npm:react-router@4.3.1/Switch.js",
        "npm:react-router-dom@4.3.1/StaticRouter.js",
        "npm:react-router@4.3.1/StaticRouter.js",
        "npm:react-router@4.3.1/Router.js",
        "npm:history@4.7.2/index.js",
        "npm:history@4.7.2.json",
        "npm:history@4.7.2/createMemoryHistory.js",
        "npm:history@4.7.2/createTransitionManager.js",
        "npm:warning@3.0.0/browser.js",
        "npm:warning@3.0.0.json",
        "npm:history@4.7.2/LocationUtils.js",
        "npm:history@4.7.2/PathUtils.js",
        "npm:value-equal@0.4.0/cjs/index.js",
        "npm:value-equal@0.4.0.json",
        "npm:resolve-pathname@2.2.0/cjs/index.js",
        "npm:resolve-pathname@2.2.0.json",
        "npm:history@4.7.2/createHashHistory.js",
        "npm:history@4.7.2/DOMUtils.js",
        "npm:history@4.7.2/createBrowserHistory.js",
        "npm:react-router-dom@4.3.1/Router.js",
        "npm:react-router-dom@4.3.1/Route.js",
        "npm:react-router-dom@4.3.1/Redirect.js",
        "npm:react-router@4.3.1/Redirect.js",
        "npm:react-router-dom@4.3.1/Prompt.js",
        "npm:react-router@4.3.1/Prompt.js",
        "npm:react-router-dom@4.3.1/NavLink.js",
        "npm:react-router-dom@4.3.1/Link.js",
        "npm:react-router-dom@4.3.1/MemoryRouter.js",
        "npm:react-router@4.3.1/MemoryRouter.js",
        "npm:react-router-dom@4.3.1/HashRouter.js",
        "npm:react-router-dom@4.3.1/BrowserRouter.js",
        "npm:antd@2.13.14/lib/index.js",
        "npm:antd@2.13.14.json",
        "npm:antd@2.13.14/lib/version/index.js",
        "npm:antd@2.13.14/lib/upload/index.js",
        "npm:antd@2.13.14/lib/upload/Dragger.js",
        "npm:antd@2.13.14/lib/upload/Upload.js",
        "npm:antd@2.13.14/lib/upload/utils.js",
        "npm:antd@2.13.14/lib/upload/UploadList.js",
        "npm:classnames@2.2.5/index.js",
        "npm:classnames@2.2.5.json",
        "npm:antd@2.13.14/lib/progress/index.js",
        "npm:antd@2.13.14/lib/progress/progress.js",
        "npm:rc-progress@2.2.5/lib/index.js",
        "npm:rc-progress@2.2.5.json",
        "npm:rc-progress@2.2.5/lib/Circle.js",
        "npm:rc-progress@2.2.5/lib/types.js",
        "npm:rc-progress@2.2.5/lib/enhancer.js",
        "npm:babel-runtime@6.26.0/helpers/inherits.js",
        "npm:babel-runtime@6.26.0.json",
        "npm:babel-runtime@6.26.0/helpers/typeof.js",
        "npm:babel-runtime@6.26.0/core-js/symbol.js",
        "npm:core-js@2.5.7/library/fn/symbol/index.js",
        "npm:core-js@2.5.7.json",
        "npm:core-js@2.5.7/library/modules/_core.js",
        "npm:core-js@2.5.7/library/modules/es7.symbol.observable.js",
        "npm:core-js@2.5.7/library/modules/_wks-define.js",
        "npm:core-js@2.5.7/library/modules/_object-dp.js",
        "npm:core-js@2.5.7/library/modules/_descriptors.js",
        "npm:core-js@2.5.7/library/modules/_fails.js",
        "npm:core-js@2.5.7/library/modules/_to-primitive.js",
        "npm:core-js@2.5.7/library/modules/_is-object.js",
        "npm:core-js@2.5.7/library/modules/_ie8-dom-define.js",
        "npm:core-js@2.5.7/library/modules/_dom-create.js",
        "npm:core-js@2.5.7/library/modules/_global.js",
        "npm:core-js@2.5.7/library/modules/_an-object.js",
        "npm:core-js@2.5.7/library/modules/_wks-ext.js",
        "npm:core-js@2.5.7/library/modules/_wks.js",
        "npm:core-js@2.5.7/library/modules/_uid.js",
        "npm:core-js@2.5.7/library/modules/_shared.js",
        "npm:core-js@2.5.7/library/modules/_library.js",
        "npm:core-js@2.5.7/library/modules/es7.symbol.async-iterator.js",
        "npm:core-js@2.5.7/library/modules/es6.object.to-string.js",
        "npm:core-js@2.5.7/library/modules/es6.symbol.js",
        "npm:core-js@2.5.7/library/modules/_hide.js",
        "npm:core-js@2.5.7/library/modules/_property-desc.js",
        "npm:core-js@2.5.7/library/modules/_object-gops.js",
        "npm:core-js@2.5.7/library/modules/_object-pie.js",
        "npm:core-js@2.5.7/library/modules/_object-gopn.js",
        "npm:core-js@2.5.7/library/modules/_enum-bug-keys.js",
        "npm:core-js@2.5.7/library/modules/_object-keys-internal.js",
        "npm:core-js@2.5.7/library/modules/_shared-key.js",
        "npm:core-js@2.5.7/library/modules/_array-includes.js",
        "npm:core-js@2.5.7/library/modules/_to-absolute-index.js",
        "npm:core-js@2.5.7/library/modules/_to-integer.js",
        "npm:core-js@2.5.7/library/modules/_to-length.js",
        "npm:core-js@2.5.7/library/modules/_to-iobject.js",
        "npm:core-js@2.5.7/library/modules/_defined.js",
        "npm:core-js@2.5.7/library/modules/_iobject.js",
        "npm:core-js@2.5.7/library/modules/_cof.js",
        "npm:core-js@2.5.7/library/modules/_has.js",
        "npm:core-js@2.5.7/library/modules/_object-keys.js",
        "npm:core-js@2.5.7/library/modules/_object-gopd.js",
        "npm:core-js@2.5.7/library/modules/_object-gopn-ext.js",
        "npm:core-js@2.5.7/library/modules/_object-create.js",
        "npm:core-js@2.5.7/library/modules/_html.js",
        "npm:core-js@2.5.7/library/modules/_object-dps.js",
        "npm:core-js@2.5.7/library/modules/_is-array.js",
        "npm:core-js@2.5.7/library/modules/_enum-keys.js",
        "npm:core-js@2.5.7/library/modules/_set-to-string-tag.js",
        "npm:core-js@2.5.7/library/modules/_meta.js",
        "npm:core-js@2.5.7/library/modules/_redefine.js",
        "npm:core-js@2.5.7/library/modules/_export.js",
        "npm:core-js@2.5.7/library/modules/_ctx.js",
        "npm:core-js@2.5.7/library/modules/_a-function.js",
        "npm:babel-runtime@6.26.0/core-js/symbol/iterator.js",
        "npm:core-js@2.5.7/library/fn/symbol/iterator.js",
        "npm:core-js@2.5.7/library/modules/web.dom.iterable.js",
        "npm:core-js@2.5.7/library/modules/_iterators.js",
        "npm:core-js@2.5.7/library/modules/es6.array.iterator.js",
        "npm:core-js@2.5.7/library/modules/_iter-define.js",
        "npm:core-js@2.5.7/library/modules/_object-gpo.js",
        "npm:core-js@2.5.7/library/modules/_to-object.js",
        "npm:core-js@2.5.7/library/modules/_iter-create.js",
        "npm:core-js@2.5.7/library/modules/_iter-step.js",
        "npm:core-js@2.5.7/library/modules/_add-to-unscopables.js",
        "npm:core-js@2.5.7/library/modules/es6.string.iterator.js",
        "npm:core-js@2.5.7/library/modules/_string-at.js",
        "npm:babel-runtime@6.26.0/core-js/object/create.js",
        "npm:core-js@2.5.7/library/fn/object/create.js",
        "npm:core-js@2.5.7/library/modules/es6.object.create.js",
        "npm:babel-runtime@6.26.0/core-js/object/set-prototype-of.js",
        "npm:core-js@2.5.7/library/fn/object/set-prototype-of.js",
        "npm:core-js@2.5.7/library/modules/es6.object.set-prototype-of.js",
        "npm:core-js@2.5.7/library/modules/_set-proto.js",
        "npm:babel-runtime@6.26.0/helpers/possibleConstructorReturn.js",
        "npm:babel-runtime@6.26.0/helpers/classCallCheck.js",
        "npm:babel-runtime@6.26.0/helpers/objectWithoutProperties.js",
        "npm:babel-runtime@6.26.0/helpers/extends.js",
        "npm:babel-runtime@6.26.0/core-js/object/assign.js",
        "npm:core-js@2.5.7/library/fn/object/assign.js",
        "npm:core-js@2.5.7/library/modules/es6.object.assign.js",
        "npm:core-js@2.5.7/library/modules/_object-assign.js",
        "npm:rc-progress@2.2.5/lib/Line.js",
        "npm:antd@2.13.14/lib/icon/index.js",
        "npm:omit.js@1.0.0/lib/index.js",
        "npm:omit.js@1.0.0.json",
        "npm:babel-runtime@6.26.0/helpers/defineProperty.js",
        "npm:babel-runtime@6.26.0/core-js/object/define-property.js",
        "npm:core-js@2.5.7/library/fn/object/define-property.js",
        "npm:core-js@2.5.7/library/modules/es6.object.define-property.js",
        "npm:babel-runtime@6.26.0/helpers/createClass.js",
        "npm:antd@2.13.14/lib/tooltip/index.js",
        "npm:antd@2.13.14/lib/tooltip/placements.js",
        "npm:rc-tooltip@3.4.9/lib/placements.js",
        "npm:rc-tooltip@3.4.9.json",
        "npm:rc-tooltip@3.4.9/lib/index.js",
        "npm:rc-tooltip@3.4.9/lib/Tooltip.js",
        "npm:rc-trigger@1.11.5/lib/index.js",
        "npm:rc-trigger@1.11.5.json",
        "npm:rc-util@4.5.0/lib/getContainerRenderMixin.js",
        "npm:rc-util@4.5.0.json",
        "npm:react-dom@16.4.0/index.js",
        "npm:react-dom@16.4.0.json",
        "npm:react-dom@16.4.0/cjs/react-dom.development.js",
        "npm:fbjs@0.8.16/lib/camelizeStyleName.js",
        "npm:fbjs@0.8.16/lib/camelize.js",
        "npm:fbjs@0.8.16/lib/hyphenateStyleName.js",
        "npm:fbjs@0.8.16/lib/hyphenate.js",
        "npm:fbjs@0.8.16/lib/containsNode.js",
        "npm:fbjs@0.8.16/lib/isTextNode.js",
        "npm:fbjs@0.8.16/lib/isNode.js",
        "npm:fbjs@0.8.16/lib/shallowEqual.js",
        "npm:fbjs@0.8.16/lib/getActiveElement.js",
        "npm:fbjs@0.8.16/lib/ExecutionEnvironment.js",
        "npm:react-dom@16.4.0/cjs/react-dom.production.min.js",
        "npm:rc-trigger@1.11.5/lib/utils.js",
        "npm:rc-trigger@1.11.5/lib/Popup.js",
        "npm:rc-trigger@1.11.5/lib/LazyRenderBox.js",
        "npm:rc-trigger@1.11.5/lib/PopupInner.js",
        "npm:rc-animate@2.4.4/lib/Animate.js",
        "npm:rc-animate@2.4.4.json",
        "npm:rc-animate@2.4.4/lib/util.js",
        "npm:rc-animate@2.4.4/lib/AnimateChild.js",
        "npm:css-animation@1.4.1/lib/index.js",
        "npm:css-animation@1.4.1.json",
        "npm:component-classes@1.2.6/index.js",
        "npm:component-classes@1.2.6.json",
        "npm:component-indexof@0.0.3/index.js",
        "npm:component-indexof@0.0.3.json",
        "npm:css-animation@1.4.1/lib/Event.js",
        "npm:rc-animate@2.4.4/lib/ChildrenUtils.js",
        "npm:rc-align@2.4.0/lib/index.js",
        "npm:rc-align@2.4.0.json",
        "npm:rc-align@2.4.0/lib/Align.js",
        "npm:rc-align@2.4.0/lib/util.js",
        "npm:shallowequal@1.0.2/index.js",
        "npm:shallowequal@1.0.2.json",
        "npm:rc-util@4.5.0/lib/Dom/addEventListener.js",
        "npm:add-dom-event-listener@1.0.2/lib/index.js",
        "npm:add-dom-event-listener@1.0.2.json",
        "npm:add-dom-event-listener@1.0.2/lib/EventObject.js",
        "npm:add-dom-event-listener@1.0.2/lib/EventBaseObject.js",
        "npm:dom-align@1.7.0/lib/index.js",
        "npm:dom-align@1.7.0.json",
        "npm:dom-align@1.7.0/lib/align/alignPoint.js",
        "npm:dom-align@1.7.0/lib/align/align.js",
        "npm:dom-align@1.7.0/lib/getElFuturePos.js",
        "npm:dom-align@1.7.0/lib/getAlignOffset.js",
        "npm:dom-align@1.7.0/lib/getRegion.js",
        "npm:dom-align@1.7.0/lib/utils.js",
        "npm:dom-align@1.7.0/lib/propertyUtils.js",
        "npm:dom-align@1.7.0/lib/adjustForViewport.js",
        "npm:dom-align@1.7.0/lib/getVisibleRectForElement.js",
        "npm:dom-align@1.7.0/lib/isAncestorFixed.js",
        "npm:dom-align@1.7.0/lib/getOffsetParent.js",
        "npm:dom-align@1.7.0/lib/align/alignElement.js",
        "npm:rc-util@4.5.0/lib/Dom/contains.js",
        "npm:create-react-class@15.6.3/index.js",
        "npm:create-react-class@15.6.3.json",
        "npm:create-react-class@15.6.3/factory.js",
        "npm:lodash.uniqby@4.7.0/index.js",
        "npm:lodash.uniqby@4.7.0.json",
        "npm:rc-upload@2.4.4/lib/index.js",
        "npm:rc-upload@2.4.4.json",
        "npm:rc-upload@2.4.4/lib/Upload.js",
        "npm:rc-upload@2.4.4/lib/IframeUploader.js",
        "npm:warning@2.1.0/browser.js",
        "npm:warning@2.1.0.json",
        "npm:rc-upload@2.4.4/lib/uid.js",
        "npm:rc-upload@2.4.4/lib/AjaxUploader.js",
        "npm:rc-upload@2.4.4/lib/attr-accept.js",
        "npm:rc-upload@2.4.4/lib/request.js",
        "npm:antd@2.13.14/lib/mention/index.js",
        "npm:rc-editor-mention@0.6.14/lib/index.js",
        "npm:rc-editor-mention@0.6.14.json",
        "npm:rc-editor-mention@0.6.14/lib/component/Nav.react.js",
        "npm:rc-editor-mention@0.6.14/lib/utils/getMentions.js",
        "npm:rc-editor-mention@0.6.14/lib/utils/getRegExp.js",
        "npm:rc-editor-mention@0.6.14/lib/utils/exportContent.js",
        "npm:draft-js@0.10.5/lib/Draft.js",
        "npm:draft-js@0.10.5.json",
        "npm:draft-js@0.10.5/lib/getVisibleSelectionRect.js",
        "npm:draft-js@0.10.5/lib/getRangeBoundingClientRect.js",
        "npm:draft-js@0.10.5/lib/getRangeClientRects.js",
        "npm:fbjs@0.8.16/lib/UserAgent.js",
        "npm:fbjs@0.8.16/lib/memoizeStringOnly.js",
        "npm:fbjs@0.8.16/lib/mapObject.js",
        "npm:fbjs@0.8.16/lib/VersionRange.js",
        "npm:fbjs@0.8.16/lib/UserAgentData.js",
        "npm:ua-parser-js@0.7.18/src/ua-parser.js",
        "npm:ua-parser-js@0.7.18.json",
        "npm:draft-js@0.10.5/lib/getDefaultKeyBinding.js",
        "npm:fbjs@0.8.16/lib/Keys.js",
        "npm:draft-js@0.10.5/lib/KeyBindingUtil.js",
        "npm:draft-js@0.10.5/lib/generateRandomKey.js",
        "npm:draft-js@0.10.5/lib/convertFromRawToDraftState.js",
        "npm:draft-js@0.10.5/lib/decodeInlineStyleRanges.js",
        "npm:fbjs@0.8.16/lib/UnicodeUtils.js",
        "npm:immutable@3.7.6/dist/immutable.js",
        "npm:immutable@3.7.6.json",
        "npm:draft-js@0.10.5/lib/decodeEntityRanges.js",
        "npm:draft-js@0.10.5/lib/createCharacterList.js",
        "npm:draft-js@0.10.5/lib/CharacterMetadata.js",
        "npm:draft-js@0.10.5/lib/SelectionState.js",
        "npm:draft-js@0.10.5/lib/DraftTreeAdapter.js",
        "npm:draft-js@0.10.5/lib/DraftFeatureFlags.js",
        "npm:draft-js@0.10.5/lib/DraftFeatureFlags-core.js",
        "npm:draft-js@0.10.5/lib/DraftEntity.js",
        "npm:draft-js@0.10.5/lib/DraftEntityInstance.js",
        "npm:draft-js@0.10.5/lib/ContentState.js",
        "npm:draft-js@0.10.5/lib/sanitizeDraftText.js",
        "npm:draft-js@0.10.5/lib/ContentBlockNode.js",
        "npm:draft-js@0.10.5/lib/findRangesImmutable.js",
        "npm:draft-js@0.10.5/lib/ContentBlock.js",
        "npm:draft-js@0.10.5/lib/BlockMapBuilder.js",
        "npm:draft-js@0.10.5/lib/convertFromHTMLToContentBlocks.js",
        "npm:draft-js@0.10.5/lib/getSafeBodyFromHTML.js",
        "npm:fbjs@0.8.16/lib/cx.js",
        "npm:fbjs@0.8.16/lib/URI.js",
        "npm:draft-js@0.10.5/lib/DefaultDraftBlockRenderMap.js",
        "npm:draft-js@0.10.5/lib/convertFromDraftStateToRaw.js",
        "npm:draft-js@0.10.5/lib/encodeInlineStyleRanges.js",
        "npm:draft-js@0.10.5/lib/encodeEntityRanges.js",
        "npm:draft-js@0.10.5/lib/DraftStringKey.js",
        "npm:draft-js@0.10.5/lib/RichTextEditorUtil.js",
        "npm:fbjs@0.8.16/lib/nullthrows.js",
        "npm:draft-js@0.10.5/lib/adjustBlockDepthForContentState.js",
        "npm:draft-js@0.10.5/lib/EditorState.js",
        "npm:draft-js@0.10.5/lib/EditorBidiService.js",
        "npm:fbjs@0.8.16/lib/UnicodeBidiService.js",
        "npm:fbjs@0.8.16/lib/UnicodeBidiDirection.js",
        "npm:fbjs@0.8.16/lib/UnicodeBidi.js",
        "npm:draft-js@0.10.5/lib/BlockTree.js",
        "npm:draft-js@0.10.5/lib/DraftModifier.js",
        "npm:draft-js@0.10.5/lib/splitBlockInContentState.js",
        "npm:draft-js@0.10.5/lib/removeRangeFromContentState.js",
        "npm:draft-js@0.10.5/lib/getNextDelimiterBlockKey.js",
        "npm:draft-js@0.10.5/lib/removeEntitiesAtEdges.js",
        "npm:draft-js@0.10.5/lib/modifyBlockForContentState.js",
        "npm:draft-js@0.10.5/lib/insertTextIntoContentState.js",
        "npm:draft-js@0.10.5/lib/insertIntoList.js",
        "npm:draft-js@0.10.5/lib/insertFragmentIntoContentState.js",
        "npm:draft-js@0.10.5/lib/randomizeBlockMapKeys.js",
        "npm:draft-js@0.10.5/lib/getContentStateFragment.js",
        "npm:draft-js@0.10.5/lib/getCharacterRemovalRange.js",
        "npm:draft-js@0.10.5/lib/getRangesForDraftEntity.js",
        "npm:draft-js@0.10.5/lib/DraftEntitySegments.js",
        "npm:draft-js@0.10.5/lib/applyEntityToContentState.js",
        "npm:draft-js@0.10.5/lib/applyEntityToContentBlock.js",
        "npm:draft-js@0.10.5/lib/ContentStateInlineStyle.js",
        "npm:draft-js@0.10.5/lib/DraftEditorBlock.react.js",
        "npm:fbjs@0.8.16/lib/getViewportDimensions.js",
        "npm:fbjs@0.8.16/lib/getScrollPosition.js",
        "npm:fbjs@0.8.16/lib/getUnboundedScrollPosition.js",
        "npm:fbjs@0.8.16/lib/getDocumentScrollElement.js",
        "npm:fbjs@0.8.16/lib/getElementPosition.js",
        "npm:fbjs@0.8.16/lib/getElementRect.js",
        "npm:fbjs@0.8.16/lib/Style.js",
        "npm:fbjs@0.8.16/lib/getStyleProperty.js",
        "npm:fbjs@0.8.16/lib/Scroll.js",
        "npm:draft-js@0.10.5/lib/DraftOffsetKey.js",
        "npm:draft-js@0.10.5/lib/DraftEditorLeaf.react.js",
        "npm:draft-js@0.10.5/lib/setDraftEditorSelection.js",
        "npm:draft-js@0.10.5/lib/DraftJsDebugLogging.js",
        "npm:draft-js@0.10.5/lib/DraftEditorTextNode.react.js",
        "npm:draft-js@0.10.5/lib/DraftEditor.react.js",
        "npm:draft-js@0.10.5/lib/DraftEditorPlaceholder.react.js",
        "npm:draft-js@0.10.5/lib/DraftEditorEditHandler.js",
        "npm:draft-js@0.10.5/lib/editOnSelect.js",
        "npm:draft-js@0.10.5/lib/getDraftEditorSelection.js",
        "npm:draft-js@0.10.5/lib/getDraftEditorSelectionWithNodes.js",
        "npm:draft-js@0.10.5/lib/getUpdatedSelectionState.js",
        "npm:draft-js@0.10.5/lib/getSelectionOffsetKeyForNode.js",
        "npm:draft-js@0.10.5/lib/findAncestorOffsetKey.js",
        "npm:draft-js@0.10.5/lib/editOnPaste.js",
        "npm:draft-js@0.10.5/lib/splitTextIntoTextBlocks.js",
        "npm:draft-js@0.10.5/lib/isEventHandled.js",
        "npm:draft-js@0.10.5/lib/getTextContentFromFiles.js",
        "npm:draft-js@0.10.5/lib/getEntityKeyForSelection.js",
        "npm:draft-js@0.10.5/lib/DraftPasteProcessor.js",
        "npm:fbjs@0.8.16/lib/DataTransfer.js",
        "npm:fbjs@0.8.16/lib/createArrayFromMixed.js",
        "npm:fbjs@0.8.16/lib/PhotosMimeType.js",
        "npm:draft-js@0.10.5/lib/editOnKeyDown.js",
        "npm:draft-js@0.10.5/lib/keyCommandUndo.js",
        "npm:draft-js@0.10.5/lib/keyCommandTransposeCharacters.js",
        "npm:draft-js@0.10.5/lib/keyCommandPlainDelete.js",
        "npm:draft-js@0.10.5/lib/removeTextWithStrategy.js",
        "npm:draft-js@0.10.5/lib/moveSelectionForward.js",
        "npm:draft-js@0.10.5/lib/keyCommandPlainBackspace.js",
        "npm:draft-js@0.10.5/lib/moveSelectionBackward.js",
        "npm:draft-js@0.10.5/lib/keyCommandMoveSelectionToStartOfBlock.js",
        "npm:draft-js@0.10.5/lib/keyCommandMoveSelectionToEndOfBlock.js",
        "npm:draft-js@0.10.5/lib/keyCommandInsertNewline.js",
        "npm:draft-js@0.10.5/lib/keyCommandDeleteWord.js",
        "npm:draft-js@0.10.5/lib/DraftRemovableWord.js",
        "npm:fbjs@0.8.16/lib/TokenizeUtil.js",
        "npm:draft-js@0.10.5/lib/keyCommandBackspaceWord.js",
        "npm:draft-js@0.10.5/lib/keyCommandBackspaceToStartOfLine.js",
        "npm:draft-js@0.10.5/lib/expandRangeToStartOfLine.js",
        "npm:draft-js@0.10.5/lib/SecondaryClipboard.js",
        "npm:draft-js@0.10.5/lib/editOnInput.js",
        "npm:draft-js@0.10.5/lib/editOnFocus.js",
        "npm:draft-js@0.10.5/lib/editOnDragStart.js",
        "npm:draft-js@0.10.5/lib/editOnDragOver.js",
        "npm:draft-js@0.10.5/lib/editOnCut.js",
        "npm:draft-js@0.10.5/lib/getFragmentFromSelection.js",
        "npm:draft-js@0.10.5/lib/editOnCopy.js",
        "npm:draft-js@0.10.5/lib/editOnCompositionStart.js",
        "npm:draft-js@0.10.5/lib/editOnBlur.js",
        "npm:draft-js@0.10.5/lib/editOnBeforeInput.js",
        "npm:fbjs@0.8.16/lib/setImmediate.js",
        "npm:setimmediate@1.0.5/setImmediate.js",
        "npm:setimmediate@1.0.5.json",
        "npm:draft-js@0.10.5/lib/isSelectionAtLeafStart.js",
        "npm:draft-js@0.10.5/lib/DraftEditorDragHandler.js",
        "npm:draft-js@0.10.5/lib/DraftEditorContents.react.js",
        "npm:draft-js@0.10.5/lib/DraftEditorContents-core.react.js",
        "npm:fbjs@0.8.16/lib/joinClasses.js",
        "npm:draft-js@0.10.5/lib/DraftEditorCompositionHandler.js",
        "npm:draft-js@0.10.5/lib/DefaultDraftInlineStyle.js",
        "npm:draft-js@0.10.5/lib/CompositeDraftDecorator.js",
        "npm:draft-js@0.10.5/lib/AtomicBlockUtils.js",
        "npm:draft-js@0.10.5/lib/moveBlockInContentState.js",
        "npm:rc-editor-mention@0.6.14/lib/component/Mention.react.js",
        "npm:rc-editor-mention@0.6.14/lib/utils/createMention.js",
        "npm:rc-editor-mention@0.6.14/lib/model/mentionStore.js",
        "npm:rc-editor-mention@0.6.14/lib/component/MentionContent.react.js",
        "npm:rc-editor-mention@0.6.14/lib/component/SuggestionPortal.react.js",
        "npm:rc-editor-mention@0.6.14/lib/utils/getOffset.js",
        "npm:rc-editor-mention@0.6.14/lib/component/Suggestions.react.js",
        "npm:rc-editor-mention@0.6.14/lib/utils/getSearchWord.js",
        "npm:rc-editor-mention@0.6.14/lib/utils/clearMention.js",
        "npm:rc-editor-mention@0.6.14/lib/utils/insertMention.js",
        "npm:rc-editor-mention@0.6.14/lib/component/SuggestionWrapper.react.js",
        "npm:dom-scroll-into-view@1.2.1/lib/index.js",
        "npm:dom-scroll-into-view@1.2.1.json",
        "npm:dom-scroll-into-view@1.2.1/lib/dom-scroll-into-view.js",
        "npm:dom-scroll-into-view@1.2.1/lib/util.js",
        "npm:rc-editor-core@0.7.9/lib/index.js",
        "npm:rc-editor-core@0.7.9.json",
        "npm:rc-editor-core@0.7.9/lib/EditorCore/index.js",
        "npm:rc-editor-core@0.7.9/lib/EditorCore/customHTML2Content.js",
        "npm:lodash@4.17.10/toArray.js",
        "npm:lodash@4.17.10.json",
        "npm:lodash@4.17.10/values.js",
        "npm:lodash@4.17.10/keys.js",
        "npm:lodash@4.17.10/isArrayLike.js",
        "npm:lodash@4.17.10/isLength.js",
        "npm:lodash@4.17.10/isFunction.js",
        "npm:lodash@4.17.10/isObject.js",
        "npm:lodash@4.17.10/_baseGetTag.js",
        "npm:lodash@4.17.10/_objectToString.js",
        "npm:lodash@4.17.10/_getRawTag.js",
        "npm:lodash@4.17.10/_Symbol.js",
        "npm:lodash@4.17.10/_root.js",
        "npm:lodash@4.17.10/_freeGlobal.js",
        "npm:lodash@4.17.10/_baseKeys.js",
        "npm:lodash@4.17.10/_nativeKeys.js",
        "npm:lodash@4.17.10/_overArg.js",
        "npm:lodash@4.17.10/_isPrototype.js",
        "npm:lodash@4.17.10/_arrayLikeKeys.js",
        "npm:lodash@4.17.10/isTypedArray.js",
        "npm:lodash@4.17.10/_nodeUtil.js",
        "npm:lodash@4.17.10/_baseUnary.js",
        "npm:lodash@4.17.10/_baseIsTypedArray.js",
        "npm:lodash@4.17.10/isObjectLike.js",
        "npm:lodash@4.17.10/_isIndex.js",
        "npm:lodash@4.17.10/isBuffer.js",
        "npm:lodash@4.17.10/stubFalse.js",
        "npm:lodash@4.17.10/isArray.js",
        "npm:lodash@4.17.10/isArguments.js",
        "npm:lodash@4.17.10/_baseIsArguments.js",
        "npm:lodash@4.17.10/_baseTimes.js",
        "npm:lodash@4.17.10/_baseValues.js",
        "npm:lodash@4.17.10/_arrayMap.js",
        "npm:lodash@4.17.10/_stringToArray.js",
        "npm:lodash@4.17.10/_unicodeToArray.js",
        "npm:lodash@4.17.10/_hasUnicode.js",
        "npm:lodash@4.17.10/_asciiToArray.js",
        "npm:lodash@4.17.10/_setToArray.js",
        "npm:lodash@4.17.10/_mapToArray.js",
        "npm:lodash@4.17.10/_iteratorToArray.js",
        "npm:lodash@4.17.10/isString.js",
        "npm:lodash@4.17.10/_getTag.js",
        "npm:lodash@4.17.10/_toSource.js",
        "npm:lodash@4.17.10/_WeakMap.js",
        "npm:lodash@4.17.10/_getNative.js",
        "npm:lodash@4.17.10/_getValue.js",
        "npm:lodash@4.17.10/_baseIsNative.js",
        "npm:lodash@4.17.10/_isMasked.js",
        "npm:lodash@4.17.10/_coreJsData.js",
        "npm:lodash@4.17.10/_Set.js",
        "npm:lodash@4.17.10/_Promise.js",
        "npm:lodash@4.17.10/_Map.js",
        "npm:lodash@4.17.10/_DataView.js",
        "npm:lodash@4.17.10/_copyArray.js",
        "npm:rc-editor-core@0.7.9/lib/EditorCore/export/exportText.js",
        "npm:rc-editor-core@0.7.9/lib/EditorCore/export/getHTML.js",
        "npm:rc-editor-core@0.7.9/lib/EditorCore/export/isUnitlessNumber.js",
        "npm:rc-editor-core@0.7.9/lib/EditorCore/ConfigStore.js",
        "npm:rc-editor-core@0.7.9/lib/Toolbar/index.js",
        "npm:rc-editor-core@0.7.9/lib/Toolbar/Toolbar.js",
        "npm:rc-editor-core@0.7.9/lib/Toolbar/ToolbarLine.js",
        "npm:antd@2.13.14/lib/timeline/index.js",
        "npm:antd@2.13.14/lib/timeline/Timeline.js",
        "npm:antd@2.13.14/lib/timeline/TimelineItem.js",
        "npm:antd@2.13.14/lib/time-picker/index.js",
        "npm:antd@2.13.14/lib/time-picker/locale/zh_CN.js",
        "npm:antd@2.13.14/lib/locale-provider/injectLocale.js",
        "npm:rc-time-picker@2.4.1/lib/TimePicker.js",
        "npm:rc-time-picker@2.4.1.json",
        "npm:moment@2.22.2/moment.js",
        "npm:moment@2.22.2.json",
        "npm:rc-time-picker@2.4.1/lib/placements.js",
        "npm:rc-time-picker@2.4.1/lib/Panel.js",
        "npm:rc-time-picker@2.4.1/lib/Combobox.js",
        "npm:rc-time-picker@2.4.1/lib/Select.js",
        "npm:rc-time-picker@2.4.1/lib/Header.js",
        "npm:antd@2.13.14/lib/tag/index.js",
        "npm:antd@2.13.14/lib/tag/CheckableTag.js",
        "npm:antd@2.13.14/lib/tabs/index.js",
        "npm:antd@2.13.14/lib/_util/isFlexSupported.js",
        "npm:antd@2.13.14/lib/_util/warning.js",
        "npm:rc-tabs@9.1.11/lib/TabContent.js",
        "npm:rc-tabs@9.1.11.json",
        "npm:rc-tabs@9.1.11/lib/utils.js",
        "npm:rc-tabs@9.1.11/lib/ScrollableInkTabBar.js",
        "npm:rc-tabs@9.1.11/lib/RefMixin.js",
        "npm:rc-tabs@9.1.11/lib/TabBarMixin.js",
        "npm:rc-tabs@9.1.11/lib/ScrollableTabBarMixin.js",
        "npm:lodash.debounce@4.0.8/index.js",
        "npm:lodash.debounce@4.0.8.json",
        "npm:rc-tabs@9.1.11/lib/InkTabBarMixin.js",
        "npm:rc-tabs@9.1.11/lib/index.js",
        "npm:rc-tabs@9.1.11/lib/TabPane.js",
        "npm:rc-tabs@9.1.11/lib/Tabs.js",
        "npm:rc-tabs@9.1.11/lib/KeyCode.js",
        "npm:antd@2.13.14/lib/tree-select/index.js",
        "npm:rc-tree-select@1.10.13/lib/index.js",
        "npm:rc-tree-select@1.10.13.json",
        "npm:rc-tree-select@1.10.13/lib/TreeNode.js",
        "npm:rc-tree-select@1.10.13/lib/Select.js",
        "npm:rc-tree-select@1.10.13/lib/PropTypes.js",
        "npm:rc-tree-select@1.10.13/lib/strategies.js",
        "npm:rc-tree-select@1.10.13/lib/SelectTrigger.js",
        "npm:rc-util@4.5.0/lib/Children/toArray.js",
        "npm:rc-tree-select@1.10.13/lib/util.js",
        "npm:rc-tree@1.7.11/lib/index.js",
        "npm:rc-tree@1.7.11.json",
        "npm:rc-tree@1.7.11/lib/TreeNode.js",
        "npm:rc-tree@1.7.11/lib/Tree.js",
        "npm:rc-tree@1.7.11/lib/util.js",
        "npm:rc-util@4.5.0/lib/KeyCode.js",
        "npm:antd@2.13.14/lib/tree/index.js",
        "npm:antd@2.13.14/lib/_util/openAnimation.js",
        "npm:antd@2.13.14/lib/_util/getRequestAnimationFrame.js",
        "npm:antd@2.13.14/lib/transfer/index.js",
        "npm:antd@2.13.14/lib/transfer/search.js",
        "npm:antd@2.13.14/lib/input/index.js",
        "npm:antd@2.13.14/lib/input/TextArea.js",
        "npm:antd@2.13.14/lib/input/calculateNodeHeight.js",
        "npm:antd@2.13.14/lib/input/Search.js",
        "npm:antd@2.13.14/lib/input/Input.js",
        "npm:antd@2.13.14/lib/input/Group.js",
        "npm:antd@2.13.14/lib/transfer/operation.js",
        "npm:antd@2.13.14/lib/button/index.js",
        "npm:antd@2.13.14/lib/button/button-group.js",
        "npm:antd@2.13.14/lib/button/button.js",
        "npm:antd@2.13.14/lib/transfer/list.js",
        "npm:antd@2.13.14/lib/_util/triggerEvent.js",
        "npm:antd@2.13.14/lib/transfer/item.js",
        "npm:antd@2.13.14/lib/checkbox/index.js",
        "npm:antd@2.13.14/lib/checkbox/Group.js",
        "npm:antd@2.13.14/lib/checkbox/Checkbox.js",
        "npm:rc-checkbox@2.0.3/lib/index.js",
        "npm:rc-checkbox@2.0.3.json",
        "npm:rc-checkbox@2.0.3/lib/Checkbox.js",
        "npm:rc-util@4.5.0/lib/PureRenderMixin.js",
        "npm:shallowequal@0.2.2/modules/index.js",
        "npm:shallowequal@0.2.2.json",
        "npm:lodash.keys@3.1.2/index.js",
        "npm:lodash.keys@3.1.2.json",
        "npm:lodash.isarray@3.0.4/index.js",
        "npm:lodash.isarray@3.0.4.json",
        "npm:lodash.isarguments@3.1.0/index.js",
        "npm:lodash.isarguments@3.1.0.json",
        "npm:lodash._getnative@3.9.1/index.js",
        "npm:lodash._getnative@3.9.1.json",
        "npm:babel-runtime@6.26.0/helpers/toConsumableArray.js",
        "npm:babel-runtime@6.26.0/core-js/array/from.js",
        "npm:core-js@2.5.7/library/fn/array/from.js",
        "npm:core-js@2.5.7/library/modules/es6.array.from.js",
        "npm:core-js@2.5.7/library/modules/_iter-detect.js",
        "npm:core-js@2.5.7/library/modules/core.get-iterator-method.js",
        "npm:core-js@2.5.7/library/modules/_classof.js",
        "npm:core-js@2.5.7/library/modules/_create-property.js",
        "npm:core-js@2.5.7/library/modules/_is-array-iter.js",
        "npm:core-js@2.5.7/library/modules/_iter-call.js",
        "npm:react-lazy-load@3.0.13/lib/LazyLoad.js",
        "npm:react-lazy-load@3.0.13.json",
        "npm:react-lazy-load@3.0.13/lib/utils/inViewport.js",
        "npm:react-lazy-load@3.0.13/lib/utils/getElementPosition.js",
        "npm:react-lazy-load@3.0.13/lib/utils/parentScroll.js",
        "npm:lodash.throttle@4.1.1/index.js",
        "npm:lodash.throttle@4.1.1.json",
        "npm:eventlistener@0.0.1/eventlistener.js",
        "npm:eventlistener@0.0.1.json",
        "npm:antd@2.13.14/lib/table/index.js",
        "npm:antd@2.13.14/lib/table/Table.js",
        "npm:antd@2.13.14/lib/table/util.js",
        "npm:antd@2.13.14/lib/table/ColumnGroup.js",
        "npm:antd@2.13.14/lib/table/Column.js",
        "npm:antd@2.13.14/lib/table/SelectionCheckboxAll.js",
        "npm:antd@2.13.14/lib/menu/index.js",
        "npm:antd@2.13.14/lib/menu/MenuItem.js",
        "npm:rc-menu@5.0.14/lib/index.js",
        "npm:rc-menu@5.0.14.json",
        "npm:rc-menu@5.0.14/lib/Divider.js",
        "npm:rc-menu@5.0.14/lib/MenuItemGroup.js",
        "npm:rc-menu@5.0.14/lib/MenuItem.js",
        "npm:rc-menu@5.0.14/lib/util.js",
        "npm:rc-menu@5.0.14/lib/SubMenu.js",
        "npm:rc-menu@5.0.14/lib/SubMenuStateMixin.js",
        "npm:rc-menu@5.0.14/lib/SubPopupMenu.js",
        "npm:rc-menu@5.0.14/lib/MenuMixin.js",
        "npm:rc-menu@5.0.14/lib/DOMWrap.js",
        "npm:rc-util@4.5.0/lib/createChainedFunction.js",
        "npm:rc-menu@5.0.14/lib/Menu.js",
        "npm:antd@2.13.14/lib/dropdown/index.js",
        "npm:antd@2.13.14/lib/dropdown/dropdown-button.js",
        "npm:antd@2.13.14/lib/dropdown/dropdown.js",
        "npm:rc-dropdown@1.5.1/lib/index.js",
        "npm:rc-dropdown@1.5.1.json",
        "npm:rc-dropdown@1.5.1/lib/Dropdown.js",
        "npm:rc-dropdown@1.5.1/lib/placements.js",
        "npm:antd@2.13.14/lib/table/SelectionBox.js",
        "npm:antd@2.13.14/lib/radio/index.js",
        "npm:antd@2.13.14/lib/radio/radioButton.js",
        "npm:antd@2.13.14/lib/radio/radio.js",
        "npm:antd@2.13.14/lib/radio/group.js",
        "npm:antd@2.13.14/lib/table/createStore.js",
        "npm:antd@2.13.14/lib/table/filterDropdown.js",
        "npm:antd@2.13.14/lib/table/FilterDropdownMenuWrapper.js",
        "npm:dom-closest@0.2.0/index.js",
        "npm:dom-closest@0.2.0.json",
        "npm:dom-matches@2.0.0/index.js",
        "npm:dom-matches@2.0.0.json",
        "npm:antd@2.13.14/lib/spin/index.js",
        "npm:antd@2.13.14/lib/_util/isCssAnimationSupported.js",
        "npm:antd@2.13.14/lib/pagination/index.js",
        "npm:antd@2.13.14/lib/pagination/Pagination.js",
        "npm:antd@2.13.14/lib/pagination/MiniSelect.js",
        "npm:antd@2.13.14/lib/select/index.js",
        "npm:rc-select@6.9.7/lib/index.js",
        "npm:rc-select@6.9.7.json",
        "npm:rc-select@6.9.7/lib/OptGroup.js",
        "npm:rc-select@6.9.7/lib/PropTypes.js",
        "npm:rc-select@6.9.7/lib/Option.js",
        "npm:rc-select@6.9.7/lib/Select.js",
        "npm:rc-select@6.9.7/lib/SelectTrigger.js",
        "npm:rc-select@6.9.7/lib/util.js",
        "npm:rc-select@6.9.7/lib/DropdownMenu.js",
        "npm:rc-pagination@1.12.12/lib/locale/zh_CN.js",
        "npm:rc-pagination@1.12.12.json",
        "npm:rc-pagination@1.12.12/lib/index.js",
        "npm:rc-pagination@1.12.12/lib/Pagination.js",
        "npm:rc-pagination@1.12.12/lib/KeyCode.js",
        "npm:rc-pagination@1.12.12/lib/Options.js",
        "npm:rc-pagination@1.12.12/lib/Pager.js",
        "npm:rc-table@5.6.13/lib/index.js",
        "npm:rc-table@5.6.13.json",
        "npm:rc-table@5.6.13/lib/ColumnGroup.js",
        "npm:rc-table@5.6.13/lib/Column.js",
        "npm:rc-table@5.6.13/lib/Table.js",
        "npm:rc-table@5.6.13/lib/createStore.js",
        "npm:rc-table@5.6.13/lib/ColumnManager.js",
        "npm:rc-table@5.6.13/lib/utils.js",
        "npm:rc-table@5.6.13/lib/TableHeader.js",
        "npm:rc-table@5.6.13/lib/TableRow.js",
        "npm:rc-table@5.6.13/lib/ExpandIcon.js",
        "npm:rc-table@5.6.13/lib/TableCell.js",
        "npm:lodash.get@4.4.2/index.js",
        "npm:lodash.get@4.4.2.json",
        "npm:antd@2.13.14/lib/switch/index.js",
        "npm:rc-switch@1.5.3/lib/index.js",
        "npm:rc-switch@1.5.3.json",
        "npm:rc-switch@1.5.3/lib/Switch.js",
        "npm:antd@2.13.14/lib/steps/index.js",
        "npm:rc-steps@2.5.2/lib/index.js",
        "npm:rc-steps@2.5.2.json",
        "npm:rc-steps@2.5.2/lib/Step.js",
        "npm:rc-steps@2.5.2/lib/Steps.js",
        "npm:antd@2.13.14/lib/slider/index.js",
        "npm:rc-slider@8.3.5/lib/Handle.js",
        "npm:rc-slider@8.3.5.json",
        "npm:rc-slider@8.3.5/lib/Range.js",
        "npm:rc-slider@8.3.5/lib/utils.js",
        "npm:rc-slider@8.3.5/lib/common/createSlider.js",
        "npm:rc-slider@8.3.5/lib/common/Marks.js",
        "npm:rc-slider@8.3.5/lib/common/Steps.js",
        "npm:babel-runtime@6.26.0/helpers/get.js",
        "npm:babel-runtime@6.26.0/core-js/object/get-own-property-descriptor.js",
        "npm:core-js@2.5.7/library/fn/object/get-own-property-descriptor.js",
        "npm:core-js@2.5.7/library/modules/es6.object.get-own-property-descriptor.js",
        "npm:core-js@2.5.7/library/modules/_object-sap.js",
        "npm:babel-runtime@6.26.0/core-js/object/get-prototype-of.js",
        "npm:core-js@2.5.7/library/fn/object/get-prototype-of.js",
        "npm:core-js@2.5.7/library/modules/es6.object.get-prototype-of.js",
        "npm:rc-slider@8.3.5/lib/common/Track.js",
        "npm:rc-slider@8.3.5/lib/Slider.js",
        "npm:antd@2.13.14/lib/row/index.js",
        "npm:antd@2.13.14/lib/grid/index.js",
        "npm:antd@2.13.14/lib/grid/col.js",
        "npm:antd@2.13.14/lib/grid/row.js",
        "npm:antd@2.13.14/lib/rate/index.js",
        "npm:rc-rate@2.1.1/lib/index.js",
        "npm:rc-rate@2.1.1.json",
        "npm:rc-rate@2.1.1/lib/Rate.js",
        "npm:rc-rate@2.1.1/lib/Star.js",
        "npm:rc-rate@2.1.1/lib/util.js",
        "npm:antd@2.13.14/lib/popover/index.js",
        "npm:antd@2.13.14/lib/popconfirm/index.js",
        "npm:antd@2.13.14/lib/notification/index.js",
        "npm:rc-notification@2.0.6/lib/index.js",
        "npm:rc-notification@2.0.6.json",
        "npm:rc-notification@2.0.6/lib/Notification.js",
        "npm:rc-notification@2.0.6/lib/Notice.js",
        "npm:antd@2.13.14/lib/modal/index.js",
        "npm:antd@2.13.14/lib/modal/confirm.js",
        "npm:antd@2.13.14/lib/modal/locale.js",
        "npm:antd@2.13.14/lib/modal/ActionButton.js",
        "npm:antd@2.13.14/lib/modal/Modal.js",
        "npm:rc-dialog@6.5.11/lib/DialogWrap.js",
        "npm:rc-dialog@6.5.11.json",
        "npm:rc-dialog@6.5.11/lib/Dialog.js",
        "npm:rc-util@4.5.0/lib/getScrollBarSize.js",
        "npm:rc-dialog@6.5.11/lib/LazyRenderBox.js",
        "npm:antd@2.13.14/lib/message/index.js",
        "npm:antd@2.13.14/lib/locale-provider/index.js",
        "npm:antd@2.13.14/lib/layout/index.js",
        "npm:antd@2.13.14/lib/layout/Sider.js",
        "npm:antd@2.13.14/lib/layout/layout.js",
        "npm:antd@2.13.14/lib/input-number/index.js",
        "npm:rc-input-number@3.6.10/lib/index.js",
        "npm:rc-input-number@3.6.10.json",
        "npm:rc-input-number@3.6.10/lib/InputHandler.js",
        "npm:rc-touchable@1.2.3/lib/index.js",
        "npm:rc-touchable@1.2.3.json",
        "npm:rc-touchable@1.2.3/lib/PressEvent.js",
        "npm:rc-input-number@3.6.10/lib/mixin.js",
        "npm:antd@2.13.14/lib/form/index.js",
        "npm:antd@2.13.14/lib/form/Form.js",
        "npm:antd@2.13.14/lib/form/constants.js",
        "npm:antd@2.13.14/lib/form/FormItem.js",
        "npm:rc-form@1.4.8/lib/createDOMForm.js",
        "npm:rc-form@1.4.8.json",
        "npm:rc-form@1.4.8/lib/utils.js",
        "npm:hoist-non-react-statics@1.2.0/index.js",
        "npm:hoist-non-react-statics@1.2.0.json",
        "npm:rc-form@1.4.8/lib/createForm.js",
        "npm:rc-form@1.4.8/lib/createBaseForm.js",
        "npm:rc-form@1.4.8/lib/createFieldsStore.js",
        "npm:lodash@4.17.10/set.js",
        "npm:lodash@4.17.10/_baseSet.js",
        "npm:lodash@4.17.10/_toKey.js",
        "npm:lodash@4.17.10/isSymbol.js",
        "npm:lodash@4.17.10/_castPath.js",
        "npm:lodash@4.17.10/toString.js",
        "npm:lodash@4.17.10/_baseToString.js",
        "npm:lodash@4.17.10/_stringToPath.js",
        "npm:lodash@4.17.10/_memoizeCapped.js",
        "npm:lodash@4.17.10/memoize.js",
        "npm:lodash@4.17.10/_MapCache.js",
        "npm:lodash@4.17.10/_mapCacheSet.js",
        "npm:lodash@4.17.10/_getMapData.js",
        "npm:lodash@4.17.10/_isKeyable.js",
        "npm:lodash@4.17.10/_mapCacheHas.js",
        "npm:lodash@4.17.10/_mapCacheGet.js",
        "npm:lodash@4.17.10/_mapCacheDelete.js",
        "npm:lodash@4.17.10/_mapCacheClear.js",
        "npm:lodash@4.17.10/_ListCache.js",
        "npm:lodash@4.17.10/_listCacheSet.js",
        "npm:lodash@4.17.10/_assocIndexOf.js",
        "npm:lodash@4.17.10/eq.js",
        "npm:lodash@4.17.10/_listCacheHas.js",
        "npm:lodash@4.17.10/_listCacheGet.js",
        "npm:lodash@4.17.10/_listCacheDelete.js",
        "npm:lodash@4.17.10/_listCacheClear.js",
        "npm:lodash@4.17.10/_Hash.js",
        "npm:lodash@4.17.10/_hashSet.js",
        "npm:lodash@4.17.10/_nativeCreate.js",
        "npm:lodash@4.17.10/_hashHas.js",
        "npm:lodash@4.17.10/_hashGet.js",
        "npm:lodash@4.17.10/_hashDelete.js",
        "npm:lodash@4.17.10/_hashClear.js",
        "npm:lodash@4.17.10/_isKey.js",
        "npm:lodash@4.17.10/_assignValue.js",
        "npm:lodash@4.17.10/_baseAssignValue.js",
        "npm:lodash@4.17.10/_defineProperty.js",
        "npm:lodash@4.17.10/has.js",
        "npm:lodash@4.17.10/_hasPath.js",
        "npm:lodash@4.17.10/_baseHas.js",
        "npm:lodash@4.17.10/get.js",
        "npm:lodash@4.17.10/_baseGet.js",
        "npm:async-validator@1.8.2/lib/index.js",
        "npm:async-validator@1.8.2.json",
        "npm:async-validator@1.8.2/lib/messages.js",
        "npm:async-validator@1.8.2/lib/validator/index.js",
        "npm:async-validator@1.8.2/lib/validator/type.js",
        "npm:async-validator@1.8.2/lib/util.js",
        "npm:async-validator@1.8.2/lib/rule/index.js",
        "npm:async-validator@1.8.2/lib/rule/pattern.js",
        "npm:async-validator@1.8.2/lib/rule/enum.js",
        "npm:async-validator@1.8.2/lib/rule/range.js",
        "npm:async-validator@1.8.2/lib/rule/type.js",
        "npm:async-validator@1.8.2/lib/rule/required.js",
        "npm:async-validator@1.8.2/lib/rule/whitespace.js",
        "npm:async-validator@1.8.2/lib/validator/required.js",
        "npm:async-validator@1.8.2/lib/validator/date.js",
        "npm:async-validator@1.8.2/lib/validator/pattern.js",
        "npm:async-validator@1.8.2/lib/validator/enum.js",
        "npm:async-validator@1.8.2/lib/validator/object.js",
        "npm:async-validator@1.8.2/lib/validator/array.js",
        "npm:async-validator@1.8.2/lib/validator/float.js",
        "npm:async-validator@1.8.2/lib/validator/integer.js",
        "npm:async-validator@1.8.2/lib/validator/regexp.js",
        "npm:async-validator@1.8.2/lib/validator/boolean.js",
        "npm:async-validator@1.8.2/lib/validator/number.js",
        "npm:async-validator@1.8.2/lib/validator/method.js",
        "npm:async-validator@1.8.2/lib/validator/string.js",
        "npm:antd@2.13.14/lib/date-picker/index.js",
        "npm:antd@2.13.14/lib/date-picker/Calendar.js",
        "npm:rc-calendar@9.0.4/lib/index.js",
        "npm:rc-calendar@9.0.4.json",
        "npm:rc-calendar@9.0.4/lib/Calendar.js",
        "npm:rc-calendar@9.0.4/lib/util/index.js",
        "npm:rc-calendar@9.0.4/lib/date/DateInput.js",
        "npm:rc-calendar@9.0.4/lib/mixin/CommonMixin.js",
        "npm:rc-calendar@9.0.4/lib/locale/en_US.js",
        "npm:rc-calendar@9.0.4/lib/mixin/CalendarMixin.js",
        "npm:rc-calendar@9.0.4/lib/calendar/CalendarFooter.js",
        "npm:rc-calendar@9.0.4/lib/calendar/TimePickerButton.js",
        "npm:rc-calendar@9.0.4/lib/calendar/OkButton.js",
        "npm:rc-calendar@9.0.4/lib/calendar/TodayButton.js",
        "npm:rc-util@4.5.0/lib/Children/mapSelf.js",
        "npm:rc-calendar@9.0.4/lib/calendar/CalendarHeader.js",
        "npm:rc-calendar@9.0.4/lib/year/YearPanel.js",
        "npm:rc-calendar@9.0.4/lib/decade/DecadePanel.js",
        "npm:rc-calendar@9.0.4/lib/month/MonthPanel.js",
        "npm:rc-calendar@9.0.4/lib/month/MonthTable.js",
        "npm:rc-calendar@9.0.4/lib/date/DateTable.js",
        "npm:rc-calendar@9.0.4/lib/date/DateTBody.js",
        "npm:rc-calendar@9.0.4/lib/date/DateConstants.js",
        "npm:rc-calendar@9.0.4/lib/date/DateTHead.js",
        "npm:rc-calendar@9.0.4/lib/locale/zh_CN.js",
        "npm:antd@2.13.14/lib/date-picker/RangePicker.js",
        "npm:antd@2.13.14/lib/_util/getLocale.js",
        "npm:rc-calendar@9.0.4/lib/Picker.js",
        "npm:rc-calendar@9.0.4/lib/picker/placements.js",
        "npm:rc-calendar@9.0.4/lib/RangeCalendar.js",
        "npm:rc-calendar@9.0.4/lib/range-calendar/CalendarPart.js",
        "npm:babel-runtime@6.26.0/helpers/slicedToArray.js",
        "npm:babel-runtime@6.26.0/core-js/get-iterator.js",
        "npm:core-js@2.5.7/library/fn/get-iterator.js",
        "npm:core-js@2.5.7/library/modules/core.get-iterator.js",
        "npm:babel-runtime@6.26.0/core-js/is-iterable.js",
        "npm:core-js@2.5.7/library/fn/is-iterable.js",
        "npm:core-js@2.5.7/library/modules/core.is-iterable.js",
        "npm:antd@2.13.14/lib/date-picker/wrapPicker.js",
        "npm:antd@2.13.14/lib/date-picker/locale/zh_CN.js",
        "npm:moment@2.22.2/locale/zh-cn.js",
        "npm:antd@2.13.14/lib/date-picker/createPicker.js",
        "npm:rc-calendar@9.0.4/lib/MonthCalendar.js",
        "npm:antd@2.13.14/lib/col/index.js",
        "npm:antd@2.13.14/lib/cascader/index.js",
        "npm:array-tree-filter@1.0.1/index.js",
        "npm:array-tree-filter@1.0.1.json",
        "npm:rc-cascader@0.11.6/lib/index.js",
        "npm:rc-cascader@0.11.6.json",
        "npm:rc-cascader@0.11.6/lib/Cascader.js",
        "npm:shallow-equal@1.0.0/arrays/index.js",
        "npm:shallow-equal@1.0.0.json",
        "npm:rc-cascader@0.11.6/lib/Menus.js",
        "npm:antd@2.13.14/lib/carousel/index.js",
        "npm:react-slick@0.15.4/lib/index.js",
        "npm:react-slick@0.15.4.json",
        "npm:react-slick@0.15.4/lib/slider.js",
        "npm:enquire.js@2.1.6/src/index.js",
        "npm:enquire.js@2.1.6.json",
        "npm:enquire.js@2.1.6/src/MediaQueryDispatch.js",
        "npm:enquire.js@2.1.6/src/Util.js",
        "npm:enquire.js@2.1.6/src/MediaQuery.js",
        "npm:enquire.js@2.1.6/src/QueryHandler.js",
        "npm:can-use-dom@0.1.0/index.js",
        "npm:can-use-dom@0.1.0.json",
        "npm:react-slick@0.15.4/lib/default-props.js",
        "npm:json2mq@0.2.0/index.js",
        "npm:json2mq@0.2.0.json",
        "npm:string-convert@0.2.1/camel2hyphen.js",
        "npm:string-convert@0.2.1.json",
        "npm:react-slick@0.15.4/lib/inner-slider.js",
        "npm:react-slick@0.15.4/lib/arrows.js",
        "npm:react-slick@0.15.4/lib/mixins/helpers.js",
        "npm:react-slick@0.15.4/lib/mixins/trackHelper.js",
        "npm:react-slick@0.15.4/lib/dots.js",
        "npm:react-slick@0.15.4/lib/track.js",
        "npm:react-slick@0.15.4/lib/initial-state.js",
        "npm:react-slick@0.15.4/lib/mixins/event-handlers.js",
        "npm:antd@2.13.14/lib/collapse/index.js",
        "npm:antd@2.13.14/lib/collapse/Collapse.js",
        "npm:rc-collapse@1.7.7/lib/index.js",
        "npm:rc-collapse@1.7.7.json",
        "npm:rc-collapse@1.7.7/lib/Collapse.js",
        "npm:rc-collapse@1.7.7/lib/openAnimationFactory.js",
        "npm:rc-collapse@1.7.7/lib/Panel.js",
        "npm:rc-collapse@1.7.7/lib/PanelContent.js",
        "npm:antd@2.13.14/lib/card/index.js",
        "npm:antd@2.13.14/lib/_util/throttleByAnimationFrame.js",
        "npm:antd@2.13.14/lib/card/Grid.js",
        "npm:antd@2.13.14/lib/calendar/index.js",
        "npm:antd@2.13.14/lib/calendar/locale/zh_CN.js",
        "npm:antd@2.13.14/lib/calendar/Header.js",
        "npm:antd@2.13.14/lib/calendar/Constants.js",
        "npm:rc-calendar@9.0.4/lib/FullCalendar.js",
        "npm:rc-calendar@9.0.4/lib/full-calendar/CalendarHeader.js",
        "npm:antd@2.13.14/lib/breadcrumb/index.js",
        "npm:antd@2.13.14/lib/breadcrumb/BreadcrumbItem.js",
        "npm:antd@2.13.14/lib/breadcrumb/Breadcrumb.js",
        "npm:antd@2.13.14/lib/badge/index.js",
        "npm:antd@2.13.14/lib/badge/ScrollNumber.js",
        "npm:antd@2.13.14/lib/back-top/index.js",
        "npm:antd@2.13.14/lib/_util/getScroll.js",
        "npm:antd@2.13.14/lib/avatar/index.js",
        "npm:antd@2.13.14/lib/alert/index.js",
        "npm:antd@2.13.14/lib/auto-complete/index.js",
        "npm:antd@2.13.14/lib/auto-complete/InputElement.js",
        "npm:antd@2.13.14/lib/anchor/index.js",
        "npm:antd@2.13.14/lib/anchor/AnchorLink.js",
        "npm:antd@2.13.14/lib/anchor/Anchor.js",
        "npm:antd@2.13.14/lib/affix/index.js"
      ]
    }
  },
  transpiler: false
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "antd": "npm:antd@2.13.14",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "component-indexof": "npm:component-indexof@0.0.3",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "jquery": "npm:jquery@3.3.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "react": "npm:react@16.4.0",
    "react-dom": "npm:react-dom@16.4.0",
    "react-router-dom": "npm:react-router-dom@4.3.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:react@16.4.0": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:react-dom@16.4.0": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:prop-types@15.6.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:fbjs@0.8.16": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "loose-envify": "npm:loose-envify@1.3.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "core-js": "npm:core-js@1.2.7",
        "promise": "npm:promise@7.3.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.18"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.2"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.7.3",
        "whatwg-fetch": "npm:whatwg-fetch@2.0.4"
      }
    },
    "npm:promise@7.3.1": {
      "map": {
        "asap": "npm:asap@2.0.6"
      }
    },
    "npm:node-fetch@1.7.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.23"
      }
    },
    "npm:iconv-lite@0.4.23": {
      "map": {
        "safer-buffer": "npm:safer-buffer@2.1.2"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.2.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.6"
      }
    },
    "npm:readable-stream@2.3.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@1.1.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@2.0.0",
        "isarray": "npm:isarray@1.0.0",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:string_decoder@1.1.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.1.0"
      }
    },
    "npm:buffer@5.1.0": {
      "map": {
        "ieee754": "npm:ieee754@1.1.11",
        "base64-js": "npm:base64-js@1.3.0"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.8.3"
      }
    },
    "npm:stream-http@2.8.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.6",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.6",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "randombytes": "npm:randombytes@2.0.6",
        "create-hmac": "npm:create-hmac@1.1.7",
        "randomfill": "npm:randomfill@1.0.4",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.1",
        "diffie-hellman": "npm:diffie-hellman@5.0.3",
        "create-ecdh": "npm:create-ecdh@4.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.16",
        "public-encrypt": "npm:public-encrypt@4.0.2"
      }
    },
    "npm:randomfill@1.0.4": {
      "map": {
        "randombytes": "npm:randombytes@2.0.6",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:randombytes@2.0.6": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.8",
        "parse-asn1": "npm:parse-asn1@5.1.1"
      }
    },
    "npm:create-hmac@1.1.7": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "create-hash": "npm:create-hash@1.2.0",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:diffie-hellman@5.0.3": {
      "map": {
        "randombytes": "npm:randombytes@2.0.6",
        "miller-rabin": "npm:miller-rabin@4.0.1",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:create-hash@1.2.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:pbkdf2@3.0.16": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:public-encrypt@4.0.2": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "randombytes": "npm:randombytes@2.0.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.8",
        "parse-asn1": "npm:parse-asn1@5.1.1"
      }
    },
    "npm:browserify-cipher@1.0.1": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "browserify-des": "npm:browserify-des@1.0.1",
        "browserify-aes": "npm:browserify-aes@1.2.0"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.6",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:create-ecdh@4.0.3": {
      "map": {
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.1.0",
        "hash.js": "npm:hash.js@1.1.3",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:sha.js@2.4.11": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@3.0.4"
      }
    },
    "npm:ripemd160@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@3.0.4"
      }
    },
    "npm:browserify-des@1.0.1": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.2.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:parse-asn1@5.1.1": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.16",
        "asn1.js": "npm:asn1.js@4.10.1"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:asn1.js@4.10.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:react-router-dom@4.3.1": {
      "map": {
        "warning": "npm:warning@4.0.1",
        "loose-envify": "npm:loose-envify@1.3.1",
        "react-router": "npm:react-router@4.3.1",
        "invariant": "npm:invariant@2.2.4",
        "prop-types": "npm:prop-types@15.6.1",
        "history": "npm:history@4.7.2"
      }
    },
    "npm:warning@4.0.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:react-router@4.3.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "warning": "npm:warning@4.0.1",
        "invariant": "npm:invariant@2.2.4",
        "prop-types": "npm:prop-types@15.6.1",
        "history": "npm:history@4.7.2",
        "path-to-regexp": "npm:path-to-regexp@1.7.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0"
      }
    },
    "npm:invariant@2.2.4": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:history@4.7.2": {
      "map": {
        "warning": "npm:warning@3.0.0",
        "loose-envify": "npm:loose-envify@1.3.1",
        "invariant": "npm:invariant@2.2.4",
        "resolve-pathname": "npm:resolve-pathname@2.2.0",
        "value-equal": "npm:value-equal@0.4.0"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:path-to-regexp@1.7.0": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:antd@2.13.14": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "lodash.debounce": "npm:lodash.debounce@4.0.8",
        "shallowequal": "npm:shallowequal@1.0.2",
        "classnames": "npm:classnames@2.2.5",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "rc-animate": "npm:rc-animate@2.4.4",
        "moment": "npm:moment@2.22.2",
        "rc-util": "npm:rc-util@4.5.0",
        "rc-tooltip": "npm:rc-tooltip@3.4.9",
        "react-slick": "npm:react-slick@0.15.4",
        "rc-slider": "npm:rc-slider@8.3.5",
        "dom-closest": "npm:dom-closest@0.2.0",
        "rc-menu": "npm:rc-menu@5.0.14",
        "create-react-class": "npm:create-react-class@15.6.3",
        "rc-progress": "npm:rc-progress@2.2.5",
        "rc-switch": "npm:rc-switch@1.5.3",
        "array-tree-filter": "npm:array-tree-filter@1.0.1",
        "lodash.uniqby": "npm:lodash.uniqby@4.7.0",
        "rc-checkbox": "npm:rc-checkbox@2.0.3",
        "rc-notification": "npm:rc-notification@2.0.6",
        "css-animation": "npm:css-animation@1.4.1",
        "react-lazy-load": "npm:react-lazy-load@3.0.13",
        "rc-dropdown": "npm:rc-dropdown@1.5.1",
        "rc-cascader": "npm:rc-cascader@0.11.6",
        "rc-collapse": "npm:rc-collapse@1.7.7",
        "rc-time-picker": "npm:rc-time-picker@2.4.1",
        "rc-upload": "npm:rc-upload@2.4.4",
        "rc-dialog": "npm:rc-dialog@6.5.11",
        "rc-editor-mention": "npm:rc-editor-mention@0.6.14",
        "rc-form": "npm:rc-form@1.4.8",
        "rc-input-number": "npm:rc-input-number@3.6.10",
        "rc-tabs": "npm:rc-tabs@9.1.11",
        "rc-rate": "npm:rc-rate@2.1.1",
        "rc-tree": "npm:rc-tree@1.7.11",
        "rc-pagination": "npm:rc-pagination@1.12.12",
        "warning": "npm:warning@3.0.0",
        "rc-steps": "npm:rc-steps@2.5.2",
        "rc-table": "npm:rc-table@5.6.13",
        "rc-select": "npm:rc-select@6.9.7",
        "rc-calendar": "npm:rc-calendar@9.0.4",
        "omit.js": "npm:omit.js@1.0.0",
        "rc-tree-select": "npm:rc-tree-select@1.10.13"
      }
    },
    "npm:rc-util@4.5.0": {
      "map": {
        "shallowequal": "npm:shallowequal@0.2.2",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "prop-types": "npm:prop-types@15.6.1",
        "add-dom-event-listener": "npm:add-dom-event-listener@1.0.2"
      }
    },
    "npm:rc-animate@2.4.4": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "prop-types": "npm:prop-types@15.6.1",
        "css-animation": "npm:css-animation@1.4.1"
      }
    },
    "npm:rc-tooltip@3.4.9": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "prop-types": "npm:prop-types@15.6.1",
        "rc-trigger": "npm:rc-trigger@1.11.5"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.11.1",
        "core-js": "npm:core-js@2.5.7"
      }
    },
    "npm:react-slick@0.15.4": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "create-react-class": "npm:create-react-class@15.6.3",
        "can-use-dom": "npm:can-use-dom@0.1.0",
        "slick-carousel": "npm:slick-carousel@1.8.1",
        "json2mq": "npm:json2mq@0.2.0",
        "enquire.js": "npm:enquire.js@2.1.6",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:rc-slider@8.3.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1",
        "shallowequal": "npm:shallowequal@1.0.2",
        "rc-tooltip": "npm:rc-tooltip@3.4.9",
        "rc-util": "npm:rc-util@4.5.0",
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:rc-menu@5.0.14": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "classnames": "npm:classnames@2.2.5",
        "rc-animate": "npm:rc-animate@2.4.4",
        "create-react-class": "npm:create-react-class@15.6.3",
        "rc-util": "npm:rc-util@4.5.0",
        "dom-scroll-into-view": "npm:dom-scroll-into-view@1.2.1"
      }
    },
    "npm:shallowequal@0.2.2": {
      "map": {
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:rc-switch@1.5.3": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:rc-checkbox@2.0.3": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1",
        "rc-util": "npm:rc-util@4.5.0"
      }
    },
    "npm:rc-notification@2.0.6": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1",
        "rc-animate": "npm:rc-animate@2.4.4",
        "rc-util": "npm:rc-util@4.5.0"
      }
    },
    "npm:create-react-class@15.6.3": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:rc-progress@2.2.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:rc-dropdown@1.5.1": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "rc-trigger": "npm:rc-trigger@1.11.5"
      }
    },
    "npm:rc-cascader@0.11.6": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "array-tree-filter": "npm:array-tree-filter@1.0.1",
        "rc-util": "npm:rc-util@4.5.0",
        "rc-trigger": "npm:rc-trigger@1.11.5",
        "shallow-equal": "npm:shallow-equal@1.0.0"
      }
    },
    "npm:rc-collapse@1.7.7": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1",
        "rc-animate": "npm:rc-animate@2.4.4",
        "css-animation": "npm:css-animation@1.4.1"
      }
    },
    "npm:react-lazy-load@3.0.13": {
      "map": {
        "lodash.debounce": "npm:lodash.debounce@4.0.8",
        "prop-types": "npm:prop-types@15.6.1",
        "lodash.throttle": "npm:lodash.throttle@4.1.1",
        "eventlistener": "npm:eventlistener@0.0.1"
      }
    },
    "npm:css-animation@1.4.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "component-classes": "npm:component-classes@1.2.6"
      }
    },
    "npm:rc-time-picker@2.4.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1",
        "moment": "npm:moment@2.22.2",
        "rc-trigger": "npm:rc-trigger@1.11.5"
      }
    },
    "npm:rc-dialog@6.5.11": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "create-react-class": "npm:create-react-class@15.6.3",
        "rc-animate": "npm:rc-animate@2.4.4",
        "rc-util": "npm:rc-util@4.5.0",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:rc-upload@2.4.4": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarray": "npm:lodash.isarray@3.0.4",
        "lodash.isarguments": "npm:lodash.isarguments@3.1.0"
      }
    },
    "npm:rc-editor-mention@0.6.14": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1",
        "rc-animate": "npm:rc-animate@2.4.4",
        "dom-scroll-into-view": "npm:dom-scroll-into-view@1.2.1",
        "immutable": "npm:immutable@3.7.6",
        "draft-js": "npm:draft-js@0.10.5",
        "rc-editor-core": "npm:rc-editor-core@0.7.9"
      }
    },
    "npm:rc-form@1.4.8": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "create-react-class": "npm:create-react-class@15.6.3",
        "warning": "npm:warning@3.0.0",
        "dom-scroll-into-view": "npm:dom-scroll-into-view@1.2.1",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "async-validator": "npm:async-validator@1.8.2",
        "lodash": "npm:lodash@4.17.10"
      }
    },
    "npm:rc-input-number@3.6.10": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "classnames": "npm:classnames@2.2.5",
        "create-react-class": "npm:create-react-class@15.6.3",
        "prop-types": "npm:prop-types@15.6.1",
        "rc-touchable": "npm:rc-touchable@1.2.3"
      }
    },
    "npm:rc-tabs@9.1.11": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "classnames": "npm:classnames@2.2.5",
        "create-react-class": "npm:create-react-class@15.6.3",
        "lodash.debounce": "npm:lodash.debounce@4.0.8",
        "prop-types": "npm:prop-types@15.6.1",
        "rc-util": "npm:rc-util@4.5.0",
        "warning": "npm:warning@3.0.0",
        "rc-hammerjs": "npm:rc-hammerjs@0.6.9"
      }
    },
    "npm:rc-rate@2.1.1": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:dom-closest@0.2.0": {
      "map": {
        "dom-matches": "npm:dom-matches@2.0.0"
      }
    },
    "npm:rc-pagination@1.12.12": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:rc-tree@1.7.11": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1",
        "rc-animate": "npm:rc-animate@2.4.4",
        "warning": "npm:warning@3.0.0",
        "rc-util": "npm:rc-util@4.5.0"
      }
    },
    "npm:rc-steps@2.5.2": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "lodash.debounce": "npm:lodash.debounce@4.0.8",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:rc-table@5.6.13": {
      "map": {
        "component-classes": "npm:component-classes@1.2.6",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "prop-types": "npm:prop-types@15.6.1",
        "shallowequal": "npm:shallowequal@0.2.2",
        "warning": "npm:warning@3.0.0",
        "rc-util": "npm:rc-util@4.5.0",
        "lodash.get": "npm:lodash.get@4.4.2"
      }
    },
    "npm:rc-trigger@1.11.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "create-react-class": "npm:create-react-class@15.6.3",
        "prop-types": "npm:prop-types@15.6.1",
        "rc-animate": "npm:rc-animate@2.4.4",
        "rc-util": "npm:rc-util@4.5.0",
        "rc-align": "npm:rc-align@2.4.0"
      }
    },
    "npm:rc-select@6.9.7": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1",
        "rc-animate": "npm:rc-animate@2.4.4",
        "warning": "npm:warning@3.0.0",
        "component-classes": "npm:component-classes@1.2.6",
        "dom-scroll-into-view": "npm:dom-scroll-into-view@1.2.1",
        "rc-menu": "npm:rc-menu@5.0.14",
        "rc-trigger": "npm:rc-trigger@1.11.5",
        "rc-util": "npm:rc-util@4.5.0"
      }
    },
    "npm:warning@2.1.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:add-dom-event-listener@1.0.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:rc-calendar@9.0.4": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "classnames": "npm:classnames@2.2.5",
        "create-react-class": "npm:create-react-class@15.6.3",
        "prop-types": "npm:prop-types@15.6.1",
        "moment": "npm:moment@2.22.2",
        "rc-trigger": "npm:rc-trigger@1.11.5",
        "rc-util": "npm:rc-util@4.5.0"
      }
    },
    "npm:omit.js@1.0.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:async-validator@1.8.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:component-classes@1.2.6": {
      "map": {
        "component-indexof": "npm:component-indexof@0.0.3"
      }
    },
    "npm:json2mq@0.2.0": {
      "map": {
        "string-convert": "npm:string-convert@0.2.1"
      }
    },
    "npm:rc-align@2.4.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "prop-types": "npm:prop-types@15.6.1",
        "shallowequal": "npm:shallowequal@1.0.2",
        "rc-util": "npm:rc-util@4.5.0",
        "dom-align": "npm:dom-align@1.7.0"
      }
    },
    "npm:draft-js@0.10.5": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "immutable": "npm:immutable@3.7.6",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:rc-hammerjs@0.6.9": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "prop-types": "npm:prop-types@15.6.1",
        "hammerjs": "npm:hammerjs@2.0.8"
      }
    },
    "npm:rc-touchable@1.2.3": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:rc-tree-select@1.10.13": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "classnames": "npm:classnames@2.2.5",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.6.1",
        "rc-animate": "npm:rc-animate@2.4.4",
        "rc-tree": "npm:rc-tree@1.7.11",
        "rc-trigger": "npm:rc-trigger@1.11.5",
        "rc-util": "npm:rc-util@4.5.0"
      }
    },
    "npm:rc-editor-core@0.7.9": {
      "map": {
        "draft-js": "npm:draft-js@0.10.5",
        "immutable": "npm:immutable@3.7.6",
        "prop-types": "npm:prop-types@15.6.1",
        "lodash": "npm:lodash@4.17.10",
        "setimmediate": "npm:setimmediate@1.0.5"
      }
    }
  }
});
