import { getVersion } from "../../../utils/common";
import { getContact } from "../../../utils/common";

Page({
  data: {},
  onLoad() {
    const version = getVersion();
    const contact = getContact();
    this.setData({ version, contact });
  },
  setPaste(e) {
    wx.setClipboardData({
      data: e.currentTarget.id == 1 ? contact.email : contact.wx_id,
    });
  },
  //!Debug
  onDebug() {
    wx.navigateTo({
      url: "../../debug/debug",
    });
  },
});
