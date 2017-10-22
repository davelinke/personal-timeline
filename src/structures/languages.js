import store from '../store';
const defaultLang = store.getState().defaults.lang;

const lang = {
    'en-us':{
        terms:{
            'myName':'David Linke',
            'myTitle':'Web Designer and Developer.',
            'salutation':'This is the new home of all the things I am proud of having built.'
        }
    }
};
export const write = function(string){
    return lang[defaultLang].terms[string];
};
