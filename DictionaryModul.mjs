class Dictionary{

    constructor(...languages){
        this.languagefiles = languages
        this.dictionary = null;
        this.currentLanguage = null
    }

    setLanguage = async function(lang){
        let languageFile = this.languagefiles.find( file => {
             return file.indexOf(lang) != -1
            });
        
        this.currentLanguage = lang;

        this.dictionary = await import(languageFile, { assert: { type: "json" } });
    }

    get = function(key){
        return this.dictionary[key];
    }

    keys = function(){
        return Object.keys( this.dictionary);
    }
}

export default Dictionary;