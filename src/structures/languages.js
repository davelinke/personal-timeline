import store from '../store';
let defaultLang = store.getState().defaults.lang;

let lang = {
    'en-us':{
        terms:{
            'hello':'Hello'
        }
    }
};
export const write = function(string){
    return lang[defaultLang].terms[string];
};
// export const getCountry = function(id){
//     return lang[defaultLang].countries[id];
// };
// export const getAddress = function(address){
//     return lang[defaultLang].address.compose(address);
// }
// export const date = lang[defaultLang].date;
