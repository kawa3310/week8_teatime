## TeaTime

TeaTime是一款線上手作甜品商店，提供和實體店面一樣的服務，使用者可以在網頁輕鬆瀏覽商品，並加入購物車、結帳、付款後取得訂單編號。
也提供後台使用者上架、編輯、管理商品，管理訂單功能。

## 瀏覽專案
[專案DEMO](https://kawa3310.github.io/week8_teatime/#/)

![image](https://github.com/kawa3310/week8_teatime/blob/main/public/Teatime.jpg)

## Node.js 版本
Node.js 版本建議為：18.17.1 以上

## 取得專案

```bash
git clone https://github.com/kawa3310/week8_teatime.git
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
- vee-validate": "^4.13.2",
- vue-loading-overlay,
- sweetalert2": "^11.14.1",
```


## 資料夾結構
```
- WEEk8_TEATIME.vscode                  /  TeaTime
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
