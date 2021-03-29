import { SFCScriptBlock } from '@vue/compiler-sfc'
function tenonScriptTransform(script: SFCScriptBlock | null) {
  if (!script) {
    return ""
  }
  let scriptFormat = "";
  scriptFormat = `\n<sctipt>\n${script?.content}\n</script>`;
  return scriptFormat
}
export default tenonScriptTransform