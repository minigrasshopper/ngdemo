import { Injectable } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class ZorroService {
  private loading: HTMLElement = document.getElementById('loading');
  constructor(
    private modalService: NzModalService,
    private messageService: NzMessageService,
  ) {

  }

  message(content, type?) {
    // type: info success error warning
    !type && (type = 'info');
    this.messageService.create(type, content, {
      nzDuration: 1500,  // 持续时间
    });
  }

  modal(content?, okCb?, cancelCb?) {
    this.modalService.open({
      title: '提示',
      content: content,
      closable: true,   // 是否显示右上角的关闭按钮
      maskClosable: false,  // 点击蒙板是否允许关闭
      onOk() {
        okCb && okCb();
        console.log("确认啦");
      },
      onCancel() {
        cancelCb && cancelCb();
        console.log("取消啦");
      }
    });
  }

  loadingShow() {
    this.loading.style.display = 'block';
  }

  loadingHide() {
    this.loading.style.display = 'none';
  }

}
