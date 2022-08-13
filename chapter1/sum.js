// “REPLで1から10までの数の積を計算するコードを書いてみましょう。console.log()を使って途中経過も出力してみてください。”

//抜粋:
//ハンズオンNode.js
//今村 謙士
//この素材は著作権で保護されている可能性があります。

let total = 0;
for (i = 1; i <= 10; i++) {
  if (i == 1) {
    total = i;
  } else {
    total = i * total;
  }
  console.log(total);
}
