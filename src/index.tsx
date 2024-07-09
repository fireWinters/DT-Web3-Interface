/*
 * @Author: DianaTang
 * @Date: 2024-07-08 16:23:40
 * @LastEditors: DianaTang
 * @Description: some description
 * @FilePath: /DT-Web3-Interface/src/index.tsx
 */
(function () {
    function fibonacci(x) {
      return x <= 1 ? x : fibonacci(x - 1) + fibonacci(x - 2);
    }
    global.x = fibonacci(15);
  })();