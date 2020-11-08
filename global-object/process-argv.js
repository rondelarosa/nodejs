//====BEGIN
// to test run node process-argv luke cayden

// const [,,firstname, lastname] = process.argv;
// console.log(`${firstname} ${lastname}`);

//===END


//BEGIN
// TO TEST: node process-argv --firstname luke --lastname  cayden --greeting "Hello my dear"
/**
 * E.g: --firstname Ron --greeting "hellow word"
 * @param {*} flag 
 */
const grab = flag => {
    const indexOfFlag = process.argv.indexOf(flag) +1;
    return process.argv[indexOfFlag];
} 
const greeting = grab("--greeting");
const firstName = grab("--firstname");
const lastName = grab("--lastname");

console.log(`${greeting} ${firstName} ${lastName}`);

//END