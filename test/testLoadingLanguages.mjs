import Dictionary from "../DictionaryModul.mjs"

(function runTests(){
    testLanguages();
})();

function testLanguages(){
    const languages = ["./test/lan/no.json", "./test/lan/en.json"];
    const dictionary = new Dictionary(...languages);
    dictionary.setLanguage("no");
    test(JSON.stringify(dictionary.languagefiles) === JSON.stringify(languages), "Testing setting of languages");
    console.log(dictionary.get(key));
}

function test(test, description){
    if(test){
        console.log(`🟢 ${description}`)
    } else{
        console.log(`🔴 ${description},  ${test}`)
    }
}