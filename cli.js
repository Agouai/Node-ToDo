const program = require('commander');
program
  .option('-x, --xxx', 'what the x')

program
  .command('add ')
  .description('add a task')
  .action((...args) => {
    const words = args.slice(0, args.length - 1).join(' ')
    console.log(words);
  });

program.parse(process.argv);