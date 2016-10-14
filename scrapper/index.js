const x = require('x-ray')()

const iamPoliciesIndexUri = 'http://docs.aws.amazon.com/IAM/latest/APIReference/API_Operations.html'

const scrapperTree = [{
  link: 'a.xref@href',
  name: 'a.xref',
  synopsis: x('a.xref@href', ['#main-col-body > .section > .simpara'])
}]

x(iamPoliciesIndexUri, 'li.listitem', scrapperTree)((err, res) => {
  console.log(JSON.stringify(res, null, 1))
})
