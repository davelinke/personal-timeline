import store from '../store';
const defaultLang = store.getState().defaults.lang;

const lang = {
    'en-us':{
        terms:{
            'myName':'David Linke',
            'myTitle':'Designer & Developer',
            'salutation':'Browse a collection of work pieces and thoughts on design and development'
        }
    }
};
export const write = function(string){
    return lang[defaultLang].terms[string];
};
