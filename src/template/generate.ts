// import compiler from 'vue-template-compiler'

// /**
//  * props处理格式化
//  *
//  * @param {*} attrs
//  * @return {*} string
//  */
//  function genProps(attrs: { name: string; value: any }[]) {
//   // 处理属性 拼接成属性的字符串
//   let str = "";
//   for (let i = 0; i < attrs.length; i++) {
//     let attr = attrs[i];
//     str += `${attr.name}="${attr.value}" `;

//   }
//   return str;
// }

// /**
//  * 节点生成，元素节点以及文本节点
//  *
//  * @param {*} node
//  * @return {*}
//  */
// function gen(node: any) {
//   if (node.type == 1) {
//     // 元素标签
//     return generate(node);
//   } else {
//     // 文本标签
//     let text = node.text;
//     return text;
//   }
// }

// // genChildren 解析children
// function genChildren(el:any) {
//   let children = el.children;
//   if (children && children.length > 0) {
//     let resu = `${children.map((c : compiler.ASTElement) => gen(c)).join("")}`;
//     return resu;
//   } else {
//     return false;
//   }
// }
// // ast to string
// function generate(el:any) {
//   let children = genChildren(el);
//   let code = "";
//   code = `<${el.tag} ${el.attrsList.length ? genProps(el.attrsList) : ""}>${
//     children ? `${children}` : ""
//   }</${el.tag}>`;
//   return code;
// }

// export default generate
