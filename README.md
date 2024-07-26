#namaste Reatc

#Parcel
It create dev build
Its creating local server for us
it is refreshing our page automatically which means its doing  HMR(hot module replacement)
It uses file watching algorithm - written in c++ (as soon as we save any file it will built again)


Two types of export & import
- Default export import

export default component
import component from "path";

-Named export import
(used when u have to export multiple things use named export)
export const component;
import {component} from "path";


-whenever a state variable updates react triggers a reconcilation cycle(will re-render the component) 