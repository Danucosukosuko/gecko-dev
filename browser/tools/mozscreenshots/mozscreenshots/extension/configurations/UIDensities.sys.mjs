/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

export var UIDensities = {
  init(libDir) {},

  configurations: {
    compactDensity: {
      selectors: ["#navigator-toolbox", "#appMenu-popup", "#widget-overflow"],
      async applyConfig() {
        let browserWindow = Services.wm.getMostRecentWindow(
          "navigator:browser"
        );
        browserWindow.gCustomizeMode.setUIDensity(
          browserWindow.gUIDensity.MODE_COMPACT
        );
      },
    },

    normalDensity: {
      selectors: ["#navigator-toolbox", "#appMenu-popup", "#widget-overflow"],
      async applyConfig() {
        let browserWindow = Services.wm.getMostRecentWindow(
          "navigator:browser"
        );
        browserWindow.gCustomizeMode.setUIDensity(
          browserWindow.gUIDensity.MODE_NORMAL
        );
      },
    },

    touchDensity: {
      selectors: ["#navigator-toolbox", "#appMenu-popup", "#widget-overflow"],
      async applyConfig() {
        let browserWindow = Services.wm.getMostRecentWindow(
          "navigator:browser"
        );
        browserWindow.gCustomizeMode.setUIDensity(
          browserWindow.gUIDensity.MODE_TOUCH
        );
      },
    },
  },
};
