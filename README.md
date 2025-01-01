## TeaTime

南南道路駕訓是能一款提供北中南道路駕訓服務的預約平台，課程使用者可以透過瀏覽課程方案、師資來選擇最適合自己的課程方案。透過這個平台希望讓所有剛拿到駕照的新手們得到專業的知識技巧後不必再畏懼成為馬路三寶。

## 瀏覽專案
[專案DEMO](https://kawa3310.github.io/week8_teatime/#/)

![image](https://kawa3310.github.io/week8_teatime/#/)

## Node.js 版本
Node.js 版本建議為：18.17.1 以上

## 取得專案

```bash
git clone https://github.com/kawa3310/2024-roaddriving.git
```

## 運行專案
```npm run dev```

## 專案技術

```- vue (^3.3.11)
- @vitejs/plugin-vue (^4.5.2)
- vue-router (^4.2.5)
- axios (^1.6.5)
- bootstrap (^5.3.2)
```

## 第三方服務
```
- swiper: "^8.0.0",
- sweetalert2": "^11.14.1",
- vee-validate": "^4.13.2",
- vue-loading-overlay,
```


## 資料夾結構
```
- roaddriving.vscode                  /  南南道路駕訓 
- `dist`                              /  打包後的檔案
- `public`                            /  圖片資源文件
- `src`                               /  存放專案的程式碼
  - `assets`                          /  scss設定檔
  - `components`                      /  共用元件
  - `router`                          /  路由          
  - `views`                           /  頁面    
  - `App.vue`                         /  根元件  
  - `main.js`                         /  js
- `.env.example`                      /  環境變數範本
- `.eslintrc.js`                      /  ESLint 設定檔
- `.gitignore`                        /  Git 忽略檔
- `index.html`                        /  HTML   
- `package-lock.json`                 /  套件版本鎖定  
- `package.json`                      /  專案資訊  
- `README.md`                         /  專案說明
- `vite.config.js`                    /  Vite 設定檔
```
