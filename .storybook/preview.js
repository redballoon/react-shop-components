// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faSearch,
	faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

library.add(faBars);
library.add(faShoppingCart);
library.add(faSearch);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
