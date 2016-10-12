/// <reference path="globals/lodash/index.d.ts" />
/// <reference path="globals/react-addons-create-fragment/index.d.ts" />
/// <reference path="globals/react-addons-css-transition-group/index.d.ts" />
/// <reference path="globals/react-addons-linked-state-mixin/index.d.ts" />
/// <reference path="globals/react-addons-perf/index.d.ts" />
/// <reference path="globals/react-addons-pure-render-mixin/index.d.ts" />
/// <reference path="globals/react-addons-test-utils/index.d.ts" />
/// <reference path="globals/react-addons-transition-group/index.d.ts" />
/// <reference path="globals/react-addons-update/index.d.ts" />
/// <reference path="globals/react-dom/index.d.ts" />
/// <reference path="globals/react-global/index.d.ts" />
/// <reference path="globals/react/index.d.ts" />
/// <reference path="modules/lodash/index.d.ts" />

interface IThrottled {
  (value: string): void;
  cancel?: () => {};
}

interface ITargetValue {
  value: string;
}

interface InputEventTarget extends EventTarget {
  target: ITargetValue;
}
