var kevin ={'name': 'jack'}
module.exports = {
  // entry: {
  //   bundle1: ['./main1.js', './main2.js']  //可以正常工作
  // },
  entry: ['./main1.js', './main2.js'],  //也可以正常工作
  output: {
    filename: 'bundle.js',
    library: 'kevin'
  }
};