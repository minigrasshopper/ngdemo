import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import configModel from "../src/app/model/config.model";

if (environment.production) {
  enableProdMode();
}

// 微信oauth认证
oAuth.cfg(configModel.uid, configModel.isDebug, configModel.scope);
oAuth.checkToken((apiopenid, apitoken) => {
  configModel.apiopenid = apiopenid;
  configModel.apitoken = apitoken;
  // 认证完成后，调用bootstrapModule方法来传入AppModule作为启动模块来启动应用。
  platformBrowserDynamic().bootstrapModule(AppModule);
});


