import Vue from "vue";
import MessageTpl from "./message.vue";
const NoticeConstructor = Vue.extend(MessageTpl);

let nId = 1;

const Message = options => {
  let id = "notice-" + nId++;
  options = options || {};
  if (typeof options === "string") {
    options = {
      message: options
    };
  }

  const NoticeInstance = new NoticeConstructor({
    data: options
  });
  NoticeInstance.id = id;
  NoticeInstance.vm = NoticeInstance.$mount();
  NoticeInstance.vm.visible = true;
  NoticeInstance.dom = NoticeInstance.vm.$el;
  document.body.appendChild(NoticeInstance.dom);
  NoticeInstance.dom.style.zIndex = nId + 1001;
  return NoticeInstance.vm;
};
["success", "warning", "info", "error"].forEach(type => {
  Message[type] = options => {
    if (typeof options === "string") {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

export default Message;
