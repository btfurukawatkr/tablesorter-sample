// ie-cg.js
'use strict';

$(function () {
  // CollectGarbage()の実行（IEのみ）
  $('#cg-start').on('click', function () {
    if (window.CollectGarbage) {
      window.CollectGarbage();
    }
  });
});
