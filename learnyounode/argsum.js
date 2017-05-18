var argsum = 0;
for (var index = 0; index < process.argv.length; index++) {
    if (index > 1) {
        argsum += Number(process.argv[index]);
    }
}
console.log(Number(argsum));