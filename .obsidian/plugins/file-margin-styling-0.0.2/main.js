/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => FileMarginPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var CSS_IDENTIFIER = "speedberg-file-margin-styling";
var UNIT_TYPE = {
  px: "px",
  percent: "%",
  em: "em",
  vw: "vw",
  vh: "vh"
};
var DEFAULT_SETTINGS = {
  sourceViewMargin: 0,
  sourceViewUnit: UNIT_TYPE.px,
  previewViewMargin: 0,
  previewViewUnit: UNIT_TYPE.px
};
var FileMarginPlugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new FileMarginSettingsTab(this.app, this));
    this.addStyle();
    this.refresh();
  }
  refresh() {
    this.updateStyle();
  }
  onunload() {
    this.removeStyle();
  }
  addStyle() {
    const css = document.createElement("style");
    css.id = CSS_IDENTIFIER;
    document.getElementsByTagName("head")[0].appendChild(css);
    document.body.classList.add(CSS_IDENTIFIER);
    this.updateStyle();
  }
  updateStyle() {
    const styleElement = document.getElementById(CSS_IDENTIFIER);
    if (styleElement == null)
      return;
    styleElement.innerText = `
		.markdown-source-view {
			margin-left: ${this.settings.sourceViewMargin}${this.settings.sourceViewUnit} !important;
		}

		.markdown-source-view .cm-sizer
		{
			margin-left: 0px !important;
			margin-right: 0px !important;
		}

		.markdown-preview-view {
			margin-left: ${this.settings.previewViewMargin}${this.settings.previewViewUnit} !important;
		}
		`;
  }
  removeStyle() {
    var _a;
    (_a = document.getElementById(CSS_IDENTIFIER)) == null ? void 0 : _a.remove();
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var FileMarginSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "File Margins" });
    new import_obsidian.Setting(containerEl).setName("Preview View (Reading View)").addText(
      (text) => {
        var _a, _b;
        return text.setValue((_b = (_a = this.plugin.settings.previewViewMargin) == null ? void 0 : _a.toString()) != null ? _b : DEFAULT_SETTINGS.previewViewMargin.toString()).onChange(
          async (value) => {
            let numValue = Number(value);
            if (isNaN(numValue)) {
              text.setValue(DEFAULT_SETTINGS.previewViewMargin.toString());
              return;
            }
            this.plugin.settings.previewViewMargin = numValue;
            await this.plugin.saveSettings();
            this.plugin.refresh();
          }
        );
      }
    ).addDropdown(
      (dropdown) => dropdown.addOption(UNIT_TYPE.px, UNIT_TYPE.px).addOption(UNIT_TYPE.percent, UNIT_TYPE.percent).addOption(UNIT_TYPE.em, UNIT_TYPE.em).addOption(UNIT_TYPE.vh, UNIT_TYPE.vh).addOption(UNIT_TYPE.vw, UNIT_TYPE.vw).setValue(this.plugin.settings.previewViewUnit).onChange(async (value) => {
        this.plugin.settings.previewViewUnit = value;
        await this.plugin.saveSettings();
        this.plugin.refresh();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Source View (Edit Mode)").addText(
      (text) => {
        var _a, _b;
        return text.setValue((_b = (_a = this.plugin.settings.sourceViewMargin) == null ? void 0 : _a.toString()) != null ? _b : DEFAULT_SETTINGS.sourceViewMargin.toString()).onChange(
          async (value) => {
            let numValue = Number(value);
            if (isNaN(numValue)) {
              text.setValue(DEFAULT_SETTINGS.sourceViewMargin.toString());
              return;
            }
            this.plugin.settings.sourceViewMargin = numValue;
            await this.plugin.saveSettings();
            this.plugin.refresh();
          }
        );
      }
    ).addDropdown(
      (dropdown) => dropdown.addOption(UNIT_TYPE.px, UNIT_TYPE.px).addOption(UNIT_TYPE.percent, UNIT_TYPE.percent).addOption(UNIT_TYPE.em, UNIT_TYPE.em).addOption(UNIT_TYPE.vh, UNIT_TYPE.vh).addOption(UNIT_TYPE.vw, UNIT_TYPE.vw).setValue(this.plugin.settings.sourceViewUnit).onChange(async (value) => {
        this.plugin.settings.sourceViewUnit = value;
        await this.plugin.saveSettings();
        this.plugin.refresh();
      })
    );
  }
};
